/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // ለGravelGo ብራንድ የሚሆኑ ልዩ ቀለማት ማበልጸጊያ
        brand: {
          light: '#fef3c7', // amber-100
          DEFAULT: '#f59e0b', // amber-500
          dark: '#b45309', // amber-700
        }
      }
    },
  },
  plugins: [],
}