import { css } from 'styled-components'

const sizes = {
  xl: 1700,
  lg: 1300,
  md: 900,
  sm: 600,
  xs: 350,
}

// Iterate through the sizes and create a media template
const media = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (max-width: ${sizes[label] / 16}em) {
      ${css(...args)};
    }
  `

  return acc
}, {})

export default media
