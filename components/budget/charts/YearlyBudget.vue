<template>
  <VizChart>
    <div class="max-w-[400px] flex flex-col gap-4 justify-between">
      <p class="wv-b3 flex-grow text-center sm:text-left">
        งบยุทธศาสตร์ส่วนใหญ่ถูกใช้กับการสร้างเมืองปลอดภัย
        แต่ยังไม่พบการใช้งบในการสร้างเมืองประชาธิปไตยแบบมีส่วนร่วมเลย
      </p>
      <div class="block sm:hidden">
        <div>(Chart)</div>
      </div>
      <div>
        <StrategyLegend variant="yearly-budget" />
      </div>
    </div>
    <div class="w-full flex flex-col justify-between gap-4">
      <div class="hidden sm:block">(Chart)</div>
      <div class="flex justify-center sm:justify-end">
        <NuxtLink
          :to="{ path: 'explore', query: { select: 'YearlyBudget' } }"
          class="inline-block py-1 px-2 rounded border-wv-gray-1 border text-wv-gray-1 h-min"
        >
          สำรวจงบยุทธศาสตร์รายปีเพิ่มเติม
        </NuxtLink>
      </div>
    </div>
  </VizChart>
</template>

<script lang="ts">
import Vue from "vue";
import VizChart from "~/components/budget/charts/VizChartContainer.vue";
import StrategyLegend from "~/components/budget/StrategyLegend.vue";

interface YearlyBudgetData {}

export default Vue.extend({
  name: "YearlyBudget",
  components: { VizChart, StrategyLegend },
  data(): YearlyBudgetData {
    return {};
  },
});
</script>
