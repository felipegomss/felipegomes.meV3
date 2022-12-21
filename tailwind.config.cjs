/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        "pattern-brands": "url('/public/brand-pattern.png')",
        "web": "url('/public/web.png')",
      },
      fontFamily:{
        "righteous":['"Righteous"'],
        "start":['"Press Start 2P"'],
      }
    },
  },
  plugins: [],
}