import {parse, parseStyle} from '../parse/parser'
import {Layout} from '../elem/Story'
import {Engine as LayoutEngine} from '../layout/Engine'
import {Snapshot} from '../components/model/Svg'
import {Point} from '../layout/types'
import {StyleList} from "../style/Style";
import {parse as parseYaml} from 'yaml'

export const defaultString = `mode: diff
# mode: snapshot
direction: portrait
# direction: landscape
style: |
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
`

export function makeSnapshots(text: string): Snapshot[] {
  const {style,  ...defaults } = parseYaml(defaultString)

  const [header, code] = split(text)
  const config = { ...defaults, ...parseYaml(header)}

  const defaultStyle = StyleList.of(parseStyle(style))
  const styles = defaultStyle.update(StyleList.of(parseStyle(config.style)))

  const story = parse(code)
  let layout = story.layout

  const engine = new LayoutEngine(config.direction)
  const ret = [createSnapshot(engine, layout, styles)]
  for (const update of story.updates) {
    if (config.mode === 'diff') {
      layout = layout.update(update)
    } else {
      layout = parse(code).layout.update(update)
    }
    ret.push(createSnapshot(engine, layout, styles))
  }
  return ret
}

export function split(text: string): [string, string] {
  const trimmed = text.trim()
  if (trimmed.startsWith('---\n')) {
    const at = trimmed.indexOf('---\n', 1)
    if (at < 0) {
      throw new Error('invalid format')
    }
    const header = trimmed.substring(4, at)
    const code = trimmed.substring(at + 4)
    return [header, code]
  }
  return ['', trimmed]
}

function createSnapshot(engine: LayoutEngine, layout: Layout, styles: StyleList): Snapshot {
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
    styles: '',
    size: rootBox.totalSize,
    root,
  }
}

interface Config {
  mode: string
  style: string
  direction: string
  rough: boolean
}
