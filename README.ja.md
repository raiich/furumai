# Furumai

システムやアルゴリズムの動作図（パラパラ漫画）を、DOT（Graphviz）風のテキスト記述から生成できるツールを作りました:
<a href="https://raiich.github.io/furumai/">Furumai | behavior visualization tool</a>

## ギャラリー

<p align="right"><a href="https://raiich.github.io/furumai/#/v1/LQhQCcHsFcHMAsBcACALuaBTUBnVBPAG0xQB9RlkA6WKaABwBpqAvSAO02QG9lCBDAEaZCKAORjkAXwrIAxO36oAlgDcuvAGbLCo+QBMADJuP9psqsvadwwTPtgbkeKAGtMwffxzx+4cPz4KAAsyADMANzO6JDuKLSBUTIgwKCgtDD0yADqmIIAasqYAO48stA4mOAA2j789JgAvA3gOBwAuhGyAMbwUAC2mNXK3RyNYoIB7Po4APS9A5hizALChOO5BUXFYp2gUl3pdFmKKupllKsi4wBySmpcAIL09GJdlAAykLDZ4MqoVWGo3Y42g00gyz4QmuYi+sByfwB4F272Qgmgmk0gKha3GACEMVjkcw6g1msoGsxUONKNVMOp2KhkABGdqMAA67DpDKZACY2ZzKFRhZI9p9vgBlTDTQEjMZicD2CEraHrWHfZBSmXIvYHNIZBho-jddzTC7OKrqGpykFiSrgK2Qq5qvHG036FH7Q4VKrIYAAPmQC0gg2q1LEAGFCCNXJ7g4M-YG4b9-oDwwAFaCCaM+T3JxG+gNowmA7oCHA4RpWGx2ByYPbozGFpOS6X6UvlyvVqq1xx7OFa9vgRNGk1tsPjQcooA">Edit</a></p>
<img src="examples/gallery/native-buffer.furumai.generated.00.svg" alt="furumai generated image from examples/gallery/native-buffer.furumai"/>

---

<p align="right"><a href="https://raiich.github.io/furumai/#/v1/LQhQGcBcE8BsFMBcACAPqZyDEAnA9npMgN7IBuAluBQEYWwUwoAWFAJm-AHbIC+GyAHRc8nEsgBm9WCiwA2AAwBRAGIARAEIBuZFHwBrJMhFd4O-pmGj4gyPAAeRUlNgzsclQA4AnAEEATHwCgvBsAObw4np4hrIAwgDMcQCsXkEgwKCgYfgArgAOyLAAhtDwOACMJAI0FVo1-vW89dl5hSVlOIHEAsV1vY29CfWYxQAsTS0ZoLUA2pAAvADkkMw48ODMeLBs4AuzFQoAuksANEXFNPCwy-iES0f1ffPLZPuep94nj6DFCS9LN6zL4PJ5jAFAw7fFq1ZDAAB8yD69VhCKRE1+VTR41mbGgC38Cny9h+fzhiPGUzArDEfXJ6JhFQBq3Wm22bH23lOULOFyuNyWd0goJm-mZaw2Wx2nO5xxFz0WgPe0KydOxwxmWIpGpogXVKL1FImQA">Edit</a></p>
<img src="examples/gallery/b-tree-like.furumai.generated.01.svg" alt="furumai generated image from examples/gallery/b-tree-like.furumai"/>

---

<img src="examples/gallery/b-tree-like.furumai.generated.02.svg" alt="furumai generated image from examples/gallery/b-tree-like.furumai"/>

## 特徴

- テキストベースの記述
    - DOT（Graphviz）風の言語で記述
        - システムやアルゴリズムの記述に特化したDSLでSVG画像を生成
    - 1枚絵ではなく動作図（パラパラ漫画）をテキスト記述から生成
- SVGでの出力
    - SVG属性の指定により見た目を変更できます
- CSS風のFlexboxモデルで配置を指定できるレイアウトエンジン

## 背景

既存のお絵かきツール・図表生成ツールには下記の使いにくさがありました。

- GUIのお絵かきツール
    - 自由に配置できる反面、要素数が多いと作図・調整が手間
    - 複数枚の図があるとき、1枚変更すると後続の図も修正しないといけない

- テキストベースの図表生成ツール
    - 要素の位置の指定がしにくい
    - 状態変化を表現しにくい
        - 要素の追加・削除で他要素の位置が変わってしまう
        - 記述量が多くなりがち（図全体を枚数分だけ記述しないといけない）

そこで自動で図中の各要素の配置を調整して動作図を作成できるツールを開発しました。

## 機能

### 基本図形

基本図形として `box` / `person` / `cylinder` / `pipe` が指定できます。
要素間に矢印 (`->` or `--`) を配置できます。

