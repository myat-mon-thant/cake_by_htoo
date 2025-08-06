/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
     "./node_modules/flowbite/**/*.js"   // Important: Angular uses HTML + TS
  ],
  safelist: [
    'group-hover:block'
  ],
  theme: {
    extend: {},
  },
  plugins: [
    
  ],
}

