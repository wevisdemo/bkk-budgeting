<template>
  <div class="overflow-x-hidden">
    <div class="bg-wv-cream">
      <div
        class="max-w-7xl w-full p-6 m-auto flex flex-col justify-center items-center"
      >
        <Landing />
        <MissionStatement />
        <PersistProblems />
        <StrategicPlans />
        <DevelopmentTimeline />
        <BudgetPlans />
        <AllocationQuestion />
      </div>
    </div>
    <div
      class="max-w-7xl w-full pt-8 px-8 p-32 m-auto flex flex-col justify-center items-center"
    >
      <ProjectDevelopment />
      <IdeaVote />
    </div>
    <GoodSociety />
    <ParticipatoryBudgeting />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import AllocationQuestion from "~/components/AllocateQuestion.vue";
import BudgetPlans from "~/components/budget/BudgetPlans.vue";
import DevelopmentTimeline from "~/components/DevelopmentTimeline.vue";
import GoodSociety from "~/components/GoodSociety.vue";
import Landing from "~/components/landing/Landing.vue";
import MissionStatement from "~/components/MissionStatement.vue";
import ParticipatoryBudgeting from "~/components/ParticipatoryBudgeting.vue";
import PersistProblems from "~/components/PersistProblems.vue";
import ProjectDevelopment from "~/components/ProjectDevelopment.vue";
import StrategicPlans from "~/components/StrategicPlans.vue";
import IdeaVote from "~/components/vote/IdeaVote.vue";

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
    ProjectDevelopment,
    GoodSociety,
    ParticipatoryBudgeting,
    IdeaVote,
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
