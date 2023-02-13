<template>
  <div class="bg-white">
    <BoxContainer>
      <div class="sm:p-10 md:p-20 flex flex-col items-center gap-6">
        <p class="wv-b3 text-center max-w-[650px]">
          นี่เป็นเพียงจุดเริ่มต้นของการผลักดันไปสู่สังคมที่ดี (Good Society)
          ที่ฝั่งประชาชนอย่างพวกเราจะเข้ามามีส่วนในการเปิดข้อมูลและแสดงความคิดเห็น
          การวางแผนและการใช้งบประมาณของกรุงเทพมหานครได้
        </p>
        <img src="~/assets/images/good-society.jpg" />
      </div>
    </BoxContainer>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import BoxContainer from "./BoxContainer.vue";

export default Vue.extend({
  name: "GoodSociety",
  components: { BoxContainer },
});
</script>
