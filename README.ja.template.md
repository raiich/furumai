# Furumai

システムやアルゴリズムの動作図（パラパラ漫画）を、DOT（Graphviz）風のテキスト記述から生成できるツールを作りました:
<a href="https://raiich.github.io/furumai/">Furumai | behavior visualization tool</a>

# ギャラリー

<!-- furumai:generate examples/gallery/native-buffer.furumai -->

---

<!-- furumai:generate examples/gallery/b-tree-like.furumai -->

# 特徴

- テキストベースの記述
    - DOT（Graphviz）風の言語で記述
        - システムやアルゴリズムの記述に特化したDSLでSVG画像を生成
    - 1枚絵ではなく動作図（パラパラ漫画）をテキスト記述から生成
- SVGでの出力
    - SVG属性の指定により見た目を変更できます
- CSS風のFlexboxモデルで配置を指定できるレイアウトエンジン

# 背景

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

# 機能

## 基本図形

基本図形として `box` / `person` / `cylinder` / `pipe` が指定できます。
要素間に矢印 (`->` or `--`) を配置できます。

<!-- furumai:describe examples/docs/basic-shapes.furumai -->

## アイコン

アイコン名を指定すると、Font Awesomeアイコンを使用できます。

<!-- furumai:describe examples/docs/icon.furumai -->

## 動作図（パラパラ漫画）を出力

`---` で動作図の各フレームを区切ります。

### 差分記述モード (デフォルト)

デフォルトでは差分記述モードです。
アルゴリズムの動作説明などの「小さな変化がつみかさなる」ようなものの場合に差分記述モードが役立ちます。

<!-- furumai:describe examples/docs/simple-animation-diff.furumai -->

初期状態で非表示にすれば、変更があってから表示されるようにできます。

<!-- furumai:describe examples/docs/diff-mode-box.furumai -->

### スナップショットモード

フレームごとに独立している場合はスナップショットモードを使います。

<!-- furumai:describe examples/docs/simple-animation-snapshot.furumai -->

## ラベル / テキスト

<!-- furumai:describe examples/docs/label-text.furumai -->

## SVG属性

<!-- furumai:describe examples/docs/svg-attributes.furumai -->

## Zone / Group

図表の構成要素をまとめる方法として下記のものがあります。

- `group`
    - 横方向にならべてまとめます
- `zone`
    - 縦方向にならべてまとめます

<!-- furumai:describe examples/docs/group-zone.furumai -->

## スタイル指定

CSSのようにスタイル指定ができます。
ノード等の名前はIDとして使用されます。クラス名も設定できます。

標準で用意されているIDおよびクラスには下記があります。

- `#root` : トップレベル要素
- `.group`, `.zone` : グループ、ゾーン
- `.node`, `.edge` : ノード、エッジ
- `.text`, `.label` : テキスト、ラベル

<!-- furumai:describe examples/docs/css.furumai -->

## Margin / Padding

ウェブページにおける `margin` / `padding` のような余白を設定できます。

<!-- furumai:describe examples/docs/margin-padding.furumai -->

## dx / dy

矢印の配置が重なってしまうケースがあります。その場合、 `dx` / `dy` 属性により配置をずらせます。

<!-- furumai:describe examples/docs/dx-dy.furumai -->

## Flexbox風レイアウト

<!-- furumai:describe examples/docs/justify-content.furumai -->

## 方向

`style` における `flex-direction` の指定、 `config` における `orientation` の指定により配置方向を変更できます。

<!-- furumai:describe examples/docs/direction.furumai -->

<!-- furumai:describe examples/docs/orientation.furumai -->

## 表示済み要素の非表示

表示済み要素を非表示にするには下記のように `hide` を使用します。

<!-- furumai:describe examples/docs/hide.furumai -->

## コメント

`//` はラインコメントです。

## Rough Mode

<!-- furumai:describe examples/docs/rough.furumai -->

# 文法

[Furumai.g4](Furumai.g4)

<Footer></Footer>
