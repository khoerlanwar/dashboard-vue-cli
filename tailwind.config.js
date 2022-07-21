/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,vue}",
  ],
  theme: {
    extend: {
      fontSize: {
        'badges': '.50rem',
      },
      colors: {
        'primary': '#fb923c'
      },
      margin: {
        '16': '4rem',
        '17': '4.3rem'
      }
    },
  },
  plugins: [
    // require('@tailwindcss/forms'),
  ],
}
