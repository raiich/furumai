import {Svg} from '../components/model/Svg'
import {JSDOM} from 'jsdom'
import {Length} from '../layout/types'
import {SvgElem} from "../components/model/SvgElem";
import {TextElem} from "../components/model/TextElem";
import { fas } from '@fortawesome/free-solid-svg-icons'

const dom = new JSDOM()
const d = dom.window.document
const ns = 'http://www.w3.org/2000/svg'

export function toSvg(input: Svg) {
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
      const iconName = 'fa' + elem.icon.charAt(0).toUpperCase() + elem.icon.slice(1)
      const icon = fas[iconName]
      const path =icon.icon[4]

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

  function textNodeOf(text :TextElem, classNames: string[]) {
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

  function process(elem: SvgElem) {
    root.appendChild(childNodeOf(elem))
    if (elem.text) {
      root.appendChild(textNodeOf(elem.text, []))
    }
    if (elem.label) {
      root.appendChild(textNodeOf(elem.label, ['label']))
    }
  }

  const node = input.root
  const queue = [node]
  while (queue.length > 0) {
    const item = queue.shift()!
    process(item.elem)
    queue.push(...item.children)
  }
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
