import type { NuxtConfig } from "@nuxt/types";

const BASE_PATH = process.env.BASE_PATH || "";

const config: NuxtConfig = {
  // Target: https://go.nuxtjs.dev/config-target
  target: "static",

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "budget",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["@wevisdemo/ui/styles/typography.css", "@wevisdemo/ui/styles/components.css"],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: ["@nuxtjs/style-resources", "@nuxt/typescript-build"],

  build: {
    transpile: ["@wevisdemo/ui/vue2"],
  },

  modules: ["@nuxtjs/tailwindcss", "@nuxtjs/axios", "@nuxtjs/pwa"],

  extends: ["@nuxtjs/eslint-config-typescript"],

  styleResources: {
    scss: ["~/assets/styles/variables.scss"],
  },

  publicRuntimeConfig: {
    path: {
      base: BASE_PATH,
      images: `${BASE_PATH}/images`,
    },
  },

  router: {
    base: BASE_PATH || "/",
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: "/",
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: "en",
    },
  },
};

export default config;
