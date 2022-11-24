<template>
  <div class="relative max-w-7xl w-full landing-bg overflow-hidden p-6 m-auto">
    <img
      class="absolute m-auto opacity-95 overflow-hidden max-w-none sm:max-w-full bottom-0 left-0 right-0 pb-6"
      :src="`${$config.path.images}/background/landing.png`"
      alt="landing_bg"
    />
    <div class="flex gap-6 justify-between">
      <div class="flex flex-col gap-3 w-min z-10 pt-16 sm:pt-30 pb-20">
        <h1 class="wv-h2 wv-font-bold wv-font-kondolar">
          <div>Bangkok</div>
          <div>Budgeting</div>
        </h1>
        <h5 class="wv-h5 wv-font-bold">อยู่เมืองนี้ ต้องรู้เยอะ</h5>
        <div class="wv-b3 wv-font-kondolar">
          <div>เปิดเผยอย่างโปร่งใส</div>
          <div>เพื่อใครๆก็มีส่วนร่วมกับงบฯ กรุงเทพได้</div>
        </div>
      </div>
      <div class="w-max flex flex-col gap-3 z-10 pt-16 sm:pt-30 pb-20">
        <div class="py-4 px-4 bg-wv-green shadow-lg rounded-lg text-center">
          <p class="wv-b4 wv-font-bold">Learn</p>
          <p class="wv-b5 p-1">เข้าใจแผนพัฒนากรุงเทพฯ</p>
        </div>
        <div class="py-4 px-4 bg-wv-green shadow-lg rounded-lg text-center">
          <p class="wv-b4 wv-font-bold">Explore</p>
          <div class="divide-black divide-y">
            <p class="wv-b5 p-1">เปรียบเทียบการใช้งบฯ ในแต่ละปี</p>
            <p class="wv-b5 p-1">เปรียบเทียบการใช้งบฯ ใน 68 หน่วยงาน</p>
            <p class="wv-b5 p-1">สำรวจการใช้งบฯ ผ่านคีย์เวิร์ด</p>
          </div>
        </div>
        <div class="py-4 px-4 bg-wv-green shadow-lg rounded-lg text-center">
          <p class="wv-b4 wv-font-bold">Vote</p>
          <p class="wv-b5 p-1">กรุงเทพฯ ควรใช้งบฯ กับเรื่องอะไรบ้าง</p>
        </div>
      </div>
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
  height: calc(100vh - 52px);
}
/* @media (min-width: 547px) {
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
} */
</style>