<p align="right"><a href="https://raiich.github.io/furumai/#/v1/IYYwLg9gTgjA2gZwBbAA4FMC8ByDUEQB22AugNwBQhEAJuvMmltgEYQAeplCkU9iKDDhABPADYBLQnShcKFULxgACALSrl1OjEpb6agHzKe0emSA">Edit</a></p>

```
actor1[shape='person'];
node1[shape='box'];
store1[shape='cylinder'];

actor1 -- node1;
node1 -> store1;
```

<img src="examples/docs/basic-shapes.furumai.generated.00.svg" alt="furumai generated image from examples/docs/basic-shapes.furumai"/>

### アイコン

アイコン名を指定すると、Font Awesomeアイコンを使用できます。

<p align="right"><a href="https://raiich.github.io/furumai/#/v1/IYbQlgxg9gdgvAcgK4GcCmAnBBdA3AKACNxp4EM0BzJAG2AwHpVMcCITZFCNgYATFA0pgALgAskhVkA">Edit</a></p>

```
a[icon='user'];
b[icon='regular/user'];
c[icon='brands/github'];
```

<img src="examples/docs/icon.furumai.generated.00.svg" alt="furumai generated image from examples/docs/icon.furumai"/>

### 動作図（パラパラ漫画）を出力

`---` で動作図の各フレームを区切ります。

#### 差分記述モード (デフォルト)

デフォルトでは差分記述モードです。
アルゴリズムの動作説明などの「小さな変化がつみかさなる」ようなものの場合に差分記述モードが役立ちます。

<p align="right"><a href="https://raiich.github.io/furumai/#/v1/IYbgUARuDG4LQLMABHAfMqYF0qjsQA">Edit</a></p>

```
a;
b;
c;
---
a -> b;
---
b -> c;
```

<img src="examples/docs/simple-animation-diff.furumai.generated.01.svg" alt="furumai generated image from examples/docs/simple-animation-diff.furumai"/>

---

<img src="examples/docs/simple-animation-diff.furumai.generated.02.svg" alt="furumai generated image from examples/docs/simple-animation-diff.furumai"/>

初期状態で非表示にすれば、変更があってから表示されるようにできます。

<p align="right"><a href="https://raiich.github.io/furumai/#/v1/G4SwziBGIDYgLgTwLwAsQBMMFMB2BuAKEIHMAnAewFcAHAAgEMyyHE6BvQuugYwEYi3HgCZBvAMwBteMgDkAOkWyANHTDxKAa2xzcFXNlkBdMTwAsRAL5EAtHcL8iI6XL7CA7Mdv2e4p2ZdZNwAOLyA">Edit</a></p>

```
visibility=hidden;

group array {
  c1;
  c2;
  c3[t='...', stroke='none'];
  c4;
};
---
c1;
c2[t='127'];
---
c3;
c4[t='128'];
```

<img src="examples/docs/diff-mode-box.furumai.generated.01.svg" alt="furumai generated image from examples/docs/diff-mode-box.furumai"/>

---

<img src="examples/docs/diff-mode-box.furumai.generated.02.svg" alt="furumai generated image from examples/docs/diff-mode-box.furumai"/>

#### スナップショットモード

フレームごとに独立している場合はスナップショットモードを使います。

<p align="right"><a href="https://raiich.github.io/furumai/#/v1/LQhQFsHsBMFMC4AEBnAdgQwA7IBaQC6gjCijoDcoARpQMaXFmLAB8iNRYVzb9QA">Edit</a></p>

```
---
mode: snapshot
---

a;
b;
c;
---
a -> b;
---
b -> c;
```

<img src="examples/docs/simple-animation-snapshot.furumai.generated.01.svg" alt="furumai generated image from examples/docs/simple-animation-snapshot.furumai"/>

---

<img src="examples/docs/simple-animation-snapshot.furumai.generated.02.svg" alt="furumai generated image from examples/docs/simple-animation-snapshot.furumai"/>

### ラベル / テキスト

<p align="right"><a href="https://raiich.github.io/furumai/#/v1/HYewJgpgjA2gzgCwIYAcIF4DkAjEAPTAGgAIAXLAYxGFIhuIQgCcJMBdAbgCgkLSQmsRKgyY0TONSLEANkmwQZWJMQCucZu25x+LIcjSUAnjICWwSE2lyFSzDoEQAhNPKYA1lABcxAG5QtIA">Edit</a></p>

```
node1[shape='box', t='content here'];
actor1[shape='person', label='a user'];
store1[shape='cylinder', label='store!', t='k1: v1'];
```

<img src="examples/docs/label-text.furumai.generated.00.svg" alt="furumai generated image from examples/docs/label-text.furumai"/>

