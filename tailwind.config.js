/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#FF7D29",
        accent: "#FFBF78",
      },
      textShadow: {
        // Tambahkan definisi di sini
        sm: "1px 1px 2px rgba(0,0,0,0.5)",
        DEFAULT: "2px 2px 4px rgba(0,0,0,0.8)",
        lg: "3px 3px 10px rgba(0,0,0,0.9)",
      },
    },
  },
  plugins: [
    function ({ addUtilities, theme }) {
      const shadows = theme("textShadow");
      const utilities = Object.keys(shadows).map((key) => ({
        [`.text-shadow${key === "DEFAULT" ? "" : `-${key}`}`]: {
          textShadow: shadows[key],
        },
      }));
      addUtilities(utilities, ["responsive", "hover"]);
    },
  ],
};
