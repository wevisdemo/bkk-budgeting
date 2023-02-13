<template>
  <VizChart
    title="เปรียบเทียบการใช้งบฯ ในแต่ละปี"
    @chart="state => handleChartMode(state)"
  >
    <div>{{ isPercentage ? "Percentage Mode" : "Value Mode" }}</div>
    <NuxtLink
      :to="{ path: 'explore', query: { select: 'YearlyBudget' } }"
      class="py-[5px] px-[10px] rounded border-wv-gray-1 border text-wv-gray-1 w-fit ml-auto cursor-pointer"
    >
      สำรวจงบยุทธศาสตร์รายปีเพิ่มเติม
    </NuxtLink>
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
