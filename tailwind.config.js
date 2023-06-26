/** @type {import('tailwindcss').Config} */
export default {
  content: [
     "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      signature: ['Great Vibes'],
      ArialBlack:['ariblk'],
    },

    transparent: {
        colorTrans: '33%'
    },


    colors: {
      green: {
        800: '#166534',
        900: '#14532d'
      },

      cyan: {
        50: '#ecfeff',
        200: '#a5f3fc',
        400: '#22d3ee',
        500: '#06b6d4',
        700: '#0e7490',
        900: '#164e63',
        950: '#083344'

      },
      white: '#ffffff',
      gray: {
        100: '#f3f4f6',
        200: '#e5e7eb',
        300: '#d1d5db',
        400: '#9ca3af',
        500: '#6b7280',
        600: '#4b5563'
      },
      black: '#000000',
      red: '#FF0000'
    }
    
  },
  plugins: [],
}

