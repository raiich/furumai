process.stdin.setEncoding('utf8')
const reader = require('readline').createInterface({
  input: process.stdin,
})

reader.on('line', (line) => {
  const prefix = '<!-- editor: '
  line.startsWith(prefix)
  const filename = line.substring(prefix.length, line.length - 4)


  const ts = line.trimStart()
  console.log(`<tspan y="${y}em" x="${x}em">${ts}</tspan>`)
})

reader.on('close', () => {
  console.log(`</text>`)
  console.log(`</svg>`)
})
