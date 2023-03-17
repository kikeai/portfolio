/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        light: "#f4f4f4",
        dark: "#0d0d03",
        brand: "#de263d"
      },
      fontFamily: {
        'montserrat': ['Montserrat', 'sans-serif'],
      },
      animation: {
        'slider': 'scroll 30s linear infinite'
      },
      keyframes: {
        scroll: {
          '0%': {transform: 'translateX(0)'},
          '100%': {transform: 'translateX(-1470px)'}
        }
      }
    },
  },
  plugins: [],
}
