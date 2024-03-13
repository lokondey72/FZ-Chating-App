/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'profile-img': "url('/profile-bg-img.jpg')",
      },
      boxShadow: {
        '3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
        "50xl-r": '25px 0px 20px -20px rgba(0,0,0,0.45)',
        "50xl" : '32px 0px 15px -18px rgba(0,0,0,0.45) inset'
      },
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
      interFont: ['Inter', 'sans-serif'],
  },
},
  plugins: [],
};
