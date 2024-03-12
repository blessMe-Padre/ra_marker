/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './*.html',
  ],
  theme: {
    screens: {
      'sm': '768px',
      'md': '1024px',
      'lg': '1280px',
      'xl': '1440px',
    },

    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#ffffff',

      'black': '#292e35',
      'gray': '#abb2be',
      'green': '#1a9640',
      'light-green': 'rgba(26, 150, 64)',
      'light-gray': '#f5f6f8',
      'red': '#e11212',
      'yellow': '#ffdb5a',
      'dark-gray': '#adb3c2',


      // ---------------------------------
      'main-black': '#262626',
      'default-black': '#000000',
      'light-black': '#5E5D5C',
      'light-gray': '#F3F3F7',
      'light-blue': '#93AAD6',
      'blue': '#81B8F9',
      'green': '#D1D618',
    },

    container: {
      padding: '20px',
      center: true
    },
    extend: {
      fontFamily: {
        'bodyFont': ['archangelsk', 'regular'],
      }
    }
  },
  plugins: [],
}

