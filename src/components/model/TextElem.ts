import {Length, Point} from '@/layout/types'
import {SecureSvgAttrs} from '@/components/model/security'

export class TextElem {
  constructor(
    readonly content: string,
    private centered: boolean,
    public base: Point,
    readonly svgAttrs: SecureSvgAttrs,
  ) {
  }

  public centering(centering: boolean) {
    this.centered = centering
  }

  get lines(): Array<{ text: string, dy: string }> {
    const txt = this.content
    if (txt) {
      if (this.centered) {
        const [head, ...tail] = txt.split('\\n')
        const first = {text: head, dy: `${0.35 - tail.length * 0.5}em`}
        const rest = tail.map((s) => {
          return {text: s, dy: '1em'}
        })
        return [first, ...rest]
      } else {
        const dy = this.svgAttrs.svgAttrs.dy ? this.svgAttrs.svgAttrs.dy.toString() : Length.zero.toString()
        const [head, ...tail] = txt.split('\\n')
        const first = {text: head, dy}
        const rest = tail.map((s) => {
          return {text: s, dy: '1em'}
        })
        return [first, ...rest]
      }
    } else {
      return []
    }
  }

}
