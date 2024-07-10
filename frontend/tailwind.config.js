/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        blog: {
          400: "#f2f0f5",
          500: "#0866ff",
          600: "#1877f2",
          700: "#dadde1",
          800: "#42b72a",
          900: "#00A400",
          1000: "#ffffffcc",
          1100: "#f5f6f7",
          1200: "#606770"
        }
      },
      width: {
        '88': '364px',
      }
    },
  },
  plugins: [],
}