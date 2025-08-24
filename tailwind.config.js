/** @type {import('tailwindcss').Config} */
import daisyui from 'daisyui'
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
      },
      colors: {
        primary: '#C2E6FF', // Light Blue
        secondary: '#111927', // Blue Gray
        accent: '#500F1C', // Red
        background: '#0D1520', // Blue
        decoration: '#C2E6FF', // Light Gray
        base_border: '#205D9E', // Dark Gray
      },
    },
  },

  plugins: [daisyui],
  daisyui: {
    themes: ['light', 'dark'],
  },
}
