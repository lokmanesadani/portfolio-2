/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        backgound: "#011122",
        icon: "#FFAE00",
      },
      fontFamily: {
        monterast: ["Monterast"],
        monterastBold: ["Monterast Bold"],
        monterastBlack: ["Monterast Black"],
        monterastSemiBold: ["Monterast SemiBold"],
        cairoBold: ["Cairo Bold"],
      },
    },
  },
  plugins: [],
};
