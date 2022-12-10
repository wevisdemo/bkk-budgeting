<template>
  <div class="relative max-w-7xl w-full landing-bg overflow-hidden p-6 m-auto">
    <img
      class="hidden sm:block absolute opacity-95 bottom-0 left-0 right-0 pb-6"
      :src="`${$config.path.images}/background/landing.png`"
      alt="landing_bg"
    />
    <div class="flex flex-col sm:flex-row gap-6 justify-between p-0 sm:p-10 lg:p-20">
      <div
        class="flex flex-col gap-3 sm:w-min z-10 sm:pt-30 sm:pb-20 text-center sm:text-left"
      >
        <h1 class="wv-h2 font-extrabold wv-font-kondolar">
          <div>Bangkok</div>
          <div>Budgeting</div>
        </h1>
        <h5 class="wv-h5 wv-font-bold hidden sm:block">อยู่เมืองนี้ ต้องรู้เยอะ</h5>
        <div class="wv-b3 hidden sm:block">
          <div>เปิดเผยอย่างโปร่งใส</div>
          <div>เพื่อใครๆก็มีส่วนร่วมกับงบฯ กรุงเทพได้</div>
        </div>
        <div class="wv-b4 font-bold block sm:hidden">
          <div>เปิดเผยอย่างโปร่งใส</div>
          <div>เพื่อใครๆก็มีส่วนร่วมกับงบฯ กรุงเทพได้</div>
        </div>
        <img
          class="w-full sm:hidden"
          :src="`${$config.path.images}/background/landing.png`"
          alt="landing_bg"
        />
      </div>
      <div class="hidden sm:flex sm:w-max flex-col gap-3 z-10 sm:pt-30 pb-20">
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
      <div class="flex sm:hidden gap-4">
        <div class="flex flex-grow flex-col gap-2 p-3 bg-wv-cream-2">
          <p class="wv-b5 font-bold">เข้าใจแผนการใช้งบ</p>
          <div class="divide-y">
            <div class="wv-b5 py-1">
              <span>วางแผนแก้ปัญหาแบบไหน</span>
            </div>
            <div class="wv-b5 py-1">
              <span>ใช้ทำอะไรไปแล้ว</span>
            </div>
            <div class="wv-b5 py-1">
              <span>อยากให้งบทำเรื่องอะไร</span>
            </div>
          </div>
        </div>
        <div class="flex flex-grow flex-col p-3 bg-wv-green">
          <p class="wv-b5 font-bold">เข้าใจแผนการใช้งบ</p>
          <div class="divide-y">
            <div class="wv-b5 py-1">
              <span>รายปี</span>
            </div>
            <div class="wv-b5 py-1">
              <span>รายหน่วยงาน</span>
            </div>
            <div class="wv-b5 py-1">
              <span>ค้นด้วยคีย์เวิร์ด</span>
            </div>
          </div>
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
  height: 100%;
}

@media (min-width: 640px) {
  .landing-bg {
    height: calc(100vh - 52px);
  }
}
</style>
