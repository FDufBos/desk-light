module.exports = {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        '10xl':'10rem',
        '11xl':'12rem'
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography')
  ],
}