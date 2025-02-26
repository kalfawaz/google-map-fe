module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      fontFamily: {},
      backgroundImage: {},
      boxShadow: {},
      colors: {
        main: {
          50: "#eff5ff",
          100: "#dae8ff",
          200: "#bed7ff",
          300: "#91bfff",
          400: "#5e9cfc",
          500: "#3876f9",
          600: "#2257ee",
          700: "#1a42db",
          800: "#1c37b1",
        },
        secondary: {
          50: "#f1f9fe",
          100: "#e2f2fc",
          200: "#bee6f9",
          300: "#84d1f5",
          400: "#43bbed",
          500: "#1a9dd5",
          600: "#0e82bb",
          700: "#0c6898",
          800: "#0e587e",
        },
        transparent: "transparent",
        current: "currentColor",
      },
    },
  },
};
