/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./stagewise.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#165DFF",
        secondary: "#FF7D00",
        neutral: {
          100: "#F5F7FA",
          200: "#E4E6EB",
          300: "#C9CDD4",
          400: "#86909C",
          500: "#4E5969",
          600: "#272E3B",
          700: "#1D2129",
        },
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
} 