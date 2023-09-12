/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      textColor: {
        'instagram': '#E4405F',
        'twitter': '#1DA1F2',
        'facebook': '#1877F2'
      },
      colors: {
        dark: "#1E293B",
      },
    },
  },
  plugins: [],
}
