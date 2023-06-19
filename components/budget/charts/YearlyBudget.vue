<template>
  <VizChart>
    <div class="flex">
      <div id="YearlyBudget" class="max-w-[400px] flex flex-col gap-4 justify-between">
        <p class="wv-b3 flex-grow text-center sm:text-left">
          <span class="font-bold">งบยุทธศาสตร์</span>ส่วนใหญ่ถูกใช้กับ<span
            class="text-wv-environment font-bold"
            >การพัฒนาสิ่งแวดล้อมยั่งยืน</span
          >
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
              :style="{
                height: `${calHeight(
                  totalBudget.filter(i => i.year === item.year)[0].amount,
                )}%`,
              }"
            >
              <div
                class="absolute top-0 translate-y-[-100%] wv-b7 text-gray-300 font-bold left-[50%] translate-x-[-50%]"
              >
                {{
                  convertMillion(
                    totalBudget.filter(i => i.year === item.year)[0].amount,
                  )
                }}
              </div>
            </div>
            <div class="flex flex-col-reverse w-full h-full relative justify-items-end">
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
              >
                <p
                  v-if="strategy === 'การพัฒนาสิ่งแวดล้อมยั่งยืน'"
                  class="absolute text-white wv-b6 font-bold top-[50%] translate-y-[-50%] left-[50%] translate-x-[-50%]"
                >
                  {{
                    calHeight(
                      item.strategies.filter(str => str.name === strategy)[0]?.amount,
                    ).toFixed(2)
                  }}%
                </p>
              </div>
                
              <div
                class="border-[3px] border-black rounded-[3px] absolute z-20 w-full"
                :style="{
                  height: `${calHeight(item.amount)}%`,
                }"
              ></div>
              <div class="wv-b5 font-bold mx-auto">
                {{ convertMillion(item.amount) }}
              </div>
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
      totalBudget: [
        { year: 61, amount: 78500000000 },
        { year: 62, amount: 80000000000 },
        { year: 63, amount: 83000000000 },
        { year: 64, amount: 75500000000 },
        { year: 65, amount: 78979446500 },
        { year: 66, amount: 79000000000 },
      ],
    };
  },
  mounted() {
    this.chartResponse = this.$store.getters["data/getChartData"]();
    console.log(this.chartResponse);
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
        Math.max(...this.totalBudget.map(o => o.amount)).toString(),
      );
      return (item / Number(totalAmount)) * 100;
    },
  },
});
</script>
