import {
  CharStreams,
  CommonTokenStream, DiagnosticErrorListener,
  ErrorListener,
  ErrorNode,
  ParseTree,
  RecognitionException,
  Recognizer,
  RuleNode,
  TerminalNode
} from 'antlr4'
import FurumaiParser, {
  Attr_listContext,
  Basic_selectorContext,
  Class_selectorContext,
  CombinatorContext,
  Combined_selectorContext,
  Css_stmtContext,
  DeclarationContext,
  Edge_selectorContext,
  Edge_stmtContext,
  GroupContext,
  Hide_edgeContext,
  Hide_elemContext,
  HideContext,
  Id_selectorContext,
  LayoutContext,
  Node_stmtContext,
  Selector_listContext,
  SelectorContext,
  Semi_colonContext,
  Stmt_listContext,
  StmtContext,
  StoryContext,
  StyleContext,
  Type_selectorContext,
  Univ_selectorContext,
  UpdateContext,
  ValContext,
  ZoneContext,
} from '../generated/antlr4ts/FurumaiParser'
import FurumaiLexer from '../generated/antlr4ts/FurumaiLexer'
import FurumaiVisitor from '../generated/antlr4ts/FurumaiVisitor'
import {Layout, Story, Update} from '../elem/Story'
import {Elem} from '../elem/Elem'
import {Edge} from '../elem/Edge'
import {Hide} from '../elem/Hide'
import {
  Assigns,
  BasicSelector,
  ChildCombinator,
  ClassSelector,
  Combinator,
  CombinedSelector,
  DescendantCombinator,
  IdSelector,
  Ruleset,
  Selector,
  StyleList,
  UnivSelector,
} from '../style/Style'

export function parse(text: string): Story {
  const inputStream = CharStreams.fromString(text)
  const errorListener = new FurumaiErrorListener()
  const lexer = new FurumaiLexer(inputStream)
  lexer.removeErrorListeners()
  lexer.addErrorListener(errorListener)
  const tokenStream = new CommonTokenStream(lexer)
  const parser = new FurumaiParser(tokenStream)
  parser.removeErrorListeners()
  parser.addErrorListener(errorListener)
  const tree = parser.story()
  if (errorListener.errors.length > 0) {
    throw new SyntaxError(JSON.stringify(errorListener.errors))
  } else {
    const visitor = new FurumaiVisitorImpl()
    return visitor.visitStory(tree)
  }
}

export function parseStyle(text: string): Ruleset[] {
  if (!text || text.trim().length === 0) {
    return []
  }
  const inputStream = CharStreams.fromString(text)
  const errorListener = new FurumaiErrorListener()
  const lexer = new FurumaiLexer(inputStream)
  lexer.removeErrorListeners()
  lexer.addErrorListener(errorListener)
  const tokenStream = new CommonTokenStream(lexer)
  const parser = new FurumaiParser(tokenStream)
  parser.removeErrorListeners()
  parser.addErrorListener(errorListener)
  const tree = parser.style()
  if (errorListener.errors.length > 0) {
    throw new SyntaxError(JSON.stringify(errorListener.errors))
  } else {
    const visitor = new FurumaiVisitorImpl()
    return visitor.visitStyle(tree).rules
  }
}

class FurumaiErrorListener /*extends DiagnosticErrorListener<any>*/ implements ErrorListener<any> {
  public errors: any[] = []

  public syntaxError(recognizer: Recognizer<any>, offendingSymbol: any, line: number, column: number, msg: string, e: RecognitionException | undefined): void {
    throw new Error('Method not implemented.')
  }

  public reportAmbiguity(recognizer: any, dfa: any, startIndex: any, stopIndex: any, exact: any, ambigAlts: any, configs: any) {
    // console.log('reportAmbiguity(), args: ', arguments)
  }

  public reportAttemptingFullContext(recognizer: any, dfa: any, startIndex: any, stopIndex: any, conflictingAlts: any, configs: any) {
    //console.log('reportAttemptingFullContext(), args: ', arguments)
  }

  public reportContextSensitivity(recognizer: any, dfa: any, startIndex: any, stopIndex: any, prediction: any, configs: any) {
    //console.log('reportContextSensitivity(), args: ', arguments)
  }


  public _syntaxError<T extends any>(
    recognizer: Recognizer<T>,
    offendingSymbol?: T,
    line?: number,
    charPositionInLine?: number,
    msg?: string,
    e?: RecognitionException,
  ): void {
    const error = {
      message: msg,
      range: {
        at: {
          column: charPositionInLine,
          row: line,
        },
      },
    }
    this.errors.push(error)
  }
}

class FurumaiVisitorImpl implements FurumaiVisitor<any> {
  public visitStory(ctx: StoryContext): Story {
    const eof = ctx.EOF()
    if (eof) {
      const layout: Layout = this.visitLayout(ctx.layout())
      const updates: Update[] = ctx.update_list().map((u) => this.visitUpdate(u))
      return new Story(layout, updates)
    } else {
      throw new SyntaxError('invalid input statement syntax')
    }
  }

