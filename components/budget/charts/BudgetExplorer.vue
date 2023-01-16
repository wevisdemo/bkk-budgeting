<template>
  <VizChart
    title="สำรวจการใช้งบฯ ผ่านคีย์เวิร์ด"
    @chart="state => handleChartMode(state)"
  >
    <div>{{ isPercentage ? "Percentage Mode" : "Value Mode" }}</div>
  </VizChart>
</template>

<script lang="ts">
import Vue from "vue";
import VizChart from "~/components/budget/charts/VizChartContainer.vue";

interface YearlyBudgetData {
  isPercentage: boolean;
}

export default Vue.extend({
  name: "YearlyBudget",
  components: { VizChart },
  data(): YearlyBudgetData {
    return {
      isPercentage: false,
    };
  },
  methods: {
    handleChartMode(state: boolean) {
      this.isPercentage = state;
    },
  },
});
</script>

<style lang="scss"></style>
