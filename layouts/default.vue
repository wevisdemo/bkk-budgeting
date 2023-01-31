<template>
  <div class="min-h-screen wv-kondolar wv-b5">
    <WvNavbar class="z-20" :dark="true">
      <NuxtLink v-for="{ label, path } in routes" :key="path" :to="path">
        <WvNavButton :active="path === $route.path" :dark="true">{{
          label
        }}</WvNavButton>
      </NuxtLink>
    </WvNavbar>
    <Nuxt />
    <WvFooter v-if="!isAboutFooter()" :dark="true" />
    <AboutFooter v-if="isAboutFooter()" />
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
import AboutFooter from "~/components/AboutFooter.vue";
export default Vue.extend({
  components: { WvNavbar, WvFooter, WvNavButton, AboutFooter },
  data() {
    return {
      routes: [
        { label: "Intro", path: "/" },
        { label: "Explore", path: "/explore" },
        { label: "Vote", path: "/vote" },
        { label: "About", path: "/about" },
      ],
      footerComponent: "AboutFooter",
    };
  },
  methods: {
    isAboutFooter() {
      const routeName = this.$route.name;
      return routeName === "about";
    },
  },
});
</script>
