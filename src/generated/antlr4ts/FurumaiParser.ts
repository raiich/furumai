// Generated from Furumai.g4 by ANTLR 4.13.1
// noinspection ES6UnusedImports,JSUnusedGlobalSymbols,JSUnusedLocalSymbols

import {
	ATN,
	ATNDeserializer, DecisionState, DFA, FailedPredicateException,
	RecognitionException, NoViableAltException, BailErrorStrategy,
	Parser, ParserATNSimulator,
	RuleContext, ParserRuleContext, PredictionMode, PredictionContextCache,
	TerminalNode, RuleNode,
	Token, TokenStream,
	Interval, IntervalSet
} from 'antlr4';
import FurumaiListener from "./FurumaiListener.js";
import FurumaiVisitor from "./FurumaiVisitor.js";

// for running tests with parameters, TODO: discuss strategy for typed parameters in CI
// eslint-disable-next-line no-unused-vars
type int = number;

export default class FurumaiParser extends Parser {
	public static readonly T__0 = 1;
	public static readonly T__1 = 2;
	public static readonly T__2 = 3;
	public static readonly T__3 = 4;
	public static readonly T__4 = 5;
	public static readonly T__5 = 6;
	public static readonly T__6 = 7;
	public static readonly T__7 = 8;
	public static readonly T__8 = 9;
	public static readonly T__9 = 10;
	public static readonly T__10 = 11;
	public static readonly T__11 = 12;
	public static readonly T__12 = 13;
	public static readonly T__13 = 14;
	public static readonly ID = 15;
	public static readonly HASH = 16;
	public static readonly DOT = 17;
	public static readonly STRING = 18;
	public static readonly EDGEOP = 19;
	public static readonly SPACES = 20;
	public static readonly SINGLE_LINE_COMMENT = 21;
	public static readonly EOF = Token.EOF;
	public static readonly RULE_story = 0;
	public static readonly RULE_layout = 1;
	public static readonly RULE_update = 2;
	public static readonly RULE_stmt_list = 3;
	public static readonly RULE_stmt = 4;
	public static readonly RULE_group = 5;
	public static readonly RULE_zone = 6;
	public static readonly RULE_node_stmt = 7;
	public static readonly RULE_edge_stmt = 8;
	public static readonly RULE_attr_list = 9;
	public static readonly RULE_hide = 10;
	public static readonly RULE_hide_elem = 11;
	public static readonly RULE_hide_edge = 12;
	public static readonly RULE_style = 13;
	public static readonly RULE_css_stmt = 14;
	public static readonly RULE_selector_list = 15;
	public static readonly RULE_selector = 16;
	public static readonly RULE_combined_selector = 17;
	public static readonly RULE_combinator = 18;
	public static readonly RULE_basic_selector = 19;
	public static readonly RULE_univ_selector = 20;
	public static readonly RULE_type_selector = 21;
	public static readonly RULE_class_selector = 22;
	public static readonly RULE_id_selector = 23;
	public static readonly RULE_edge_selector = 24;
	public static readonly RULE_declaration = 25;
	public static readonly RULE_val = 26;
	public static readonly RULE_semi_colon = 27;
	public static readonly literalNames: (string | null)[] = [ null, "'---'", 
                                                            "'group'", "'{'", 
                                                            "'}'", "'zone'", 
                                                            "';'", "'['", 
                                                            "','", "']'", 
                                                            "'hide'", "'>'", 
                                                            "'*'", "':'", 
                                                            "'='" ];
	public static readonly symbolicNames: (string | null)[] = [ null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, "ID", 
                                                             "HASH", "DOT", 
                                                             "STRING", "EDGEOP", 
                                                             "SPACES", "SINGLE_LINE_COMMENT" ];
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"story", "layout", "update", "stmt_list", "stmt", "group", "zone", "node_stmt", 
		"edge_stmt", "attr_list", "hide", "hide_elem", "hide_edge", "style", "css_stmt", 
		"selector_list", "selector", "combined_selector", "combinator", "basic_selector", 
		"univ_selector", "type_selector", "class_selector", "id_selector", "edge_selector", 
		"declaration", "val", "semi_colon",
	];
	public get grammarFileName(): string { return "Furumai.g4"; }
	public get literalNames(): (string | null)[] { return FurumaiParser.literalNames; }
	public get symbolicNames(): (string | null)[] { return FurumaiParser.symbolicNames; }
	public get ruleNames(): string[] { return FurumaiParser.ruleNames; }
	public get serializedATN(): number[] { return FurumaiParser._serializedATN; }

	protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException {
		return new FailedPredicateException(this, predicate, message);
	}

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(this, FurumaiParser._ATN, FurumaiParser.DecisionsToDFA, new PredictionContextCache());
	}
	// @RuleVersion(0)
	public story(): StoryContext {
		let localctx: StoryContext = new StoryContext(this, this._ctx, this.state);
		this.enterRule(localctx, 0, FurumaiParser.RULE_story);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 56;
			this.layout();
			this.state = 61;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 0, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 57;
					this.match(FurumaiParser.T__0);
					this.state = 58;
					this.update();
					}
					}
				}
				this.state = 63;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 0, this._ctx);
			}
			this.state = 65;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===1) {
				{
				this.state = 64;
				this.match(FurumaiParser.T__0);
				}
			}

			this.state = 67;
			this.match(FurumaiParser.EOF);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public layout(): LayoutContext {
		let localctx: LayoutContext = new LayoutContext(this, this._ctx, this.state);
		this.enterRule(localctx, 2, FurumaiParser.RULE_layout);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 69;
			this.stmt_list();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public update(): UpdateContext {
		let localctx: UpdateContext = new UpdateContext(this, this._ctx, this.state);
		this.enterRule(localctx, 4, FurumaiParser.RULE_update);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 71;
			this.stmt_list();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public stmt_list(): Stmt_listContext {
		let localctx: Stmt_listContext = new Stmt_listContext(this, this._ctx, this.state);
		this.enterRule(localctx, 6, FurumaiParser.RULE_stmt_list);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 76;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 33892) !== 0)) {
				{
				{
				this.state = 73;
				this.stmt();
				}
				}
				this.state = 78;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public stmt(): StmtContext {
		let localctx: StmtContext = new StmtContext(this, this._ctx, this.state);
		this.enterRule(localctx, 8, FurumaiParser.RULE_stmt);
		try {
			this.state = 86;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 3, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 79;
				this.group();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 80;
				this.zone();
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 81;
				this.node_stmt();
				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 82;
				this.edge_stmt();
				}
				break;
			case 5:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 83;
				this.hide();
				}
				break;
			case 6:
				this.enterOuterAlt(localctx, 6);
				{
				this.state = 84;
				this.declaration();
				}
				break;
			case 7:
				this.enterOuterAlt(localctx, 7);
				{
				this.state = 85;
				this.semi_colon();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public group(): GroupContext {
		let localctx: GroupContext = new GroupContext(this, this._ctx, this.state);
		this.enterRule(localctx, 10, FurumaiParser.RULE_group);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 88;
			this.match(FurumaiParser.T__1);
			this.state = 89;
			this.match(FurumaiParser.ID);
			this.state = 90;
			this.match(FurumaiParser.T__2);
			this.state = 91;
			this.stmt_list();
			this.state = 92;
			this.match(FurumaiParser.T__3);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public zone(): ZoneContext {
		let localctx: ZoneContext = new ZoneContext(this, this._ctx, this.state);
		this.enterRule(localctx, 12, FurumaiParser.RULE_zone);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 94;
			this.match(FurumaiParser.T__4);
			this.state = 95;
			this.match(FurumaiParser.ID);
			this.state = 96;
			this.match(FurumaiParser.T__2);
			this.state = 97;
			this.stmt_list();
			this.state = 98;
			this.match(FurumaiParser.T__3);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public node_stmt(): Node_stmtContext {
		let localctx: Node_stmtContext = new Node_stmtContext(this, this._ctx, this.state);
		this.enterRule(localctx, 14, FurumaiParser.RULE_node_stmt);
		try {
			this.state = 104;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 4, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 100;
				this.match(FurumaiParser.ID);
				this.state = 101;
				this.match(FurumaiParser.T__5);
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 102;
				this.match(FurumaiParser.ID);
				this.state = 103;
				this.attr_list();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public edge_stmt(): Edge_stmtContext {
		let localctx: Edge_stmtContext = new Edge_stmtContext(this, this._ctx, this.state);
		this.enterRule(localctx, 16, FurumaiParser.RULE_edge_stmt);
		try {
			this.state = 114;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 5, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 106;
				this.match(FurumaiParser.ID);
				this.state = 107;
				this.match(FurumaiParser.EDGEOP);
				this.state = 108;
				this.match(FurumaiParser.ID);
				this.state = 109;
				this.match(FurumaiParser.T__5);
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 110;
				this.match(FurumaiParser.ID);
				this.state = 111;
				this.match(FurumaiParser.EDGEOP);
				this.state = 112;
				this.match(FurumaiParser.ID);
				this.state = 113;
				this.attr_list();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public attr_list(): Attr_listContext {
		let localctx: Attr_listContext = new Attr_listContext(this, this._ctx, this.state);
		this.enterRule(localctx, 18, FurumaiParser.RULE_attr_list);
		let _la: number;
		try {
			let _alt: number;
			this.state = 134;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 9, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 116;
				this.match(FurumaiParser.T__6);
				this.state = 117;
				this.declaration();
				this.state = 124;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 7, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 119;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la===6 || _la===8) {
							{
							this.state = 118;
							_la = this._input.LA(1);
							if(!(_la===6 || _la===8)) {
							this._errHandler.recoverInline(this);
							}
							else {
								this._errHandler.reportMatch(this);
							    this.consume();
							}
							}
						}

						this.state = 121;
						this.declaration();
						}
						}
					}
					this.state = 126;
					this._errHandler.sync(this);
					_alt = this._interp.adaptivePredict(this._input, 7, this._ctx);
				}
				this.state = 128;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===6 || _la===8) {
					{
					this.state = 127;
					_la = this._input.LA(1);
					if(!(_la===6 || _la===8)) {
					this._errHandler.recoverInline(this);
					}
					else {
						this._errHandler.reportMatch(this);
					    this.consume();
					}
					}
				}

				this.state = 130;
				this.match(FurumaiParser.T__8);
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 132;
				this.match(FurumaiParser.T__6);
				this.state = 133;
				this.match(FurumaiParser.T__8);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public hide(): HideContext {
		let localctx: HideContext = new HideContext(this, this._ctx, this.state);
		this.enterRule(localctx, 20, FurumaiParser.RULE_hide);
		try {
			this.state = 138;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 10, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 136;
				this.hide_elem();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 137;
				this.hide_edge();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public hide_elem(): Hide_elemContext {
		let localctx: Hide_elemContext = new Hide_elemContext(this, this._ctx, this.state);
		this.enterRule(localctx, 22, FurumaiParser.RULE_hide_elem);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 140;
			this.match(FurumaiParser.T__9);
			this.state = 141;
			this.match(FurumaiParser.ID);
			this.state = 142;
			this.match(FurumaiParser.T__5);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public hide_edge(): Hide_edgeContext {
		let localctx: Hide_edgeContext = new Hide_edgeContext(this, this._ctx, this.state);
		this.enterRule(localctx, 24, FurumaiParser.RULE_hide_edge);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 144;
			this.match(FurumaiParser.T__9);
			this.state = 145;
			this.match(FurumaiParser.ID);
			this.state = 146;
			this.match(FurumaiParser.EDGEOP);
			this.state = 147;
			this.match(FurumaiParser.ID);
			this.state = 148;
			this.match(FurumaiParser.T__5);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public style(): StyleContext {
		let localctx: StyleContext = new StyleContext(this, this._ctx, this.state);
		this.enterRule(localctx, 26, FurumaiParser.RULE_style);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 153;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 233472) !== 0)) {
				{
				{
				this.state = 150;
				this.css_stmt();
				}
				}
				this.state = 155;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public css_stmt(): Css_stmtContext {
		let localctx: Css_stmtContext = new Css_stmtContext(this, this._ctx, this.state);
		this.enterRule(localctx, 28, FurumaiParser.RULE_css_stmt);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 156;
			this.selector_list();
			this.state = 157;
			this.match(FurumaiParser.T__2);
			this.state = 159;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===15) {
				{
				this.state = 158;
				this.declaration();
				}
			}

			this.state = 165;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 13, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 161;
					_la = this._input.LA(1);
					if(!(_la===6 || _la===8)) {
					this._errHandler.recoverInline(this);
					}
					else {
						this._errHandler.reportMatch(this);
					    this.consume();
					}
					this.state = 162;
					this.declaration();
					}
					}
				}
				this.state = 167;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 13, this._ctx);
			}
			this.state = 169;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===6 || _la===8) {
				{
				this.state = 168;
				_la = this._input.LA(1);
				if(!(_la===6 || _la===8)) {
				this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				}
			}

			this.state = 171;
			this.match(FurumaiParser.T__3);
			this.state = 173;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===6) {
				{
				this.state = 172;
				this.match(FurumaiParser.T__5);
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public selector_list(): Selector_listContext {
		let localctx: Selector_listContext = new Selector_listContext(this, this._ctx, this.state);
		this.enterRule(localctx, 30, FurumaiParser.RULE_selector_list);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 175;
			this.selector();
			this.state = 180;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 16, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 176;
					this.match(FurumaiParser.T__7);
					this.state = 177;
					this.selector();
					}
					}
				}
				this.state = 182;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 16, this._ctx);
			}
			this.state = 184;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===8) {
				{
				this.state = 183;
				this.match(FurumaiParser.T__7);
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public selector(): SelectorContext {
		let localctx: SelectorContext = new SelectorContext(this, this._ctx, this.state);
		this.enterRule(localctx, 32, FurumaiParser.RULE_selector);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 189;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 18, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 186;
					this.combined_selector();
					}
					}
				}
				this.state = 191;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 18, this._ctx);
			}
			this.state = 192;
			this.basic_selector();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public combined_selector(): Combined_selectorContext {
		let localctx: Combined_selectorContext = new Combined_selectorContext(this, this._ctx, this.state);
		this.enterRule(localctx, 34, FurumaiParser.RULE_combined_selector);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 194;
			this.basic_selector();
			this.state = 196;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===11) {
				{
				this.state = 195;
				this.combinator();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public combinator(): CombinatorContext {
		let localctx: CombinatorContext = new CombinatorContext(this, this._ctx, this.state);
		this.enterRule(localctx, 36, FurumaiParser.RULE_combinator);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 198;
			this.match(FurumaiParser.T__10);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public basic_selector(): Basic_selectorContext {
		let localctx: Basic_selectorContext = new Basic_selectorContext(this, this._ctx, this.state);
		this.enterRule(localctx, 38, FurumaiParser.RULE_basic_selector);
		try {
			this.state = 205;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 20, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 200;
				this.univ_selector();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 201;
				this.type_selector();
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 202;
				this.class_selector();
				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 203;
				this.id_selector();
				}
				break;
			case 5:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 204;
				this.edge_selector();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public univ_selector(): Univ_selectorContext {
		let localctx: Univ_selectorContext = new Univ_selectorContext(this, this._ctx, this.state);
		this.enterRule(localctx, 40, FurumaiParser.RULE_univ_selector);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 207;
			this.match(FurumaiParser.T__11);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public type_selector(): Type_selectorContext {
		let localctx: Type_selectorContext = new Type_selectorContext(this, this._ctx, this.state);
		this.enterRule(localctx, 42, FurumaiParser.RULE_type_selector);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 209;
			this.match(FurumaiParser.ID);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public class_selector(): Class_selectorContext {
		let localctx: Class_selectorContext = new Class_selectorContext(this, this._ctx, this.state);
		this.enterRule(localctx, 44, FurumaiParser.RULE_class_selector);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 211;
			this.match(FurumaiParser.DOT);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public id_selector(): Id_selectorContext {
		let localctx: Id_selectorContext = new Id_selectorContext(this, this._ctx, this.state);
		this.enterRule(localctx, 46, FurumaiParser.RULE_id_selector);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 213;
			this.match(FurumaiParser.HASH);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public edge_selector(): Edge_selectorContext {
		let localctx: Edge_selectorContext = new Edge_selectorContext(this, this._ctx, this.state);
		this.enterRule(localctx, 48, FurumaiParser.RULE_edge_selector);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 215;
			this.match(FurumaiParser.ID);
			this.state = 216;
			this.match(FurumaiParser.EDGEOP);
			this.state = 217;
			this.match(FurumaiParser.ID);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public declaration(): DeclarationContext {
		let localctx: DeclarationContext = new DeclarationContext(this, this._ctx, this.state);
		this.enterRule(localctx, 50, FurumaiParser.RULE_declaration);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 219;
			this.match(FurumaiParser.ID);
			this.state = 223;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===17) {
				{
				{
				this.state = 220;
				this.match(FurumaiParser.DOT);
				}
				}
				this.state = 225;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 226;
			_la = this._input.LA(1);
			if(!(_la===13 || _la===14)) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			this.state = 228;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 227;
					this.val();
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 230;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 22, this._ctx);
			} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public val(): ValContext {
		let localctx: ValContext = new ValContext(this, this._ctx, this.state);
		this.enterRule(localctx, 52, FurumaiParser.RULE_val);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 232;
			_la = this._input.LA(1);
			if(!((((_la) & ~0x1F) === 0 && ((1 << _la) & 360448) !== 0))) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public semi_colon(): Semi_colonContext {
		let localctx: Semi_colonContext = new Semi_colonContext(this, this._ctx, this.state);
		this.enterRule(localctx, 54, FurumaiParser.RULE_semi_colon);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 234;
			this.match(FurumaiParser.T__5);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}

	public static readonly _serializedATN: number[] = [4,1,21,237,2,0,7,0,2,
	1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,
	10,7,10,2,11,7,11,2,12,7,12,2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,
	7,17,2,18,7,18,2,19,7,19,2,20,7,20,2,21,7,21,2,22,7,22,2,23,7,23,2,24,7,
	24,2,25,7,25,2,26,7,26,2,27,7,27,1,0,1,0,1,0,5,0,60,8,0,10,0,12,0,63,9,
	0,1,0,3,0,66,8,0,1,0,1,0,1,1,1,1,1,2,1,2,1,3,5,3,75,8,3,10,3,12,3,78,9,
	3,1,4,1,4,1,4,1,4,1,4,1,4,1,4,3,4,87,8,4,1,5,1,5,1,5,1,5,1,5,1,5,1,6,1,
	6,1,6,1,6,1,6,1,6,1,7,1,7,1,7,1,7,3,7,105,8,7,1,8,1,8,1,8,1,8,1,8,1,8,1,
	8,1,8,3,8,115,8,8,1,9,1,9,1,9,3,9,120,8,9,1,9,5,9,123,8,9,10,9,12,9,126,
	9,9,1,9,3,9,129,8,9,1,9,1,9,1,9,1,9,3,9,135,8,9,1,10,1,10,3,10,139,8,10,
	1,11,1,11,1,11,1,11,1,12,1,12,1,12,1,12,1,12,1,12,1,13,5,13,152,8,13,10,
	13,12,13,155,9,13,1,14,1,14,1,14,3,14,160,8,14,1,14,1,14,5,14,164,8,14,
	10,14,12,14,167,9,14,1,14,3,14,170,8,14,1,14,1,14,3,14,174,8,14,1,15,1,
	15,1,15,5,15,179,8,15,10,15,12,15,182,9,15,1,15,3,15,185,8,15,1,16,5,16,
	188,8,16,10,16,12,16,191,9,16,1,16,1,16,1,17,1,17,3,17,197,8,17,1,18,1,
	18,1,19,1,19,1,19,1,19,1,19,3,19,206,8,19,1,20,1,20,1,21,1,21,1,22,1,22,
	1,23,1,23,1,24,1,24,1,24,1,24,1,25,1,25,5,25,222,8,25,10,25,12,25,225,9,
	25,1,25,1,25,4,25,229,8,25,11,25,12,25,230,1,26,1,26,1,27,1,27,1,27,0,0,
	28,0,2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,36,38,40,42,44,46,48,
	50,52,54,0,3,2,0,6,6,8,8,1,0,13,14,2,0,15,16,18,18,239,0,56,1,0,0,0,2,69,
	1,0,0,0,4,71,1,0,0,0,6,76,1,0,0,0,8,86,1,0,0,0,10,88,1,0,0,0,12,94,1,0,
	0,0,14,104,1,0,0,0,16,114,1,0,0,0,18,134,1,0,0,0,20,138,1,0,0,0,22,140,
	1,0,0,0,24,144,1,0,0,0,26,153,1,0,0,0,28,156,1,0,0,0,30,175,1,0,0,0,32,
	189,1,0,0,0,34,194,1,0,0,0,36,198,1,0,0,0,38,205,1,0,0,0,40,207,1,0,0,0,
	42,209,1,0,0,0,44,211,1,0,0,0,46,213,1,0,0,0,48,215,1,0,0,0,50,219,1,0,
	0,0,52,232,1,0,0,0,54,234,1,0,0,0,56,61,3,2,1,0,57,58,5,1,0,0,58,60,3,4,
	2,0,59,57,1,0,0,0,60,63,1,0,0,0,61,59,1,0,0,0,61,62,1,0,0,0,62,65,1,0,0,
	0,63,61,1,0,0,0,64,66,5,1,0,0,65,64,1,0,0,0,65,66,1,0,0,0,66,67,1,0,0,0,
	67,68,5,0,0,1,68,1,1,0,0,0,69,70,3,6,3,0,70,3,1,0,0,0,71,72,3,6,3,0,72,
	5,1,0,0,0,73,75,3,8,4,0,74,73,1,0,0,0,75,78,1,0,0,0,76,74,1,0,0,0,76,77,
	1,0,0,0,77,7,1,0,0,0,78,76,1,0,0,0,79,87,3,10,5,0,80,87,3,12,6,0,81,87,
	3,14,7,0,82,87,3,16,8,0,83,87,3,20,10,0,84,87,3,50,25,0,85,87,3,54,27,0,
	86,79,1,0,0,0,86,80,1,0,0,0,86,81,1,0,0,0,86,82,1,0,0,0,86,83,1,0,0,0,86,
	84,1,0,0,0,86,85,1,0,0,0,87,9,1,0,0,0,88,89,5,2,0,0,89,90,5,15,0,0,90,91,
	5,3,0,0,91,92,3,6,3,0,92,93,5,4,0,0,93,11,1,0,0,0,94,95,5,5,0,0,95,96,5,
	15,0,0,96,97,5,3,0,0,97,98,3,6,3,0,98,99,5,4,0,0,99,13,1,0,0,0,100,101,
	5,15,0,0,101,105,5,6,0,0,102,103,5,15,0,0,103,105,3,18,9,0,104,100,1,0,
	0,0,104,102,1,0,0,0,105,15,1,0,0,0,106,107,5,15,0,0,107,108,5,19,0,0,108,
	109,5,15,0,0,109,115,5,6,0,0,110,111,5,15,0,0,111,112,5,19,0,0,112,113,
	5,15,0,0,113,115,3,18,9,0,114,106,1,0,0,0,114,110,1,0,0,0,115,17,1,0,0,
	0,116,117,5,7,0,0,117,124,3,50,25,0,118,120,7,0,0,0,119,118,1,0,0,0,119,
	120,1,0,0,0,120,121,1,0,0,0,121,123,3,50,25,0,122,119,1,0,0,0,123,126,1,
	0,0,0,124,122,1,0,0,0,124,125,1,0,0,0,125,128,1,0,0,0,126,124,1,0,0,0,127,
	129,7,0,0,0,128,127,1,0,0,0,128,129,1,0,0,0,129,130,1,0,0,0,130,131,5,9,
	0,0,131,135,1,0,0,0,132,133,5,7,0,0,133,135,5,9,0,0,134,116,1,0,0,0,134,
	132,1,0,0,0,135,19,1,0,0,0,136,139,3,22,11,0,137,139,3,24,12,0,138,136,
	1,0,0,0,138,137,1,0,0,0,139,21,1,0,0,0,140,141,5,10,0,0,141,142,5,15,0,
	0,142,143,5,6,0,0,143,23,1,0,0,0,144,145,5,10,0,0,145,146,5,15,0,0,146,
	147,5,19,0,0,147,148,5,15,0,0,148,149,5,6,0,0,149,25,1,0,0,0,150,152,3,
	28,14,0,151,150,1,0,0,0,152,155,1,0,0,0,153,151,1,0,0,0,153,154,1,0,0,0,
	154,27,1,0,0,0,155,153,1,0,0,0,156,157,3,30,15,0,157,159,5,3,0,0,158,160,
	3,50,25,0,159,158,1,0,0,0,159,160,1,0,0,0,160,165,1,0,0,0,161,162,7,0,0,
	0,162,164,3,50,25,0,163,161,1,0,0,0,164,167,1,0,0,0,165,163,1,0,0,0,165,
	166,1,0,0,0,166,169,1,0,0,0,167,165,1,0,0,0,168,170,7,0,0,0,169,168,1,0,
	0,0,169,170,1,0,0,0,170,171,1,0,0,0,171,173,5,4,0,0,172,174,5,6,0,0,173,
	172,1,0,0,0,173,174,1,0,0,0,174,29,1,0,0,0,175,180,3,32,16,0,176,177,5,
	8,0,0,177,179,3,32,16,0,178,176,1,0,0,0,179,182,1,0,0,0,180,178,1,0,0,0,
	180,181,1,0,0,0,181,184,1,0,0,0,182,180,1,0,0,0,183,185,5,8,0,0,184,183,
	1,0,0,0,184,185,1,0,0,0,185,31,1,0,0,0,186,188,3,34,17,0,187,186,1,0,0,
	0,188,191,1,0,0,0,189,187,1,0,0,0,189,190,1,0,0,0,190,192,1,0,0,0,191,189,
	1,0,0,0,192,193,3,38,19,0,193,33,1,0,0,0,194,196,3,38,19,0,195,197,3,36,
	18,0,196,195,1,0,0,0,196,197,1,0,0,0,197,35,1,0,0,0,198,199,5,11,0,0,199,
	37,1,0,0,0,200,206,3,40,20,0,201,206,3,42,21,0,202,206,3,44,22,0,203,206,
	3,46,23,0,204,206,3,48,24,0,205,200,1,0,0,0,205,201,1,0,0,0,205,202,1,0,
	0,0,205,203,1,0,0,0,205,204,1,0,0,0,206,39,1,0,0,0,207,208,5,12,0,0,208,
	41,1,0,0,0,209,210,5,15,0,0,210,43,1,0,0,0,211,212,5,17,0,0,212,45,1,0,
	0,0,213,214,5,16,0,0,214,47,1,0,0,0,215,216,5,15,0,0,216,217,5,19,0,0,217,
	218,5,15,0,0,218,49,1,0,0,0,219,223,5,15,0,0,220,222,5,17,0,0,221,220,1,
	0,0,0,222,225,1,0,0,0,223,221,1,0,0,0,223,224,1,0,0,0,224,226,1,0,0,0,225,
	223,1,0,0,0,226,228,7,1,0,0,227,229,3,52,26,0,228,227,1,0,0,0,229,230,1,
	0,0,0,230,228,1,0,0,0,230,231,1,0,0,0,231,51,1,0,0,0,232,233,7,2,0,0,233,
	53,1,0,0,0,234,235,5,6,0,0,235,55,1,0,0,0,23,61,65,76,86,104,114,119,124,
	128,134,138,153,159,165,169,173,180,184,189,196,205,223,230];

	private static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!FurumaiParser.__ATN) {
			FurumaiParser.__ATN = new ATNDeserializer().deserialize(FurumaiParser._serializedATN);
		}

		return FurumaiParser.__ATN;
	}


	static DecisionsToDFA = FurumaiParser._ATN.decisionToState.map( (ds: DecisionState, index: number) => new DFA(ds, index) );

}

export class StoryContext extends ParserRuleContext {
	constructor(parser?: FurumaiParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public layout(): LayoutContext {
		return this.getTypedRuleContext(LayoutContext, 0) as LayoutContext;
	}
	public EOF(): TerminalNode {
		return this.getToken(FurumaiParser.EOF, 0);
	}
	public update_list(): UpdateContext[] {
		return this.getTypedRuleContexts(UpdateContext) as UpdateContext[];
	}
	public update(i: number): UpdateContext {
		return this.getTypedRuleContext(UpdateContext, i) as UpdateContext;
	}
    public get ruleIndex(): number {
    	return FurumaiParser.RULE_story;
	}
	public enterRule(listener: FurumaiListener): void {
	    if(listener.enterStory) {
	 		listener.enterStory(this);
		}
	}
	public exitRule(listener: FurumaiListener): void {
	    if(listener.exitStory) {
	 		listener.exitStory(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FurumaiVisitor<Result>): Result {
		if (visitor.visitStory) {
			return visitor.visitStory(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LayoutContext extends ParserRuleContext {
	constructor(parser?: FurumaiParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public stmt_list(): Stmt_listContext {
		return this.getTypedRuleContext(Stmt_listContext, 0) as Stmt_listContext;
	}
    public get ruleIndex(): number {
    	return FurumaiParser.RULE_layout;
	}
	public enterRule(listener: FurumaiListener): void {
	    if(listener.enterLayout) {
	 		listener.enterLayout(this);
		}
	}
	public exitRule(listener: FurumaiListener): void {
	    if(listener.exitLayout) {
	 		listener.exitLayout(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FurumaiVisitor<Result>): Result {
		if (visitor.visitLayout) {
			return visitor.visitLayout(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class UpdateContext extends ParserRuleContext {
	constructor(parser?: FurumaiParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public stmt_list(): Stmt_listContext {
		return this.getTypedRuleContext(Stmt_listContext, 0) as Stmt_listContext;
	}
    public get ruleIndex(): number {
    	return FurumaiParser.RULE_update;
	}
	public enterRule(listener: FurumaiListener): void {
	    if(listener.enterUpdate) {
	 		listener.enterUpdate(this);
		}
	}
	public exitRule(listener: FurumaiListener): void {
	    if(listener.exitUpdate) {
	 		listener.exitUpdate(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FurumaiVisitor<Result>): Result {
		if (visitor.visitUpdate) {
			return visitor.visitUpdate(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Stmt_listContext extends ParserRuleContext {
	constructor(parser?: FurumaiParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public stmt_list(): StmtContext[] {
		return this.getTypedRuleContexts(StmtContext) as StmtContext[];
	}
	public stmt(i: number): StmtContext {
		return this.getTypedRuleContext(StmtContext, i) as StmtContext;
	}
    public get ruleIndex(): number {
    	return FurumaiParser.RULE_stmt_list;
	}
	public enterRule(listener: FurumaiListener): void {
	    if(listener.enterStmt_list) {
	 		listener.enterStmt_list(this);
		}
	}
	public exitRule(listener: FurumaiListener): void {
	    if(listener.exitStmt_list) {
	 		listener.exitStmt_list(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FurumaiVisitor<Result>): Result {
		if (visitor.visitStmt_list) {
			return visitor.visitStmt_list(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StmtContext extends ParserRuleContext {
	constructor(parser?: FurumaiParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public group(): GroupContext {
		return this.getTypedRuleContext(GroupContext, 0) as GroupContext;
	}
	public zone(): ZoneContext {
		return this.getTypedRuleContext(ZoneContext, 0) as ZoneContext;
	}
	public node_stmt(): Node_stmtContext {
		return this.getTypedRuleContext(Node_stmtContext, 0) as Node_stmtContext;
	}
	public edge_stmt(): Edge_stmtContext {
		return this.getTypedRuleContext(Edge_stmtContext, 0) as Edge_stmtContext;
	}
	public hide(): HideContext {
		return this.getTypedRuleContext(HideContext, 0) as HideContext;
	}
	public declaration(): DeclarationContext {
		return this.getTypedRuleContext(DeclarationContext, 0) as DeclarationContext;
	}
	public semi_colon(): Semi_colonContext {
		return this.getTypedRuleContext(Semi_colonContext, 0) as Semi_colonContext;
	}
    public get ruleIndex(): number {
    	return FurumaiParser.RULE_stmt;
	}
	public enterRule(listener: FurumaiListener): void {
	    if(listener.enterStmt) {
	 		listener.enterStmt(this);
		}
	}
	public exitRule(listener: FurumaiListener): void {
	    if(listener.exitStmt) {
	 		listener.exitStmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FurumaiVisitor<Result>): Result {
		if (visitor.visitStmt) {
			return visitor.visitStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class GroupContext extends ParserRuleContext {
	constructor(parser?: FurumaiParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public ID(): TerminalNode {
		return this.getToken(FurumaiParser.ID, 0);
	}
	public stmt_list(): Stmt_listContext {
		return this.getTypedRuleContext(Stmt_listContext, 0) as Stmt_listContext;
	}
    public get ruleIndex(): number {
    	return FurumaiParser.RULE_group;
	}
	public enterRule(listener: FurumaiListener): void {
	    if(listener.enterGroup) {
	 		listener.enterGroup(this);
		}
	}
	public exitRule(listener: FurumaiListener): void {
	    if(listener.exitGroup) {
	 		listener.exitGroup(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FurumaiVisitor<Result>): Result {
		if (visitor.visitGroup) {
			return visitor.visitGroup(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ZoneContext extends ParserRuleContext {
	constructor(parser?: FurumaiParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public ID(): TerminalNode {
		return this.getToken(FurumaiParser.ID, 0);
	}
	public stmt_list(): Stmt_listContext {
		return this.getTypedRuleContext(Stmt_listContext, 0) as Stmt_listContext;
	}
    public get ruleIndex(): number {
    	return FurumaiParser.RULE_zone;
	}
	public enterRule(listener: FurumaiListener): void {
	    if(listener.enterZone) {
	 		listener.enterZone(this);
		}
	}
	public exitRule(listener: FurumaiListener): void {
	    if(listener.exitZone) {
	 		listener.exitZone(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FurumaiVisitor<Result>): Result {
		if (visitor.visitZone) {
			return visitor.visitZone(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Node_stmtContext extends ParserRuleContext {
	constructor(parser?: FurumaiParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public ID(): TerminalNode {
		return this.getToken(FurumaiParser.ID, 0);
	}
	public attr_list(): Attr_listContext {
		return this.getTypedRuleContext(Attr_listContext, 0) as Attr_listContext;
	}
    public get ruleIndex(): number {
    	return FurumaiParser.RULE_node_stmt;
	}
	public enterRule(listener: FurumaiListener): void {
	    if(listener.enterNode_stmt) {
	 		listener.enterNode_stmt(this);
		}
	}
	public exitRule(listener: FurumaiListener): void {
	    if(listener.exitNode_stmt) {
	 		listener.exitNode_stmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FurumaiVisitor<Result>): Result {
		if (visitor.visitNode_stmt) {
			return visitor.visitNode_stmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Edge_stmtContext extends ParserRuleContext {
	constructor(parser?: FurumaiParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public ID_list(): TerminalNode[] {
	    	return this.getTokens(FurumaiParser.ID);
	}
	public ID(i: number): TerminalNode {
		return this.getToken(FurumaiParser.ID, i);
	}
	public EDGEOP(): TerminalNode {
		return this.getToken(FurumaiParser.EDGEOP, 0);
	}
	public attr_list(): Attr_listContext {
		return this.getTypedRuleContext(Attr_listContext, 0) as Attr_listContext;
	}
    public get ruleIndex(): number {
    	return FurumaiParser.RULE_edge_stmt;
	}
	public enterRule(listener: FurumaiListener): void {
	    if(listener.enterEdge_stmt) {
	 		listener.enterEdge_stmt(this);
		}
	}
	public exitRule(listener: FurumaiListener): void {
	    if(listener.exitEdge_stmt) {
	 		listener.exitEdge_stmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FurumaiVisitor<Result>): Result {
		if (visitor.visitEdge_stmt) {
			return visitor.visitEdge_stmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Attr_listContext extends ParserRuleContext {
	constructor(parser?: FurumaiParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public declaration_list(): DeclarationContext[] {
		return this.getTypedRuleContexts(DeclarationContext) as DeclarationContext[];
	}
	public declaration(i: number): DeclarationContext {
		return this.getTypedRuleContext(DeclarationContext, i) as DeclarationContext;
	}
    public get ruleIndex(): number {
    	return FurumaiParser.RULE_attr_list;
	}
	public enterRule(listener: FurumaiListener): void {
	    if(listener.enterAttr_list) {
	 		listener.enterAttr_list(this);
		}
	}
	public exitRule(listener: FurumaiListener): void {
	    if(listener.exitAttr_list) {
	 		listener.exitAttr_list(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FurumaiVisitor<Result>): Result {
		if (visitor.visitAttr_list) {
			return visitor.visitAttr_list(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class HideContext extends ParserRuleContext {
	constructor(parser?: FurumaiParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public hide_elem(): Hide_elemContext {
		return this.getTypedRuleContext(Hide_elemContext, 0) as Hide_elemContext;
	}
	public hide_edge(): Hide_edgeContext {
		return this.getTypedRuleContext(Hide_edgeContext, 0) as Hide_edgeContext;
	}
    public get ruleIndex(): number {
    	return FurumaiParser.RULE_hide;
	}
	public enterRule(listener: FurumaiListener): void {
	    if(listener.enterHide) {
	 		listener.enterHide(this);
		}
	}
	public exitRule(listener: FurumaiListener): void {
	    if(listener.exitHide) {
	 		listener.exitHide(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FurumaiVisitor<Result>): Result {
		if (visitor.visitHide) {
			return visitor.visitHide(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Hide_elemContext extends ParserRuleContext {
	constructor(parser?: FurumaiParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public ID(): TerminalNode {
		return this.getToken(FurumaiParser.ID, 0);
	}
    public get ruleIndex(): number {
    	return FurumaiParser.RULE_hide_elem;
	}
	public enterRule(listener: FurumaiListener): void {
	    if(listener.enterHide_elem) {
	 		listener.enterHide_elem(this);
		}
	}
	public exitRule(listener: FurumaiListener): void {
	    if(listener.exitHide_elem) {
	 		listener.exitHide_elem(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FurumaiVisitor<Result>): Result {
		if (visitor.visitHide_elem) {
			return visitor.visitHide_elem(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Hide_edgeContext extends ParserRuleContext {
	constructor(parser?: FurumaiParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public ID_list(): TerminalNode[] {
	    	return this.getTokens(FurumaiParser.ID);
	}
	public ID(i: number): TerminalNode {
		return this.getToken(FurumaiParser.ID, i);
	}
	public EDGEOP(): TerminalNode {
		return this.getToken(FurumaiParser.EDGEOP, 0);
	}
    public get ruleIndex(): number {
    	return FurumaiParser.RULE_hide_edge;
	}
	public enterRule(listener: FurumaiListener): void {
	    if(listener.enterHide_edge) {
	 		listener.enterHide_edge(this);
		}
	}
	public exitRule(listener: FurumaiListener): void {
	    if(listener.exitHide_edge) {
	 		listener.exitHide_edge(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FurumaiVisitor<Result>): Result {
		if (visitor.visitHide_edge) {
			return visitor.visitHide_edge(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StyleContext extends ParserRuleContext {
	constructor(parser?: FurumaiParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public css_stmt_list(): Css_stmtContext[] {
		return this.getTypedRuleContexts(Css_stmtContext) as Css_stmtContext[];
	}
	public css_stmt(i: number): Css_stmtContext {
		return this.getTypedRuleContext(Css_stmtContext, i) as Css_stmtContext;
	}
    public get ruleIndex(): number {
    	return FurumaiParser.RULE_style;
	}
	public enterRule(listener: FurumaiListener): void {
	    if(listener.enterStyle) {
	 		listener.enterStyle(this);
		}
	}
	public exitRule(listener: FurumaiListener): void {
	    if(listener.exitStyle) {
	 		listener.exitStyle(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FurumaiVisitor<Result>): Result {
		if (visitor.visitStyle) {
			return visitor.visitStyle(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Css_stmtContext extends ParserRuleContext {
	constructor(parser?: FurumaiParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public selector_list(): Selector_listContext {
		return this.getTypedRuleContext(Selector_listContext, 0) as Selector_listContext;
	}
	public declaration_list(): DeclarationContext[] {
		return this.getTypedRuleContexts(DeclarationContext) as DeclarationContext[];
	}
	public declaration(i: number): DeclarationContext {
		return this.getTypedRuleContext(DeclarationContext, i) as DeclarationContext;
	}
    public get ruleIndex(): number {
    	return FurumaiParser.RULE_css_stmt;
	}
	public enterRule(listener: FurumaiListener): void {
	    if(listener.enterCss_stmt) {
	 		listener.enterCss_stmt(this);
		}
	}
	public exitRule(listener: FurumaiListener): void {
	    if(listener.exitCss_stmt) {
	 		listener.exitCss_stmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FurumaiVisitor<Result>): Result {
		if (visitor.visitCss_stmt) {
			return visitor.visitCss_stmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Selector_listContext extends ParserRuleContext {
	constructor(parser?: FurumaiParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public selector_list(): SelectorContext[] {
		return this.getTypedRuleContexts(SelectorContext) as SelectorContext[];
	}
	public selector(i: number): SelectorContext {
		return this.getTypedRuleContext(SelectorContext, i) as SelectorContext;
	}
    public get ruleIndex(): number {
    	return FurumaiParser.RULE_selector_list;
	}
	public enterRule(listener: FurumaiListener): void {
	    if(listener.enterSelector_list) {
	 		listener.enterSelector_list(this);
		}
	}
	public exitRule(listener: FurumaiListener): void {
	    if(listener.exitSelector_list) {
	 		listener.exitSelector_list(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FurumaiVisitor<Result>): Result {
		if (visitor.visitSelector_list) {
			return visitor.visitSelector_list(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SelectorContext extends ParserRuleContext {
	constructor(parser?: FurumaiParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public basic_selector(): Basic_selectorContext {
		return this.getTypedRuleContext(Basic_selectorContext, 0) as Basic_selectorContext;
	}
	public combined_selector_list(): Combined_selectorContext[] {
		return this.getTypedRuleContexts(Combined_selectorContext) as Combined_selectorContext[];
	}
	public combined_selector(i: number): Combined_selectorContext {
		return this.getTypedRuleContext(Combined_selectorContext, i) as Combined_selectorContext;
	}
    public get ruleIndex(): number {
    	return FurumaiParser.RULE_selector;
	}
	public enterRule(listener: FurumaiListener): void {
	    if(listener.enterSelector) {
	 		listener.enterSelector(this);
		}
	}
	public exitRule(listener: FurumaiListener): void {
	    if(listener.exitSelector) {
	 		listener.exitSelector(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FurumaiVisitor<Result>): Result {
		if (visitor.visitSelector) {
			return visitor.visitSelector(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Combined_selectorContext extends ParserRuleContext {
	constructor(parser?: FurumaiParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public basic_selector(): Basic_selectorContext {
		return this.getTypedRuleContext(Basic_selectorContext, 0) as Basic_selectorContext;
	}
	public combinator(): CombinatorContext {
		return this.getTypedRuleContext(CombinatorContext, 0) as CombinatorContext;
	}
    public get ruleIndex(): number {
    	return FurumaiParser.RULE_combined_selector;
	}
	public enterRule(listener: FurumaiListener): void {
	    if(listener.enterCombined_selector) {
	 		listener.enterCombined_selector(this);
		}
	}
	public exitRule(listener: FurumaiListener): void {
	    if(listener.exitCombined_selector) {
	 		listener.exitCombined_selector(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FurumaiVisitor<Result>): Result {
		if (visitor.visitCombined_selector) {
			return visitor.visitCombined_selector(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CombinatorContext extends ParserRuleContext {
	constructor(parser?: FurumaiParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return FurumaiParser.RULE_combinator;
	}
	public enterRule(listener: FurumaiListener): void {
	    if(listener.enterCombinator) {
	 		listener.enterCombinator(this);
		}
	}
	public exitRule(listener: FurumaiListener): void {
	    if(listener.exitCombinator) {
	 		listener.exitCombinator(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FurumaiVisitor<Result>): Result {
		if (visitor.visitCombinator) {
			return visitor.visitCombinator(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Basic_selectorContext extends ParserRuleContext {
	constructor(parser?: FurumaiParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public univ_selector(): Univ_selectorContext {
		return this.getTypedRuleContext(Univ_selectorContext, 0) as Univ_selectorContext;
	}
	public type_selector(): Type_selectorContext {
		return this.getTypedRuleContext(Type_selectorContext, 0) as Type_selectorContext;
	}
	public class_selector(): Class_selectorContext {
		return this.getTypedRuleContext(Class_selectorContext, 0) as Class_selectorContext;
	}
	public id_selector(): Id_selectorContext {
		return this.getTypedRuleContext(Id_selectorContext, 0) as Id_selectorContext;
	}
	public edge_selector(): Edge_selectorContext {
		return this.getTypedRuleContext(Edge_selectorContext, 0) as Edge_selectorContext;
	}
    public get ruleIndex(): number {
    	return FurumaiParser.RULE_basic_selector;
	}
	public enterRule(listener: FurumaiListener): void {
	    if(listener.enterBasic_selector) {
	 		listener.enterBasic_selector(this);
		}
	}
	public exitRule(listener: FurumaiListener): void {
	    if(listener.exitBasic_selector) {
	 		listener.exitBasic_selector(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FurumaiVisitor<Result>): Result {
		if (visitor.visitBasic_selector) {
			return visitor.visitBasic_selector(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Univ_selectorContext extends ParserRuleContext {
	constructor(parser?: FurumaiParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return FurumaiParser.RULE_univ_selector;
	}
	public enterRule(listener: FurumaiListener): void {
	    if(listener.enterUniv_selector) {
	 		listener.enterUniv_selector(this);
		}
	}
	public exitRule(listener: FurumaiListener): void {
	    if(listener.exitUniv_selector) {
	 		listener.exitUniv_selector(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FurumaiVisitor<Result>): Result {
		if (visitor.visitUniv_selector) {
			return visitor.visitUniv_selector(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Type_selectorContext extends ParserRuleContext {
	constructor(parser?: FurumaiParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public ID(): TerminalNode {
		return this.getToken(FurumaiParser.ID, 0);
	}
    public get ruleIndex(): number {
    	return FurumaiParser.RULE_type_selector;
	}
	public enterRule(listener: FurumaiListener): void {
	    if(listener.enterType_selector) {
	 		listener.enterType_selector(this);
		}
	}
	public exitRule(listener: FurumaiListener): void {
	    if(listener.exitType_selector) {
	 		listener.exitType_selector(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FurumaiVisitor<Result>): Result {
		if (visitor.visitType_selector) {
			return visitor.visitType_selector(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Class_selectorContext extends ParserRuleContext {
	constructor(parser?: FurumaiParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public DOT(): TerminalNode {
		return this.getToken(FurumaiParser.DOT, 0);
	}
    public get ruleIndex(): number {
    	return FurumaiParser.RULE_class_selector;
	}
	public enterRule(listener: FurumaiListener): void {
	    if(listener.enterClass_selector) {
	 		listener.enterClass_selector(this);
		}
	}
	public exitRule(listener: FurumaiListener): void {
	    if(listener.exitClass_selector) {
	 		listener.exitClass_selector(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FurumaiVisitor<Result>): Result {
		if (visitor.visitClass_selector) {
			return visitor.visitClass_selector(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Id_selectorContext extends ParserRuleContext {
	constructor(parser?: FurumaiParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public HASH(): TerminalNode {
		return this.getToken(FurumaiParser.HASH, 0);
	}
    public get ruleIndex(): number {
    	return FurumaiParser.RULE_id_selector;
	}
	public enterRule(listener: FurumaiListener): void {
	    if(listener.enterId_selector) {
	 		listener.enterId_selector(this);
		}
	}
	public exitRule(listener: FurumaiListener): void {
	    if(listener.exitId_selector) {
	 		listener.exitId_selector(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FurumaiVisitor<Result>): Result {
		if (visitor.visitId_selector) {
			return visitor.visitId_selector(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Edge_selectorContext extends ParserRuleContext {
	constructor(parser?: FurumaiParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public ID_list(): TerminalNode[] {
	    	return this.getTokens(FurumaiParser.ID);
	}
	public ID(i: number): TerminalNode {
		return this.getToken(FurumaiParser.ID, i);
	}
	public EDGEOP(): TerminalNode {
		return this.getToken(FurumaiParser.EDGEOP, 0);
	}
    public get ruleIndex(): number {
    	return FurumaiParser.RULE_edge_selector;
	}
	public enterRule(listener: FurumaiListener): void {
	    if(listener.enterEdge_selector) {
	 		listener.enterEdge_selector(this);
		}
	}
	public exitRule(listener: FurumaiListener): void {
	    if(listener.exitEdge_selector) {
	 		listener.exitEdge_selector(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FurumaiVisitor<Result>): Result {
		if (visitor.visitEdge_selector) {
			return visitor.visitEdge_selector(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DeclarationContext extends ParserRuleContext {
	constructor(parser?: FurumaiParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public ID(): TerminalNode {
		return this.getToken(FurumaiParser.ID, 0);
	}
	public DOT_list(): TerminalNode[] {
	    	return this.getTokens(FurumaiParser.DOT);
	}
	public DOT(i: number): TerminalNode {
		return this.getToken(FurumaiParser.DOT, i);
	}
	public val_list(): ValContext[] {
		return this.getTypedRuleContexts(ValContext) as ValContext[];
	}
	public val(i: number): ValContext {
		return this.getTypedRuleContext(ValContext, i) as ValContext;
	}
    public get ruleIndex(): number {
    	return FurumaiParser.RULE_declaration;
	}
	public enterRule(listener: FurumaiListener): void {
	    if(listener.enterDeclaration) {
	 		listener.enterDeclaration(this);
		}
	}
	public exitRule(listener: FurumaiListener): void {
	    if(listener.exitDeclaration) {
	 		listener.exitDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FurumaiVisitor<Result>): Result {
		if (visitor.visitDeclaration) {
			return visitor.visitDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ValContext extends ParserRuleContext {
	constructor(parser?: FurumaiParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public STRING(): TerminalNode {
		return this.getToken(FurumaiParser.STRING, 0);
	}
	public ID(): TerminalNode {
		return this.getToken(FurumaiParser.ID, 0);
	}
	public HASH(): TerminalNode {
		return this.getToken(FurumaiParser.HASH, 0);
	}
    public get ruleIndex(): number {
    	return FurumaiParser.RULE_val;
	}
	public enterRule(listener: FurumaiListener): void {
	    if(listener.enterVal) {
	 		listener.enterVal(this);
		}
	}
	public exitRule(listener: FurumaiListener): void {
	    if(listener.exitVal) {
	 		listener.exitVal(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FurumaiVisitor<Result>): Result {
		if (visitor.visitVal) {
			return visitor.visitVal(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Semi_colonContext extends ParserRuleContext {
	constructor(parser?: FurumaiParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return FurumaiParser.RULE_semi_colon;
	}
	public enterRule(listener: FurumaiListener): void {
	    if(listener.enterSemi_colon) {
	 		listener.enterSemi_colon(this);
		}
	}
	public exitRule(listener: FurumaiListener): void {
	    if(listener.exitSemi_colon) {
	 		listener.exitSemi_colon(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FurumaiVisitor<Result>): Result {
		if (visitor.visitSemi_colon) {
			return visitor.visitSemi_colon(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
