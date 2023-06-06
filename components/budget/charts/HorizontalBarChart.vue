<template>
  <div
    v-if="chartData.years"
    class="max-w-[685px] flex-1 flex flex-col justify-between"
    id="wrapper-horizontal-barchart"
  >
    <div>{{ formatYAxis(chartData?.years) }}</div>
    <div class="flex justify-between items-center">
      <p class="wv-b4 font-bold">
        ใช้งบรวม {{ convertMillion(chartData.amount) }} ล้านบาท
      </p>
      <ModalDetails />
    </div>
    <ToggleUnit isMillion />
    <div class="flex space-x-6 flex-1 mx-auto w-full h-[500px]">
      <div
        v-for="(d, index) in chartData.years"
        :key="index"
        class="flex flex-col-reverse flex-1"
      >
        <p class="wv-b5 text-center mt-2">’{{ d.year }}</p>
        <div
          v-for="(strategy, i) in d.strategies"
          :key="i"
          class="relative my-[0.5px]"
          @mouseenter="e => mouseEnter(e)"
          @mouseleave="mouseLeave"
          :id="strategy.name"
        >
          <div
            class="absolute inset-0 z-10 borderSubStrategy cursor-pointer wrapper-strategy"
            :class="colorFilter(strategy.name)"
            :id="'strategy-' + strategy.name"
            @click="() => handleStrategy(strategy.name)"
          />
          <div
            v-for="(subStrategy, key) in strategy.substrategies"
            :key="key"
            :class="colorFilter(strategy.name)"
            :id="'subStrategy-' + replaceDotName(subStrategy.name)"
            class="borderSubStrategy cursor-pointer wrapper-sub-strategy"
            :style="`height: ${heightChart(subStrategy.amount, d.amount)}px`"
            @click="() => handleSubStrategy(subStrategy.name)"
            @mouseenter="e => mouseEnter(e, 'isSubStrategy')"
            @mouseleave="e => mouseLeave(e, 'isSubStrategy')"
          ></div>
        </div>
      </div>
    </div>
  </div>
  <div v-else class="min-w-[685px] min-h-[550px]" id="wrapper-horizontal-barchart" />
</template>

<script>
import _ from "lodash";
import { mapState, mapActions } from "vuex";
import {
  colorFilter,
  convertMillion,
  strategyList,
  handleAddSelected,
  handleRemoveSelected,
} from "../utils";
import ModalDetails from "./ModalDetails.vue";
import ToggleUnit from "./ToggleUnit.vue";
import { getBudgetItems } from "~/data/get-budget-items";
export default {
  components: { ToggleUnit, ModalDetails },
  data() {
    return {
      prevSelected: "",
    };
  },
  computed: {
    ...mapState(["strategyChoice", "chartSelected", "chartData", "isMillion"]),
    maxBudgets() {
      return Math.max(...this.chartData.years.map(o => o.amount)).toString();
    },
    roundBudget() {
      const startNumber = Number(this.maxBudgets.slice(0, 1)) + 1;
      const digits = this.maxBudgets.length - 1;
      const zero = "0";
      return startNumber + zero.repeat(digits);
    },
  },
  methods: {
    ...mapActions({
      updateChartSelected: "updateChartSelected",
      updateIsModalDetails: "updateIsModalDetails",
      updateSubTitleModal: "updateSubTitleModal",
    }),
    colorFilter,
    convertMillion,
    strategyList,
    sumByStrategy(subStrategy) {
      return divideMillion(_.sumBy(subStrategy, sub => sub.amount));
    },
    divideMillion(num) {
      return num / 1000000;
    },
    heightChart(amount, strategyAmount) {
      const divide = this.isMillion ? this.roundBudget : strategyAmount;
      const percent = Number(amount / divide) * 100;
      const height = Number((percent * 500) / 100);
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
      this.fetchByStrategy(strategy);
      this.updateSubTitleModal(`เพื่อ"${strategy}""`);
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
        this.updateSubTitleModal("ตามแผนยุทธศาสตร์ 7 ด้าน");
      } else {
        this.updateChartSelected(strategy);
      }
      this.prevSelected = this.currentSelected;
    },
    replaceDotName(name) {
      return name?.toString().replace(/\./g, "-");
    },
    formatYAxis() {
      // const amounts = data.map(object => {
      //   return object.amount;
      // });
      // const max = Math.max(...amounts);
      console.log("formatYAxis");
    },
    async fetchByStrategy(strategy) {
      await getBudgetItems({
        strategy,
      }).then(response => {
        this.updateIsModalDetails(response);
      });
    },
  },
  watch: {
    strategyChoice(newValue) {
      if (strategyList().includes(newValue)) {
        this.handleStrategy(newValue);
      } else {
        this.updateIsModalDetails("");
        handleRemoveSelected(".wrapper-strategy", "grayScale");
        handleRemoveSelected(".wrapper-strategy", "hidden");
      }
      // if (newValue.toString().length > 1) {
      //   this.updateIsModalDetails("b");
      //   this.handleSubStrategy(newValue);
      // } else if (strategyList.includes(newValue)) {
      //   this.handleStrategy(newValue);
      //   this.updateIsModalDetails("a");
      // } else {
      //   this.updateIsModalDetails("");
      //   handleRemoveSelected(".wrapper-strategy", "grayScale");
      //   handleRemoveSelected(".wrapper-strategy", "hidden");
      // }
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
#wrapper-horizontal-barchart {
  background: #ffffff;
  box-shadow: 0px 0px 45px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  padding: 20px;
}
</style>
