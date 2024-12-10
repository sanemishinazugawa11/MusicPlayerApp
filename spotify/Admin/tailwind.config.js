/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // Add your custom font family
        'noto-serif-devanagari': ['"Noto Serif Devanagari"', 'serif'] ,
        'Kanit': ['"Kanit"', 'serif'] ,
        'Josefin-Sans': ['"Josefin Sans"', 'serif'] ,      
    },
  },
  plugins: [],
}
}

