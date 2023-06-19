import type { Config } from "tailwindcss";
// import defaultTheme from "tailwindcss/defaultTheme";

export default <Partial<Config>>{
  content: [
    "./layout/**/*.{html,js,ts,vue}",
    "./pages/**/*.{html,js,ts,vue}",
    "./components/**/*.{html,js,ts,vue}",
  ],
  theme: {
    extend: {
      screens: {
        xs: "400px",
      },
      textColor: {
        "wv-green": "#4CC35D",
        "wv-gray-1": "#737373",
        "wv-gray-3": "#DDDDDD",
        "wv-gray-5": "#858585",
        "wv-environment": "#BACB37",
      },
      backgroundColor: {
        "wv-cream": "#E8E4D8",
        "wv-cream-2": "#D9D4C5",
        "wv-green": "#4CC35D",
        "wv-blue": "#3277FF",
        "wv-gray-3": "#DDDDDD",
        "wv-gray-4": "#F3F3F3",
        "wv-safe": "#3277FF",
        "wv-environment": "#BACB37",
        "wv-connectivity": "#FFC2F1",
        "wv-democracy": "#FF7A00",
        "wv-management": "#C462F2",
        "wv-economic": "#FFB800",
        "wv-equality": "#FF2828",
      },
      borderColor: {
        "wv-green": "#4CC35D",
        "wv-safe": "#3277FF",
        "wv-environment": "#BACB37",
        "wv-connectivity": "#FFC2F1",
        "wv-democracy": "#FF7A00",
        "wv-management": "#C462F2",
        "wv-economic": "#FFB800",
        "wv-equality": "#FF2828",
        "wv-gray-1": "#737373",
        "wv-gray-4": "#F3F3F3",
      },
    },
  },
  safelist: [
    "bg-wv-safe",
    "bg-wv-environment",
    "bg-wv-connectivity",
    "bg-wv-democracy",
    "bg-wv-management",
    "bg-wv-economic",
    "bg-wv-equality",
    "border-wv-safe",
    "border-wv-environment",
    "border-wv-connectivity",
    "border-wv-democracy",
    "border-wv-management",
    "border-wv-economic",
    "border-wv-equality",
    "border-t-wv-safe",
    "border-t-wv-environment",
    "border-t-wv-connectivity",
    "border-t-wv-democracy",
    "border-t-wv-management",
    "border-t-wv-economic",
    "border-t-wv-equality",
    "hover:border-wv-safe",
    "hover:border-wv-environment",
    "hover:border-wv-connectivity",
    "hover:border-wv-democracy",
    "hover:border-wv-management",
    "hover:border-wv-economic",
    "hover:border-wv-equality",
    "hover:border-t-wv-safe",
    "hover:border-t-wv-environment",
    "hover:border-t-wv-connectivity",
    "hover:border-t-wv-democracy",
    "hover:border-t-wv-management",
    "hover:border-t-wv-economic",
    "hover:border-t-wv-equality",
  ],
};
