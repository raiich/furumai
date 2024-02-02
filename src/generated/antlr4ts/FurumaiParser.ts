// Generated from Furumai.g4 by ANTLR 4.9.0-SNAPSHOT


import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { FailedPredicateException } from "antlr4ts/FailedPredicateException";
import { NotNull } from "antlr4ts/Decorators";
import { NoViableAltException } from "antlr4ts/NoViableAltException";
import { Override } from "antlr4ts/Decorators";
import { Parser } from "antlr4ts/Parser";
import { ParserRuleContext } from "antlr4ts/ParserRuleContext";
import { ParserATNSimulator } from "antlr4ts/atn/ParserATNSimulator";
import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";
import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";
import { RecognitionException } from "antlr4ts/RecognitionException";
import { RuleContext } from "antlr4ts/RuleContext";
//import { RuleVersion } from "antlr4ts/RuleVersion";
import { TerminalNode } from "antlr4ts/tree/TerminalNode";
import { Token } from "antlr4ts/Token";
import { TokenStream } from "antlr4ts/TokenStream";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";

import { FurumaiListener } from "./FurumaiListener";
import { FurumaiVisitor } from "./FurumaiVisitor";


export class FurumaiParser extends Parser {
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
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"story", "layout", "update", "stmt_list", "stmt", "group", "zone", "node_stmt", 
		"edge_stmt", "attr_list", "hide", "hide_elem", "hide_edge", "style", "css_stmt", 
		"selector_list", "selector", "combined_selector", "combinator", "basic_selector", 
		"univ_selector", "type_selector", "class_selector", "id_selector", "edge_selector", 
		"declaration", "val", "semi_colon",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'---'", "'group'", "'{'", "'}'", "'zone'", "';'", "'['", "','", 
		"']'", "'hide'", "'>'", "'*'", "':'", "'='",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, "ID", "HASH", "DOT", "STRING", "EDGEOP", "SPACES", "SINGLE_LINE_COMMENT",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(FurumaiParser._LITERAL_NAMES, FurumaiParser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return FurumaiParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "Furumai.g4"; }

	// @Override
	public get ruleNames(): string[] { return FurumaiParser.ruleNames; }

	// @Override
	public get serializedATN(): string { return FurumaiParser._serializedATN; }

	protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException {
		return new FailedPredicateException(this, predicate, message);
	}

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(FurumaiParser._ATN, this);
	}
	// @RuleVersion(0)
	public story(): StoryContext {
		let _localctx: StoryContext = new StoryContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, FurumaiParser.RULE_story);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 56;
			this.layout();
			this.state = 61;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 0, this._ctx);
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
				_alt = this.interpreter.adaptivePredict(this._input, 0, this._ctx);
			}
			this.state = 65;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FurumaiParser.T__0) {
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
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public layout(): LayoutContext {
		let _localctx: LayoutContext = new LayoutContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, FurumaiParser.RULE_layout);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 69;
			this.stmt_list();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public update(): UpdateContext {
		let _localctx: UpdateContext = new UpdateContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, FurumaiParser.RULE_update);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 71;
			this.stmt_list();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public stmt_list(): Stmt_listContext {
		let _localctx: Stmt_listContext = new Stmt_listContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, FurumaiParser.RULE_stmt_list);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 76;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << FurumaiParser.T__1) | (1 << FurumaiParser.T__4) | (1 << FurumaiParser.T__5) | (1 << FurumaiParser.T__9) | (1 << FurumaiParser.ID))) !== 0)) {
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
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public stmt(): StmtContext {
		let _localctx: StmtContext = new StmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, FurumaiParser.RULE_stmt);
		try {
			this.state = 86;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 3, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 79;
				this.group();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 80;
				this.zone();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 81;
				this.node_stmt();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 82;
				this.edge_stmt();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 83;
				this.hide();
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 84;
				this.declaration();
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 85;
				this.semi_colon();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public group(): GroupContext {
		let _localctx: GroupContext = new GroupContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, FurumaiParser.RULE_group);
		try {
			this.enterOuterAlt(_localctx, 1);
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
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public zone(): ZoneContext {
		let _localctx: ZoneContext = new ZoneContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, FurumaiParser.RULE_zone);
		try {
			this.enterOuterAlt(_localctx, 1);
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
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public node_stmt(): Node_stmtContext {
		let _localctx: Node_stmtContext = new Node_stmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, FurumaiParser.RULE_node_stmt);
		try {
			this.state = 104;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 4, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 100;
				this.match(FurumaiParser.ID);
				this.state = 101;
				this.match(FurumaiParser.T__5);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
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
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public edge_stmt(): Edge_stmtContext {
		let _localctx: Edge_stmtContext = new Edge_stmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, FurumaiParser.RULE_edge_stmt);
		try {
			this.state = 114;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 5, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
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
				this.enterOuterAlt(_localctx, 2);
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
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public attr_list(): Attr_listContext {
		let _localctx: Attr_listContext = new Attr_listContext(this._ctx, this.state);
		this.enterRule(_localctx, 18, FurumaiParser.RULE_attr_list);
		let _la: number;
		try {
			let _alt: number;
			this.state = 134;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 9, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 116;
				this.match(FurumaiParser.T__6);
				this.state = 117;
				this.declaration();
				this.state = 124;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 7, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 119;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la === FurumaiParser.T__5 || _la === FurumaiParser.T__7) {
							{
							this.state = 118;
							_la = this._input.LA(1);
							if (!(_la === FurumaiParser.T__5 || _la === FurumaiParser.T__7)) {
							this._errHandler.recoverInline(this);
							} else {
								if (this._input.LA(1) === Token.EOF) {
									this.matchedEOF = true;
								}

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
					_alt = this.interpreter.adaptivePredict(this._input, 7, this._ctx);
				}
				this.state = 128;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === FurumaiParser.T__5 || _la === FurumaiParser.T__7) {
					{
					this.state = 127;
					_la = this._input.LA(1);
					if (!(_la === FurumaiParser.T__5 || _la === FurumaiParser.T__7)) {
					this._errHandler.recoverInline(this);
					} else {
						if (this._input.LA(1) === Token.EOF) {
							this.matchedEOF = true;
						}

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
				this.enterOuterAlt(_localctx, 2);
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
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public hide(): HideContext {
		let _localctx: HideContext = new HideContext(this._ctx, this.state);
		this.enterRule(_localctx, 20, FurumaiParser.RULE_hide);
		try {
			this.state = 138;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 10, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 136;
				this.hide_elem();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 137;
				this.hide_edge();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public hide_elem(): Hide_elemContext {
		let _localctx: Hide_elemContext = new Hide_elemContext(this._ctx, this.state);
		this.enterRule(_localctx, 22, FurumaiParser.RULE_hide_elem);
		try {
			this.enterOuterAlt(_localctx, 1);
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
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public hide_edge(): Hide_edgeContext {
		let _localctx: Hide_edgeContext = new Hide_edgeContext(this._ctx, this.state);
		this.enterRule(_localctx, 24, FurumaiParser.RULE_hide_edge);
		try {
			this.enterOuterAlt(_localctx, 1);
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
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public style(): StyleContext {
		let _localctx: StyleContext = new StyleContext(this._ctx, this.state);
		this.enterRule(_localctx, 26, FurumaiParser.RULE_style);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 153;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << FurumaiParser.T__11) | (1 << FurumaiParser.ID) | (1 << FurumaiParser.HASH) | (1 << FurumaiParser.DOT))) !== 0)) {
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
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public css_stmt(): Css_stmtContext {
		let _localctx: Css_stmtContext = new Css_stmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 28, FurumaiParser.RULE_css_stmt);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 156;
			this.selector_list();
			this.state = 157;
			this.match(FurumaiParser.T__2);
			this.state = 159;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FurumaiParser.ID) {
				{
				this.state = 158;
				this.declaration();
				}
			}

			this.state = 165;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 13, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 161;
					_la = this._input.LA(1);
					if (!(_la === FurumaiParser.T__5 || _la === FurumaiParser.T__7)) {
					this._errHandler.recoverInline(this);
					} else {
						if (this._input.LA(1) === Token.EOF) {
							this.matchedEOF = true;
						}

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
				_alt = this.interpreter.adaptivePredict(this._input, 13, this._ctx);
			}
			this.state = 169;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FurumaiParser.T__5 || _la === FurumaiParser.T__7) {
				{
				this.state = 168;
				_la = this._input.LA(1);
				if (!(_la === FurumaiParser.T__5 || _la === FurumaiParser.T__7)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

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
			if (_la === FurumaiParser.T__5) {
				{
				this.state = 172;
				this.match(FurumaiParser.T__5);
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public selector_list(): Selector_listContext {
		let _localctx: Selector_listContext = new Selector_listContext(this._ctx, this.state);
		this.enterRule(_localctx, 30, FurumaiParser.RULE_selector_list);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 175;
			this.selector();
			this.state = 180;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 16, this._ctx);
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
				_alt = this.interpreter.adaptivePredict(this._input, 16, this._ctx);
			}
			this.state = 184;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FurumaiParser.T__7) {
				{
				this.state = 183;
				this.match(FurumaiParser.T__7);
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public selector(): SelectorContext {
		let _localctx: SelectorContext = new SelectorContext(this._ctx, this.state);
		this.enterRule(_localctx, 32, FurumaiParser.RULE_selector);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 189;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 18, this._ctx);
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
				_alt = this.interpreter.adaptivePredict(this._input, 18, this._ctx);
			}
			this.state = 192;
			this.basic_selector();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public combined_selector(): Combined_selectorContext {
		let _localctx: Combined_selectorContext = new Combined_selectorContext(this._ctx, this.state);
		this.enterRule(_localctx, 34, FurumaiParser.RULE_combined_selector);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 194;
			this.basic_selector();
			this.state = 196;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FurumaiParser.T__10) {
				{
				this.state = 195;
				this.combinator();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public combinator(): CombinatorContext {
		let _localctx: CombinatorContext = new CombinatorContext(this._ctx, this.state);
		this.enterRule(_localctx, 36, FurumaiParser.RULE_combinator);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 198;
			this.match(FurumaiParser.T__10);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public basic_selector(): Basic_selectorContext {
		let _localctx: Basic_selectorContext = new Basic_selectorContext(this._ctx, this.state);
		this.enterRule(_localctx, 38, FurumaiParser.RULE_basic_selector);
		try {
			this.state = 205;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 20, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 200;
				this.univ_selector();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 201;
				this.type_selector();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 202;
				this.class_selector();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 203;
				this.id_selector();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 204;
				this.edge_selector();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public univ_selector(): Univ_selectorContext {
		let _localctx: Univ_selectorContext = new Univ_selectorContext(this._ctx, this.state);
		this.enterRule(_localctx, 40, FurumaiParser.RULE_univ_selector);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 207;
			this.match(FurumaiParser.T__11);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public type_selector(): Type_selectorContext {
		let _localctx: Type_selectorContext = new Type_selectorContext(this._ctx, this.state);
		this.enterRule(_localctx, 42, FurumaiParser.RULE_type_selector);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 209;
			this.match(FurumaiParser.ID);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public class_selector(): Class_selectorContext {
		let _localctx: Class_selectorContext = new Class_selectorContext(this._ctx, this.state);
		this.enterRule(_localctx, 44, FurumaiParser.RULE_class_selector);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 211;
			this.match(FurumaiParser.DOT);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public id_selector(): Id_selectorContext {
		let _localctx: Id_selectorContext = new Id_selectorContext(this._ctx, this.state);
		this.enterRule(_localctx, 46, FurumaiParser.RULE_id_selector);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 213;
			this.match(FurumaiParser.HASH);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public edge_selector(): Edge_selectorContext {
		let _localctx: Edge_selectorContext = new Edge_selectorContext(this._ctx, this.state);
		this.enterRule(_localctx, 48, FurumaiParser.RULE_edge_selector);
		try {
			this.enterOuterAlt(_localctx, 1);
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
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public declaration(): DeclarationContext {
		let _localctx: DeclarationContext = new DeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 50, FurumaiParser.RULE_declaration);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 219;
			this.match(FurumaiParser.ID);
			this.state = 223;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === FurumaiParser.DOT) {
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
			if (!(_la === FurumaiParser.T__12 || _la === FurumaiParser.T__13)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

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
				_alt = this.interpreter.adaptivePredict(this._input, 22, this._ctx);
			} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public val(): ValContext {
		let _localctx: ValContext = new ValContext(this._ctx, this.state);
		this.enterRule(_localctx, 52, FurumaiParser.RULE_val);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 232;
			_la = this._input.LA(1);
			if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << FurumaiParser.ID) | (1 << FurumaiParser.HASH) | (1 << FurumaiParser.STRING))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public semi_colon(): Semi_colonContext {
		let _localctx: Semi_colonContext = new Semi_colonContext(this._ctx, this.state);
		this.enterRule(_localctx, 54, FurumaiParser.RULE_semi_colon);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 234;
			this.match(FurumaiParser.T__5);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\x17\xEF\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
		"\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x04" +
		"\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17\x04" +
		"\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t\x1C\x04" +
		"\x1D\t\x1D\x03\x02\x03\x02\x03\x02\x07\x02>\n\x02\f\x02\x0E\x02A\v\x02" +
		"\x03\x02\x05\x02D\n\x02\x03\x02\x03\x02\x03\x03\x03\x03\x03\x04\x03\x04" +
		"\x03\x05\x07\x05M\n\x05\f\x05\x0E\x05P\v\x05\x03\x06\x03\x06\x03\x06\x03" +
		"\x06\x03\x06\x03\x06\x03\x06\x05\x06Y\n\x06\x03\x07\x03\x07\x03\x07\x03" +
		"\x07\x03\x07\x03\x07\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\t\x03\t\x03" +
		"\t\x03\t\x05\tk\n\t\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x05" +
		"\nu\n\n\x03\v\x03\v\x03\v\x05\vz\n\v\x03\v\x07\v}\n\v\f\v\x0E\v\x80\v" +
		"\v\x03\v\x05\v\x83\n\v\x03\v\x03\v\x03\v\x03\v\x05\v\x89\n\v\x03\f\x03" +
		"\f\x05\f\x8D\n\f\x03\r\x03\r\x03\r\x03\r\x03\x0E\x03\x0E\x03\x0E\x03\x0E" +
		"\x03\x0E\x03\x0E\x03\x0F\x07\x0F\x9A\n\x0F\f\x0F\x0E\x0F\x9D\v\x0F\x03" +
		"\x10\x03\x10\x03\x10\x05\x10\xA2\n\x10\x03\x10\x03\x10\x07\x10\xA6\n\x10" +
		"\f\x10\x0E\x10\xA9\v\x10\x03\x10\x05\x10\xAC\n\x10\x03\x10\x03\x10\x05" +
		"\x10\xB0\n\x10\x03\x11\x03\x11\x03\x11\x07\x11\xB5\n\x11\f\x11\x0E\x11" +
		"\xB8\v\x11\x03\x11\x05\x11\xBB\n\x11\x03\x12\x07\x12\xBE\n\x12\f\x12\x0E" +
		"\x12\xC1\v\x12\x03\x12\x03\x12\x03\x13\x03\x13\x05\x13\xC7\n\x13\x03\x14" +
		"\x03\x14\x03\x15\x03\x15\x03\x15\x03\x15\x03\x15\x05\x15\xD0\n\x15\x03" +
		"\x16\x03\x16\x03\x17\x03\x17\x03\x18\x03\x18\x03\x19\x03\x19\x03\x1A\x03" +
		"\x1A\x03\x1A\x03\x1A\x03\x1B\x03\x1B\x07\x1B\xE0\n\x1B\f\x1B\x0E\x1B\xE3" +
		"\v\x1B\x03\x1B\x03\x1B\x06\x1B\xE7\n\x1B\r\x1B\x0E\x1B\xE8\x03\x1C\x03" +
		"\x1C\x03\x1D\x03\x1D\x03\x1D\x02\x02\x02\x1E\x02\x02\x04\x02\x06\x02\b" +
		"\x02\n\x02\f\x02\x0E\x02\x10\x02\x12\x02\x14\x02\x16\x02\x18\x02\x1A\x02" +
		"\x1C\x02\x1E\x02 \x02\"\x02$\x02&\x02(\x02*\x02,\x02.\x020\x022\x024\x02" +
		"6\x028\x02\x02\x05\x04\x02\b\b\n\n\x03\x02\x0F\x10\x04\x02\x11\x12\x14" +
		"\x14\x02\xF1\x02:\x03\x02\x02\x02\x04G\x03\x02\x02\x02\x06I\x03\x02\x02" +
		"\x02\bN\x03\x02\x02\x02\nX\x03\x02\x02\x02\fZ\x03\x02\x02\x02\x0E`\x03" +
		"\x02\x02\x02\x10j\x03\x02\x02\x02\x12t\x03\x02\x02\x02\x14\x88\x03\x02" +
		"\x02\x02\x16\x8C\x03\x02\x02\x02\x18\x8E\x03\x02\x02\x02\x1A\x92\x03\x02" +
		"\x02\x02\x1C\x9B\x03\x02\x02\x02\x1E\x9E\x03\x02\x02\x02 \xB1\x03\x02" +
		"\x02\x02\"\xBF\x03\x02\x02\x02$\xC4\x03\x02\x02\x02&\xC8\x03\x02\x02\x02" +
		"(\xCF\x03\x02\x02\x02*\xD1\x03\x02\x02\x02,\xD3\x03\x02\x02\x02.\xD5\x03" +
		"\x02\x02\x020\xD7\x03\x02\x02\x022\xD9\x03\x02\x02\x024\xDD\x03\x02\x02" +
		"\x026\xEA\x03\x02\x02\x028\xEC\x03\x02\x02\x02:?\x05\x04\x03\x02;<\x07" +
		"\x03\x02\x02<>\x05\x06\x04\x02=;\x03\x02\x02\x02>A\x03\x02\x02\x02?=\x03" +
		"\x02\x02\x02?@\x03\x02\x02\x02@C\x03\x02\x02\x02A?\x03\x02\x02\x02BD\x07" +
		"\x03\x02\x02CB\x03\x02\x02\x02CD\x03\x02\x02\x02DE\x03\x02\x02\x02EF\x07" +
		"\x02\x02\x03F\x03\x03\x02\x02\x02GH\x05\b\x05\x02H\x05\x03\x02\x02\x02" +
		"IJ\x05\b\x05\x02J\x07\x03\x02\x02\x02KM\x05\n\x06\x02LK\x03\x02\x02\x02" +
		"MP\x03\x02\x02\x02NL\x03\x02\x02\x02NO\x03\x02\x02\x02O\t\x03\x02\x02" +
		"\x02PN\x03\x02\x02\x02QY\x05\f\x07\x02RY\x05\x0E\b\x02SY\x05\x10\t\x02" +
		"TY\x05\x12\n\x02UY\x05\x16\f\x02VY\x054\x1B\x02WY\x058\x1D\x02XQ\x03\x02" +
		"\x02\x02XR\x03\x02\x02\x02XS\x03\x02\x02\x02XT\x03\x02\x02\x02XU\x03\x02" +
		"\x02\x02XV\x03\x02\x02\x02XW\x03\x02\x02\x02Y\v\x03\x02\x02\x02Z[\x07" +
		"\x04\x02\x02[\\\x07\x11\x02\x02\\]\x07\x05\x02\x02]^\x05\b\x05\x02^_\x07" +
		"\x06\x02\x02_\r\x03\x02\x02\x02`a\x07\x07\x02\x02ab\x07\x11\x02\x02bc" +
		"\x07\x05\x02\x02cd\x05\b\x05\x02de\x07\x06\x02\x02e\x0F\x03\x02\x02\x02" +
		"fg\x07\x11\x02\x02gk\x07\b\x02\x02hi\x07\x11\x02\x02ik\x05\x14\v\x02j" +
		"f\x03\x02\x02\x02jh\x03\x02\x02\x02k\x11\x03\x02\x02\x02lm\x07\x11\x02" +
		"\x02mn\x07\x15\x02\x02no\x07\x11\x02\x02ou\x07\b\x02\x02pq\x07\x11\x02" +
		"\x02qr\x07\x15\x02\x02rs\x07\x11\x02\x02su\x05\x14\v\x02tl\x03\x02\x02" +
		"\x02tp\x03\x02\x02\x02u\x13\x03\x02\x02\x02vw\x07\t\x02\x02w~\x054\x1B" +
		"\x02xz\t\x02\x02\x02yx\x03\x02\x02\x02yz\x03\x02\x02\x02z{\x03\x02\x02" +
		"\x02{}\x054\x1B\x02|y\x03\x02\x02\x02}\x80\x03\x02\x02\x02~|\x03\x02\x02" +
		"\x02~\x7F\x03\x02\x02\x02\x7F\x82\x03\x02\x02\x02\x80~\x03\x02\x02\x02" +
		"\x81\x83\t\x02\x02\x02\x82\x81\x03\x02\x02\x02\x82\x83\x03\x02\x02\x02" +
		"\x83\x84\x03\x02\x02\x02\x84\x85\x07\v\x02\x02\x85\x89\x03\x02\x02\x02" +
		"\x86\x87\x07\t\x02\x02\x87\x89\x07\v\x02\x02\x88v\x03\x02\x02\x02\x88" +
		"\x86\x03\x02\x02\x02\x89\x15\x03\x02\x02\x02\x8A\x8D\x05\x18\r\x02\x8B" +
		"\x8D\x05\x1A\x0E\x02\x8C\x8A\x03\x02\x02\x02\x8C\x8B\x03\x02\x02\x02\x8D" +
		"\x17\x03\x02\x02\x02\x8E\x8F\x07\f\x02\x02\x8F\x90\x07\x11\x02\x02\x90" +
		"\x91\x07\b\x02\x02\x91\x19\x03\x02\x02\x02\x92\x93\x07\f\x02\x02\x93\x94" +
		"\x07\x11\x02\x02\x94\x95\x07\x15\x02\x02\x95\x96\x07\x11\x02\x02\x96\x97" +
		"\x07\b\x02\x02\x97\x1B\x03\x02\x02\x02\x98\x9A\x05\x1E\x10\x02\x99\x98" +
		"\x03\x02\x02\x02\x9A\x9D\x03\x02\x02\x02\x9B\x99\x03\x02\x02\x02\x9B\x9C" +
		"\x03\x02\x02\x02\x9C\x1D\x03\x02\x02\x02\x9D\x9B\x03\x02\x02\x02\x9E\x9F" +
		"\x05 \x11\x02\x9F\xA1\x07\x05\x02\x02\xA0\xA2\x054\x1B\x02\xA1\xA0\x03" +
		"\x02\x02\x02\xA1\xA2\x03\x02\x02\x02\xA2\xA7\x03\x02\x02\x02\xA3\xA4\t" +
		"\x02\x02\x02\xA4\xA6\x054\x1B\x02\xA5\xA3\x03\x02\x02\x02\xA6\xA9\x03" +
		"\x02\x02\x02\xA7\xA5\x03\x02\x02\x02\xA7\xA8\x03\x02\x02\x02\xA8\xAB\x03" +
		"\x02\x02\x02\xA9\xA7\x03\x02\x02\x02\xAA\xAC\t\x02\x02\x02\xAB\xAA\x03" +
		"\x02\x02\x02\xAB\xAC\x03\x02\x02\x02\xAC\xAD\x03\x02\x02\x02\xAD\xAF\x07" +
		"\x06\x02\x02\xAE\xB0\x07\b\x02\x02\xAF\xAE\x03\x02\x02\x02\xAF\xB0\x03" +
		"\x02\x02\x02\xB0\x1F\x03\x02\x02\x02\xB1\xB6\x05\"\x12\x02\xB2\xB3\x07" +
		"\n\x02\x02\xB3\xB5\x05\"\x12\x02\xB4\xB2\x03\x02\x02\x02\xB5\xB8\x03\x02" +
		"\x02\x02\xB6\xB4\x03\x02\x02\x02\xB6\xB7\x03\x02\x02\x02\xB7\xBA\x03\x02" +
		"\x02\x02\xB8\xB6\x03\x02\x02\x02\xB9\xBB\x07\n\x02\x02\xBA\xB9\x03\x02" +
		"\x02\x02\xBA\xBB\x03\x02\x02\x02\xBB!\x03\x02\x02\x02\xBC\xBE\x05$\x13" +
		"\x02\xBD\xBC\x03\x02\x02\x02\xBE\xC1\x03\x02\x02\x02\xBF\xBD\x03\x02\x02" +
		"\x02\xBF\xC0\x03\x02\x02\x02\xC0\xC2\x03\x02\x02\x02\xC1\xBF\x03\x02\x02" +
		"\x02\xC2\xC3\x05(\x15\x02\xC3#\x03\x02\x02\x02\xC4\xC6\x05(\x15\x02\xC5" +
		"\xC7\x05&\x14\x02\xC6\xC5\x03\x02\x02\x02\xC6\xC7\x03\x02\x02\x02\xC7" +
		"%\x03\x02\x02\x02\xC8\xC9\x07\r\x02\x02\xC9\'\x03\x02\x02\x02\xCA\xD0" +
		"\x05*\x16\x02\xCB\xD0\x05,\x17\x02\xCC\xD0\x05.\x18\x02\xCD\xD0\x050\x19" +
		"\x02\xCE\xD0\x052\x1A\x02\xCF\xCA\x03\x02\x02\x02\xCF\xCB\x03\x02\x02" +
		"\x02\xCF\xCC\x03\x02\x02\x02\xCF\xCD\x03\x02\x02\x02\xCF\xCE\x03\x02\x02" +
		"\x02\xD0)\x03\x02\x02\x02\xD1\xD2\x07\x0E\x02\x02\xD2+\x03\x02\x02\x02" +
		"\xD3\xD4\x07\x11\x02\x02\xD4-\x03\x02\x02\x02\xD5\xD6\x07\x13\x02\x02" +
		"\xD6/\x03\x02\x02\x02\xD7\xD8\x07\x12\x02\x02\xD81\x03\x02\x02\x02\xD9" +
		"\xDA\x07\x11\x02\x02\xDA\xDB\x07\x15\x02\x02\xDB\xDC\x07\x11\x02\x02\xDC" +
		"3\x03\x02\x02\x02\xDD\xE1\x07\x11\x02\x02\xDE\xE0\x07\x13\x02\x02\xDF" +
		"\xDE\x03\x02\x02\x02\xE0\xE3\x03\x02\x02\x02\xE1\xDF\x03\x02\x02\x02\xE1" +
		"\xE2\x03\x02\x02\x02\xE2\xE4\x03\x02\x02\x02\xE3\xE1\x03\x02\x02\x02\xE4" +
		"\xE6\t\x03\x02\x02\xE5\xE7\x056\x1C\x02\xE6\xE5\x03\x02\x02\x02\xE7\xE8" +
		"\x03\x02\x02\x02\xE8\xE6\x03\x02\x02\x02\xE8\xE9\x03\x02\x02\x02\xE95" +
		"\x03\x02\x02\x02\xEA\xEB\t\x04\x02\x02\xEB7\x03\x02\x02\x02\xEC\xED\x07" +
		"\b\x02\x02\xED9\x03\x02\x02\x02\x19?CNXjty~\x82\x88\x8C\x9B\xA1\xA7\xAB" +
		"\xAF\xB6\xBA\xBF\xC6\xCF\xE1\xE8";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!FurumaiParser.__ATN) {
			FurumaiParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(FurumaiParser._serializedATN));
		}

		return FurumaiParser.__ATN;
	}

}

export class StoryContext extends ParserRuleContext {
	public layout(): LayoutContext {
		return this.getRuleContext(0, LayoutContext);
	}
	public EOF(): TerminalNode { return this.getToken(FurumaiParser.EOF, 0); }
	public update(): UpdateContext[];
	public update(i: number): UpdateContext;
	public update(i?: number): UpdateContext | UpdateContext[] {
		if (i === undefined) {
			return this.getRuleContexts(UpdateContext);
		} else {
			return this.getRuleContext(i, UpdateContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FurumaiParser.RULE_story; }
	// @Override
	public enterRule(listener: FurumaiListener): void {
		if (listener.enterStory) {
			listener.enterStory(this);
		}
	}
	// @Override
	public exitRule(listener: FurumaiListener): void {
		if (listener.exitStory) {
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
	public stmt_list(): Stmt_listContext {
		return this.getRuleContext(0, Stmt_listContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FurumaiParser.RULE_layout; }
	// @Override
	public enterRule(listener: FurumaiListener): void {
		if (listener.enterLayout) {
			listener.enterLayout(this);
		}
	}
	// @Override
	public exitRule(listener: FurumaiListener): void {
		if (listener.exitLayout) {
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
	public stmt_list(): Stmt_listContext {
		return this.getRuleContext(0, Stmt_listContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FurumaiParser.RULE_update; }
	// @Override
	public enterRule(listener: FurumaiListener): void {
		if (listener.enterUpdate) {
			listener.enterUpdate(this);
		}
	}
	// @Override
	public exitRule(listener: FurumaiListener): void {
		if (listener.exitUpdate) {
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
	public stmt(): StmtContext[];
	public stmt(i: number): StmtContext;
	public stmt(i?: number): StmtContext | StmtContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StmtContext);
		} else {
			return this.getRuleContext(i, StmtContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FurumaiParser.RULE_stmt_list; }
	// @Override
	public enterRule(listener: FurumaiListener): void {
		if (listener.enterStmt_list) {
			listener.enterStmt_list(this);
		}
	}
	// @Override
	public exitRule(listener: FurumaiListener): void {
		if (listener.exitStmt_list) {
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
	public group(): GroupContext | undefined {
		return this.tryGetRuleContext(0, GroupContext);
	}
	public zone(): ZoneContext | undefined {
		return this.tryGetRuleContext(0, ZoneContext);
	}
	public node_stmt(): Node_stmtContext | undefined {
		return this.tryGetRuleContext(0, Node_stmtContext);
	}
	public edge_stmt(): Edge_stmtContext | undefined {
		return this.tryGetRuleContext(0, Edge_stmtContext);
	}
	public hide(): HideContext | undefined {
		return this.tryGetRuleContext(0, HideContext);
	}
	public declaration(): DeclarationContext | undefined {
		return this.tryGetRuleContext(0, DeclarationContext);
	}
	public semi_colon(): Semi_colonContext | undefined {
		return this.tryGetRuleContext(0, Semi_colonContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FurumaiParser.RULE_stmt; }
	// @Override
	public enterRule(listener: FurumaiListener): void {
		if (listener.enterStmt) {
			listener.enterStmt(this);
		}
	}
	// @Override
	public exitRule(listener: FurumaiListener): void {
		if (listener.exitStmt) {
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
	public ID(): TerminalNode { return this.getToken(FurumaiParser.ID, 0); }
	public stmt_list(): Stmt_listContext {
		return this.getRuleContext(0, Stmt_listContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FurumaiParser.RULE_group; }
	// @Override
	public enterRule(listener: FurumaiListener): void {
		if (listener.enterGroup) {
			listener.enterGroup(this);
		}
	}
	// @Override
	public exitRule(listener: FurumaiListener): void {
		if (listener.exitGroup) {
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
	public ID(): TerminalNode { return this.getToken(FurumaiParser.ID, 0); }
	public stmt_list(): Stmt_listContext {
		return this.getRuleContext(0, Stmt_listContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FurumaiParser.RULE_zone; }
	// @Override
	public enterRule(listener: FurumaiListener): void {
		if (listener.enterZone) {
			listener.enterZone(this);
		}
	}
	// @Override
	public exitRule(listener: FurumaiListener): void {
		if (listener.exitZone) {
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
	public ID(): TerminalNode { return this.getToken(FurumaiParser.ID, 0); }
	public attr_list(): Attr_listContext | undefined {
		return this.tryGetRuleContext(0, Attr_listContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FurumaiParser.RULE_node_stmt; }
	// @Override
	public enterRule(listener: FurumaiListener): void {
		if (listener.enterNode_stmt) {
			listener.enterNode_stmt(this);
		}
	}
	// @Override
	public exitRule(listener: FurumaiListener): void {
		if (listener.exitNode_stmt) {
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
	public ID(): TerminalNode[];
	public ID(i: number): TerminalNode;
	public ID(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(FurumaiParser.ID);
		} else {
			return this.getToken(FurumaiParser.ID, i);
		}
	}
	public EDGEOP(): TerminalNode { return this.getToken(FurumaiParser.EDGEOP, 0); }
	public attr_list(): Attr_listContext | undefined {
		return this.tryGetRuleContext(0, Attr_listContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FurumaiParser.RULE_edge_stmt; }
	// @Override
	public enterRule(listener: FurumaiListener): void {
		if (listener.enterEdge_stmt) {
			listener.enterEdge_stmt(this);
		}
	}
	// @Override
	public exitRule(listener: FurumaiListener): void {
		if (listener.exitEdge_stmt) {
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
	public declaration(): DeclarationContext[];
	public declaration(i: number): DeclarationContext;
	public declaration(i?: number): DeclarationContext | DeclarationContext[] {
		if (i === undefined) {
			return this.getRuleContexts(DeclarationContext);
		} else {
			return this.getRuleContext(i, DeclarationContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FurumaiParser.RULE_attr_list; }
	// @Override
	public enterRule(listener: FurumaiListener): void {
		if (listener.enterAttr_list) {
			listener.enterAttr_list(this);
		}
	}
	// @Override
	public exitRule(listener: FurumaiListener): void {
		if (listener.exitAttr_list) {
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
	public hide_elem(): Hide_elemContext | undefined {
		return this.tryGetRuleContext(0, Hide_elemContext);
	}
	public hide_edge(): Hide_edgeContext | undefined {
		return this.tryGetRuleContext(0, Hide_edgeContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FurumaiParser.RULE_hide; }
	// @Override
	public enterRule(listener: FurumaiListener): void {
		if (listener.enterHide) {
			listener.enterHide(this);
		}
	}
	// @Override
	public exitRule(listener: FurumaiListener): void {
		if (listener.exitHide) {
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
	public ID(): TerminalNode { return this.getToken(FurumaiParser.ID, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FurumaiParser.RULE_hide_elem; }
	// @Override
	public enterRule(listener: FurumaiListener): void {
		if (listener.enterHide_elem) {
			listener.enterHide_elem(this);
		}
	}
	// @Override
	public exitRule(listener: FurumaiListener): void {
		if (listener.exitHide_elem) {
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
	public ID(): TerminalNode[];
	public ID(i: number): TerminalNode;
	public ID(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(FurumaiParser.ID);
		} else {
			return this.getToken(FurumaiParser.ID, i);
		}
	}
	public EDGEOP(): TerminalNode { return this.getToken(FurumaiParser.EDGEOP, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FurumaiParser.RULE_hide_edge; }
	// @Override
	public enterRule(listener: FurumaiListener): void {
		if (listener.enterHide_edge) {
			listener.enterHide_edge(this);
		}
	}
	// @Override
	public exitRule(listener: FurumaiListener): void {
		if (listener.exitHide_edge) {
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
	public css_stmt(): Css_stmtContext[];
	public css_stmt(i: number): Css_stmtContext;
	public css_stmt(i?: number): Css_stmtContext | Css_stmtContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Css_stmtContext);
		} else {
			return this.getRuleContext(i, Css_stmtContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FurumaiParser.RULE_style; }
	// @Override
	public enterRule(listener: FurumaiListener): void {
		if (listener.enterStyle) {
			listener.enterStyle(this);
		}
	}
	// @Override
	public exitRule(listener: FurumaiListener): void {
		if (listener.exitStyle) {
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
	public selector_list(): Selector_listContext {
		return this.getRuleContext(0, Selector_listContext);
	}
	public declaration(): DeclarationContext[];
	public declaration(i: number): DeclarationContext;
	public declaration(i?: number): DeclarationContext | DeclarationContext[] {
		if (i === undefined) {
			return this.getRuleContexts(DeclarationContext);
		} else {
			return this.getRuleContext(i, DeclarationContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FurumaiParser.RULE_css_stmt; }
	// @Override
	public enterRule(listener: FurumaiListener): void {
		if (listener.enterCss_stmt) {
			listener.enterCss_stmt(this);
		}
	}
	// @Override
	public exitRule(listener: FurumaiListener): void {
		if (listener.exitCss_stmt) {
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
	public selector(): SelectorContext[];
	public selector(i: number): SelectorContext;
	public selector(i?: number): SelectorContext | SelectorContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SelectorContext);
		} else {
			return this.getRuleContext(i, SelectorContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FurumaiParser.RULE_selector_list; }
	// @Override
	public enterRule(listener: FurumaiListener): void {
		if (listener.enterSelector_list) {
			listener.enterSelector_list(this);
		}
	}
	// @Override
	public exitRule(listener: FurumaiListener): void {
		if (listener.exitSelector_list) {
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
	public basic_selector(): Basic_selectorContext {
		return this.getRuleContext(0, Basic_selectorContext);
	}
	public combined_selector(): Combined_selectorContext[];
	public combined_selector(i: number): Combined_selectorContext;
	public combined_selector(i?: number): Combined_selectorContext | Combined_selectorContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Combined_selectorContext);
		} else {
			return this.getRuleContext(i, Combined_selectorContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FurumaiParser.RULE_selector; }
	// @Override
	public enterRule(listener: FurumaiListener): void {
		if (listener.enterSelector) {
			listener.enterSelector(this);
		}
	}
	// @Override
	public exitRule(listener: FurumaiListener): void {
		if (listener.exitSelector) {
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
	public basic_selector(): Basic_selectorContext {
		return this.getRuleContext(0, Basic_selectorContext);
	}
	public combinator(): CombinatorContext | undefined {
		return this.tryGetRuleContext(0, CombinatorContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FurumaiParser.RULE_combined_selector; }
	// @Override
	public enterRule(listener: FurumaiListener): void {
		if (listener.enterCombined_selector) {
			listener.enterCombined_selector(this);
		}
	}
	// @Override
	public exitRule(listener: FurumaiListener): void {
		if (listener.exitCombined_selector) {
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
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FurumaiParser.RULE_combinator; }
	// @Override
	public enterRule(listener: FurumaiListener): void {
		if (listener.enterCombinator) {
			listener.enterCombinator(this);
		}
	}
	// @Override
	public exitRule(listener: FurumaiListener): void {
		if (listener.exitCombinator) {
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
	public univ_selector(): Univ_selectorContext | undefined {
		return this.tryGetRuleContext(0, Univ_selectorContext);
	}
	public type_selector(): Type_selectorContext | undefined {
		return this.tryGetRuleContext(0, Type_selectorContext);
	}
	public class_selector(): Class_selectorContext | undefined {
		return this.tryGetRuleContext(0, Class_selectorContext);
	}
	public id_selector(): Id_selectorContext | undefined {
		return this.tryGetRuleContext(0, Id_selectorContext);
	}
	public edge_selector(): Edge_selectorContext | undefined {
		return this.tryGetRuleContext(0, Edge_selectorContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FurumaiParser.RULE_basic_selector; }
	// @Override
	public enterRule(listener: FurumaiListener): void {
		if (listener.enterBasic_selector) {
			listener.enterBasic_selector(this);
		}
	}
	// @Override
	public exitRule(listener: FurumaiListener): void {
		if (listener.exitBasic_selector) {
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
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FurumaiParser.RULE_univ_selector; }
	// @Override
	public enterRule(listener: FurumaiListener): void {
		if (listener.enterUniv_selector) {
			listener.enterUniv_selector(this);
		}
	}
	// @Override
	public exitRule(listener: FurumaiListener): void {
		if (listener.exitUniv_selector) {
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
	public ID(): TerminalNode { return this.getToken(FurumaiParser.ID, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FurumaiParser.RULE_type_selector; }
	// @Override
	public enterRule(listener: FurumaiListener): void {
		if (listener.enterType_selector) {
			listener.enterType_selector(this);
		}
	}
	// @Override
	public exitRule(listener: FurumaiListener): void {
		if (listener.exitType_selector) {
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
	public DOT(): TerminalNode { return this.getToken(FurumaiParser.DOT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FurumaiParser.RULE_class_selector; }
	// @Override
	public enterRule(listener: FurumaiListener): void {
		if (listener.enterClass_selector) {
			listener.enterClass_selector(this);
		}
	}
	// @Override
	public exitRule(listener: FurumaiListener): void {
		if (listener.exitClass_selector) {
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
	public HASH(): TerminalNode { return this.getToken(FurumaiParser.HASH, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FurumaiParser.RULE_id_selector; }
	// @Override
	public enterRule(listener: FurumaiListener): void {
		if (listener.enterId_selector) {
			listener.enterId_selector(this);
		}
	}
	// @Override
	public exitRule(listener: FurumaiListener): void {
		if (listener.exitId_selector) {
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
	public ID(): TerminalNode[];
	public ID(i: number): TerminalNode;
	public ID(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(FurumaiParser.ID);
		} else {
			return this.getToken(FurumaiParser.ID, i);
		}
	}
	public EDGEOP(): TerminalNode { return this.getToken(FurumaiParser.EDGEOP, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FurumaiParser.RULE_edge_selector; }
	// @Override
	public enterRule(listener: FurumaiListener): void {
		if (listener.enterEdge_selector) {
			listener.enterEdge_selector(this);
		}
	}
	// @Override
	public exitRule(listener: FurumaiListener): void {
		if (listener.exitEdge_selector) {
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
	public ID(): TerminalNode { return this.getToken(FurumaiParser.ID, 0); }
	public DOT(): TerminalNode[];
	public DOT(i: number): TerminalNode;
	public DOT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(FurumaiParser.DOT);
		} else {
			return this.getToken(FurumaiParser.DOT, i);
		}
	}
	public val(): ValContext[];
	public val(i: number): ValContext;
	public val(i?: number): ValContext | ValContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ValContext);
		} else {
			return this.getRuleContext(i, ValContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FurumaiParser.RULE_declaration; }
	// @Override
	public enterRule(listener: FurumaiListener): void {
		if (listener.enterDeclaration) {
			listener.enterDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: FurumaiListener): void {
		if (listener.exitDeclaration) {
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
	public STRING(): TerminalNode | undefined { return this.tryGetToken(FurumaiParser.STRING, 0); }
	public ID(): TerminalNode | undefined { return this.tryGetToken(FurumaiParser.ID, 0); }
	public HASH(): TerminalNode | undefined { return this.tryGetToken(FurumaiParser.HASH, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FurumaiParser.RULE_val; }
	// @Override
	public enterRule(listener: FurumaiListener): void {
		if (listener.enterVal) {
			listener.enterVal(this);
		}
	}
	// @Override
	public exitRule(listener: FurumaiListener): void {
		if (listener.exitVal) {
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
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FurumaiParser.RULE_semi_colon; }
	// @Override
	public enterRule(listener: FurumaiListener): void {
		if (listener.enterSemi_colon) {
			listener.enterSemi_colon(this);
		}
	}
	// @Override
	public exitRule(listener: FurumaiListener): void {
		if (listener.exitSemi_colon) {
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


