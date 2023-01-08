import type { Config } from "tailwindcss";
// import defaultTheme from "tailwindcss/defaultTheme";

export default <Partial<Config>>{
  theme: {
    extend: {
      textColor: {
        "wv-green": "#4CC35D",
      },
      backgroundColor: {
        "wv-cream": "#E8E4D8",
        "wv-cream-2": "#D9D4C5",
        "wv-green": "#4CC35D",
        "wv-blue": "#3277FF",
      },
    },
  },
};
