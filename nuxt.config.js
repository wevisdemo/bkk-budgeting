import { createMetadata } from "./utils/metadata";
import { generateOgImageRoutes } from "./utils/ogimages";

const BASE_PATH = "/bkk-budgeting";
const { title, meta } = createMetadata();

const config = {
  target: "static",

  head: {
    title,
    meta,
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.png" }],
  },

  css: [
    "@wevisdemo/ui/styles/typography.css",
    "@wevisdemo/ui/styles/components.css",
    "element-ui/lib/theme-chalk/index.css",
  ],

  plugins: [
    "~/plugins/clickOutside.client.ts",
    "~/plugins/vueCookies.ts",
    "~/plugins/nocoDb.ts",
  ],

  components: false,

  buildModules: [
    "@nuxt/typescript-build",
    "@nuxtjs/svg",
    "@nuxtjs/style-resources",
    "@nuxtjs/moment",
  ],

  moment: {
    locales: ["th"],
  },

  build: {
    extend(config) {
      config.resolve.alias["node-fetch-native"] = require.resolve("node-fetch");
    },
    quiet: false,
    transpile: ["@wevisdemo/ui/vue2", "axios"],
    standalone: true,
  },

  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxtjs/axios",
    "@nuxtjs/pwa",
    [
      "nuxt-mq",
      {
        // Default breakpoint for SSR
        defaultBreakpoint: "sm",
        breakpoints: {
          md: 1024,
          lg: Infinity,
        },
      },
    ],
    [
      "nuxt-element-ui",
      {
        components: ["Select", "Option", "Pagination", "Icon"],
        locale: "fr",
      },
    ],
  ],
  extends: ["@nuxtjs/eslint-config-typescript"],

  publicRuntimeConfig: {
    path: {
      base: BASE_PATH,
      images: `/images`,
    },
    nocoToken: process.env.NOCO_TOKEN,
  },

  router: {
    base: BASE_PATH || "/",
  },

  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: "/bkk-budgeting",
  },

  pwa: {
    manifest: {
      lang: "en",
    },
  },

  generate: {
    routes: generateOgImageRoutes(),
  },
};

export default config;
