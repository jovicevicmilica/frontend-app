const { fontFamily } = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./pages/**/*.{js,jsx,ts,tsx}",
    "./sections/**/*.{js,jsx,ts,tsx}",
    "./widgets/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["var(--font-poppins)", ...fontFamily.sans], // ✅ Uses CSS variable
      },
      colors: {
        primary: "#496BEF",
        secondary: "#181818",
        darkOverlay: "rgba(0, 0, 0, 0.5)",
      },
      screens: {
        "3xl": "2559px", // Custom breakpoint
      },
    },
  },
  plugins: [],
};
