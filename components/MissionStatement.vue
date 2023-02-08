<template>
  <BoxContainer>
    <div class="w-full flex justify-center">
      <div class="sm:max-w-2xl">
        <div class="rounded-lg sm:py-10 grid gap-6">
          <p class="wv-b3 text-center">
            ทุกวันนี้เมืองที่เราใช้ชีวิต
            ยังมีหลายอย่างไม่ได้เป็นแบบที่เราวาดฝันไว้ใช่ไหม?
          </p>
          <p class="wv-b3 text-center">
            เราเองในฐานะประชาชนผู้เสียภาษีทางตรงและทางอ้อม
            ก็ควรได้ร่วมออกแบบการใช้งบประมาณของเมือง
            เพื่อสร้างเมืองในแบบที่เราต้องการได้
          </p>
          <p class="wv-b3 text-center wv-bold">
            ถ้างั้นขอชวนมาลองเริ่มต้นที่เมืองหลวงอย่างกรุงเทพมหานครกันก่อนเลย!!
          </p>
        </div>
      </div>
    </div>
  </BoxContainer>
</template>

<script lang="ts">
import Vue from "vue";
import BoxContainer from "~/components/BoxContainer.vue";

export default Vue.extend({
  name: "MissionStatement",
  components: { BoxContainer },
});
</script>
