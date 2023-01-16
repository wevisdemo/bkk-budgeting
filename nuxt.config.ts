import type { NuxtConfig } from "@nuxt/types";

const BASE_PATH = process.env.BASE_PATH || "";

const config: NuxtConfig = {
  target: "static",

  head: {
    title: "BKK Budgeting",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },

  css: ["@wevisdemo/ui/styles/typography.css", "@wevisdemo/ui/styles/components.css"],

  plugins: [],

  components: true,

  buildModules: ["@nuxtjs/style-resources", "@nuxt/typescript-build"],

  build: {
    transpile: ["@wevisdemo/ui/vue2"],
  },

  modules: ["@nuxtjs/tailwindcss", "@nuxtjs/axios", "@nuxtjs/pwa"],

  extends: ["@nuxtjs/eslint-config-typescript"],

  publicRuntimeConfig: {
    path: {
      base: BASE_PATH,
      images: `${BASE_PATH}/images`,
    },
  },

  router: {
    base: BASE_PATH || "/",
  },

  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: "/",
  },

  pwa: {
    manifest: {
      lang: "en",
    },
  },
};

export default config;
