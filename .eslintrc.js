module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  extends: [
    "@nuxtjs/eslint-config-typescript",
    "plugin:nuxt/recommended",
    "plugin:json/recommended",
    "prettier",
  ],
  plugins: [],
  // add your custom rules here
  rules: {
    "vue/no-undef-components": [
      "error",
      {
        ignorePatterns: ["Nuxt"],
      },
    ],
  },
  ignorePatterns: ["**/static/sw.js"],
};
