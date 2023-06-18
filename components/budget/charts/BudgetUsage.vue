<template>
  <VizChart>
    <div class="flex">
      <div
        id="OrganizeBudget"
        class="max-w-[400px] flex flex-col gap-4 justify-between"
      >
        <p class="wv-b3 flex-grow text-center sm:text-left">
          5 อันดับหน่วยงานที่ได้รับงบปีล่าสุด (25xx) สูงที่สุด จาก xx หน่วยงาน
        </p>
        <StrategyLegend variant="budget-usage" />
        <div></div>
      </div>
      <div class="w-full flex flex-col justify-between gap-4">
        <div>
          <div v-for="(item, key) in chartOrganize" :key="key" class="flex mb-5">
            <div class="wv-h8 text-gray-300 mr-5">
              {{ key + 1 }}
            </div>
            <div class="flex-1">
              <div class="flex justify-between w-full">
                <div class="wv-b4 font-bold">{{ item.nameOrganization }}</div>
                <div class="wv-b6">
                  <span class="font-bold"> {{ convertMillion(item.amount) }}</span>
                  ล้านบาท
                </div>
              </div>
              <div class="flex bg-gray-100">
                <div
                  v-for="strategy in strategyList()"
                  :key="strategy"
                  class="h-[10px]"
                  :style="{ width: drawChart(item, strategy) }"
                  :class="colorFilter(strategy)"
                ></div>
              </div>
            </div>
          </div>
        </div>
        <div class="flex justify-center sm:justify-end">
          <NuxtLink
            :to="{ path: 'explore', query: { select: 'OrganizeBudget' } }"
            class="inline-block py-1 px-2 rounded border-wv-gray-1 hover:bg-gray-500 hover:text-white border text-wv-gray-1 h-min"
          >
            สำรวจหน่วยงานที่เหลือ
          </NuxtLink>
        </div>
      </div>
    </div>
  </VizChart>
</template>

<script>
import Vue from "vue";
import VizChart from "~/components/budget/charts/VizChartContainer.vue";
import StrategyLegend from "~/components/budget/StrategyLegend.vue";
import { filterByOrganize } from "./filterBy";
import { convertMillion, colorFilter, strategyList } from "../utils";

export default Vue.extend({
  name: "OrganizeBudget",
  components: { VizChart, StrategyLegend },
  data() {
    return {
      chartOrganize: [],
    };
  },

  mounted() {
    this.chartOrganize = filterByOrganize(
      "งบมากไปน้อย",
      this.$store.getters["data/getChartDataGroupByOrganizations"](),
    ).slice(0, 5);
    console.log(this.chartOrganize);
  },
  methods: {
    convertMillion,
    filterByOrganize,
    colorFilter,
    strategyList,
    drawChart(item, strategy) {
      const matchStrategy = item.strategies.filter(i => i.name === strategy)[0];
      return (
        matchStrategy &&
        `${(matchStrategy.amount / this.chartOrganize[0].amount) * 100}%`
      );
    },
  },
});
</script>
