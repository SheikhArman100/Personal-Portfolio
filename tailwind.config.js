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
        greenColor:"hsl(72.5,72.6%,71.4%)",
        whiteColor:"hsl(264,20%,95.1%)",
        blueColor:"hsl(210,26.8%,78%)"
      }
    },
  },
  plugins: [],
};
