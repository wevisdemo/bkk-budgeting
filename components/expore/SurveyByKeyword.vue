<template>
  <div class="mb-5">
    <p class="wv-b7 text-wv-gray-1 text-center my-[30px]">
      <span class="font-bold">หมายเหตุ</span> :
      คียเวิร์ดเหล่านี้เป็นการค้นหาและตัดคำเบื้องต้นโดยคอมพิวเตอร์
      โดยรวบรวมจากทุกข้อมูลที่มีคำนั้นปรากฎ โปรดตรวจสอบบริบทของคำก่อนการใช้งาน
    </p>

    <div class="flex">
      <div class="w-[325px] h-fit border-2 border-black rounded-[5px] p-[22px]">
        <input
          v-model="data"
          type="text"
          class="border-b border-b-black w-full wv-b5 mb-3"
          placeholder="พิมพ์คีย์เวิร์ด"
        />
        <div class="flex justify-between wv-b7 mb-[10px]">
          <div>เรียงตาม</div>
          <p class="opacity-50">จำนวนที่พบ</p>
        </div>
        <div
          v-for="(item, index) in filterKeyword.slice(0, 50)"
          :key="index"
          class="flex justify-between py-[2.5px] px-[10px] rounded-[5px] cursor-pointer"
          :class="
            selectedKey.Word === item.Word
              ? 'text-white bg-black '
              : 'hover:bg-wv-gray-4'
          "
          @click="() => selectKey(item)"
        >
          <div class="flex items-center">
            <div
              class="w-[10px] h-[10px] rounded-full border border-wv-gray-2 mr-[5px]"
            >
              <img
                v-if="selectedKey.Word === item.Word"
                src="~/assets/icons/selected.svg"
                alt="selected"
                class="w-full"
              />
            </div>
            <p class="wv-b5 font-bold">{{ item.Word }}</p>
          </div>
          <p class="wv-b7 opacity-50">{{ item.Count }}</p>
        </div>
      </div>
      <div class="ml-5 px-5 pt-5 pb-10 borderKey flex-1 h-fit" v-if="chartData.years">
        <div class="flex justify-between">
          <div>
            <p class="wv-h8 font-bold">{{ selectedKey.Word }}</p>
            <p class="wv-b5">
              พบใน
              <span class="font-bold">{{
                rawData?.total?.toLocaleString("en-US", {})
              }}</span>
              รายการ ใช้งบรวม
              <span class="font-bold">{{ convertMillion(totalFilterAmout) }}</span>
              ล้านบาท ({{ ((totalFilterAmout / chartData.amount) * 100).toFixed() }}%)
            </p>
          </div>
          <ModalDetails
            :handle-modal="() => handleModal()"
            :is-open="isOpen"
            page="keyword"
          >
            <div
              class="bg-black text-white w-fit wv-b6 px-[10px] py-[6px] rounded-[5px] cursor-pointer"
              @click="handleModal"
            >
              ดูรายการใช้งบ
            </div>
          </ModalDetails>
        </div>
        <!-- dropdown÷ -->
        <div class="flex items-center my-3 wv-b5">
          โดย
          <el-select v-model="selectFilter" placeholder="Select" class="ml-2">
            <el-option
              v-for="item in filterOrganize"
              :key="item"
              :label="item"
              :value="item"
            >
            </el-option>
          </el-select>
        </div>
        <!--  -->
        <ToggleUnit :toggle="() => toggle()" :isMillion="isMillion" />
        <div class="h-[500px] mt-10">
          <div class="flex h-full items-end relative">
            <div
              v-for="(item, key) in itemsChart.years"
              :key="key"
              v-if="itemsChart"
              class="flex-1 ml-[25px] flex flex-col-reverse items-center relative z-10 h-full"
            >
              <div
                class="absolute bottom-0 wv-b5 translate-y-[120%] left-[50%] translate-x-[-50%] z-20"
              >
                `{{ key }}
              </div>

              <div
                v-if="item.organize[selectFilter] && selectFilter !== filterOrganize[0]"
                class="relative z-20 w-full"
                v-for="strategy in strategyList()"
                :key="strategy"
                :class="colorFilter(strategy)"
                :style="{
                  height: calHeight(
                    displayOrganizeValue(item.organize[selectFilter], strategy),
                    item.amount,
                  ),
                }"
              ></div>
              <div
                v-if="selectFilter === filterOrganize[0] && item.all[strategy]"
                class="relative z-20 w-full"
                v-for="strategy in strategyList()"
                :key="strategy"
                :class="colorFilter(strategy)"
                :style="{
                  height: calHeight(item.all[strategy], item.amount),
                }"
              ></div>
              <!--  number -->
              <div
                class="z-[20] wv-b7 font-bold"
                v-if="isMillion && selectFilter === filterOrganize[0]"
              >
                {{ convertMillion(item.amount) }}
              </div>
              <div
                class="z-[20] wv-b7 font-bold"
                v-if="isMillion && selectFilter !== filterOrganize[0]"
              >
                {{ convertMillion(displayAmoutOrganize(item.organize[selectFilter])) }}
              </div>
              <div
                class="z-[20] wv-b7 font-bold absolute top-0 translate-y-[-100%]"
                v-if="!isMillion && selectFilter === filterOrganize[0]"
              >
                {{ `100%` }}
              </div>
              <div
                class="z-[20] wv-b7 font-bold"
                v-if="!isMillion && selectFilter !== filterOrganize[0]"
              >
                {{
                  (
                    (displayAmoutOrganize(item.organize[selectFilter]) / item.amount) *
                    100
                  ).toFixed(2)
                }}%
              </div>

              <!--  -->
              <div
                class="flex absolute bottom-0 w-full h-full items-end"
                v-if="!(selectFilter !== filterOrganize[0] && isMillion)"
              >
                <div
                  :key="key"
                  class="bg-wv-gray-4 flex-1 ]"
                  :style="{
                    height: isMillion
                      ? calHeight(displayMaxAmout(key), item.amount)
                      : '100%',
                  }"
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import _ from "lodash";
import { mapState, mapActions } from "vuex";
import { convertMillion, colorFilter, strategyList } from "../budget/utils";
import ToggleUnit from "../budget/charts/ToggleUnit.vue";
import { keywords } from "~/data/budgets/keywords";
import ModalDetails from "~/components/budget/charts/ModalDetails.vue";

export default {
  components: {
    ToggleUnit,
    ModalDetails,
  },
  computed: {
    ...mapState(["chartData"]),
  },
  data() {
    return {
      data: "โครงการ",
      filterKeyword: "",
      selectedKey: {},
      itemsChart: [],
      isMillion: true,
      selectFilter: "",
      rawData: {},
      totalFilterAmout: 0,
      filterOrganize: [],
      isOpen: false,
    };
  },
  watch: {
    data(newValue) {
      const result = keywords().filter(d => d.Word.toString().includes(newValue));
      this.filterKeyword = result;
    },
  },
  mounted() {
    this.filterKeyword = keywords();
    this.selectKey(keywords()[0]);
  },
  methods: {
    ...mapActions({
      updateIsModalDetails: "updateIsModalDetails",
      updateSubTitleModal: "updateSubTitleModal",
      updateSelectYearOrganize: "updateSelectYearOrganize",
    }),
    convertMillion,
    colorFilter,
    strategyList,
    keywords,
    handleModal() {
      this.isOpen = !this.isOpen;
    },
    maxBudgets() {
      return this.roundBudget(
        Math.max(...this.chartData.years.map(o => o.amount)).toString(),
      );
    },
    roundBudget(items) {
      const startNumber = Number(items?.slice(0, 1)) + 1;
      const digits = items.length - 1;
      const zero = "0";
      return startNumber + zero.repeat(digits);
    },
    displayAmoutOrganize(org) {
      return org ? _.sum(Object.values(org)) : 0;
    },
    toggle() {
      this.isMillion = !this.isMillion;
    },
    displayOrganizeValue(org, str) {
      return str in org ? org[str] : 0;
    },
    maxSelectedFilter() {
      const formatValue = _.chain(this.itemsChart.years)
        .mapValues(d => d.organize[this.selectFilter])
        .mapValues(s => ({ amount: s && _.sum(Object.values(s)) }))
        .value();
      return this.roundBudget(
        _.maxBy(Object.values(formatValue), "amount")?.amount.toString(),
      );
    },
    displayMaxAmout(year) {
      return this.chartData.years.filter(d => d.year === parseInt(year))[0].amount;
    },
    selectKey(item) {
      this.selectedKey = item;
      this.fetchbudgetItem(item);
    },
    calHeight(item, max) {
      const filterDefault = this.selectFilter === this.filterOrganize[0];
      const divideOrganize =
        !filterDefault && this.isMillion ? this.maxSelectedFilter() : this.maxBudgets();
      return this.isMillion
        ? `${(item / divideOrganize) * 100}%`
        : `${(item / max) * 100}%`;
    },
    fetchbudgetItem(item) {
      const response = this.$store.getters["data/getBudgetItems"]({
        keyword: item.Word,
      });
      this.itemsChart = {
        years: _.chain(response.items)
          .groupBy("budgetYear")
          .mapValues(d => ({
            amount: _.sumBy(
              response.items.filter(a => a.budgetYear === d[0].budgetYear),
              "amount",
            ),
            organize: _.chain(d)
              .groupBy("nameOrganization")
              .mapValues(s =>
                _.chain(s)
                  .groupBy("strategy")
                  .mapValues(s => _.sumBy(s, "amount"))
                  .value(),
              )
              .value(),
            all: _.chain(d)
              .groupBy("strategy")
              .mapValues(s => _.sumBy(s, "amount"))
              .value(),
          }))
          .value(),
        total: response.total,
      };
      this.rawData = response;
      this.totalFilterAmout = _.sumBy(response.items, "amount");
      const groupOrganize = Object.keys(_.groupBy(response.items, "nameOrganization"));
      this.filterOrganize = [`${groupOrganize.length} หน่วยงาน`, ...groupOrganize];
      this.selectFilter = this.filterOrganize[0];
      this.updateSelectYearOrganize({ label: "2561-2566", value: "" });
      this.updateIsModalDetails(response);
      this.updateSubTitleModal(
        `ที่มีคำว่า “${this.selectedKey.Word}” ในชื่อ ซึ่งของบโดย “${this.filterOrganize.length} หน่วยงาน”`,
      );
    },
  },
  watch: {
    data: {
      immediate: true,
      deep: false,
      handler(newValue) {
        const result = keywords().filter(d => d.Word.toString().includes(newValue));
        this.filterKeyword = result;
      },
    },
    selectFilter() {
      if (this.selectFilter !== this.filterOrganize[0]) this.maxSelectedFilter();
    },
  },
};
</script>

<style lang="scss">
.borderKey {
  background: #ffffff;
  box-shadow: 0px 0px 45px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
}
.el-select-dropdown__item.selected {
  @apply text-black;
}
</style>
