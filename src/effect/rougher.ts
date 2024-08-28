import {RoughSVG} from 'roughjs/bin/svg'

export class Rougher {
    private readonly svg: SVGSVGElement
    private readonly rc: RoughSVG

    constructor(
        readonly d: Document,
    ) {
        this.svg = this.d.createElementNS('http://www.w3.org/2000/svg', 'svg')
        this.rc = new RoughSVG(this.svg)
    }

    convertSvg(root: SVGSVGElement): SVGSVGElement {
        const svg = this.svg
        svg.setAttribute('xmlns', 'http://www.w3.org/2000/svg')
        svg.setAttribute('xmlns:svgns', 'http://www.w3.org/2000/svg')

        const width = root.getAttribute('width') || 0
        const height = root.getAttribute('height') || 0
        svg.setAttribute('width', `${width}`)
        svg.setAttribute('height', `${height}`)
        svg.setAttribute('viewBox', `0 0 ${Number(width) * 2} ${Number(height) * 2}`)

        const cs = root.children
        for (let i = 0; i < cs.length; i++) {
            const c = cs.item(i)
            if (c) {
                if (c.tagName === 'svgns:style') {
                    svg.append(c)
                } else {
                    svg.append(this.convert(c, this.convertIfPossible))
                }
            } else {
                throw new Error('null')
            }
        }
        return svg
    }

    convert(elem: Element, func: (elem: Element) => Element): Element {
        const d = this.d
        const tag = elem.tagName
        switch (tag) {
            case 'g':
                const g = setAttributes(
                    d.createElementNS('http://www.w3.org/2000/svg', 'g'),
                    dict(elem),
                )
                const gcs = elem.children
                for (let i = 0; i < gcs.length; i++) {
                    const c = gcs.item(i)
                    if (c) {
                        g.append(this.convert(c, func))
                    } else {
                        throw new Error('null')
                    }
                }
                return g
            case 'text':
                const t = setAttributes(
                    d.createElementNS('http://www.w3.org/2000/svg', 'text'),
                    dict(elem),
                )
                const tcs = elem.children
                for (let i = 0; i < tcs.length; i++) {
                    const ts = tcs.item(i)
                    if (ts) {
                        t.append(this.convert(ts, func))
                    } else {
                        throw new Error('null')
                    }
                }
                return t
            case 'tspan':
                const tspan = setAttributes(
                    d.createElementNS('http://www.w3.org/2000/svg', 'tspan'),
                    dict(elem),
                )
                tspan.textContent = elem.textContent
                return tspan
            case 'svg':
                const svg = this.copy(elem)
                const cs = elem.children
                for (let i = 0; i < cs.length; i++) {
                    const c = cs.item(i)
                    if (c) {
                        svg.append(this.convert(c, this.copy))
                    } else {
                        throw new Error('null')
                    }
                }
                return svg
            default:
                return func(elem)
        }
    }

    convertIfPossible(elem: Element): Element {
        if (elem.classList.contains('no_rough')) {
            return this.copy(elem)
        }
        const wrap = setAttributes(
            this.d.createElementNS('http://www.w3.org/2000/svg', 'g'),
            dict(elem),
        )
        wrap.appendChild(this.convertElem(elem))
        return wrap
    }

    copy(elem: Element): Element {
        return setAttributes(
            this.d.createElementNS('http://www.w3.org/2000/svg', elem.tagName),
            dict(elem),
        )
    }

    convertElem(elem: Element): Element {
        const rc = this.rc
        const tag = elem.tagName
        const attrs = dict(elem)
        const options: { [key: string]: any } = {
            hachureGap: 2.0,
            fillWeight: 0.6,
            roughness: 2.0,
            ...attrs,
        }
        switch (tag) {
            case 'path':
                return rc.path(attrs.d, attrs)
            case 'line':
                return rc.line(
                    parseFloat(attrs.x1),
                    parseFloat(attrs.y1),
                    parseFloat(attrs.x1),
                    parseFloat(attrs.y2),
                    options,
                )
            case 'rect':
                return rc.rectangle(
                    parseFloat(attrs.x),
                    parseFloat(attrs.y),
                    parseFloat(attrs.width),
                    parseFloat(attrs.height),
                    options,
                )
            case 'ellipse':
                return rc.ellipse(
                    parseFloat(attrs.cx),
                    parseFloat(attrs.cy),
                    parseFloat(attrs.rx),
                    parseFloat(attrs.ry),
                    options,
                )
            case 'circle':
                return rc.circle(
                    parseFloat(attrs.cx),
                    parseFloat(attrs.cy),
                    parseFloat(attrs.r),
                    options,
                )
            case 'polygon':
                throw new Error('not implemented')
            default:
                throw new Error('not implemented: ' + tag)
        }
    }

}


function dict(elem: Element): { [key: string]: string } {
    const ret: { [key: string]: string } = {}
    const aa = elem.attributes
    for (let i = 0; i < aa.length; i++) {
        const a = aa.item(i)
        if (a) {
            const name = a.name.replace(/[-_](.)/g, (match, group1) => {
                return group1.toUpperCase()
            })
            ret[name] = a.value
            ret[a.name] = a.value
        } else {
            throw new Error('null')
        }
    }
    return ret
}

function setAttributes(elem: Element, attributes: { [key: string]: string }): Element {
    Object.keys(attributes).forEach((k) => elem.setAttribute(k, attributes[k]))
    return elem
}

