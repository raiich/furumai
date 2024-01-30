import * as fs from 'fs'
import * as process from 'process'
import {makeSnapshots} from '../furumai/main'
import {toSvgXml} from '../svg'

const content = fs.readFileSync(process.stdin.fd, 'utf8')
let snapshots = makeSnapshots(content)
snapshots.forEach((snapshot) => {
  console.log(toSvgXml(snapshot).outerHTML)
})
