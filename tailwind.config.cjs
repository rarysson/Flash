/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Montserrat", "sans-serif"]
    },
    extend: {
      colors: {
        "brand-green": "#14F195",
        "brand-purple": "#9945FF"
      },
      animation: {
        "scroll-top": "scroll-top 8s ease-in-out infinite"
      }
    }
  },
  plugins: [],
  separator: "_"
};
