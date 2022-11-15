<template>
  <div class="flex flex-col min-h-screen wv-font-anuphan wv-b5">
    <WvNavbar class="z-20">
      <NuxtLink v-for="{ label, path } in routes" :key="path" :to="path">
        <WvNavButton :active="path === $route.path">{{ label }}</WvNavButton>
      </NuxtLink>
    </WvNavbar>
    <Nuxt />
    <WvFooter />
  </div>
</template>

<script lang="ts">
/* @ts-ignore */
import WvNavbar from "@wevisdemo/ui/vue2/navbar";
/* @ts-ignore */
import WvFooter from "@wevisdemo/ui/vue2/footer";
/* @ts-ignore */
import WvNavButton from "@wevisdemo/ui/vue2/nav-button";

import Vue from "vue";
export default Vue.extend({
  components: { WvNavbar, WvFooter, WvNavButton },
  data() {
    return {
      routes: [
        { label: "Intro", path: "/" },
        { label: "Explore", path: "/explore" },
        { label: "Vote", path: "/vote" },
        { label: "About", path: "/about" },
      ],
    };
  },
});
</script>
