<template>
  <div
    v-if="chartData.years"
    id="wrapper-horizontal-barchart"
    class="max-w-[685px] h-fit flex-1 flex flex-col justify-between w-full mx-auto"
  >
    <div class="flex justify-between items-center mb-6">
      <p class="wv-b4 font-bold">
        ใช้งบรวม {{ convertMillion(summaryAnount) || 0 }} ล้านบาท
      </p>
      <ModalDetails
        :handle-modal="() => handleModal()"
        :is-open="isOpen"
        :is-selected-year="year => isSelectedYear(year)"
        page="strategy"
      >
        <div
          class="bg-black flex text-white w-fit wv-b6 px-[10px] py-[6px] rounded-[5px] cursor-pointer"
          @click="handleModal"
        >
          <img src="~/assets/icons/seemore.svg" class="mr-2" />
          ดูรายการใช้งบ
        </div>
      </ModalDetails>
    </div>
    <ToggleUnit :toggle="() => toggle()" :is-million="isMillion" />
    <div
      class="flex pl-[35px] md:pl-[50px] lg:pl-[25px] flex-1 mx-auto w-full md:h-[500px] md:min-h-[500px] md:max-h-[500px] min-h-[250px] h-[250px] relative mt-5"
    >
      <div class="absolute inset-0 flex flex-col-reverse mt-[0.5px]">
        <div
          v-for="item in formatYAxis()"
          :key="item.id"
          class="flex-1 relative border-t-[0.5px] border-t-wv-gray-3"
        >
          <div class="translate-y-[-50%] absolute top-0 bg-white text-wv-gray-1 wv-b7">
            {{ item.toLocaleString("en-US", {}) }}
          </div>
        </div>
      </div>
      <div
        v-for="(d, index) in chartData.years"
        :key="index"
        class="flex flex-col-reverse flex-1 pl-[5px] lg:pl-[25px] relative w-full"
      >
        <div
          class="wv-b5 text-center mt-2 absolute pl-[5px] lg:pl-[25px] bottom-[-5px] translate-y-[100%] left-[50%] translate-x-[-51%]"
        >
          ’{{ d.year }}
        </div>

        <div
          v-for="(strategy, i) in navData()"
          :id="strategy.name"
          :key="i"
          class="relative"
          :style="`height: ${heightChart(
            d.strategies.filter(d => d.name === strategy.name)[0]?.amount,
            d.amount,
          )}`"
          @mouseenter="e => mouseEnter(e)"
          @mouseleave="mouseLeave"
        >
          <div
            :id="'strategy-' + strategy.name"
            class="borderSubStrategy cursor-pointer wrapper-strategy z-10 absolute inset-0 h-full"
            :class="colorFilter(strategy.name)"
            @click="() => handleStrategy(strategy.name)"
          ></div>
          <div
            :id="'strategy-amount-' + strategy.name"
            class="absolute inset-0 h-full wv-b7 font-bold wrapper-amount-strategy pointer-events-none"
          >
            <p
              v-if="chartSelected === strategy.name"
              class="absolute top-0 translate-y-[-100%] left-[50%] translate-x-[-50%] z-40"
            >
              {{
                isMillion
                  ? convertMillion(
                      d.strategies.filter(d => d.name === strategy.name)[0]?.amount ||
                        0,
                    )
                  : `${(
                      (d.strategies.filter(d => d.name === strategy.name)[0]?.amount /
                        d.amount) *
                        100 || 0
                    ).toFixed()}%`
              }}
            </p>
          </div>

          <div
            v-for="subStrategy in strategy.substrategies"
            v-if="pickSubStrategy(d.strategies, strategy.name, subStrategy)"
            :key="subStrategy"
            :id="
              'subStrategy-' +
              pickSubStrategy(d.strategies, strategy.name, subStrategy)?.name
            "
            :style="`height: ${
              (pickSubStrategy(d.strategies, strategy.name, subStrategy)?.amount /
                d.strategies.filter(d => d.name === strategy.name)[0]?.amount) *
              100
            }%`"
            :class="colorFilter(strategy.name)"
            class="borderSubStrategy cursor-pointer w-full wrapper-sub-strategy relative h-full"
            @click="
              () =>
                handleSubStrategy(
                  pickSubStrategy(d.strategies, strategy.name, subStrategy)?.name,
                )
            "
            @mouseenter="e => mouseEnter(e, 'isSubStrategy')"
            @mouseleave="e => mouseLeave(e, 'isSubStrategy')"
          >
            <div
              v-if="
                chartSelected ===
                  pickSubStrategy(d.strategies, strategy.name, subStrategy)?.name &&
                pickSubStrategy(d.strategies, strategy.name, subStrategy)
              "
              class="absolute top-0 t wv-b7 translate-y-[-100%] left-[50%] translate-x-[-50%] font-bold pointer-events-none"
            >
              {{
                isMillion
                  ? convertMillion(
                      pickSubStrategy(d.strategies, strategy.name, subStrategy)?.amount,
                    )
                  : `${
                      (
                        (pickSubStrategy(d.strategies, strategy.name, subStrategy)
                          ?.amount /
                          d.amount) *
                        100
                      ).toFixed(0) + "%"
                    }`
              }}
            </div>
          </div>
        </div>

        <div
          v-if="!chartSelected && isMillion"
          class="relative wv-b7 font-bold text-center"
        >
          <div class="absolute translate-y-[-100%] left-[50%] translate-x-[-50%]">
            {{ convertMillion(d.amount) }}
          </div>
        </div>
      </div>
    </div>
  </div>
  <div
    v-else
    id="wrapper-horizontal-barchart "
    class="lg:min-w-[685px] min-h-[550px] h-fit"
  />
</template>

<script>
import _ from "lodash";
import { mapState, mapActions } from "vuex";
import {
  colorFilter,
  convertMillion,
  handleAddSelected,
  handleRemoveSelected,
} from "../utils";
import ModalDetails from "./ModalDetails.vue";
import ToggleUnit from "./ToggleUnit.vue";
import { navData } from "~/components/expore/navData";

export default {
  components: { ToggleUnit, ModalDetails },
  data() {
    return {
      prevSelected: "",
      isOpen: false,
      isMillion: true,
      summaryAnount: 0,
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
    navData,
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
      return percent + "%";
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
      this.currentSelected = strategy;
      handleRemoveSelected(".wrapper-sub-strategy", "z-[20]");
      handleRemoveSelected(".wrapper-sub-strategy", "grayScale");
      handleAddSelected(".wrapper-strategy", "grayScale");
      handleRemoveSelected(".wrapper-strategy", "hidden");
      if (strategy !== "ไม่พบข้อมูล") {
        handleAddSelected("#strategy-" + strategy, "hidden");
        const data = this.$store.getters["data/getBudgetItems"]({ strategy }).items;
        this.summaryAnount = _.sumBy(data, "amount");
      } else {
        this.summaryAnount = this.chartData.amount;
      }
      this.updateChartSelected(strategy);
      this.fetchByStrategy(strategy);
      strategy === "ไม่พบข้อมูล"
        ? this.updateSubTitleModal(`"${strategy}"`)
        : this.updateSubTitleModal(`เพื่อ "${strategy}""`);
      this.prevSelected = this.currentSelected;
    },
    handleSubStrategy(strategy) {
      this.currentSelected = strategy;
      handleAddSelected(".wrapper-sub-strategy", "grayScale");
      handleRemoveSelected(`[id='subStrategy-${strategy}']`, "grayScale");
      if (this.prevSelected === this.currentSelected) {
        this.updateChartSelected();
        handleRemoveSelected(".wrapper-sub-strategy", "z-[20]");
        handleRemoveSelected(".wrapper-strategy", "grayScale");
        handleRemoveSelected(".wrapper-strategy", "hidden");
        this.updateSubTitleModal("ตามแผนยุทธศาสตร์ 7 ด้าน");
        this.currentSelected = "";
        this.summaryAnount = this.chartData.amount;
      } else {
        const data = this.$store.getters["data/getBudgetItems"]({
          substrategy: strategy,
        }).items;
        this.summaryAnount = _.sumBy(data, "amount");
        handleRemoveSelected(".wrapper-sub-strategy", "z-[20]");
        handleAddSelected(`[id='subStrategy-${strategy}']`, "z-[20]");
        this.fetchBySubStrategy(strategy);
        strategy === "ไม่พบข้อมูล"
          ? this.updateSubTitleModal(`"${strategy}"`)
          : this.updateSubTitleModal(`เพื่อ "${strategy}""`);
        this.updateChartSelected(strategy);
      }
      this.prevSelected = this.currentSelected;
    },

    formatYAxis() {
      const result = [...Array(5)].map(
        (_, index) => ((parseInt(this.roundBudget) / 5) * (index + 1)) / 1000000,
      );
      const percent = [...Array(5)].map((_, index) => (100 / 5) * (index + 1));
      return this.isMillion ? [...result] : [...percent];
    },
    fetchByStrategy(strategy) {
      const response = this.$store.getters["data/getBudgetItems"]({ strategy });
      this.updateIsModalDetails(response);
    },
    fetchBySubStrategy(substrategy) {
      const response = this.$store.getters["data/getBudgetItems"]({ substrategy });
      this.updateIsModalDetails(response);
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
        this.updateSelectYearStrategy({ label: "2561-2567", value: "" });
        this.filterYears = this.isModalDetails;
      }
    },
    pickSubStrategy(data, stra, sub) {
      return data
        .filter(d => d.name === stra)[0]
        ?.substrategies.filter(s => s.name === sub)[0];
    },
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
        this.updateIsModalDetails(this.$store.getters["data/getBudgetItems"]());
        this.updateSubTitleModal(`ตามแผนยุทธศาสตร์ 7 ด้าน`);
        this.updateChartSelected();
        handleRemoveSelected(".wrapper-strategy", "grayScale");
        handleRemoveSelected(".wrapper-strategy", "hidden");
        this.summaryAnount = this.chartData.amount;
      }
    },
  },
  mounted() {
    this.summaryAnount = this.chartData.amount;
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
  @apply px-[20px] pt-[20px] py-[40px];
}
</style>
