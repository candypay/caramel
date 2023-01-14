/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: "#10100E",
        },
      },
      fontFamily: {
        body: ["Satoshi", "sans-serif"],
        secondary: ["Bespoke Serif", "serif"],
        mono: ["PT Mono", "monospace"],
      },
    },
  },
  plugins: [],
};
