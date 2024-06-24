/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#00C853",
          100: "#E8F5E9",
          200: "#C8E6C9",
        },
        secondary: {
          DEFAULT: "#FFD600",
          100: "#FFF9C4",
          200: "#FFF59D",
        },
        black: {
          DEFAULT: "#000",
          100: "#212121",
          200: "#353535",
        },
        white: {
          DEFAULT: "#FFF",
          100: "#F5F5F5",
          200: "#EEEEEE",
        },
      },
      fontFamily: {
        iblack: ["Inter-Black", "sans-serif"],
        ibold: ["Inter-Bold", "sans-serif"],
        iextrabold: ["Inter-ExtraBold", "sans-serif"],
        iextralight: ["Inter-ExtraLight", "sans-serif"],
        ilight: ["Inter-Light", "sans-serif"],
        imedium: ["Inter-Medium", "sans-serif"],
        iregular: ["Inter-Regular", "sans-serif"],
        isemibold: ["Inter-SemiBold", "sans-serif"],
        ithin: ["Inter-Thin", "sans-serif"],
      },
    },
  },
  plugins: [],
}

