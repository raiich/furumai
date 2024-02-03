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

function getEditor(): HTMLTextAreaElement {
  return document.getElementById('editor') as HTMLTextAreaElement
}


function refreshPage() {
  const hash = document.location.hash

  const at = hash.indexOf('/', 2)
  console.log('hash', hash, 'at', at)
  if (at < 0) {
    console.log('redirecting', at)
    redirect('v1', 'a;')
    return
  }
  const version = hash.substring(2, at)
  const encoded = hash.substring(at + 1)
  if (encoded.length === 0) {
    console.log('redirecting', at, version)
    redirect(version, 'a;')
  }
  getEditor().value = decode(version, encoded)

  const snapshots = makeSnapshots(getEditor().value)
  const elems = snapshots.map((snapshot) => {
    return toSVGElement(snapshot, document)
  })
  const cards = document.getElementById('cards')!
  elems.forEach((elem) => {
    cards.appendChild(elem)
  })

  document.getElementById('editor')!.addEventListener("keydown", (e) => {
    console.log('keydown')
    if ((e.key === 'Enter' || e.code === 'Enter' || e.keyCode === 10 || e.keyCode === 13) && (e.ctrlKey || e.metaKey)) {
      redirect(version, getEditor().value)
    }
  });

  const drawButton = document.getElementById('draw-button')!
  drawButton.addEventListener('click', (e) => {
    redirect(version, getEditor().value)
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

function redirect(version: string, code: string) {
  const hash = `#/${version}/${encode(version, code)}`
  console.log(version, code, hash)
  window.addEventListener("hashchange", () => {
    console.log('hash changed')
    refreshPage()
  })
  history.pushState(null, '',  hash)
}

if (typeof document !== 'undefined') {
  refreshPage()
  window.addEventListener("hashchange", () => {
    console.log('hash changed')
    refreshPage()
  })
}
