<template>
  <div class="flex flex-col gap-2">
    <div class="grid gap-1">
      <div v-if="variant === typeYearlyBudget">
        <div class="flex gap-1 sm:items-center">
          <img src="~/assets/icons/box-dashed.svg" class="w-3 h-3" />
          <p class="wv-b6 wv-bold">งบทั้งหมดในแต่ละปี</p>
        </div>
        <div class="flex gap-1 sm:items-center">
          <div
            class="w-3 h-3 border-2 border-black rounded-sm aspect-square mt-1 sm:mt-0"
          />
          <p class="wv-b6 wv-bold">งบที่ใช้ตามแผนยุทธศาสตร์ 7 ด้าน</p>
        </div>
      </div>
      <div v-else-if="variant === typeBudgetUsage">
        <p class="wv-b6 wv-bold">แผนยุทธศาสตร์ 7 ด้าน</p>
      </div>
    </div>
    <div class="flex flex-row sm:flex-col gap-4">
      <div>
        <div
          v-for="({ strategy, strategy_en }, strategyIndex) in strategies_top"
          :key="strategyIndex"
          class="flex gap-1 sm:items-center"
          :class="variant === typeYearlyBudget ? `pl-4` : ``"
        >
          <div
            class="w-3 h-3 rounded aspect-square mt-1 sm:mt-0"
            :class="`bg-wv-${strategy_en}`"
          />
          <p>{{ strategy }}</p>
        </div>
      </div>
      <div>
        <div
          v-for="({ strategy, strategy_en }, strategyIndex) in strategies_bottom"
          :key="strategyIndex"
          class="flex gap-1 sm:items-center"
        >
          <div
            class="w-3 h-3 rounded aspect-square mt-1 sm:mt-0"
            :class="`bg-wv-${strategy_en}`"
          />
          <p>{{ strategy }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { PropType, defineComponent } from "vue";
import { planData } from "~/data/plan-data";
import type { Plan } from "~/data/plan-data";

type VariantTypes = "yearly-budget" | "budget-usage";

interface StrategyLegendData {
  strategies_top: Plan[];
  strategies_bottom: Plan[];
  typeYearlyBudget: VariantTypes;
  typeBudgetUsage: VariantTypes;
}

export default defineComponent({
  name: "StrategyLegend",
  props: {
    variant: {
      type: String as PropType<VariantTypes>,
      required: true,
    },
  },
  data(): StrategyLegendData {
    return {
      strategies_top: planData.slice(0, 4),
      strategies_bottom: planData.slice(4, 8),
      typeYearlyBudget: "yearly-budget",
      typeBudgetUsage: "budget-usage",
    };
  },
});
</script>
