<template>
  <VizChart>
    <div class="flex">
      <div id="YearlyBudget" class="max-w-[400px] flex flex-col gap-4 justify-between">
        <p class="wv-b3 flex-grow text-center sm:text-left">
          งบยุทธศาสตร์ส่วนใหญ่ถูกใช้กับการสร้างเมืองปลอดภัย
          แต่ยังไม่พบการใช้งบในการสร้างเมืองประชาธิปไตยแบบมีส่วนร่วมเลย
        </p>

        <div>
          <StrategyLegend variant="yearly-budget" />
        </div>
      </div>
      <div class="flex-1">
        <div class="flex h-[580px] w-full justify-between">
          <div
            v-for="(item, key) in chartResponse.years"
            :key="key"
            class="w-full relative flex items-end ml-[15px]"
          >
            <div
              class="border-gray-300 border-[2px] border-dashed rounded-[5px] absolute w-full flex-1"
              :style="{ height: `${calHeight(item.amount)}%` }"
            >
              <div
                class="absolute top-0 translate-y-[-100%] wv-b7 text-gray-300 font-bold left-[50%] translate-x-[-50%]"
              >
                {{ convertMillion(item.amount) }}
              </div>
            </div>
            <div class="flex flex-col-reverse w-full h-full justify-items-end">
              <div
                class="relative z-20 w-full"
                v-for="strategy in strategyList()"
                :key="strategy"
                :class="colorFilter(strategy)"
                :style="{
                  height: `${calHeight(
                    item.strategies.filter(str => str.name === strategy)[0]?.amount,
                  )}%`,
                }"
              ></div>
            </div>
          </div>
        </div>
        <div class="w-full flex flex-col justify-between gap-4 mt-5">
          <div class="flex justify-center sm:justify-end">
            <NuxtLink
              :to="{ path: 'explore', query: { select: 'YearlyBudget' } }"
              class="inline-block py-1 px-2 rounded border-wv-gray-1 hover:bg-gray-500 hover:text-white border text-wv-gray-1 h-min"
            >
              สำรวจงบยุทธศาสตร์รายปีเพิ่มเติม
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </VizChart>
</template>

<script>
import Vue from "vue";
import VizChart from "~/components/budget/charts/VizChartContainer.vue";
import StrategyLegend from "~/components/budget/StrategyLegend.vue";
import { convertMillion, strategyList, colorFilter } from "../utils";

export default Vue.extend({
  name: "YearlyBudget",
  components: { VizChart, StrategyLegend },
  data() {
    return {
      chartResponse: { amount: 0, years: [] },
    };
  },
  mounted() {
    this.chartResponse = this.$store.getters["data/getChartData"]();
  },
  methods: {
    convertMillion,
    strategyList,
    colorFilter,
    roundBudget(items) {
      const startNumber = Number(items?.slice(0, 1)) + 1;
      const digits = items?.length - 1;
      const zero = "0";
      return startNumber + zero.repeat(digits);
    },
    calHeight(item) {
      const totalAmount = this.roundBudget(
        Math.max(...this.chartResponse.years.map(o => o.amount)).toString(),
      );
      return (item / Number(totalAmount)) * 100;
    },
  },
});
</script>
