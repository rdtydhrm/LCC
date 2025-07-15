/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        greentea: "#1E3C3E",
        abu: "#E7E7E6",
        putihBagus: "#FAFAFA",
        opacityHijau60:"#789193",
        greenTeaFont: "#214B4E",
      }
    },
  },
  plugins: [],
}