<template>
  <div class="min-h-screen wv-kondolar wv-b5">
    <WvCookieConsent
      policy-url="https://punchup.world"
      :cookie-options="cookieOptions"
      :on-accept="onCookieAccept"
    />
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
/* @ts-ignore */
import WvCookieConsent from "@wevisdemo/ui/vue2/cookie-consent";

import Vue from "vue";
import AboutFooter from "~/components/AboutFooter.vue";

interface Option {
  Functionality: boolean;
  Performance: boolean;
  Advertising: boolean;
}

export default Vue.extend({
  components: { WvNavbar, WvFooter, WvNavButton, WvCookieConsent, AboutFooter },
  data() {
    return {
      routes: [
        { label: "Intro", path: "/" },
        { label: "Explore", path: "/explore" },
        { label: "Vote", path: "/vote" },
        { label: "About", path: "/about" },
      ],
      footerComponent: "AboutFooter",
      cookieOptions: ["Functionality"],
    };
  },
  methods: {
    isAboutFooter() {
      const routeName = this.$route.name;
      return routeName === "about";
    },
    onCookieAccept(option: Option) {
      if (option.Functionality) {
        // Initialize or enable analytics
      }
    },
  },
});
</script>
