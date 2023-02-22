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
import Vue from "vue";
import { uuid } from "vue-uuid";

/* @ts-ignore */
import WvNavbar from "@wevisdemo/ui/vue2/navbar";
/* @ts-ignore */
import WvFooter from "@wevisdemo/ui/vue2/footer";
/* @ts-ignore */
import WvNavButton from "@wevisdemo/ui/vue2/nav-button";
/* @ts-ignore */
import WvCookieConsent from "@wevisdemo/ui/vue2/cookie-consent";
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
        { label: "เข้าใจแผนการใช้งบ", path: "/" },
        { label: "สำรวจการใช้งบ", path: "/explore" },
        { label: "เกี่ยวกับโครงการ", path: "/about" },
      ],
      footerComponent: "AboutFooter",
      cookieOptions: ["Functionality"],
      uuid: uuid.v1(),
    };
  },
  mounted() {
    if (this.$cookies.get("uuid")) {
      this.$store.commit("setCookieState", true);
    }
  },
  methods: {
    isAboutFooter() {
      const routeName = this.$route.name;
      return routeName === "about";
    },
    async onCookieAccept(option: Option) {
      if (option.Functionality) {
        // Initialize or enable analytics
      }
      if (!this.$cookies.get("uuid")) {
        this.$cookies.set("uuid", this.uuid);
        this.$cookies.set("isVoted", "false");
        this.$store.commit("setCookieState", true);

        const messageRef = this.$fire.database.ref("user");
        const userSeq = this.$fire.database.ref("sequence").child("user_sequence");
        try {
          const a = await userSeq.once("value");
          let r = a.val();
          await messageRef.child((++r).toString()).set({
            isInBkk: "",
            hasHouseReg: "",
            district: "",
            province: "",
            userid: this.$cookies.get("uuid"),
          });
          userSeq.set(r);
        } catch (e) {
          alert(e);
          return;
        }
        // eslint-disable-next-line no-console
        console.log("create user success");
      }
    },
  },
});
</script>
