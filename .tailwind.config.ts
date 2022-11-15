import { Config as TailwindConfig } from "tailwindcss";

const configs: TailwindConfig = {
  content: ["./**/*.{vue,html,js}"],
  theme: {
    extend: {},
    colors: {
      transparent: "transparent",
      black: "#000000",
      white: "#FFFFFF",
      gray: "#BBBBBB",
      ultramarine: "#3904E9",
    },
    backgroundColor: {
      cream: "#E8E4D8",
    },
    fontFamily: {},
    fontSize: {},
    fontWeight: {},
    lineHeight: {},
    letterSpacing: {},
  },
  plugins: [],
};

module.exports = configs;
