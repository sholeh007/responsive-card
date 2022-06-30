/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      colors: {
        "dark-cyan": "hsl(158, 36%, 37%)",
        cream: "hsl(30, 38%, 92%)",
        "dark-blue": "hsl(212, 21%, 14%)",
        "dark-grayish-blue": "hsl(228, 12%, 48%)",
        white2: "hsl(0, 0%, 100%)",
      },
    },
    fontFamily: {
      montserrat: ["Montserrat", "sans-serif"],
      fraunces: ["Fraunces", "serif"],
    },
    screens: {
      sm: "375px",
      md: "640px",
      lg: "1024px",
      xl: "1440px",
    },
  },
  plugins: [],
};
