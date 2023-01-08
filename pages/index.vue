<template>
  <div>
    <div class="bg-wv-cream overflow-x-hidden">
      <Landing />
      <div
        class="max-w-7xl w-full p-6 m-auto flex flex-col justify-center items-center"
      >
        <MissionStatement />
        <PersistProblems />
        <StrategicPlans />
        <DevelopmentTimeline />
        <BudgetPlans />
        <AllocationQuestion />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import AllocationQuestion from "~/components/AllocateQuestion.vue";
import DevelopmentTimeline from "~/components/DevelopmentTimeline.vue";
import MissionStatement from "~/components/MissionStatement.vue";
import PersistProblems from "~/components/PersistProblems.vue";
import StrategicPlans from "~/components/StrategicPlans.vue";
import BudgetPlans from "~/components/budget/BudgetPlans.vue";
import Landing from "~/components/landing/Landing.vue";

export default Vue.extend({
  name: "IndexPage",
  components: {
    Landing,
    AllocationQuestion,
    PersistProblems,
    StrategicPlans,
    DevelopmentTimeline,
    BudgetPlans,
    MissionStatement,
  },
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
