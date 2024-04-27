/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'profile-img': "url('/profile-bg-img.jpg')",
      },
      boxShadow: {
        'Uxl': '0px 25px 20px -19px rgba(0,0,0,0.45)',
        "50xl-r": '25px 0px 20px -20px rgba(0,0,0,0.45)',
        "50xl" : '32px 0px 15px -18px rgba(0,0,0,0.45) inset',
        "all" : "0 26px 58px 0 rgba(0, 0, 0, .22), 0 5px 14px 0 rgba(0, 0, 0, .18)"
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
