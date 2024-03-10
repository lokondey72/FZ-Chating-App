/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#222222",
        secandari: "#7A7A7A",
        brand: "#32375C",
        navegrey: "#244255"
      },
    },
    container: {
      center: true,
    },
    fontFamily: {
      nunitoFont: ['Nunito', 'sans-serif'],
  },
},
  plugins: [],
};
