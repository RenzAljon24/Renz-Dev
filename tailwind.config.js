/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ["./dist/**/*.{html,js}"],
  theme: {
    screens: {
      xsm: '350px',
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
      fonts: {
        fonts: 'Poppins',
      }
    },
    extend: {},
  },
  plugins: [
    require('autoprefixer'),
  ],
};
