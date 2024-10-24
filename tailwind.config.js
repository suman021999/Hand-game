/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'primary': 'radial-gradient(at top, #1f3756, #141539)',
        'link': 'url("/public/bg-triangle.svg")',
      },
    },
  },
  plugins: [],
}

