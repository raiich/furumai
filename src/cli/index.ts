import * as fs from 'fs'
import * as process from 'process'
import {makeSnapshots} from '../furumai/main'
import {toSVGElement} from '../svg'
import {DOM} from './dom'

const dom = new DOM()
const d = dom.window.document

const content = fs.readFileSync(process.stdin.fd, 'utf8')

let snapshots = makeSnapshots(content)
snapshots.forEach((snapshot) => {
  console.log(toSVGElement(snapshot, d).outerHTML)
})
