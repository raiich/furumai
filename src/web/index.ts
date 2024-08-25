import {makeSnapshots} from '../furumai/main';
import {toSVGElement} from '../svg';
import LZString from 'lz-string'
import 'chota/dist/chota.min.css';
import dependencies from '../../resources/dependencies.json';

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
  const {code} = parseParams(document.location.hash)
  const results = document.getElementById('results')
  if (results) {
    const drawer = new Drawer('v1', results)
    drawer.draw(results, code)

    const editor = document.getElementById('editor')
    if (editor) {
      drawer.setupEditor(editor as HTMLTextAreaElement, code)
    }
  }

  const downloadButton = document.getElementById('download-button')
  if (downloadButton) {
    setupDownloadButton(downloadButton as HTMLButtonElement)
  }

  const table = document.getElementById('dependencies')
  if (table) {
    Object.entries(dependencies).forEach(([key, value]) => {
      const a1 = document.createElement('a')
      a1.textContent = key
      a1.href = value.repository

      const a2 = document.createElement('a')
      a2.textContent = value.licenses
      a2.href = 'public/' + value.licenseFile


      const tdName = document.createElement('td')
      const tdLicense = document.createElement('td')
      tdName.appendChild(a1)
      tdLicense.appendChild(a2)

      const tr = document.createElement('tr')
      tr.appendChild(tdName)
      tr.appendChild(tdLicense)
      table.appendChild(tr)
    })
  }
}

function parseParams(hash: string): Params {
  const at = hash.indexOf('/', 2)
  console.log('hash', hash, 'at', at)
  if (at < 0) {
    return {
      version: 'v1',
      code: '',
    }
  }
  const version = hash.substring(2, at)
  const encoded = hash.substring(at + 1)
  if (encoded.length === 0) {
    return {
      version,
      code: '',
    }
  }
  return {
    version: version,
    code: decode(version, encoded),
  }
}

class Drawer {
  constructor(
    readonly version: string,
    readonly results: HTMLElement,
  ) {
  }

  setupEditor(editor: HTMLTextAreaElement, code: string) {
    if (editor) {
      editor.value = code
      editor.addEventListener("keydown", (e) => {
        if ((e.key === 'Enter' || e.code === 'Enter' || e.keyCode === 10 || e.keyCode === 13) && (e.ctrlKey || e.metaKey)) {
          this.redirectAndDraw(editor.value)
        }
      });

      const drawButton = document.getElementById('draw-button') as (HTMLButtonElement | null)
      if (drawButton) {
        this.setupDrawButton(drawButton, editor)
      }
    }
  }

  setupDrawButton(drawButton: HTMLButtonElement, editor: HTMLTextAreaElement) {
    drawButton.addEventListener('click', (e) => {
      this.redirectAndDraw(editor.value)
    })
  }

  redirectAndDraw(code: string) {
    const version = this.version
    const hash = `#/${version}/${encode(version, code)}`
    console.log(version, code, hash)
    history.pushState(null, '',  hash)
    const results = this.results
    while (results.firstChild) {
      results.removeChild(results.firstChild)
    }
    this.draw(results, code)
  }

  draw(results: HTMLElement, decoded: string) {
    try {
      const snapshots = makeSnapshots(decoded)
      const elems = snapshots.map((snapshot) => {
        return toSVGElement(snapshot, document)
      })
      elems.forEach((elem) => {
        // elem.classList.add('card')
        results.appendChild(elem)
        results.appendChild(document.createElement('hr'))
      })
    } catch (e) {
      console.log(e)
      const pre = document.createElement('pre')
      pre.classList.add('text-error')
      pre.textContent = (e as any).stack || ''
      results.appendChild(pre)
    }
  }
}

function setupDownloadButton(downloadButton: HTMLButtonElement) {
  downloadButton.addEventListener('click', (e) => {
    console.log('downloading')

    const results = document.getElementsByClassName('svg-root')
    for (let i = 0; i < results.length; i++) {
      const c = results.item(i)!
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


interface Params {
  version: string
  code: string
}

if (typeof document !== 'undefined') {
  onload()
}
