process.stdin.setEncoding('utf8')
const reader = require('readline').createInterface({
  input: process.stdin,
})

const offsetX = 0.5
let lineNum = 0
let result = []

reader.on('line', (line) => {
  lineNum++
  const ts = line.trimStart()
  const x =  (line.length - ts.length) * 0.5 + offsetX
  const y = lineNum * 1.3
  result.push(`<tspan y="${y}em" x="${x}em">${ts}</tspan>`)
})

reader.on('close', () => {
  const width = 640
  const height = 22 * lineNum

  console.log(`<svg
 xmlns="http://www.w3.org/2000/svg"
 viewBox="0 0 ${width} ${height}"
 width="${width}" height="${height}"
>`)
  console.log(`<text font-size="12pt">`)
  console.log(result.join('\n'))
  console.log(`</text>`)
  console.log(`</svg>`)
})
