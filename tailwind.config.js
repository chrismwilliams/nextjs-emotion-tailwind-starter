const { fontFamily } = require("tailwindcss/defaultTheme");

module.exports = {
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ["Aleo", ...fontFamily.sans],
      },
      textColor: {
        primary: "var(--text-primary)",
      },
      backgroundColor: {
        primary: "var(--bg-primary)",
      },
    },
  },
  variants: {},
  plugins: [],
};
