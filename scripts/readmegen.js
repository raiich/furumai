const fs = require('fs')

process.stdin.setEncoding('utf8')
const reader = require('readline').createInterface({
  input: process.stdin,
})

let result = []

reader.on('line', (line) => {
  if (!line.startsWith('<!-- furumai:generated -->')) {
    result.push(line)
  }

  if (line.startsWith('<!-- furumai:view ')) {
    const args = line.split(' ')
    const filename = args[2]
    const content = fs.readFileSync(filename).toString()
    result.push('<!-- furumai:generated --> <pre>')
    content.split('\n').forEach((value) => {
      result.push(`<!-- furumai:generated --> ${value}`)
    })
    result.push('<!-- furumai:generated --> </pre>')
    result.push(`<!-- furumai:generated --> <img src="${urlOf()}" alt="furumai generated image of ${filename}"/>`)


  }

  if (line.startsWith('<!-- furumai:desc ')) {
    const args = line.split(' ')
    const filename = args[2]
    const content = fs.readFileSync(filename).toString()
    result.push(`'<!-- furumai:generated --> <a href="${encodeURI(content)}">Edit</a>`)
    result.push('<!-- furumai:generated --> <pre>')
    content.split('\n').forEach((value) => {
      result.push(`<!-- furumai:generated --> ${value}`)
    })
    result.push('<!-- furumai:generated --> </pre>')
  }
})

reader.on('close', () => {
  console.log(result.join('\n'))
})
