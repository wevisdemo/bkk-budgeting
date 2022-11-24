<template>
  <div>
    <div class="bg-wv-cream">
      <Landing />
      <div class="max-w-7xl w-full p-6 m-auto flex justify-center">
        <div class="max-w-lg rounded-lg bg-black text-white py-14 px-20 grid gap-6">
          <p class="wv-b3 text-center">
            ทุกวันนี้เมืองที่เราใช้ชีวิต
            ยังมีหลายอย่างไม่ได้เป็นแบบที่เราวาดฝันไว้ใช่ไหม?
          </p>
          <p class="wv-b3 text-center">
            เราเองในฐานะประชาชนผู้เสียภาษีทางตรงและทางอ้อม
            ก็ควรได้ร่วมออกแบบการใช้งบประมาณของเมือง
            เพื่อสร้างเมืองในแบบที่เราต้องการได้
          </p>
          <p class="wv-b3 text-center text-wv-green">
            ถ้างั้นขอชวนมาลองเริ่มต้นที่เมืองหลวงอย่างกรุงเทพมหานครกันก่อนเลย!!
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
/* @ts-ignore */
import Landing from "~/components/Landing.vue";

export default Vue.extend({
  name: "IndexPage",
  components: { Landing },
  data() {
    return {
      intro: [
        "ทุกวันนี้เมืองที่เราใช้ชีวิต ยังมีหลายอย่างไม่ได้เป็นแบบที่เราวาดฝันไว้ใช่ไหม?",
        "เราเองในฐานะประชาชนผู้เสียภาษีทางตรงและทางอ้อม ก็ควรได้ร่วมออกแบบการใช้งบประมาณของเมือง เพื่อสร้างเมืองในแบบที่เราต้องการได้",
        "ถ้างั้นขอชวนมาลองเริ่มต้นที่เมืองหลวงอย่างกรุงเทพมหานครกันก่อนเลย!!",
      ],
    };
  },
});
</script>
