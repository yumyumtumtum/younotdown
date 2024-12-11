/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'app-bg': "url('/younotdown.webp')",
      },
      colors: {
        black: '#000000',
      },
    },
    plugins: [],
  },
}
