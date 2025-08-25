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
        primary: '#C2E6FF',
        secondary: '#1D232A',
        accent: '#500F1C',
        background: '#1D232A',
        decoration: '#C2E6FF',
      },
    },
  },

  plugins: [daisyui],
  daisyui: {
    themes: ['light', 'dark'],
  },
}
