/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: "320px",
      // => @media (min-width: 320px) { ... }
      md: "768px",
      // => @media (min-width: 768px) { ... }
      ld: "992px",
      // => @media (min-width: 994px) { ... }
      lg: "1200px",
      // => @media (min-width: 1200px) { ... }
    },
    extend: {
      colors: {
        'primary': '#00002D',
        'secondary': '#FFA300',
        'text-1': '#8D939D',
      },
      boxShadow: {
        'card': '5px 5px 10px 0 rgba(255, 255, 255, 0.2)',
      }
      // colors: {
      //   'primary': '#131A35',
      //   'secondry': '#0EE6B7',
      // },
      // boxShadow: {
      //   'opsi-1': '2px 2px 10px 2px rgba(255,255,255,0.10);'
      // }
    },
  },
  plugins: [],
}

