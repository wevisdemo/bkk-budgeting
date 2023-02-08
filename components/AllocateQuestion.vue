<template>
  <div class="grid relative mb-[15rem] sm:mb-[18rem] justify-center">
    <div
      class="bg-wv-green rounded-full p-10 sm:p-20 flex flex-col items-center justify-center gap-4 aspect-square w-[112vw] h-[112vw] sm:w-[580px] sm:h-[580px] text-center z-30"
    >
      <p class="wv-h8">
        ในปีต่อๆไป
        <br />
        กรุงเทพมหานครยังคงมุ่งพัฒนาและขับเคลื่อน
        <span class="wv-bold">“ยุทธศาสตร์ทั้ง 7 ด้าน”</span>
        ให้เกิดขึ้นต่อไป
      </p>
      <p class="wv-b3">
        ถ้าบางส่วนของงบฯ ที่คุณมีส่วนช่วยตัดสินใจให้ถูกใช้อย่างตรงจุดได้
      </p>
      <p class="wv-b3 wv-bold">คุณคิดว่าควรนำไปพัฒนากับเรื่องอะไรบ้าง?</p>
    </div>
    <div
      class="flex justify-center absolute bottom-0 sm:bottom-[-50px] left-0 right-0 -mb-60"
    >
      <img
        class="sm:max-w-xl h-auto"
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
