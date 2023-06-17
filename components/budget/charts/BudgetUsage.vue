<template>
  <VizChart>
    <div id="OrganizeBudget" class="max-w-[400px] flex flex-col gap-4 justify-between">
      <p class="wv-b3 flex-grow text-center sm:text-left">
        5 อันดับหน่วยงานที่ได้รับงบปีล่าสุด (25xx) สูงที่สุด จาก xx หน่วยงาน
      </p>
      <div class="block sm:hidden">
        <div>(Chart)</div>
      </div>
      <div>
        <StrategyLegend variant="budget-usage" />
      </div>
    </div>
    <div class="w-full flex flex-col justify-between gap-4">
      <div class="hidden sm:block">(Chart)</div>
      <div class="flex justify-center sm:justify-end">
        <NuxtLink
          :to="{ path: 'explore', query: { select: 'OrganizeBudget' } }"
          class="inline-block py-1 px-2 rounded border-wv-gray-1 border text-wv-gray-1 h-min"
        >
          สำรวจหน่วยงานที่เหลือ
        </NuxtLink>
      </div>
    </div>
  </VizChart>
</template>

<script lang="ts">
import Vue from "vue";
import VizChart from "~/components/budget/charts/VizChartContainer.vue";
import StrategyLegend from "~/components/budget/StrategyLegend.vue";

interface BudgetUsageData {}

export default Vue.extend({
  name: "OrganizeBudget",
  components: { VizChart, StrategyLegend },
  data(): BudgetUsageData {
    return {};
  },
});
</script>
