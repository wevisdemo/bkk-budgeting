<template>
  <div class="min-h-screen wv-kondolar wv-b5 wv-ibmplex">
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
    <div
      class="bg-wv-green py-5 flex items-center justify-center wv-b5 flex-col md:flex-row"
    >
      <div class="flex text-center">
        <svg
          class="mr-2"
          width="20"
          height="20"
          viewBox="0 0 23 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10.6771 1.47511C11.0428 0.841631 11.9572 0.841631 12.3229 1.47511L21.618 17.5747C21.9837 18.2082 21.5266 19 20.7951 19H2.2049C1.47342 19 1.01625 18.2082 1.38199 17.5747L10.6771 1.47511Z"
            stroke="black"
          />
          <path
            d="M11.0545 13.465L10.3575 9.25311V6.37598H12.6711V9.25311L11.9889 13.465H11.0545ZM11.4995 16.9057C11.0249 16.9057 10.6838 16.7969 10.4761 16.5794C10.2784 16.3619 10.1795 16.0949 10.1795 15.7786V15.4226C10.1795 15.1062 10.2784 14.8393 10.4761 14.6218C10.6838 14.4043 11.0249 14.2955 11.4995 14.2955C11.974 14.2955 12.3102 14.4043 12.5079 14.6218C12.7156 14.8393 12.8194 15.1062 12.8194 15.4226V15.7786C12.8194 16.0949 12.7156 16.3619 12.5079 16.5794C12.3102 16.7969 11.974 16.9057 11.4995 16.9057Z"
            fill="black"
          />
        </svg>

        เว็บไซต์นี้อัปเดตข้อมูลล่าสุดเมื่อ ตุลาคม 2566<br class="md:hidden" />
        สามารถดูเวอร์ชันที่อัปเดตใหม่ได้ที่<br class="md:hidden" />
      </div>
      <a
        class="underline ml-1"
        href="https://bangkokbudgeting.wevis.info/"
        target="_blank"
      >
        bangkokbudgeting.wevis.info/</a
      >
    </div>
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
      this.$cookies.set("isVoted", "true");
    },
  },
});
</script>
