import * as fs from 'fs'
import * as process from 'process'
import {toSvgModels} from '../furumai/main'
import {toSvg} from '../svg'

const text = fs.readFileSync(process.stdin.fd, 'utf8')
let svgs = toSvgModels(text)
svgs.forEach((svg) => {
  console.log(toSvg(svg))
})
