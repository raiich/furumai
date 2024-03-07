import {makeSnapshots} from "../furumai/main";
import {toSVGElement} from "../svg";
import LZString from 'lz-string'
import "chota/dist/chota.min.css";
console.log('hello world');

function decode(version:string, encoded: string): string {
  switch (version) {
    case 'v1':
      console.log('decode v1', version, encoded, LZString.decompressFromEncodedURIComponent(encoded))
      return LZString.decompressFromEncodedURIComponent(encoded)
    case 'v1.raw':
      console.log('decode v1.raw', version, encoded, decodeURI(encoded))
      return decodeURI(encoded)
    default:
      throw new Error('not implemented: ' + version)
  }
}

function encode(version:string, decoded: string): string {
  switch (version) {
    case 'v1':
      return LZString.compressToEncodedURIComponent(decoded)
    case 'v1.raw':
      return encodeURI(decoded)
    default:
      throw new Error('not implemented: ' + version)
  }
}

function onload() {
  const {version, code} = parseHash(document.location.hash)
  const editor = document.getElementById('editor') as HTMLTextAreaElement
  editor.value = code

  const drawer = new Drawer(version)
  drawer.redirectAndDraw()

  document.getElementById('editor')!.addEventListener("keydown", (e) => {
    if ((e.key === 'Enter' || e.code === 'Enter' || e.keyCode === 10 || e.keyCode === 13) && (e.ctrlKey || e.metaKey)) {
      drawer.redirectAndDraw()
    }
  });

  const drawButton = document.getElementById('draw-button')!
  drawButton.addEventListener('click', (e) => {
    drawer.redirectAndDraw()
  })

  const downloadButton = document.getElementById('download-button')!
  downloadButton.addEventListener('click', (e) => {
    console.log('downloading')

    const cards = document.getElementsByClassName('svg-root')
    for (let i = 0; i < cards.length; i++) {
      const c = cards.item(i)!
      if (c) {
        const blob = '<?xml version="1.0" encoding="UTF-8"?>' + c.outerHTML
        const url = URL.createObjectURL(new Blob([blob], {type: 'image/svg+xml'}))
        const link = document.createElement('a')
        link.href = url
        link.download = `furumai-${i}.svg`
        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link)
      }
    }
  })
}

function parseHash(hash: string): {version: string, code: string} {
  const at = hash.indexOf('/', 2)
  console.log('hash', hash, 'at', at)
  if (at < 0) {
    return {
      version: 'v1',
      code: 'a;',
    }
  }
  const version = hash.substring(2, at)
  const encoded = hash.substring(at + 1)
  if (encoded.length === 0) {
    return {
      version,
      code: 'a;',
    }
  }
  return {
    version: version,
    code: decode(version, encoded),
  }
}

class Drawer {
  constructor(readonly version: string) {
  }

  redirectAndDraw() {
    const version = this.version
    const editor = document.getElementById('editor') as HTMLTextAreaElement
    const code = editor.value
    const hash = `#/${version}/${encode(version, code)}`
    console.log(version, code, hash)
    history.pushState(null, '',  hash)
    this.draw(code)
  }

  draw(decoded: string) {
    try {
      this.drawSvg(decoded)
    } catch (e) {
      console.log(e)
      const cards = document.getElementById('cards')!
      const pre = document.createElement('pre')
      pre.classList.add('text-error')
      pre.textContent = (e as any).stack || ''
      cards.appendChild(pre)
    }
  }

  drawSvg(decoded: string) {
    const cards = document.getElementById('cards')!
    while (cards.firstChild) {
      cards.removeChild(cards.firstChild)
    }

    const snapshots = makeSnapshots(decoded)
    const elems = snapshots.map((snapshot) => {
      return toSVGElement(snapshot, document)
    })
    elems.forEach((elem) => {
      // elem.classList.add('card')
      cards.appendChild(elem)
      cards.appendChild(document.createElement('hr'))
    })
  }
}

if (typeof document !== 'undefined') {
  onload()
}
