/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        backgound: "#011122",
        lightBackgound: "#122131",
        icon: "#FFC800",
        text: "#D32638",
      },
      fontFamily: {
        mukta: ["Mukta"],
        monterast: ["Monterast"],
        cairoBold: ["Cairo Bold"],
      },
    },
  },
  plugins: [],
};
