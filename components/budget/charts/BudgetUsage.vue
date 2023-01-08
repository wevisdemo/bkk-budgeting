<template>
  <VizChart
    title="เปรียบเทียบการใช้งบฯ ใน 68 หน่วยงาน"
    @chart="state => handleChartMode(state)"
  >
    <div>{{ isPercentage ? "Percentage Mode" : "Value Mode" }}</div>
  </VizChart>
</template>

<script lang="ts">
import Vue from "vue";
import VizChart from "~/components/budget/charts/VizChartContainer.vue";

interface YearlyBudgetDataProp {
  isPercentage: boolean;
}

export default Vue.extend({
  name: "YearlyBudget",
  components: { VizChart },
  data(): YearlyBudgetDataProp {
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
