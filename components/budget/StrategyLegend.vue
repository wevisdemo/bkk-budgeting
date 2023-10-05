<template>
  <div class="flex flex-col gap-2">
    <div class="grid gap-1">
      <div v-if="variant === typeYearlyBudget">
        <div class="flex gap-1 sm:items-center">
          <img src="~/assets/icons/box-dashed.svg" class="w-3 h-3" />
          <p class="wv-b6 text-wv-gray-1">งบทั้งหมดในแต่ละปี</p>
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
    <div class="flex flex-wrap lg:block text-start">
      <div
        v-for="(item, key) in navData()"
        :key="key"
        class="flex items-center space-x-2 pb-[5px] w-[50%] lg:w-full"
      >
        <div
          class="min-w-[10px] min-h-[10px] rounded-[2px]"
          :class="colorFilter(item.name)"
        />
        <div class="flex wv-b7 md:wv-b5 text-wv-gray-1">{{ item.name }}</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { PropType, defineComponent } from "vue";
import { navData } from "../expore/navData";
import { colorFilter } from "./utils";
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
  methods: {
    colorFilter,
    navData,
  },
});
</script>
