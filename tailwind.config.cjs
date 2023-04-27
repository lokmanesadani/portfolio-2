/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        backgound: "#011122",
        icon: "#FFC800",
        text: "#D32638",
      },
      fontFamily: {
        monterast: ["Monterast"],
        monterastBold: ["Monterast Bold"],
        monterastExtraBold: ["Monterast ExtraBold"],
        monterastBlack: ["Monterast Black"],
        monterastSemiBold: ["Monterast SemiBold"],
        cairoBold: ["Cairo Bold"],
      },
    },
  },
  plugins: [],
};
