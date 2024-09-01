import * as fs from 'fs'
import * as process from 'process'
import {generateSVGSVGElement} from '../furumai'
import {JSDOM} from 'jsdom'

const dom = new JSDOM()
const d = dom.window.document

const content = fs.readFileSync(process.stdin.fd, 'utf8')
generateSVGSVGElement(d, content).forEach((elem) => {
  console.log(elem.outerHTML)
})
