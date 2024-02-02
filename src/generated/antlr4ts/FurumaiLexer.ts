// Generated from Furumai.g4 by ANTLR 4.9.0-SNAPSHOT


import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { CharStream } from "antlr4ts/CharStream";
import { Lexer } from "antlr4ts/Lexer";
import { LexerATNSimulator } from "antlr4ts/atn/LexerATNSimulator";
import { NotNull } from "antlr4ts/Decorators";
import { Override } from "antlr4ts/Decorators";
import { RuleContext } from "antlr4ts/RuleContext";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";


export class FurumaiLexer extends Lexer {
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

	// tslint:disable:no-trailing-whitespace
	public static readonly channelNames: string[] = [
		"DEFAULT_TOKEN_CHANNEL", "HIDDEN",
	];

	// tslint:disable:no-trailing-whitespace
	public static readonly modeNames: string[] = [
		"DEFAULT_MODE",
	];

	public static readonly ruleNames: string[] = [
		"T__0", "T__1", "T__2", "T__3", "T__4", "T__5", "T__6", "T__7", "T__8", 
		"T__9", "T__10", "T__11", "T__12", "T__13", "ID", "HASH", "DOT", "STRING", 
		"EDGEOP", "SPACES", "SINGLE_LINE_COMMENT",
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
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(FurumaiLexer._LITERAL_NAMES, FurumaiLexer._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return FurumaiLexer.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace


	constructor(input: CharStream) {
		super(input);
		this._interp = new LexerATNSimulator(FurumaiLexer._ATN, this);
	}

	// @Override
	public get grammarFileName(): string { return "Furumai.g4"; }

	// @Override
	public get ruleNames(): string[] { return FurumaiLexer.ruleNames; }

	// @Override
	public get serializedATN(): string { return FurumaiLexer._serializedATN; }

	// @Override
	public get channelNames(): string[] { return FurumaiLexer.channelNames; }

	// @Override
	public get modeNames(): string[] { return FurumaiLexer.modeNames; }

	// @Override
	public action(_localctx: RuleContext, ruleIndex: number, actionIndex: number): void {
		switch (ruleIndex) {
		case 17:
			this.STRING_action(_localctx, actionIndex);
			break;
		}
	}
	private STRING_action(_localctx: RuleContext, actionIndex: number): void {
		switch (actionIndex) {
		case 0:
			 this.text = this.text.slice(1, -1)
			break;

		case 1:
			 this.text = this.text.slice(1, -1) 
			break;
		}
	}

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x02\x17\x9A\b\x01" +
		"\x04\x02\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06" +
		"\x04\x07\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r" +
		"\t\r\x04\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t" +
		"\x12\x04\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x03\x02\x03" +
		"\x02\x03\x02\x03\x02\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03" +
		"\x04\x03\x04\x03\x05\x03\x05\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03" +
		"\x07\x03\x07\x03\b\x03\b\x03\t\x03\t\x03\n\x03\n\x03\v\x03\v\x03\v\x03" +
		"\v\x03\v\x03\f\x03\f\x03\r\x03\r\x03\x0E\x03\x0E\x03\x0F\x03\x0F\x03\x10" +
		"\x05\x10W\n\x10\x03\x10\x06\x10Z\n\x10\r\x10\x0E\x10[\x03\x10\x03\x10" +
		"\x06\x10`\n\x10\r\x10\x0E\x10a\x07\x10d\n\x10\f\x10\x0E\x10g\v\x10\x03" +
		"\x11\x03\x11\x03\x11\x03\x12\x03\x12\x03\x12\x03\x13\x03\x13\x07\x13q" +
		"\n\x13\f\x13\x0E\x13t\v\x13\x03\x13\x03\x13\x03\x13\x03\x13\x07\x13z\n" +
		"\x13\f\x13\x0E\x13}\v\x13\x03\x13\x03\x13\x05\x13\x81\n\x13\x03\x14\x03" +
		"\x14\x03\x14\x03\x14\x05\x14\x87\n\x14\x03\x15\x03\x15\x03\x15\x03\x15" +
		"\x03\x16\x03\x16\x03\x16\x03\x16\x07\x16\x91\n\x16\f\x16\x0E\x16\x94\v" +
		"\x16\x03\x16\x05\x16\x97\n\x16\x03\x16\x03\x16\x02\x02\x02\x17\x03\x02" +
		"\x03\x05\x02\x04\x07\x02\x05\t\x02\x06\v\x02\x07\r\x02\b\x0F\x02\t\x11" +
		"\x02\n\x13\x02\v\x15\x02\f\x17\x02\r\x19\x02\x0E\x1B\x02\x0F\x1D\x02\x10" +
		"\x1F\x02\x11!\x02\x12#\x02\x13%\x02\x14\'\x02\x15)\x02\x16+\x02\x17\x03" +
		"\x02\b\x06\x022;C\\aac|\x03\x02))\x03\x02$$\x05\x02\v\r\x0F\x0F\"\"\x04" +
		"\x02\f\f\x0F\x0F\x04\x03\f\f\x0F\x0F\x02\xA2\x02\x03\x03\x02\x02\x02\x02" +
		"\x05\x03\x02\x02\x02\x02\x07\x03\x02\x02\x02\x02\t\x03\x02\x02\x02\x02" +
		"\v\x03\x02\x02\x02\x02\r\x03\x02\x02\x02\x02\x0F\x03\x02\x02\x02\x02\x11" +
		"\x03\x02\x02\x02\x02\x13\x03\x02\x02\x02\x02\x15\x03\x02\x02\x02\x02\x17" +
		"\x03\x02\x02\x02\x02\x19\x03\x02\x02\x02\x02\x1B\x03\x02\x02\x02\x02\x1D" +
		"\x03\x02\x02\x02\x02\x1F\x03\x02\x02\x02\x02!\x03\x02\x02\x02\x02#\x03" +
		"\x02\x02\x02\x02%\x03\x02\x02\x02\x02\'\x03\x02\x02\x02\x02)\x03\x02\x02" +
		"\x02\x02+\x03\x02\x02\x02\x03-\x03\x02\x02\x02\x051\x03\x02\x02\x02\x07" +
		"7\x03\x02\x02\x02\t9\x03\x02\x02\x02\v;\x03\x02\x02\x02\r@\x03\x02\x02" +
		"\x02\x0FB\x03\x02\x02\x02\x11D\x03\x02\x02\x02\x13F\x03\x02\x02\x02\x15" +
		"H\x03\x02\x02\x02\x17M\x03\x02\x02\x02\x19O\x03\x02\x02\x02\x1BQ\x03\x02" +
		"\x02\x02\x1DS\x03\x02\x02\x02\x1FV\x03\x02\x02\x02!h\x03\x02\x02\x02#" +
		"k\x03\x02\x02\x02%\x80\x03\x02\x02\x02\'\x86\x03\x02\x02\x02)\x88\x03" +
		"\x02\x02\x02+\x8C\x03\x02\x02\x02-.\x07/\x02\x02./\x07/\x02\x02/0\x07" +
		"/\x02\x020\x04\x03\x02\x02\x0212\x07i\x02\x0223\x07t\x02\x0234\x07q\x02" +
		"\x0245\x07w\x02\x0256\x07r\x02\x026\x06\x03\x02\x02\x0278\x07}\x02\x02" +
		"8\b\x03\x02\x02\x029:\x07\x7F\x02\x02:\n\x03\x02\x02\x02;<\x07|\x02\x02" +
		"<=\x07q\x02\x02=>\x07p\x02\x02>?\x07g\x02\x02?\f\x03\x02\x02\x02@A\x07" +
		"=\x02\x02A\x0E\x03\x02\x02\x02BC\x07]\x02\x02C\x10\x03\x02\x02\x02DE\x07" +
		".\x02\x02E\x12\x03\x02\x02\x02FG\x07_\x02\x02G\x14\x03\x02\x02\x02HI\x07" +
		"j\x02\x02IJ\x07k\x02\x02JK\x07f\x02\x02KL\x07g\x02\x02L\x16\x03\x02\x02" +
		"\x02MN\x07@\x02\x02N\x18\x03\x02\x02\x02OP\x07,\x02\x02P\x1A\x03\x02\x02" +
		"\x02QR\x07<\x02\x02R\x1C\x03\x02\x02\x02ST\x07?\x02\x02T\x1E\x03\x02\x02" +
		"\x02UW\x07/\x02\x02VU\x03\x02\x02\x02VW\x03\x02\x02\x02WY\x03\x02\x02" +
		"\x02XZ\t\x02\x02\x02YX\x03\x02\x02\x02Z[\x03\x02\x02\x02[Y\x03\x02\x02" +
		"\x02[\\\x03\x02\x02\x02\\e\x03\x02\x02\x02]_\x07/\x02\x02^`\t\x02\x02" +
		"\x02_^\x03\x02\x02\x02`a\x03\x02\x02\x02a_\x03\x02\x02\x02ab\x03\x02\x02" +
		"\x02bd\x03\x02\x02\x02c]\x03\x02\x02\x02dg\x03\x02\x02\x02ec\x03\x02\x02" +
		"\x02ef\x03\x02\x02\x02f \x03\x02\x02\x02ge\x03\x02\x02\x02hi\x07%\x02" +
		"\x02ij\x05\x1F\x10\x02j\"\x03\x02\x02\x02kl\x070\x02\x02lm\x05\x1F\x10" +
		"\x02m$\x03\x02\x02\x02nr\x07)\x02\x02oq\n\x03\x02\x02po\x03\x02\x02\x02" +
		"qt\x03\x02\x02\x02rp\x03\x02\x02\x02rs\x03\x02\x02\x02su\x03\x02\x02\x02" +
		"tr\x03\x02\x02\x02uv\x07)\x02\x02v\x81\b\x13\x02\x02w{\x07$\x02\x02xz" +
		"\n\x04\x02\x02yx\x03\x02\x02\x02z}\x03\x02\x02\x02{y\x03\x02\x02\x02{" +
		"|\x03\x02\x02\x02|~\x03\x02\x02\x02}{\x03\x02\x02\x02~\x7F\x07$\x02\x02" +
		"\x7F\x81\b\x13\x03\x02\x80n\x03\x02\x02\x02\x80w\x03\x02\x02\x02\x81&" +
		"\x03\x02\x02\x02\x82\x83\x07/\x02\x02\x83\x87\x07/\x02\x02\x84\x85\x07" +
		"/\x02\x02\x85\x87\x07@\x02\x02\x86\x82\x03\x02\x02\x02\x86\x84\x03\x02" +
		"\x02\x02\x87(\x03\x02\x02\x02\x88\x89\t\x05\x02\x02\x89\x8A\x03\x02\x02" +
		"\x02\x8A\x8B\b\x15\x04\x02\x8B*\x03\x02\x02\x02\x8C\x8D\x071\x02\x02\x8D" +
		"\x8E\x071\x02\x02\x8E\x92\x03\x02\x02\x02\x8F\x91\n\x06\x02\x02\x90\x8F" +
		"\x03\x02\x02\x02\x91\x94\x03\x02\x02\x02\x92\x90\x03\x02\x02\x02\x92\x93" +
		"\x03\x02\x02\x02\x93\x96\x03\x02\x02\x02\x94\x92\x03\x02\x02\x02\x95\x97" +
		"\t\x07\x02\x02\x96\x95\x03\x02\x02\x02\x97\x98\x03\x02\x02\x02\x98\x99" +
		"\b\x16\x04\x02\x99,\x03\x02\x02\x02\r\x02V[aer{\x80\x86\x92\x96\x05\x03" +
		"\x13\x02\x03\x13\x03\x02\x03\x02";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!FurumaiLexer.__ATN) {
			FurumaiLexer.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(FurumaiLexer._serializedATN));
		}

		return FurumaiLexer.__ATN;
	}

}