### SVG属性

<p align="right"><a href="https://raiich.github.io/furumai/#/v1/HYRg2gLgvA5BCmAPCACEMA0KBmBLANvlAIYCOArsQLbEBOuw8AugNwBQwATOxyCgLQA+FFzBsUKAM4RaAewDW8fgHdcAEwgALKAHYM4qTIVL8DeAGNiAB1hzywNZgPS5i-muKTNdWsQCeUABEAMwoAJyBBrJWxOa4EAGBAAwAdACskRLQMMQoCMhOWUgQKXiEUADExABs2PqsQA">Edit</a></p>

```
n1[t='text 1', fill=aquamarine];
n2;

n1 -> n2[
  stroke-width=7,
  stroke-linecap='round',
  stroke-dasharray="3 9"
  opacity="0.5"
  t='a text',
  text.fill=#a6f,
];
```

<img src="examples/docs/svg-attributes.furumai.generated.00.svg" alt="furumai generated image from examples/docs/svg-attributes.furumai"/>

### Zone / Group

図表の構成要素をまとめる方法として下記のものがあります。

- `group`
    - 横方向にならべてまとめます
- `zone`
    - 縦方向にならべてまとめます

<p align="right"><a href="https://raiich.github.io/furumai/#/v1/OYJw9grgDgBAxgRhgbwFAxgMwJYBtcC8AxJpgKYDc6MAtmQNoDOAFgIZRkEDkHIjYAOy4BdKhgBG4AO6MyIBGJgAXMGFwLUAX1ShIsWSABu2OGSRoMOfAC4YJcooBegsjFaPz1S3kIkymRQwocAAPAE8NDAlWOABrMgEAE0iYbQxnAVd3ACYULywfYnIA-OCwcOzAmHEY+KTK6m1tVDoYAFoAPmrpAw0VNSRO7rAZOQR6UVRUSRHe9q6y8I0Z0fl5mEWwhs3Brpq4hOSqTdyh-brEyqA">Edit</a></p>

```
group c1 {
  fill=#ffe;
  me[shape='person'];
  browser1;
  tool1;
}
group service1 {
  fill: #ffe;
  zone az1 {
    fill=#fef;
    proxy1;
    backend1;
  }
  zone az2 {
    fill=#fef;
    proxy2;
    backend2;
  }
}

me -> browser1;
tool1 -> browser1[];

browser1 -> proxy1;
browser1 -> proxy2;
proxy1 -> backend1;
proxy2 -> backend2;
```

<img src="examples/docs/group-zone.furumai.generated.00.svg" alt="furumai generated image from examples/docs/group-zone.furumai"/>

### スタイル指定

CSSのようにスタイル指定ができます。
ノード等の名前はIDとして使用されます。クラス名も設定できます。

標準で用意されているIDおよびクラスには下記があります。

- `#root` : トップレベル要素
- `.group`, `.zone` : グループ、ゾーン
- `.node`, `.edge` : ノード、エッジ
- `.text`, `.label` : テキスト、ラベル

<p align="right"><a href="https://raiich.github.io/furumai/#/v1/LQhQGcBcE8BsFMBcACAPqZyDEA7AjMgN7JQBOA9gNZLYBsAhgGbIC+G2+yAdLPQEbxYRZIwCWsWCiyMGAbhHkckYOFEAvGgGYATAAcAHvLaZcBLpHj7IwsRKn1ajWce4BjWOGAFitydkb09M6gIMCgoPgA2pAAvADkFlbIeHEANCLisDH0AI4ArvQAtvSkojjwALqyEdqR7vTg4DEARO6eeM1V4ZzAAHzIOLXsZFTwwADuogAmkAAWMQDsqcOQFNTAsGXwrvS68RR5OFNpK2tjUw2zJaT00C2ayACczezkuvSuojAtAAxcAKwvTCxOL0ZCJSAnYGWSBcXwxLAORjLKpAA">Edit</a></p>

```
---
style: |
  #n1 { stroke: #6af }
  #n1 .label { fill: #f6a; font-size: 32px; }
  #n1 .text { fill: #a6f;}
  .cls-1 { fill: #faa;}
---

n1[t='text 1', fill=aquamarine];
n2[class="cls-1"];

n1 -> n2[
  stroke-width=7,
  stroke-linecap='round',
  stroke-dasharray="3 9"
  opacity="0.5"
  t='a text',
  text.fill=#a6f,
];
```

<img src="examples/docs/css.furumai.generated.00.svg" alt="furumai generated image from examples/docs/css.furumai"/>

### Margin / Padding

ウェブページにおける `margin` / `padding` のような余白を設定できます。

