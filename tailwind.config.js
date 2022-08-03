module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        danger: "#f36",
        sucess: "#4CAF50",
        disable: "#EAEBEC",
        background: {
          lightGray: "#F3F4F6",
          midGray: "#6b7280",
          buttonGray: "#E5E7EB",
        },
        border: {
          DEFAULT: "#eaeaea",
          dark: "#ACACAC",
          light: "#ECECEC",
          extraLight: "#E8E9EB",
        },
        text: {
          DEFAULT: "#333333",
          primary: "#1A1A1A",
          tertiary: "#575757",
          paragraph: "#4D5461",
        },
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        cursive: ["Pacifico", "cursive", "sans-serif"],
      },
    },
  },
  plugins: [],
};
