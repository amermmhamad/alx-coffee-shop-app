/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all files that contain Nativewind classes.
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      fontFamily: {
        sora: ["Sora-Bold", "sans-serif"],
        "sora-bold": ["Sora-Bold", "sans-serif"],
        "sora-extrabold": ["Sora-ExtraBold", "sans-serif"],
        "sora-extralight": ["Sora-ExtraLight", "sans-serif"],
        "sora-light": ["Sora-Light", "sans-serif"],
        "sora-medium": ["Sora-Medium", "sans-serif"],
        "sora-regular": ["Sora-Regular", "sans-serif"],
        "sora-semibold": ["Sora-SemiBold", "sans-serif"],
        "sora-thin": ["Sora-Thin", "sans-serif"],
      },
      colors: {
        primary: "#C67C4E",
        secondary: "#EDD6C8",
        dark: "#313131",
        grey: "#A2A2A2",
        light: "#F9F2ED",
      },
    },
  },
  plugins: [],
};
