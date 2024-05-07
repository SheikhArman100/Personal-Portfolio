/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./sections/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors:{
        blackColor:"hsl(232.9,70.8%,9.4%)",
        purpleColor:"hsl(255.4,55.6%,75.3%)",
        greenColor:"hsl(137,9%,15%)",
        whiteColor:"hsl(45,14%,89%)",
        blueColor:"hsl(210,26.8%,78%)",
        yellowColor:"hsl(44,51%,75%)"
      }
    },
  },
  plugins: [],
};
