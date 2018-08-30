import theme from 'mdx-deck/themes'

const bodyText = {
  fontSize: '24px',
  lineHeight: '32px'
}

export default {
  // extends the default theme
  ...theme,

  transitionTimingFunction: 'cubic-bezier(.3,1,0,1)',
  transitionDuration: '0s',

  css: {
    'li p': {
      margin: '0'
    },
    'ul': {
      paddingLeft: '1em'
    },
    'th': {
      borderColor: 'rgba(255,255,255,0.1)'
    },
    'td': {
      borderColor: 'rgba(255,255,255,0.1)',
      fontSize: bodyText.fontSize,
      lineHeight: bodyText.lineHeight,
      paddingRight: '24px'
    }
  },

  // add a custom font
  font: 'GT America, sans-serif',
  
  // custom colors
  colors: {
    text: '#898989',
    background: '#222',
    link: '#0ff'
  },
  // fontSizes: [14, 26, 18, 24, 32],
  
  h1: {
    color: '#fff',
    fontSize: '48px',
    lineHeight: '56px',
    textAlign: 'left'
  },
  
  h2: {
    color: '#ccc',
    textAlign: 'left'
  },
  
  li: bodyText,
  ui: bodyText,
  p: bodyText,
}
