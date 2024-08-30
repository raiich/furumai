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

    if (describe) {
      result.push(``)
      result.push('```')
      content.split('\n').forEach((value) => {
        result.push(`${value}`)
      })
      result.push('```')
      result.push(``)
    }

    const dirname = path.dirname(filePath)
    const filename = path.basename(filePath)

    let generatedFiles = fs.readdirSync(dirname)
      .filter((generated) => generated.includes(filename + '.generated.'))
    if (generatedFiles.length > 1) {
      generatedFiles = generatedFiles.slice(1, generatedFiles.length)
    }
    const tags = generatedFiles.map((generated) => {
      const url = dirname + '/' + generated
      return `<img src="${url}" alt="furumai generated image from ${filePath}"/>`
    })
    result.push(tags.join('\n\n---\n\n'))
  } else {
    result.push(line)
  }
})

reader.on('close', () => {
  console.log(result.join('\n'))
})
