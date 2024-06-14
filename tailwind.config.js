/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        popins: "var(--popins)",
        inter: "var(--inter)",
      },
      colors: {
        black_color: "var(--black_color)",
        white_color: "var(--white_color)",
        orange_color: "var(--orange_color)",
        neon_color: "var(--neon_color)",
      },
    },
  },
  plugins: [],
};
