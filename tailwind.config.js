module.exports = {
  purge: [
    "./public/**/*.html",
    "./src/**/*.vue",
  ],
  theme: {
    extend: {
      colors: {
        "soft-black": "#121212",
      },
      boxShadow: {
        "outline-light": "0 0 0 3px #4299e1",
      },
    },
  },
  variants: {
    backgroundColor: ["hover", "responsive"],
    borderColor: ["hover", "responsive"],
    cursor: ["responsive", "disabled"],
    opacity: ["responsive", "hover", "focus", "disabled"],
    padding: ["responsive", "disabled"],
  },
  plugins: [],
};