  public visitLayout(ctx: LayoutContext): Layout {
    const s: StatementList = this.visitStmt_list(ctx.stmt_list())
    if (s.hides.length > 0) {
      throw new Error('not supported hide in layout')
    }
    const attrs = s.assigns.reduce((ret, a) => {
      return {...ret, [a.key]: a.value}
    }, {} as Assigns)
    return new Layout(
      Elem.of('root', 'root', {
        label: '',
        ...attrs,
      }, s.elems),
      s.edges,
    )
  }

  public visitUpdate(ctx: UpdateContext): Update {
    const s: StatementList = this.visitStmt_list(ctx.stmt_list())
    if (s.assigns.length > 0) {
      throw new Error('not implemented top level assignment')
    }
    return new Update(
      s.elems,
      s.edges,
      s.hides,
    )
  }

  public visitStmt_list(ctx: Stmt_listContext): StatementList {
    const statements = ctx.stmt_list().map((stmt) => this.visitStmt(stmt))
    const elems: Elem[] = []
    const edges: Edge[] = []
    const hides: Hide[] = []
    const assigns: Declaration[] = []
    const styles: Style[] = []

    statements.forEach((a) => {
      if (a instanceof Edge) {
        edges.push(a)
      } else if (a instanceof Hide) {
        hides.push(a)
      } else if (a instanceof Declaration) {
        assigns.push(a)
      } else if (a instanceof Style) {
        styles.push(a)
      } else if (a instanceof SemiColon) {
        // pass
      } else {
        elems.push(a)
      }
    })

    return {
      elems,
      edges,
      hides,
      assigns,
      styles,
    }
  }

  public visitStmt(ctx: StmtContext) {
    if (ctx.group()) {
      return this.visitGroup(ctx.group())
    } else if (ctx.zone()) {
      return this.visitZone(ctx.zone())
    } else if (ctx.node_stmt()) {
      return this.visitNode_stmt(ctx.node_stmt())
    } else if (ctx.edge_stmt()) {
      return this.visitEdge_stmt(ctx.edge_stmt())
    } else if (ctx.hide()) {
      return this.visitHide(ctx.hide())
    } else if (ctx.declaration()) {
      return this.visitDeclaration(ctx.declaration())
    } else if (ctx.semi_colon()) {
      return this.visitSemi_colon(ctx.semi_colon())
    } else {
      throw new Error('not implemented')
    }
  }

  public visitGroup(ctx: GroupContext): Elem {
    return this.compound(ctx.stmt_list(), ctx.ID().getText(), 'group')
  }

  public visitZone(ctx: ZoneContext): Elem {
    return this.compound(ctx.stmt_list(), ctx.ID().getText(), 'zone')
  }

  public compound(ctx: Stmt_listContext | undefined, id: string, className: string): Elem {
    if (ctx) {
      const s: StatementList = this.visitStmt_list(ctx)
      if (s.styles.length > 0) {
        throw new Error('not implemented inner style description')
      }
      if (s.edges.length > 0) {
        throw new Error('not implemented inner edge description')
      }
      if (s.hides.length > 0) {
        throw new Error('not implemented inner hide description')
      }
      return Elem.of(id, className, Declaration.reduce(s.assigns), s.elems)
    } else {
      return Elem.of(id, className)
    }
  }

  public visitNode_stmt(ctx: Node_stmtContext): Elem {
    const attrs = ctx.attr_list()
    if (attrs) {
      const assigns = Declaration.reduce(this.visitAttr_list(attrs))
      return Elem.of(ctx.ID().getText(), 'node', assigns)
    } else {
      return Elem.of(ctx.ID().getText(), 'node')
    }
  }

  public visitEdge_stmt(ctx: Edge_stmtContext): Edge {
    const ids = ctx.ID_list().map((id) => id.getText())
    const attrs = ctx.attr_list()
    if (attrs) {
      const assigns = Declaration.reduce(this.visitAttr_list(attrs))
      return Edge.of(ids[0], ctx.EDGEOP().getText(), ids[1], assigns)
    } else {
      return Edge.of(ids[0], ctx.EDGEOP().getText(), ids[1])
    }
  }

  public visitHide(ctx: HideContext): Hide {
    const hideElem = ctx.hide_elem()
    const hideEdge = ctx.hide_edge()
    if (hideElem) {
      return this.visitHide_elem(hideElem)
    } else if (hideEdge) {
      return this.visitHide_edge(hideEdge)
    } else {
      throw new Error('not implemented')
    }
  }

  public visitHide_elem(ctx: Hide_elemContext): Hide {
    return Hide.elem(ctx.ID().getText())
  }

  public visitHide_edge(ctx: Hide_edgeContext): Hide {
    const ids = ctx.ID_list().map((id) => id.getText())
    return Hide.edge(ids[0], ctx.EDGEOP().getText(), ids[1])
  }

