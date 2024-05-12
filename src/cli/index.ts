import * as fs from 'fs'
import * as process from 'process'
import {makeSnapshots} from '../furumai/main'
import {toSVGElement} from '../svg'
import {JSDOM} from 'jsdom'

const dom = new JSDOM()
const d = dom.window.document

const content = fs.readFileSync(process.stdin.fd, 'utf8')

let snapshots = makeSnapshots(content)
snapshots.forEach((snapshot) => {
  console.log(toSVGElement(snapshot, d).outerHTML)
})
