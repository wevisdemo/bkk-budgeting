<template>
  <div
    id=" wrapper-horizontal-barchart"
    class="flex space-x-6 max-w-[685px] max-h-[621px] flex-1 mx-auto"
  >
    {{ strategyChoice }}{{ subStrategyChoice }}
    <div v-for="(d, index) in data" :key="index" class="flex flex-col-reverse flex-1">
      ’{{ Object.keys(d)[0] }}
      <div v-for="(strategy, i) in Object.values(d)[0]" :key="i" class="relative">
        <div
          class="absolute inset-0 z-10 borderSubStrategy"
          :class="colorFilter(strategy.no)"
        />
        <div
          v-for="(subStrategy, key) in strategy.sub_strategy"
          :key="key"
          :class="colorFilter(strategy.no)"
          class="borderSubStrategy"
          :style="`height: ${heightChart(subStrategy.amount)}px`"
        ></div>
      </div>
    </div>
  </div>
</template>

<script>
import _ from "lodash";
import { mapState } from "vuex";
export default {
  props: {
    data: {
      default: [],
    },
  },
  data() {
    return {};
  },
  computed: {
    ...mapState(["strategyChoice", "subStrategyChoice"]),
    summaryBudgets() {
      return this.data.map(d =>
        _.sumBy(Object.values(d)[0], strategy => strategy.amount),
      );
    },
    maxBudgets() {
      return _.max(this.summaryBudgets).toString();
    },
    roundBudget() {
      const twoDigit = this.maxBudgets.slice(0, 2);
      const startNumber = Number((twoDigit / 10).toFixed()) + 1;
      const digits = this.maxBudgets.length - 1;
      const zero = "0";
      return startNumber + zero.repeat(digits);
    },
  },
  mounted() {},
  methods: {
    sumByStrategy(subStrategy) {
      return divideMillion(_.sumBy(subStrategy, sub => sub.amount));
    },
    colorFilter(strategy) {
      if (strategy === 1) return "bg-wv-safe";
      if (strategy === 2) return "bg-wv-environment";
      if (strategy === 3) return "bg-wv-equality";
      if (strategy === 4) return "bg-wv-connectivity";
      if (strategy === 5) return "bg-wv-democracy";
      if (strategy === 6) return "bg-wv-economic";
      if (strategy === 7) return "bg-wv-management";
    },
    divideMillion(num) {
      return num / 1000000;
    },
    heightChart(amount) {
      const percent = (Number(amount / this.roundBudget) * 100).toFixed(2);
      const height = Number((percent * 621) / 100).toFixed(2);

      return height < 5 ? 5 : height;
    },
  },
};
</script>

<style lang="scss" scoped>
.borderSubStrategy {
  box-shadow: 0px 0px 0px 0.75px rgba(255, 255, 255, 1);
  -webkit-box-shadow: 0px 0px 0px 0.75px rgba(255, 255, 255, 1);
  -moz-box-shadow: 0px 0px 0px 0.75px rgba(255, 255, 255, 1);
  border-radius: 3px;
  box-sizing: border-box;
}
</style>
