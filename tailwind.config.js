/** @type {import('tailwindcss').Config} */

const plugin = require('tailwindcss/plugin')

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'app-bg': "url('/younotdown.webp')",
      },
    },
    fontSize: {
      sm: '0.8rem',
      base: '1rem',
      xl: '1.25rem',
      '2xl': '1.563rem',
      '3xl': '1.953rem',
      '4xl': '2.441rem',
      '5xl': '3.052rem',
    },
    colors: {
      primary: {
        0: '#D8EAEC',
        10: '#B4D5D8',
        20: '#327077',
        30: '#94C0C5',
        40: '#77ACB1',
        50: '#5C989E',
        60: '#46848B',
        70: '#225D64',
        80: '#144B51',
        90: '#0a373c',
      },
      eggwhite: {
        0: '#FDFFF5',
        10: '#E6E1D8',
        20: '#CCC8C0',
        30: '#B3AFA8',
        40: '#999690',
        50: '#807D78',
        60: '#666460',
        70: '#4D4B48',
        80: '#333230',
        90: '#1A1918',
      },
    },
  },
}
