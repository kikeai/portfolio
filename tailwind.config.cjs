/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        light: '#f4f4f4',
        dark: '#0d0d03',
        brand: '#de263d',
        whatsapp: '#2cb742',
        linkedin: '#007ebb'
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif']
      },
      animation: {
        slider: 'scroll 30s linear infinite',
        sliderxl: 'scrollxl 30s linear infinite',
        spinIcon: 'spin 3s linear infinite'
      },
      keyframes: {
        scroll: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-1470px)' }
        },
        scrollxl: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-2020px)' }
        },
        spin: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' }
        }
      }
    }
  },
  plugins: []
}
