<template>
  <div>
    <div class="bg-wv-cream overflow-x-hidden">
      <Landing />
      <div
        class="max-w-7xl w-full p-6 m-auto flex flex-col justify-center items-center"
      >
        <!-- intro box -->
        <div
          class="sm:max-w-lg rounded-lg sm:bg-black sm:text-white pb-8 sm:py-14 sm:px-20 grid gap-6"
        >
          <p class="wv-b3 text-center">
            ทุกวันนี้เมืองที่เราใช้ชีวิต
            ยังมีหลายอย่างไม่ได้เป็นแบบที่เราวาดฝันไว้ใช่ไหม?
          </p>
          <p class="wv-b3 text-center">
            เราเองในฐานะประชาชนผู้เสียภาษีทางตรงและทางอ้อม
            ก็ควรได้ร่วมออกแบบการใช้งบประมาณของเมือง
            เพื่อสร้างเมืองในแบบที่เราต้องการได้
          </p>
          <p class="wv-b3 text-center sm:text-wv-green font-bold">
            ถ้างั้นขอชวนมาลองเริ่มต้นที่เมืองหลวงอย่างกรุงเทพมหานครกันก่อนเลย!!
          </p>
        </div>
        <!-- issues -->
        <PersistProblems />
        <!-- strategies -->
        <StrategicPlans />
        <div class="py-14 px-20 grid gap-6">
          <p class="wv-b5">Lorem ipsum</p>
          <h5 class="wv-h5">Lorem ipsum title bold</h5>
          <p class="wv-b5">Date</p>
        </div>
        <!-- text:  -->
        <div class="py-14 px-20 grid gap-6">
          <p class="wv-b5">Lorem ipsum</p>
          <h5 class="wv-h5">Lorem ipsum title bold</h5>
          <p class="wv-b5">Date</p>
        </div>
        <!-- timeline -->
        <div class="py-14 px-20 grid gap-6">
          <!-- todo -->
        </div>
        <!-- text: budget -->
        <div class="py-14 px-20 grid gap-6">
          <h2 class="wv-h1">Lorem ipsum title bold</h2>
          <p class="wv-b5">Date</p>
          <p class="wv-b5">budget</p>
        </div>
        <!-- viz -->
        <div class="py-14 px-20 grid gap-6">
          <!-- todo -->
        </div>
        <AllocationQuestion />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import AllocationQuestion from "~/components/AllocateQuestion.vue";
import Landing from "~/components/landing/Landing.vue";
import PersistProblems from "~/components/PersistProblems.vue";
import StrategicPlans from "~/components/strategies/StrategicPlans.vue";

export default Vue.extend({
  name: "IndexPage",
  components: { Landing, AllocationQuestion, PersistProblems, StrategicPlans },
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