<p align="right"><a href="https://raiich.github.io/furumai/#/v1/HYRg2gtghgTg5gS2AXgOQDYAMAHAHqgGgAIAXNEgU1xIEJCjsoATJpOZEdPAXQG4AoYACZIsRClRC89MqkrUadYoxZs0IHLiJCAHNL6ChI6PCTIAzJr5A">Edit</a></p>

```
n1[margin='60px', t='text!', padding=16px];
n2[margin='2px', t='text!!', padding='10px 28px'];
n22[margin=30px];
```

<img src="examples/docs/margin-padding.furumai.generated.00.svg" alt="furumai generated image from examples/docs/margin-padding.furumai"/>

### dx / dy

矢印の配置が重なってしまうケースがあります。その場合、 `dx` / `dy` 属性により配置をずらせます。

<p align="right"><a href="https://raiich.github.io/furumai/#/v1/IYbgUARuDG5g5gJwPYFcAOACeAmTBvMTTAE3GIFNzMAzcAXzmEwFoA+TaAbRIA8BeAMwAGdLwC64CKw6wwJGbXAVFNHgE9+OYZKA">Edit</a></p>

```
a;
b;
c;

group g2 {
  d;
  e;
  f;
};

a -> c[dx=30px];
b -> c;
d -> f;
e -> f[dy=20];
```

<img src="examples/docs/dx-dy.furumai.generated.00.svg" alt="furumai generated image from examples/docs/dx-dy.furumai"/>

### Flexbox風レイアウト

<p align="right"><a href="https://raiich.github.io/furumai/#/v1/LQhQGcBcE8BsFMBcACAPqZyDEBzATMgN4abIBWArlAJYBm0wAxgPYB2k87KUAhgE6QA3CQC+JXAGYiJTJRr0mbDl2TgADj0bxg-ZhVYATYZjEhgoUDj561yHAEYiyHoOQAjV2Ks27BQskZPS2sKWxwpfyNkLxCwgBYneE8gA">Edit</a></p>

```
---
style: |
  #g2 {
    justify-content: start;
  }
  #g3 {
    justify-content: space-around;
  }
---

group g1 { a; b; }
group g2 { c; }
group g3 { d; }
group g4 { e; }
```

<img src="examples/docs/justify-content.furumai.generated.00.svg" alt="furumai generated image from examples/docs/justify-content.furumai"/>

### 方向

`style` における `flex-direction` の指定、 `config` における `orientation` の指定により配置方向を変更できます。

<p align="right"><a href="https://raiich.github.io/furumai/#/v1/LQhQGcBcE8BsFMBcACAPqZyDEAnA9npMgN4abIBmCAHsACYCWO8AxpA3gHYr4DuA3GQC+oEMFCgAhv2QAjGS35A">Edit</a></p>

```
---
style: |
  #root {
    flex-direction: row;
  }
---

a; b; c;
```

<img src="examples/docs/direction.furumai.generated.00.svg" alt="furumai generated image from examples/docs/direction.furumai"/>

<p align="right"><a href="https://raiich.github.io/furumai/#/v1/LQhQBMEsCcFMGMAukD2A7AXAAgDYEM1wBnePAB1lBGFFDRXFgEYBuUPJFaJgbSIAtysALwVoRdAF02RRF2Z9BFYfACeOSIVjRpQA">Edit</a></p>

```
---
direction: landscape
---

node1;
actor1[shape=person];
store1[shape=cylinder];
```

<img src="examples/docs/orientation.furumai.generated.00.svg" alt="furumai generated image from examples/docs/orientation.furumai"/>

### 表示済み要素の非表示

表示済み要素を非表示にするには下記のように `hide` を使用します。

<p align="right"><a href="https://raiich.github.io/furumai/#/v1/LQhQFsHsBMFMC4AEBnAdgQwA7IBaQC6gjCijoDcoARpeosAHyI2nGg4CWcidjzlRMJ240gA">Edit</a></p>

```
---
mode: snapshot
---

a;
b;
a -> b;

---
hide a -> b;

---
hide b;
```

<img src="examples/docs/hide.furumai.generated.01.svg" alt="furumai generated image from examples/docs/hide.furumai"/>

---

<img src="examples/docs/hide.furumai.generated.02.svg" alt="furumai generated image from examples/docs/hide.furumai"/>

### コメント

`//` はラインコメントです。

### Rough Mode

<p align="right"><a href="https://raiich.github.io/furumai/#/v1/LQhQCcHsFcHMAsBcACALuaBTUJigIYDcQA">Edit</a></p>

```
---
rough: true
---
a;
```

<img src="examples/docs/rough.furumai.generated.00.svg" alt="furumai generated image from examples/docs/rough.furumai"/>

## 文法

[Furumai.g4](Furumai.g4)

<Footer></Footer>

## その他

[Gallery](gallery.md)


