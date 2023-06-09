<template>
  <div
    v-if="chartData.years"
    class="max-w-[685px] flex-1 flex flex-col justify-between"
    id="wrapper-horizontal-barchart"
  >
    <div>{{ formatYAxis(chartData?.years) }}</div>
    <div class="flex justify-between items-center mb-6">
      <p class="wv-b4 font-bold">
        ใช้งบรวม {{ convertMillion(chartData.amount) }} ล้านบาท
      </p>
      <ModalDetails
        :handleModal="() => handleModal()"
        :isOpen="isOpen"
        :isSelectedYear="year => isSelectedYear(year)"
        page="strategy"
      >
        <div
          @click="handleModal"
          class="bg-black text-white w-fit wv-b6 px-[10px] py-[6px] rounded-[5px] cursor-pointer"
        >
          ดูรายการใช้งบ
        </div>
      </ModalDetails>
    </div>
    <ToggleUnit :toggle="() => toggle()" :isMillion="isMillion" />
    <div class="flex space-x-6 flex-1 mx-auto w-full h-[500px]">
      <div
        v-for="(d, index) in chartData.years"
        :key="index"
        class="flex flex-col-reverse flex-1"
      >
        <p class="wv-b5 text-center mt-2">’{{ d.year }}</p>
        <div
          v-for="(strategy, i) in strategyList()"
          :key="i"
          class="relative my-[0.5px]"
          @mouseenter="e => mouseEnter(e)"
          @mouseleave="mouseLeave"
          :id="strategy"
        >
          <div
            class="absolute inset-0 z-10 borderSubStrategy cursor-pointer wrapper-strategy"
            :class="colorFilter(strategy)"
            :id="'strategy-' + strategy"
            @click="() => handleStrategy(strategy)"
          />

          <div
            v-for="(subStrategy, key) in d.strategies.filter(
              d => d.name === strategy,
            )[0]?.substrategies"
            :key="key"
            :class="colorFilter(strategy)"
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
import { navData } from "~/components/expore/navData";

export default {
  components: { ToggleUnit, ModalDetails },
  data() {
    return {
      prevSelected: "",
      isOpen: false,
      isMillion: true,
    };
  },
  computed: {
    ...mapState(["strategyChoice", "chartSelected", "chartData"]),
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
      updateSelectYearStrategy: "updateSelectYearStrategy",
      updateStrategy: "updateStrategy",
    }),
    colorFilter,
    convertMillion,
    strategyList,
    handleModal() {
      this.isOpen = !this.isOpen;
    },
    toggle() {
      this.isMillion = !this.isMillion;
    },
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
      this.updateSubTitleModal(`เพื่อ "${strategy}""`);
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
        this.currentSelected = "";
      } else {
        this.fetchBySubStrategy(strategy);
        this.updateSubTitleModal(`เพื่อ "${strategy}""`);
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
    },
    async fetchByStrategy(strategy) {
      await getBudgetItems({
        strategy,
      }).then(response => {
        this.updateIsModalDetails(response);
      });
    },
    async fetchBySubStrategy(substrategy) {
      await getBudgetItems({
        substrategy,
      }).then(response => {
        this.updateIsModalDetails(response);
      });
    },
    isSelectedYear(year) {
      if (year?.value) {
        this.updateSelectYearStrategy(year);
        this.filterYears = {
          items: this.isModalDetails?.items?.filter(
            str => str.budgetYear === year.value,
          ),
          total: this.isModalDetails?.items?.filter(
            str => str.budgetYear === year.value,
          ).length,
        };
      } else {
        this.updateSelectYearStrategy({ label: "2561-2566", value: "" });
        this.filterYears = this.isModalDetails;
      }
    },
  },
  mounted() {
    console.log(this.chartData, "chartData");
  },
  watch: {
    strategyChoice(newValue) {
      const filterStrategy = navData().filter(d => d.name === newValue);
      const filterSubStrategy = navData().find(d =>
        d.substrategies.filter(s => s === newValue),
      );
      if (filterStrategy[0]) {
        this.handleStrategy(newValue);
      } else if (!filterStrategy[0] && filterSubStrategy && newValue) {
        this.handleSubStrategy(newValue);
      } else {
        this.updateIsModalDetails("");
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
#wrapper-horizontal-barchart {
  background: #ffffff;
  box-shadow: 0px 0px 45px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  padding: 20px;
}
</style>
