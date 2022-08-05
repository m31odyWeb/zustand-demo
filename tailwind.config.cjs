/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      boxShadow: {
        right: '3px 0px 60px -15px rgba(0, 0, 0, 0.3)',
      },
    },
  },
  plugins: [],
};
