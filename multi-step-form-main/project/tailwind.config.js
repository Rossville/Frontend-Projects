/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors : {
        verlightblue : 'backgroundColor: rgb(213, 221, 240)'
      }
    },
  },
  plugins: [],
}