  public visitAttr_list(ctx: Attr_listContext): Declaration[] {
    return ctx.declaration_list().map((a) => {
      return this.visitDeclaration(a)
      // const vs = a.val().map((v) => this.visit(v))
      // const key = a.ID().text + a.DOT().reduce((ret, dot) => ret + dot.text, '')
      // return new Declaration(key, vs.join(' '))
    })
  }

  public visitVal(ctx: ValContext): string {
    const v = ctx.ID() || ctx.HASH() || ctx.STRING()
    if (v) {
      return v.getText()
    } else {
      throw new Error('not implemented')
    }
  }

  public visitStyle(ctx: StyleContext): Style {
    const rules: Ruleset[] = ctx.css_stmt_list().map((s) => this.visitCss_stmt(s))
    return new Style(rules)
  }

  public visitCss_stmt(ctx: Css_stmtContext): Ruleset {
    const selectors: Selector[] = this.visitSelector_list(ctx.selector_list())
    const assigns: Declaration[] = ctx.declaration_list().map((d) => this.visitDeclaration(d))
    return Ruleset.of(selectors, (Declaration.reduce(assigns)))
  }

  public visitSelector_list(ctx: Selector_listContext): Selector[] {
    return ctx.selector_list().map((s) => this.visitSelector(s))
  }

  public visitSelector(ctx: SelectorContext): Selector {
    const combined = ctx.combined_selector_list().map((s) => this.visitCombined_selector(s))
    const basic = this.visitBasic_selector(ctx.basic_selector())
    return Selector.combined(combined, basic)
  }

  public visitCombined_selector(ctx: Combined_selectorContext) {
    const c = ctx.combinator()
    const combinator: Combinator = c ? this.visitCombinator(c) : new DescendantCombinator()
    const basic: BasicSelector = this.visitBasic_selector(ctx.basic_selector())
    return new CombinedSelector(basic, combinator)
  }

  public visitCombinator(ctx: CombinatorContext) {
    return new ChildCombinator()
  }

  public visitBasic_selector(ctx: Basic_selectorContext): any {
    if (ctx.univ_selector()) {
      return this.visitUniv_selector(ctx.univ_selector())
    } else if (ctx.type_selector()) {
      return this.visitType_selector(ctx.type_selector())
    } else if (ctx.class_selector()) {
      return this.visitClass_selector(ctx.class_selector())
    } else if (ctx.id_selector()) {
      return this.visitId_selector(ctx.id_selector())
    } else if (ctx.edge_selector()) {
      return this.visitEdge_selector(ctx.edge_selector())
    } else {
      throw new Error('not implemented')
    }
  }

  public visitUniv_selector(ctx: Univ_selectorContext): any {
    return new UnivSelector()
  }

  public visitType_selector(ctx: Type_selectorContext): any {
    throw new Error('type selector is not implemented')
  }

  public visitClass_selector(ctx: Class_selectorContext): any {
    return ClassSelector.of(ctx.DOT().getText())
  }

  public visitId_selector(ctx: Id_selectorContext): any {
    return IdSelector.of(ctx.HASH().getText())
  }

  public visitEdge_selector(ctx: Edge_selectorContext): BasicSelector {
    const ids = ctx.ID_list().map((id) => id.getText())
    return new ClassSelector(Edge.className(ids[0], ctx.EDGEOP().getText(), ids[1]))
  }

  public visitDeclaration(ctx: DeclarationContext): Declaration {
    const vs = ctx.val_list().map((v) => this.visitVal(v))
    return new Declaration(ctx.ID().getText(), vs.join(' '))
  }

  public visitSemi_colon(ctx: Semi_colonContext): SemiColon {
    return new SemiColon()
  }

  // visit(tree: ParseTree) {
  //   throw new Error('Method not implemented.')
  // }
  // visitChildren(node: RuleNode) {
  //   throw new Error('Method not implemented.')
  // }

  public visit(tree: ParseTree): any {
    throw new Error('Method not implemented.')
    //return tree.accept(this)
  }

  public visitChildren(node: RuleNode): any {
    throw new Error('Method not implemented.')
//
//
// node
//     let result
//     const n = node.childCount
//     for (let i = 0; i < n; i++) {
//       const c = node.getChild(i)
//       result = c.accept(this)
//     }
//     return result
  }

  public visitErrorNode(node: ErrorNode): any {
    return undefined
  }

  public visitTerminal(node: TerminalNode): any {
    return undefined
  }
}

interface StatementList {
  elems: Elem[]
  edges: Edge[]
  hides: Hide[]
  assigns: Declaration[]
  styles: Style[]
}

class Declaration {
  public static reduce(attrs: Declaration[]): { [key: string]: string } {
    return attrs.reduce((map, obj) => {
      map[obj.key] = obj.value
      return map
    }, {} as Assigns)
  }

  constructor(readonly key: string, readonly value: string) {
  }
}

class Style {
  public static flatten(styles: Style[]): StyleList {
    const rules = styles.reduce((ruleset, style) => {
      ruleset.push(...style.rules)
      return ruleset
    }, [] as Ruleset[])
    return StyleList.of(rules)
  }

  constructor(
    readonly rules: Ruleset[],
  ) {
  }
}

class SemiColon {
}
