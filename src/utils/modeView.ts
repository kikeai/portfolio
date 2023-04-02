import { type Colors, type Prop } from '../types/types'

export const modeParser = (mode: boolean, reverse: boolean, prop: Prop, color?: Colors) => {
  if (color !== undefined) {
    return mode ? `${prop}-light` : `${prop}-${color}`
  } else {
    if (reverse) {
      return mode ? `${prop}-dark` : `${prop}-light`
    }
    return mode ? `${prop}-light` : `${prop}-dark`
  }
}

export const idiomParser = (idiom: 'ES' | 'EN', textES: string, textEN: string) => {
  if (idiom === 'ES') {
    return textES
  }
  return textEN
}
