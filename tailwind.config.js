/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        nunito: ['"Nunito Sans"', 'sans-serif'],  // Texto base
        f37: ['"F37 Ginger"', 'sans-serif'],      // Titulares
       
      },
    },
  },
  plugins: [],
};
