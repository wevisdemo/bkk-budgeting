<template>
  <div
    class="relative flex flex-col items-center left-[50%] mb-4 translate-x-[-50%] mt-4"
  >
    <div class="flex gap-3 justify-center items-center">
      <div>Share</div>
      <img
        v-sharer
        :src="icon_fb"
        class="sharer social-icon pointer"
        data-sharer="facebook"
        :data-url="shareUrl"
      />
      <img
        v-sharer
        :src="icon_twitter"
        class="sharer social-icon pointer"
        data-sharer="twitter"
        :data-url="shareUrl"
      />
      <img
        v-sharer
        :src="icon_line"
        class="sharer social-icon pointer"
        data-sharer="line"
        :data-url="shareUrl"
      />
    </div>
    <a
      class="mt-2 wv-b6 flex items-center cursor-pointer"
      :href="GOOGLE_SHEETS_CSV"
      target="_blank"
    >
      <img src="~/assets/images/download.svg" class="w-3 h-3 mr-2" />
      ดาวน์โหลดข้อมูล
    </a>
  </div>
</template>

<script>
import VueSharer from "vue-sharer";
export default {
  directives: {
    sharer: VueSharer,
  },
  data() {
    return {
      icon_fb: require("~/assets/logo/facebook.svg"),
      icon_line: require("~/assets/logo/line.svg"),
      icon_twitter: require("~/assets/logo/twitter.svg"),
      shareUrl: `https://wevisdemo.github.io/bkk-budgeting`,
      GOOGLE_SHEETS_CSV:
        "https://docs.google.com/spreadsheets/d/e/2PACX-1vQ85mQgwOqSIwu-QOdD4nPgC9K8_UgXFgOW1p45p5HIedDihVCNTDIOAU2O-ibjyKMGNpj3jI_E65g1/pub?gid=1938129512&single=true&output=csv",
    };
  },
};
</script>

<style lang="scss" scoped></style>
