module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {
      textColor: ['active'],
      animation: ['group-hover'],
      padding: ['last'],


    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}
