/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        headerGreen: "rgb(24 207 97)",
        secondGreen: "#dcfce7",
        threeGreen: "#27bc5b",
        fourGreen: "#58b97a",
        disabledButton: "#bcb2b2",
      },
    },
  },
  plugins: [],
}
