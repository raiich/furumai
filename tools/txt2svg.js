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

reader.on('line', (line) => {
  console.log(`<tspan dy="1.3em" x="0em">${line}</tspan>`)
})

reader.on('close', () => {
  console.log(`</text>`)
  console.log(`</svg>`)
})
