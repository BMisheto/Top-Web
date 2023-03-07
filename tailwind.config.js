/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Jost", "sans-serif"],
      },
      screens: {
        "3xl": "1600px",
        xs: "375px",
      },
      minHeight: {
        0: "0",

        "1/4": "25%",

        "1/2": "50%",

        "3/4": "75%",

        full: "100%",
      },
      maxWidth: {
        0: "0",

        "1/4": "25%",

        "1/2": "50%",

        "3/4": "75%",

        full: "100%",
      },
      backgroundImage: {
        // "hero-cover": "url('/public/iphone4.jpg')",
      },
    },
  },
  plugins: [],
}
