import {Group, Snapshot} from '../components/model/Svg'
import {JSDOM} from 'jsdom'
import {Length} from '../layout/types'
import {SvgElem} from "../components/model/SvgElem";
import {TextElem} from "../components/model/TextElem";
import {fas} from '@fortawesome/free-solid-svg-icons'
import {far} from '@fortawesome/free-regular-svg-icons'
import {fab} from '@fortawesome/free-brands-svg-icons'

const dom = new JSDOM()
const d = dom.window.document
const ns = 'http://www.w3.org/2000/svg'

export function toSVGElement(input: Snapshot) {
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
