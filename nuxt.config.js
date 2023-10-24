import { createMetadata } from "./utils/metadata";
import { generateOgImageRoutes } from "./utils/ogimages";

const BASE_PATH = "/";
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
    [
      "@nuxtjs/firebase",
      {
        config: {
          apiKey: "AIzaSyCwIBLPmMURCSdqe_rQqC4gFrUtteLwbfI",
          authDomain: "participatory-budgeting-a5f34.firebaseapp.com",
          databaseURL:
            "https://participatory-budgeting-a5f34-default-rtdb.asia-southeast1.firebasedatabase.app",
          projectId: "participatory-budgeting-a5f34",
          storageBucket: "participatory-budgeting-a5f34.appspot.com",
          messagingSenderId: "412280397430",
          appId: "1:412280397430:web:d2fd56e866108d5c3c0957",
        },
        services: {
          database: true,
        },
      },
    ],
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
    "vue-plausible",
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

  plausible: {
    domain: "bangkokbudgeting.wevis.info",
    apiHost: "https://analytics.punchup.world",
  },

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
