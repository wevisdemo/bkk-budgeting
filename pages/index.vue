<template>
  <div class="overflow-x-hidden">
    <div class="bg-wv-cream">
      <Landing />
      <MissionStatement />
      <PersistProblems />
      <StrategicPlans />
      <DevelopmentTimeline />
      <BudgetPlans />
      <AllocationQuestion />
      <ProjectDevelopment />
      <IdeaVote />
      <ProjectShare />
      <ParticipatoryBudgeting />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import AllocationQuestion from "~/components/AllocateQuestion.vue";
import BudgetPlans from "~/components/budget/BudgetPlans.vue";
import DevelopmentTimeline from "~/components/DevelopmentTimeline.vue";
import ProjectShare from "~/components/ProjectShare.vue";
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
    ProjectShare,
    ParticipatoryBudgeting,
    IdeaVote,
  },
});
</script>
