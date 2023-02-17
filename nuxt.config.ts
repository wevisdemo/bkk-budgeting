import type { NuxtConfig } from "@nuxt/types";
import { createMetadata } from "./utils/metadata";

const BASE_PATH = process.env.BASE_PATH || "";
const { title, meta } = createMetadata();

const config: NuxtConfig = {
  target: "static",

  head: {
    title,
    meta,
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.png" }],
  },

  css: ["@wevisdemo/ui/styles/typography.css", "@wevisdemo/ui/styles/components.css"],

  plugins: ["~/plugins/clickOutside.client.ts"],

  components: false,

  buildModules: ["@nuxt/typescript-build", "@nuxtjs/svg", "@nuxtjs/style-resources"],

  build: {
    quiet: false,
    transpile: ["@wevisdemo/ui/vue2", "axios"],
    standalone: false,
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
