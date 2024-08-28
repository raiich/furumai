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
    const filePath = args[2]
    const content = fs.readFileSync(filePath).toString().trim()

    const encoded = LZString.compressToEncodedURIComponent(content)
    const editUrl = `https://raiich.github.io/furumai/#/v1/${encoded}`
    result.push(`<p align="right"><a href="${editUrl}">Edit</a></p>`)
    result.push(``)

    if (describe) {
      result.push('```')
      content.split('\n').forEach((value) => {
        result.push(`${value}`)
      })
      result.push('```')
    }

    const dirname = path.dirname(filePath)
    const filename = path.basename(filePath)
    console.log('dirname:', dirname)

    fs.readdirSync(dirname)
      .filter((generated) => generated.includes(filename + '.generated.'))
      .forEach((generated) => {
        const url = dirname + '/' + generated
        result.push(`<img src="${url}" alt="furumai generated image from ${filePath}"/>`)
      })
  } else {
    result.push(line)
  }
})

reader.on('close', () => {
  console.log(result.join('\n'))
})
