<template>
  <div
    class="relative justify-center max-w-7xl w-full landing-bg overflow-hidden bg-cream p-6"
  >
    <img
      class="absolute m-auto opacity-95 overflow-hidden max-w-none sm:max-w-full -top-16 sm:top-0"
      :src="`${$config.path.images}/background/landing.png`"
      alt="landing_bg"
      style="z-index: 1; left: 50%; transform: translateX(-50%)"
    />
    <div class="flex flex-col relative z-10 pt-16 sm:pt-32 pb-20">
      <h1 class="wv-h2 wv-font-bold wv-font-kondolar pb-4">BKK Budgeting</h1>
      <h5 class="wv-h5 wv-font-bold">อยู่เมืองนี้ ต้องรู้เยอะ</h5>
      <h4 class="wv-b5 wv-font-kondolar">
        เปิดเผยอย่างโปร่งใส เพื่อใครๆก็มีส่วนร่วมกับงบฯ กรุงเทพได้
      </h4>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "LandingPage",
  data() {
    return {};
  },
});
</script>

<style scoped>
.landing-bg {
  height: 540px;
}
@media (min-width: 547px) {
  .landing-bg {
    height: 520px;
  }
}
@media (min-width: 640px) {
  .landing-bg {
    height: 580px;
  }
}
@media (min-width: 768px) {
  .landing-bg {
    height: 630px;
  }
}
</style>
