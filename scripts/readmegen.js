const fs = require('fs')
const path = require('path')
const LZString = require("lz-string");

process.stdin.setEncoding('utf8')
const reader = require('readline').createInterface({
  input: process.stdin,
})

let result = []

reader.on('line', (line) => {
  const generate = line.startsWith('<!-- furumai:generate ')
  const describe = line.startsWith('<!-- furumai:describe ')

  if (generate || describe) {
    const args = line.split(' ')
    const filename = args[2]
    const content = fs.readFileSync(filename).toString()

    if (describe) {
      result.push('<!-- furumai:generated --> <pre>')
      content.split('\n').forEach((value) => {
        result.push(`<!-- furumai:generated --> ${value}`)
      })
      result.push('<!-- furumai:generated --> </pre>')
    }

    const dirname = path.dirname(filename)
    fs.readdirSync(dirname)
      .filter((generated) => generated.startsWith(filename))
      .forEach((generated) => {
        const url = dirname + '/' + generated
        result.push(`<!-- furumai:generated --> <img src="${url}" alt="furumai generated image from ${filename}"/>`)
      })
    const encoded = LZString.compressToEncodedURIComponent(content)
    const editUrl = `https://raiich.github.io/furumai/#/${version}/${encoded}`
    result.push(`<!-- furumai:generated --> <p align="right"><a href="${editUrl}">Edit</a></p>`)
  }
})

reader.on('close', () => {
  console.log(result.join('\n'))
})
