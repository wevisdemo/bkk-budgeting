import type { Context } from "@nuxt/types";
import { Api } from "nocodb-sdk";

export default (context: Context, inject: any) => {
  const api = new Api({
    baseURL: "https://sheets.wevis.info",
    headers: {
      "xc-auth": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6IjUzMDlzb3Bob25AZ21haWwuY29tIiwiZmlyc3RuYW1lIjpudWxsLCJsYXN0bmFtZSI6bnVsbCwiaWQiOiJ1c19pNmY1NWQ1OGh0NGozdiIsInJvbGVzIjoib3JnLWxldmVsLXZpZXdlciIsInRva2VuX3ZlcnNpb24iOiI1M2M2NzNiNTQwZjk4MDYyMGM5ZmI1OTg3ODkzZWY1MGRkNmU3ODBlMDE0YjBjMWEyYmQ3NzFmZDkzY2VkZTUzZDQ3ZmUzNDE3YmRmODFjOSIsImlhdCI6MTY5MTM4MTU4MSwiZXhwIjoxNjkxNDE3NTgxfQ.DIUr7ohRCi4IXzfBca1aJZO_KSOn5wBM7a94jiLukds"
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
