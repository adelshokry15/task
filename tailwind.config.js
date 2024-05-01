/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        widthIncrease: {
          "0%": { width: "60px" },
          "75%": { width: "190px" },
          "85%": { width: "185px" },
          "100%": { width: "190px" },
        },
        shadow: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(100%)" },
        },
        videoShow: {
          "0%": { transform: "scale(0.5)" },
          "100%": { transform: "scale(1)" },
        },
      },
      animation: {
        widthIncrease: "widthIncrease 0.5s ease-in-out",
        shadow: "shadow 1s ease-in-out infinite",
        videoShow: "videoShow 0.3s ease-in-out",
      },
    },
  },
  plugins: [],
};
