import {Assigns, m} from '@/style/Style'

export class SecureSvgAttrs {
  public static of(svgAttrs: Assigns): SecureSvgAttrs {
    Object.keys(svgAttrs).forEach((k) => {
      const v = svgAttrs[k]
      // check attribute for security reason
      if (!isValid(k, v)) {
        throw new Error(`Sorry, the attribute is not used for security reason: ${k} => ${v}`)
      }
    })
    return new SecureSvgAttrs(svgAttrs)
  }

  private constructor(
    readonly svgAttrs: { [key: string]: any },
  ) {
  }
}

export function validateAppearance(appearance: Assigns) {
  const {
    visibility,
    shape,
    icon,
  } = appearance
  m(validatedVisibility, visibility)
  m(validatedShape, shape)
  m(validateIcon, icon)
}

export function validatedVisibility(visibility: string): string {
  if (visibility !== 'visible' && visibility !== 'hidden') {
    throw new Error(`Sorry, the attribute is not used for security reason: visibility => ${visibility}`)
  }
  return visibility
}

export function validatedShape(shape: string): string {
  switch (shape) {
    case 'arrow':
      return shape
    case 'edge':
      return shape
    case 'box':
      return shape
    case 'cylinder':
      return shape
    case 'person':
      return shape
    case 'pipe':
      return shape
    default:
      throw new Error(`Sorry, the attribute is not used for security reason: shape => ${shape}`)
  }
}

export function validateIcon(icon: string): string {
  if (/^[0-9a-zA-Z\-\/]*$/.test(icon)) {
    return icon
  } else {
    throw new Error(`Sorry, the attribute is not used for security reason: shape => ${icon}`)
  }
}

function isColor(text: string) {
  const color3 = /^#[0-9a-fA-F]{3}$/
  const color6 = /^#[0-9a-fA-F]{6}$/
  return color3.test(text) || color6.test(text)
}

const availableSvgAttributes = new Set([
  'cx',
  'cy',
  'd',
  'dx',
  'dy',
  'fill',
  'font-family',
  'font-size',
  'font-stretch',
  'font-style',
  'font-variant',
  'font-weight',
  'fx',
  'fy',
  'height',
  'lengthAdjust',
  'markerHeight',
  'markerUnits',
  'markerWidth',
  'method',
  'orient',
  'overline-position',
  'overline-thickness',
  'pathLength',
  'rx',
  'ry',
  'slope',
  'spreadMethod',
  'textLength',
  'underline-position',
  'underline-thickness',
  'viewBox',
  'width',
  'x',
  'y',
  'alignment-baseline',
  'baseline-shift',
  'color',
  'display',
  'dominant-baseline',
  'enable-background',
  'fill-opacity',
  'fill-rule',
  'flood-color',
  'flood-opacity',
  'font-size-adjust',
  'kerning',
  'letter-spacing',
  'lighting-color',
  'opacity',
  'overflow',
  'pointer-events',
  'shape-rendering',
  'stop-color',
  'stop-opacity',
  'stroke-dasharray',
  'stroke-dashoffset',
  'stroke-linecap',
  'stroke-linejoin',
  'stroke-miterlimit',
  'stroke-opacity',
  'stroke-width',
  'stroke',
  'text-anchor',
  'text-decoration',
  'visibility',
  'word-spacing',
  'writing-mode',
])

function isValid(attrName: string, attrValue: string) {
  function checkName(name: string) {
    return availableSvgAttributes.has(attrName)
  }

  function checkValue(v: string) {
    return /^[0-9a-zA-Z\s\-_.,%]*$/.test(v) || isColor(v) || !isNaN(Number(v))
  }

  return checkName(attrName) && checkValue(attrValue)
}
