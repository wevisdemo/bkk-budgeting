<template>
  <BoxContainer>
    <div class="flex -mx-14 sm:m-auto relative my-4">
      <div class="flex justify-center items-center w-full text-center">
        <img
          class="w-full h-full max-w-[600px]"
          src="~/assets/images/question.png"
          alt="proposed"
        />
        <div
          class="absolute top-0 w-full max-w-[600px] max-h-[600px] rounded-full flex items-center justify-center aspect-square"
        >
          <div class="flex flex-col gap-4 px-16 sm:px-20 text-center">
            <p class="wv-b3">
              ในปีต่อๆไป
              <br />
              กรุงเทพมหานครยังคงมุ่งพัฒนาและขับเคลื่อน
              <br />
              <span class="wv-bold">“ยุทธศาสตร์ทั้ง 7 ด้าน”</span>
              ให้เกิดขึ้นต่อไป
            </p>
            <p class="wv-b3">
              ถ้าบางส่วนของงบฯ
              <br />
              ที่คุณมีส่วนช่วยตัดสินใจให้ถูกใช้อย่างตรงจุดได้
            </p>
            <p class="wv-b3 wv-bold">คุณคิดว่าควรนำไปพัฒนากับเรื่องอะไรบ้าง?</p>
          </div>
        </div>
      </div>
    </div>
  </BoxContainer>
</template>

<script lang="ts">
import Vue from "vue";
import BoxContainer from "./BoxContainer.vue";

export default Vue.extend({
  name: "AllocationQuestion",
  components: { BoxContainer },
});
</script>
