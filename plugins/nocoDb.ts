import type { Context } from "@nuxt/types";
import { Api } from "nocodb-sdk";

export default (context: Context, inject: any) => {
  const api = new Api({
    baseURL: "https://sheets.wevis.info",
    headers: {
      "xc-token": context.$config.ncAuthApiSecret,
    },
  });
  // Inject $noco() in Vue, context and store.
  inject("nocoDb", api);
};

declare module "vue/types/vue" {
  interface Vue {
    $nocoDb: Api<unknown>;
  }

  interface VueConstructor {
    $nocoDb: Api<unknown>;
  }
}
