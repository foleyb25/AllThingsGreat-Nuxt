/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
    "./error.vue"
  ],
  theme: {
    extend: {
      fontFamily: {
        'vcr': ['vcr', 'sans-serif'],
      },
      height: {
        'screen/60': 'calc(100vh - 230px)',
       }
    },
    
  },
  plugins: [
    require("@tailwindcss/line-clamp")
  ],
}
