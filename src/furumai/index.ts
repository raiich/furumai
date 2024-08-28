import {Group, Snapshot} from '../components/model/Svg'
import {Length, Point} from '../layout/types'
import {SvgElem} from "../components/model/SvgElem";
import {TextElem} from "../components/model/TextElem";
import {fas} from '@fortawesome/free-solid-svg-icons'
import {far} from '@fortawesome/free-regular-svg-icons'
import {fab} from '@fortawesome/free-brands-svg-icons'
import {parse, parseStyle} from '../parse/parser'
import {Layout} from '../elem/Story'
import {Engine as LayoutEngine} from '../layout/Engine'
import {StyleList} from "../style/Style";
import {parse as parseYaml} from 'yaml'
import {Rougher} from "../effect/rougher";

const defaultString = `mode: diff
# mode: snapshot
direction: portrait
# direction: landscape
rough: false
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

export function generateSVGSVGElement(d: Document, text: string): SVGSVGElement[] {
  const {style,  ...defaults } = parseYaml(defaultString)

  const [header, code] = split(text)
  const config = { ...defaults, ...parseYaml(header)}

  const defaultStyle = StyleList.of(parseStyle(style))
  const styles = defaultStyle.update(StyleList.of(parseStyle(config.style)))

  const story = parse(code)
  let layout = story.layout

  const engine = new LayoutEngine(config.direction)
  const snapshots = [createSnapshot(engine, layout, styles)]
  for (const update of story.updates) {
    if (config.mode === 'diff') {
      layout = layout.update(update)
    } else {
      layout = parse(code).layout.update(update)
    }
    snapshots.push(createSnapshot(engine, layout, styles))
  }

  const ret = snapshots.map((s) => toSVGElement(s, d))
  if (config.rough) {
    const r = new Rougher(d)
    return ret.map(r.convertSvg)
  } else {
    return ret
  }
}

function split(text: string): [string, string] {
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

const ns = 'http://www.w3.org/2000/svg'

function toSVGElement(input: Snapshot, d: Document): SVGSVGElement {
  const svg = d.createElementNS(ns, 'svg')
  svg.setAttribute('xmlns', ns)
  svg.setAttribute('id', 'svgRoot')
  svg.setAttribute('class', 'svg-root')

  const width = Length.pixel(Math.max(input.size.width.pixel, 640))
  const height = input.size.height
  svg.setAttribute('width', `${width}`)
  svg.setAttribute('height', `${height}`)
  svg.setAttribute('viewBox', `${viewBox(width, height)}`)

  const style = d.createElementNS(ns, 'style')
  style.textContent = input.styles
  svg.appendChild(style)

  const root = d.createElementNS(ns, 'g')
  svg.appendChild(root)

  function childNodeOf(elem: SvgElem): SVGElement {
    if (elem.d) {
      const ret = d.createElementNS(ns, 'path')
      ret.setAttribute('d', elem.d)
      const attrs = elem.secureAttrs.svgAttrs
      for (const key of Object.keys(attrs)) {
        ret.setAttribute(key, attrs[key])
      }
      return ret
    } else if (elem.icon) {
      const prefixAndName = elem.icon.split('/')
      const [prefix, name] = prefixAndName.length < 2 ? ['solid', elem.icon] : prefixAndName
      const icon = function () {
        function camelize(kebab: string) {
          const camel = kebab.replace(/-./g, (x)=>x[1].toUpperCase())
          return camel.charAt(0).toUpperCase() + camel.slice(1)
        }
        const camel = camelize(name)
        switch (prefix) {
          case 'solid':
            return fas['fa' + camel]
          case 'regular':
            return far['fa' + camel]
          case 'brands':
            return fab['fa' + camel]
          default:
            throw new Error(`icon not found: ${elem.icon} ${prefix} ${name} ${camel}`)
        }
      }()

      if (!icon) {
        function camelize(s: string) {
          return s.replace(/-./g, (x)=>x[1].toUpperCase())
        }
        const c = camelize(name)
        throw new Error(`icon not found: ${elem.icon} ${prefix} ${name} ${c}`)
      }

      const path = icon.icon[4]

      const pathElem = d.createElementNS(ns, 'path')
      pathElem.setAttribute('d', Array.isArray(path) ? path.join(' ') : path)

      const svg = d.createElementNS(ns, 'svg')
      svg.setAttribute('xmlns', ns)
      svg.setAttribute('id', 'svgRoot')
      svg.setAttribute('class', 'svg-root')

      const width = Length.parse(elem.secureAttrs.svgAttrs['width'])
      const height = Length.parse(elem.secureAttrs.svgAttrs['height'])
      svg.setAttribute('width', `${width}`)
      svg.setAttribute('height', `${height}`)
      svg.setAttribute('viewBox', `0 0 ${icon.icon[0]} ${icon.icon[1]}`)
      svg.setAttribute('style', 'stroke: none; fill: black;')
      svg.setAttribute('x', elem.secureAttrs.svgAttrs['x'])
      svg.setAttribute('y', elem.secureAttrs.svgAttrs['y'])
      svg.appendChild(pathElem)
      return svg
    } else {
      const ret = d.createElementNS(ns, 'rect')
      const attrs = elem.secureAttrs.svgAttrs
      for (const key of Object.keys(attrs)) {
        ret.setAttribute(key, attrs[key])
      }
      return ret
    }
  }

  function textNodeOf(text: TextElem, classNames: string[]) {
    const ret = d.createElementNS(ns, 'text')
    const x = text.base.x.toString()
    const y = text.base.y.toString()
    ret.setAttribute('x', x)
    ret.setAttribute('y', y)
    const attrs = text.svgAttrs.svgAttrs
    for (const key of Object.keys(attrs)) {
      ret.setAttribute(key, attrs[key])
    }
    text.lines.forEach(function (t) {
      const tspan = d.createElementNS(ns, 'tspan')
      tspan.classList.add('text')
      classNames.forEach((c) => tspan.classList.add(c))
      tspan.setAttribute('dy', t.dy)
      tspan.setAttribute('x', x)
      tspan.textContent = t.text
      ret.appendChild(tspan)
    })
    return ret
  }

  function traverse(group :Group) :SVGGElement{
    const elem = group.elem
    const g = d.createElementNS(ns, 'g')
    g.setAttribute('visibility', elem.visibility ? elem.visibility : 'inherit')
    g.appendChild(childNodeOf(elem))
    if (elem.text) {
      g.appendChild(textNodeOf(elem.text, []))
    }
    if (elem.label) {
      g.appendChild(textNodeOf(elem.label, ['label']))
    }
    group.children.map(traverse).forEach((c)=>g.appendChild(c))
    return g
  }

  root.appendChild(traverse(input.root))
  return svg
}

function viewBox(width: Length, height: Length): string {
  const widthString = width.toString()
  const heightString = height.toString()
  if (widthString.endsWith('px') && heightString.endsWith('px')) {
    const w = widthString.slice(0, widthString.length - 2)
    const h = heightString.slice(0, heightString.length - 2)
    return `0 0 ${w} ${h}`
  } else {
    throw new Error(`unsupported length: ${widthString}, ${heightString}`)
  }
}
