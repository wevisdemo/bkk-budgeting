<template>
  <div
    id=" wrapper-horizontal-barchart"
    class="flex space-x-6 max-w-[685px] h-[621px] flex-1 mx-auto"
  >
    <div v-for="(d, index) in data" :key="index" class="flex flex-col-reverse flex-1">
      <p class="wv-b5 text-center mt-2">’{{ Object.keys(d)[0] }}</p>
      <div
        v-for="(strategy, i) in Object.values(d)[0]"
        :key="i"
        class="relative my-[0.5px]"
        @mouseenter="e => mouseEnter(e)"
        @mouseleave="mouseLeave"
        :id="strategy.no"
      >
        <div
          class="absolute inset-0 z-10 borderSubStrategy cursor-pointer wrapper-strategy"
          :class="colorFilter(strategy.no)"
          :id="'strategy-' + strategy.no"
          @click="() => handleStrategy(strategy.no)"
        />
        <div
          v-for="(subStrategy, key) in strategy.sub_strategy"
          :key="key"
          :class="colorFilter(strategy.no)"
          :id="'subStrategy-' + replaceDotName(subStrategy.no)"
          class="borderSubStrategy cursor-pointer wrapper-sub-strategy"
          :style="`height: ${heightChart(subStrategy.amount)}px`"
          @click="() => handleSubStrategy(subStrategy.no)"
          @mouseenter="e => mouseEnter(e, 'isSubStrategy')"
          @mouseleave="e => mouseLeave(e, 'isSubStrategy')"
        ></div>
      </div>
    </div>
  </div>
</template>

<script>
import _ from "lodash";
import { mapState, mapActions } from "vuex";
import { colorFilter } from "../utils";
import { handleAddSelected, handleRemoveSelected } from "~/components/budget/utils";

export default {
  props: {
    data: {
      default: [],
    },
  },
  data() {
    return {
      prevSelected: "",
      currentSelected: "",
    };
  },

  computed: {
    ...mapState(["strategyChoice", "chartSelected"]),
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
  methods: {
    ...mapActions({
      updateChartSelected: "updateChartSelected",
    }),
    colorFilter,
    sumByStrategy(subStrategy) {
      return divideMillion(_.sumBy(subStrategy, sub => sub.amount));
    },
    divideMillion(num) {
      return num / 1000000;
    },
    heightChart(amount) {
      const percent = (Number(amount / this.roundBudget) * 100).toFixed(2);
      const height = Number((percent * 621) / 100).toFixed(2);
      return height;
    },

    mouseEnter(e, isSubStrategy) {
      const elemId = e.target.id;

      isSubStrategy
        ? handleAddSelected("#" + elemId, "hoverActive")
        : handleAddSelected("#strategy-" + elemId, "hoverActive");
    },
    mouseLeave(e, isSubStrategy) {
      const elemId = e.target.id;
      isSubStrategy
        ? handleRemoveSelected("#" + elemId, "hoverActive")
        : handleRemoveSelected("#strategy-" + elemId, "hoverActive");
    },
    handleStrategy(strategy) {
      handleRemoveSelected(".wrapper-sub-strategy", "grayScale");
      handleAddSelected(".wrapper-strategy", "grayScale");
      handleRemoveSelected(".wrapper-strategy", "hidden");
      handleAddSelected("#strategy-" + strategy, "hidden");
      handleRemoveSelected("#strategy-" + strategy, "grayScale");
      this.updateChartSelected(strategy);
    },
    handleSubStrategy(strategy) {
      this.currentSelected = strategy;
      handleAddSelected(".wrapper-sub-strategy", "grayScale");
      handleRemoveSelected(
        "#subStrategy-" + this.replaceDotName(strategy),
        "grayScale",
      );
      if (this.prevSelected === this.currentSelected) {
        this.updateChartSelected();
        handleRemoveSelected(".wrapper-strategy", "grayScale");
        handleRemoveSelected(".wrapper-strategy", "hidden");
      } else {
        this.updateChartSelected(strategy);
      }
      this.prevSelected = this.currentSelected;
    },
    replaceDotName(name) {
      return name.toString().replace(/\./g, "-");
    },
  },
  watch: {
    strategyChoice(newValue) {
      if (newValue.toString().length > 1) {
        this.handleSubStrategy(newValue);
      } else if (newValue.toString().length === 1) {
        this.handleStrategy(newValue);
      } else {
        handleRemoveSelected(".wrapper-strategy", "grayScale");
        handleRemoveSelected(".wrapper-strategy", "hidden");
      }
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
.hoverActive {
  @apply border-[2px] border-black;
}
.grayScale {
  @apply bg-wv-gray-4;
}
</style>
