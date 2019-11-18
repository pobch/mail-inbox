import { css } from 'styled-components'

export const MEDIA = {
  DESKTOP: (literals: TemplateStringsArray, ...args: any[]) => {
    return css`
      @media screen and (min-width: 576px) {
        ${css(literals, ...args)}
      }
    `
  }
}
