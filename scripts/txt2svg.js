process.stdin.setEncoding('utf8')
const reader = require('readline').createInterface({
  input: process.stdin,
})

console.log(`<svg
 xmlns="http://www.w3.org/2000/svg"
 viewBox="0 0 640 320"
 width="640" height="320"
>`)
console.log(`<text
font-size="12pt"
>`)

const offsetX = 0.5
let lineNum = 0;
reader.on('line', (line) => {
  lineNum++
  const ts = line.trimStart()
  const x =  (line.length - ts.length) * 0.5 + offsetX
  const y = lineNum * 1.3
  console.log(`<tspan y="${y}em" x="${x}em">${ts}</tspan>`)
})

reader.on('close', () => {
  console.log(`</text>`)
  console.log(`</svg>`)
})
