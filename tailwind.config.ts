import type { Config } from "tailwindcss";
// import defaultTheme from "tailwindcss/defaultTheme";

export default <Partial<Config>>{
  theme: {
    extend: {
      textColor: {
        "wv-green": "#4CC35D",
      },
    },
    backgroundColor: {
      "wv-cream": "#E8E4D8",
      "wv-green": "#4CC35D",
      black: "#000",
    },
  },
};
