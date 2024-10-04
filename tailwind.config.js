/** @type {import('tailwindcss').Config} */
(
  module.exports = {
    content: ["./{src,dist}/**/*.{html,js}"],
    theme: {
      extend: {
        colors: {
          "brand-mauve": "#6E44FF",
          "brand-wisteria": "#B8B8FF",
          "brand-mauve-light": "#F8F7FF",
          "brand-mauve-dark": "#240046",
          "mono-black-kush": "#030303",
          "mono-dusk-snow": "#F9F9F9",
          "mono-mint-cream": "#E5E5E5",
        },
        fontFamily: {
          visuelt: ["Visuelt Pro", "sans-serif"],
          inter: ["Inter", "sans-serif"],
          plaster: ["Plaster", "cursive"],
        },
        fontSize: {
          "h1-caps": "8rem",
          "p1-caps": "1rem",
        },
        letterSpacing: {
          "h1-caps": "15px",
          "p1-caps": "0px",
        },
        lineHeight: {
          "h1-caps": "100%",
          "p1-caps": "30px",
        },
        textTransform: {
          uppercase: "uppercase",
        },
        backgroundImage: {
          jet: "var(--Jet, linear-gradient(90deg, #F9F9F9 0%, #E5E5E5 100%))",
        },
      },
    },
    plugins: [],
  }
);
