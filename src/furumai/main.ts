import {parse, parseStyle} from '../parse/parser'
import {Config, Layout, Story} from '../elem/Story'
import {Engine as LayoutEngine} from '../layout/Engine'
import {Group, Snapshot} from '../components/model/Svg'
import {Point} from '../layout/types'
import {SvgElem} from '../components/model/SvgElem'
import {StyleList} from "../style/Style";

export const defaultString = `config {
  mode: diff;
  // mode: snapshot;
  orientation: portrait;
  // orientation: landscape;
};

style {
  #root {
    flex-direction: column;
    align-items: center;
    justify-content: space-around;

    stroke: none;
    padding: 16px;
    fill: none;
  }
  .group, .zone {
    align-items: center;
    justify-content: space-around;

    fill: none;
    padding: 18px;
    margin: 24px;
    stroke: none;
  }
  .group {
    flex-direction: row;
  }
  .zone {
    flex-direction: column;
  }
  .edge {
    stroke: black;
    label: "";
  }
  .node {
    stroke: black;
    width: 100px;
    height: 60px;
    padding: 18px 7px;
    margin: 20px;
    fill: none;
  }
  .icon {
    stroke: none;
    fill: black;
  }
  .text, .label {
    visibility: inherit;
    font-size: 9pt;
  }
  .text {
    dy: 5px;
  }
  .label {
    dy: -14px;
  }
};
`

export function makeSnapshots(furumaiCode: string): Snapshot[] {
  const story = parseStory(furumaiCode)
  const config = story.config as Config
  let layout = story.layout
  const engine = new LayoutEngine(config.orientation)
  const ret = [createSnapshot(engine, layout, config)]

  for (const update of story.updates) {
    if (config.mode === 'diff') {
      layout = layout.update(update)
      ret.push(createSnapshot(engine, layout, config))
    } else {
      layout = parseStory(furumaiCode).layout.update(update)
      ret.push(createSnapshot(engine, layout, config))
    }
  }
  return ret
}
export function makeSnapshots_(text: string): Snapshot[] {
  const [header, code] = split(text)
  const ruleSets = parseStyle(header)
  const story = parseStory(code)
  let layout = new Layout(story.layout.root, story.layout.edges, StyleList.of(ruleSets))

  const config = story.config as Config
  const engine = new LayoutEngine(config.orientation)

  const snapshots = [createSnapshot(engine, layout, config)]
  for (const update of story.updates) {
    if (config.mode === 'diff') {
      layout = layout.update(update)
    } else {
      const base = parseStory(code).layout
      layout = new Layout(base.root, base.edges, StyleList.of(ruleSets)).update(update)
    }
    snapshots.push(createSnapshot(engine, layout, config))
  }
  return snapshots
}

export function split(text: string): [string, string] {
  const trimmed = text.trim()
  if (trimmed.startsWith('---\n')) {
    const at = trimmed.indexOf('---\n', 1)
    if (at > 0) {
      throw new Error('invalid format')
    }
    const header = trimmed.substring(4, at)
    const code = trimmed.substring(at + 4)
    return [header, code]
  }
  return ['', trimmed]
}

function parseStory(code: string): Story {
  const defaults = parse(defaultString)
  return parse(code).withDefault(defaults.config as Config, defaults.layout.styles)
}

function createSnapshot(engine: LayoutEngine, layout: Layout, config: Config): Snapshot {
  const styles = layout.styles
  const styled = layout.root.resolveStyle(styles, layout.root.contextMap)
  const rootBox = styled.layoutBox()
  engine.fitRoot(rootBox)

  const territories = rootBox.flatten(Point.zero)
  const includeStyle = true
  const root = styled.shape(territories, includeStyle)

  const es = layout.edges.map((edge) => {
    const f = territories[edge.from]
    const t = territories[edge.to]
    const elem = edge.resolveStyle(styles).arrow(f, edge.op, t, includeStyle)
    return {
      elem,
      children: [],
    }
  })
  root.children.push(...es)
  return {
    styles: includeStyle ? '' : styles.toCss(),
    size: rootBox.totalSize,
    root,
  }
}

export class SingleGroup implements Group {
  public children: Group[] = []

  constructor(
    readonly elem: SvgElem,
  ) {
  }
}
