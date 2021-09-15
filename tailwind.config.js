const { fontFamily } = require("tailwindcss/defaultTheme");

module.exports = {
  theme: {
    extend: {
      fontFamily: {
        sans: ["Aleo", ...fontFamily.sans],
      },
    },
  },
  variants: {},
  plugins: [],
};
