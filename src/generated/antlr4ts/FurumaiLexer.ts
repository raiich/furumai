// Generated from Furumai.g4 by ANTLR 4.13.1
// noinspection ES6UnusedImports,JSUnusedGlobalSymbols,JSUnusedLocalSymbols
import {
	ATN,
	ATNDeserializer,
	CharStream,
	DecisionState, DFA,
	Lexer,
	LexerATNSimulator,
	RuleContext,
	PredictionContextCache,
	Token
} from "antlr4";
export default class FurumaiLexer extends Lexer {
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

	public static readonly channelNames: string[] = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];
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
	public static readonly modeNames: string[] = [ "DEFAULT_MODE", ];

	public static readonly ruleNames: string[] = [
		"T__0", "T__1", "T__2", "T__3", "T__4", "T__5", "T__6", "T__7", "T__8", 
		"T__9", "T__10", "T__11", "T__12", "T__13", "ID", "HASH", "DOT", "STRING", 
		"EDGEOP", "SPACES", "SINGLE_LINE_COMMENT",
	];


	constructor(input: CharStream) {
		super(input);
		this._interp = new LexerATNSimulator(this, FurumaiLexer._ATN, FurumaiLexer.DecisionsToDFA, new PredictionContextCache());
	}

	public get grammarFileName(): string { return "Furumai.g4"; }

	public get literalNames(): (string | null)[] { return FurumaiLexer.literalNames; }
	public get symbolicNames(): (string | null)[] { return FurumaiLexer.symbolicNames; }
	public get ruleNames(): string[] { return FurumaiLexer.ruleNames; }

	public get serializedATN(): number[] { return FurumaiLexer._serializedATN; }

	public get channelNames(): string[] { return FurumaiLexer.channelNames; }

	public get modeNames(): string[] { return FurumaiLexer.modeNames; }

	// @Override
	public action(localctx: RuleContext, ruleIndex: number, actionIndex: number): void {
		switch (ruleIndex) {
		case 17:
			this.STRING_action(localctx, actionIndex);
			break;
		}
	}
	private STRING_action(localctx: RuleContext, actionIndex: number): void {
		switch (actionIndex) {
		case 0:
			 this.text = this.text.slice(1, -1)
			break;
		case 1:
			 this.text = this.text.slice(1, -1) 
			break;
		}
	}

	public static readonly _serializedATN: number[] = [4,0,21,152,6,-1,2,0,
	7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,
	7,9,2,10,7,10,2,11,7,11,2,12,7,12,2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,
	16,2,17,7,17,2,18,7,18,2,19,7,19,2,20,7,20,1,0,1,0,1,0,1,0,1,1,1,1,1,1,
	1,1,1,1,1,1,1,2,1,2,1,3,1,3,1,4,1,4,1,4,1,4,1,4,1,5,1,5,1,6,1,6,1,7,1,7,
	1,8,1,8,1,9,1,9,1,9,1,9,1,9,1,10,1,10,1,11,1,11,1,12,1,12,1,13,1,13,1,14,
	3,14,85,8,14,1,14,4,14,88,8,14,11,14,12,14,89,1,14,1,14,4,14,94,8,14,11,
	14,12,14,95,5,14,98,8,14,10,14,12,14,101,9,14,1,15,1,15,1,15,1,16,1,16,
	1,16,1,17,1,17,5,17,111,8,17,10,17,12,17,114,9,17,1,17,1,17,1,17,1,17,5,
	17,120,8,17,10,17,12,17,123,9,17,1,17,1,17,3,17,127,8,17,1,18,1,18,1,18,
	1,18,3,18,133,8,18,1,19,1,19,1,19,1,19,1,20,1,20,1,20,1,20,5,20,143,8,20,
	10,20,12,20,146,9,20,1,20,3,20,149,8,20,1,20,1,20,0,0,21,1,1,3,2,5,3,7,
	4,9,5,11,6,13,7,15,8,17,9,19,10,21,11,23,12,25,13,27,14,29,15,31,16,33,
	17,35,18,37,19,39,20,41,21,1,0,6,4,0,48,57,65,90,95,95,97,122,1,0,39,39,
	1,0,34,34,3,0,9,11,13,13,32,32,2,0,10,10,13,13,2,1,10,10,13,13,160,0,1,
	1,0,0,0,0,3,1,0,0,0,0,5,1,0,0,0,0,7,1,0,0,0,0,9,1,0,0,0,0,11,1,0,0,0,0,
	13,1,0,0,0,0,15,1,0,0,0,0,17,1,0,0,0,0,19,1,0,0,0,0,21,1,0,0,0,0,23,1,0,
	0,0,0,25,1,0,0,0,0,27,1,0,0,0,0,29,1,0,0,0,0,31,1,0,0,0,0,33,1,0,0,0,0,
	35,1,0,0,0,0,37,1,0,0,0,0,39,1,0,0,0,0,41,1,0,0,0,1,43,1,0,0,0,3,47,1,0,
	0,0,5,53,1,0,0,0,7,55,1,0,0,0,9,57,1,0,0,0,11,62,1,0,0,0,13,64,1,0,0,0,
	15,66,1,0,0,0,17,68,1,0,0,0,19,70,1,0,0,0,21,75,1,0,0,0,23,77,1,0,0,0,25,
	79,1,0,0,0,27,81,1,0,0,0,29,84,1,0,0,0,31,102,1,0,0,0,33,105,1,0,0,0,35,
	126,1,0,0,0,37,132,1,0,0,0,39,134,1,0,0,0,41,138,1,0,0,0,43,44,5,45,0,0,
	44,45,5,45,0,0,45,46,5,45,0,0,46,2,1,0,0,0,47,48,5,103,0,0,48,49,5,114,
	0,0,49,50,5,111,0,0,50,51,5,117,0,0,51,52,5,112,0,0,52,4,1,0,0,0,53,54,
	5,123,0,0,54,6,1,0,0,0,55,56,5,125,0,0,56,8,1,0,0,0,57,58,5,122,0,0,58,
	59,5,111,0,0,59,60,5,110,0,0,60,61,5,101,0,0,61,10,1,0,0,0,62,63,5,59,0,
	0,63,12,1,0,0,0,64,65,5,91,0,0,65,14,1,0,0,0,66,67,5,44,0,0,67,16,1,0,0,
	0,68,69,5,93,0,0,69,18,1,0,0,0,70,71,5,104,0,0,71,72,5,105,0,0,72,73,5,
	100,0,0,73,74,5,101,0,0,74,20,1,0,0,0,75,76,5,62,0,0,76,22,1,0,0,0,77,78,
	5,42,0,0,78,24,1,0,0,0,79,80,5,58,0,0,80,26,1,0,0,0,81,82,5,61,0,0,82,28,
	1,0,0,0,83,85,5,45,0,0,84,83,1,0,0,0,84,85,1,0,0,0,85,87,1,0,0,0,86,88,
	7,0,0,0,87,86,1,0,0,0,88,89,1,0,0,0,89,87,1,0,0,0,89,90,1,0,0,0,90,99,1,
	0,0,0,91,93,5,45,0,0,92,94,7,0,0,0,93,92,1,0,0,0,94,95,1,0,0,0,95,93,1,
	0,0,0,95,96,1,0,0,0,96,98,1,0,0,0,97,91,1,0,0,0,98,101,1,0,0,0,99,97,1,
	0,0,0,99,100,1,0,0,0,100,30,1,0,0,0,101,99,1,0,0,0,102,103,5,35,0,0,103,
	104,3,29,14,0,104,32,1,0,0,0,105,106,5,46,0,0,106,107,3,29,14,0,107,34,
	1,0,0,0,108,112,5,39,0,0,109,111,8,1,0,0,110,109,1,0,0,0,111,114,1,0,0,
	0,112,110,1,0,0,0,112,113,1,0,0,0,113,115,1,0,0,0,114,112,1,0,0,0,115,116,
	5,39,0,0,116,127,6,17,0,0,117,121,5,34,0,0,118,120,8,2,0,0,119,118,1,0,
	0,0,120,123,1,0,0,0,121,119,1,0,0,0,121,122,1,0,0,0,122,124,1,0,0,0,123,
	121,1,0,0,0,124,125,5,34,0,0,125,127,6,17,1,0,126,108,1,0,0,0,126,117,1,
	0,0,0,127,36,1,0,0,0,128,129,5,45,0,0,129,133,5,45,0,0,130,131,5,45,0,0,
	131,133,5,62,0,0,132,128,1,0,0,0,132,130,1,0,0,0,133,38,1,0,0,0,134,135,
	7,3,0,0,135,136,1,0,0,0,136,137,6,19,2,0,137,40,1,0,0,0,138,139,5,47,0,
	0,139,140,5,47,0,0,140,144,1,0,0,0,141,143,8,4,0,0,142,141,1,0,0,0,143,
	146,1,0,0,0,144,142,1,0,0,0,144,145,1,0,0,0,145,148,1,0,0,0,146,144,1,0,
	0,0,147,149,7,5,0,0,148,147,1,0,0,0,149,150,1,0,0,0,150,151,6,20,2,0,151,
	42,1,0,0,0,11,0,84,89,95,99,112,121,126,132,144,148,3,1,17,0,1,17,1,0,1,
	0];

	private static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!FurumaiLexer.__ATN) {
			FurumaiLexer.__ATN = new ATNDeserializer().deserialize(FurumaiLexer._serializedATN);
		}

		return FurumaiLexer.__ATN;
	}


	static DecisionsToDFA = FurumaiLexer._ATN.decisionToState.map( (ds: DecisionState, index: number) => new DFA(ds, index) );
}