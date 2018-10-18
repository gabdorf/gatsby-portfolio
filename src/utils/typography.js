import Typography from 'typography'

const lightGray = '#454545'
const darkGray = '#333'

const typography = new Typography({
  bodyWeight: 300,
  baseFontSize: '21px',
  scaleRatio: 3.6,
  blockMarginBottom: 0.6,
  baseLineHeight: 1.666,
  headerGray: 80,
  bodyGray: 80,
  headerFontFamily: ['bebasneue', 'Helvetica', 'sans-serif'],
  bodyFontFamily: ['charter', 'Georgia', 'serif'],
  overrideStyles: ({ adjustFontSizeTo, rhythm }, options, styles) => ({
    h1: {
      color: darkGray,
      lineHeight: '1.2em',
    },
    h2: {
      color: darkGray,
      fontWeight: 700,
      fontSize: '3em',
      lineHeight: '1.3em',
    },
    h3: {
      fontSize: '1.4em',
      lineHeight: '1.2em',
      color: darkGray,
      fontWeight: 700,
      letterSpacing: '0.7px',
    },
    body: {
      color: lightGray,
    },
    strong: {
      color: darkGray,
    },
  }),
})

export default typography
