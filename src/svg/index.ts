import {Group, Svg} from '../components/model/Svg'
import {JSDOM} from 'jsdom'
import {Length} from '../layout/types'


export function toSVG(input: Svg) {
  const svg = d.createElementNS('http://www.w3.org/2000/svg', 'svg')
  svg.setAttribute('id', 'svgRoot')
  svg.setAttribute('class', 'svg-root')

  const width = Length.pixel(Math.max(input.size.width.pixel, 640))
  const height = input.size.height
  svg.setAttribute('width', `${width}`)
  svg.setAttribute('height', `${height}`)
  svg.setAttribute('viewBox', `${viewBox(width, height)}`)

  handleGroup(input.root)


svg.appendChild()




}


function handleGroup(group: Group) {
  const g = d.createElement('g')






  // <g v-bind="attrs">
  // <g class="self">
  //   <path
  //     v-if="g.elem.d"
  //   v-bind:d="g.elem.d"
  // v-bind="childAttrs"
  //   ></path>
  //   <VIcon
  // v-else-if="g.elem.icon"
  //   v-bind:elem="g.elem"
  //   ></VIcon>
  //   <rect
  // v-else
  // v-bind="childAttrs"
  //   ></rect>
  //
  //   <TextContent
  // v-bind:text="g.elem.text"
  //   ></TextContent>
  //   <LabelComponent
  // v-bind:text="g.elem.label"
  //   ></LabelComponent>
  //   </g>
  //
  //   <Group
  // v-for="c in g.children"
  //   v-bind:key="c.elem.secureAttrs.svgAttrs.id"
  // v-bind:g="c"
  //   ></Group>
  //   </g>




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

const dom = new JSDOM()
const d = dom.window.document

function elem() {
  d.createElementNS()
}
