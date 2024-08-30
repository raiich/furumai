# Furumai

A tool of behavior visualization, via a DOT (Graphviz) like description:
<a href="https://raiich.github.io/furumai/">Furumai | behavior visualization tool</a>

Translations:

- [日本語](README.ja.md)

## Gallery

<!-- furumai:generate examples/gallery/native-buffer.furumai -->

---

<!-- furumai:generate examples/gallery/b-tree-like.furumai -->

## Features

- Text-based description
    - You can write behavior in DOT (Graphviz) style
        - You can generate SVG images using DSL specialized for describing systems and algorithms.
    - Instead of a single picture, it will generate a motion diagram (a flipbook comic) from a text description
- Output to SVG
    - You can also adjust the appearance by specifying the SVG attribute.
- Layout engine that can specify placement in `Flexbox model` like CSS.

## Background

The existing drawing tools had the following difficulties.

- GUI drawing tool
    - You can arrange elements in any position, but it is hard to adjust if there are a number of elements
    - When there are many figures, you must also modify the related figures

- Text-based drawing tool
    - It is difficult to specify the position of the elements
        - The position is tend to be changed after another element is added/deleted
    - There is no diff mode for describing changes, so the amount of description tends to be large
        - It is necessary to describe the whole statements for the number of figures

Therefore, I developed a tool that can automatically create an action diagram by adjusting each element.

## Functions

### Basic Shapes

You can specify `box` / `person` / `cylinder` / `pipe` as the basic shape.
Arrows (`->` or `--`) can be placed between elements.

<!-- furumai:describe examples/docs/basic-shapes.furumai -->

### Icon Shapes

You can specify Font Awesome icon as below.

<!-- furumai:describe examples/docs/icon.furumai -->

### Behavior motion diagram (like a flipbook comic)

Separate each frame of the motion diagram with `---`.

#### Diff mode (default)

Default is `diff mode`.
The `diff mode` is useful especially for "incremental small changes" such as explaining how an algorithm works.

<!-- furumai:describe examples/docs/simple-animation-diff.furumai -->

If you hide it initial layout, it can be made to appear only after changes have been made.

<!-- furumai:describe examples/docs/diff-mode-box.furumai -->

#### Snapshot mode

If each frame is independent, use the `snapshot` mode.

<!-- furumai:describe examples/docs/simple-animation-snapshot.furumai -->

### Label / Text

<!-- furumai:describe examples/docs/label-text.furumai -->

### SVG attribute

<!-- furumai:describe examples/docs/svg-attributes.furumai -->

### Zone / Group

There are the following methods to summarize the diagram elements.

- `group`
    - Lay it side by side
- `zone`
    - It arranges them in vertical direction

<!-- furumai:describe examples/docs/group-zone.furumai -->

### Style

It can be styled just like CSS.
The name of the node, etc. is used as the `id`. You can also set `class` names.

The following IDs and classes are provided by default.

- `#root` : Top level element
- `.group`, `.zone` : groups, zones
- `.node`, `.edge` : nodes, edges
- `.text`, `.label` : texts, labels

<!-- furumai:describe examples/docs/css.furumai -->

### Margin / Padding

You can set `margin` / `padding`, like web pages.

<!-- furumai:describe examples/docs/margin-padding.furumai -->

### dx / dy

There are cases where arrows overlap as a result of automatic placement.
You can shift the arrangement of arrows by specifying the `dx` / `dy` attribute.

<!-- furumai:describe examples/docs/dx-dy.furumai -->

### Layout like CSS Flexbox

<!-- furumai:describe examples/docs/justify-content.furumai -->

### Direction / Orientation

You can change the layout direction by specifying `flex-direction` in `style` or `orientation` in `config`.

<!-- furumai:describe examples/docs/direction.furumai -->

<!-- furumai:describe examples/docs/orientation.furumai -->

### Hide displayed elements

To hide the displayed element, use `hide` as follows.

<!-- furumai:describe examples/docs/hide.furumai -->

### Comment

`//` is line comment.

### Rough Mode

<!-- furumai:describe examples/docs/rough.furumai -->

## Syntax

[Furumai.g4](Furumai.g4)

<Footer></Footer>
