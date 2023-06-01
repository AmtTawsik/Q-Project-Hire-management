/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
    './node_modules/flowbite.{js,ts}',
  ],
  theme: {
    extend: {
      boxShadow:{
        'spread':'0 0 0 15px'
      }
    },
  },
  plugins: [require('flowbite/plugin')],
};
