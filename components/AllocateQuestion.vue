<template>
  <div class="grid relative mb-60">
    <div
      class="bg-wv-green rounded-full p-20 flex flex-col items-center justify-center gap-4 w-[580px] h-[580px] text-center z-50"
    >
      <p class="wv-h8">
        ในปีต่อๆไป
        <br />
        กรุงเทพมหานครยังคงมุ่งพัฒนาและขับเคลื่อน
        <span class="wv-font-bold">“ยุทธศาสตร์ทั้ง 7 ด้าน”</span>
        ให้เกิดขึ้นต่อไป
      </p>
      <p class="wv-b3">
        ถ้าบางส่วนของงบฯ ที่คุณมีส่วนช่วยตัดสินใจให้ถูกใช้อย่างตรงจุดได้
      </p>
      <p class="wv-b3 wv-font-bold">คุณคิดว่าควรนำไปพัฒนากับเรื่องอะไรบ้าง?</p>
    </div>
    <div class="absolute bottom-0 left-0 right-0 -mb-60 ml-14">
      <img
        class="max-w-xs sm:max-w-xl h-auto"
        :src="`${$config.path.images}/6_vote.png`"
        alt="proposed"
      />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "AllocationQuestion",
});
</script>
