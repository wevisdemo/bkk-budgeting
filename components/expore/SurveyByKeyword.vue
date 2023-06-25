<template>
  <div class="relative">
    <p class="wv-b7 text-wv-gray-1 text-center my-[30px]">
      <span class="font-bold">หมายเหตุ</span> :
      คียเวิร์ดเหล่านี้เป็นการค้นหาและตัดคำเบื้องต้นโดยคอมพิวเตอร์
      โดยรวบรวมจากทุกข้อมูลที่มีคำนั้นปรากฎ โปรดตรวจสอบบริบทของคำก่อนการใช้งาน
    </p>
    <div
      v-if="$mq === 'md'"
      @click="handdleModalMobile"
      class="py-[10px] my-[10px] text-left flex justify-between wv-b5 border-black border w-[300px] mx-auto relative rounded-[5px] pl-8"
    >
      <img
        src="~/assets/images/searchIcon.svg"
        class="absolute top-[50%] left-0 translate-y-[-50%] ml-2"
      />
      {{ selectedKey.Word || "พิมพ์คีย์เวิร์ด" }}
    </div>
    <div class="flex flex-col lg:flex-row">
      <div
        v-if="($mq === 'md' && mobileKeyword) || $mq === 'lg'"
        class="lg:w-[325px] lg:h-fit border-2 border-black rounded-[5px] p-[22px] fixed h-screen lg:relative inset-0 bg-white z-[20]"
      >
        <img
          @click="handdleModalMobile"
          src="~/assets/images/cancel.svg"
          class="absolute top-0 right-0 m-5 w-[30px] h-[30px]"
          v-if="$mq === 'md'"
        />
        <div class="md:px-16 lg:px-0 lg:py-0 md:py-16 mx-auto mt-[40px] md:mt-0">
          <div>
            <div class="relative">
              <img
                src="~/assets/images/searchIcon.svg"
                class="absolute top-0 left-0 ml-2"
              />
              <input
                v-model="data"
                type="text"
                class="border-b border-b-black w-full wv-b5 mb-3 pl-8"
                placeholder="พิมพ์คีย์เวิร์ด"
              />
            </div>
            <div class="flex flex-col justify-between wv-b7 mb-[10px]">
              <div class="flex items-center">
                เรียงตาม
                <el-select
                  v-model="selectSort"
                  placeholder="Select"
                  class="sortInput"
                  size="mini"
                >
                  <el-option
                    v-for="item in sortList"
                    :key="item"
                    :label="item"
                    :value="item"
                  >
                  </el-option>
                </el-select>
              </div>
              <div class="flex mt-3">
                <p class="w-[100px]"></p>
                <p class="opacity-50 flex-1 text-center ml-2">จำนวนที่พบ</p>
                <p class="opacity-50 flex-1 text-end">งบ (ล้านบาท)</p>
              </div>
            </div>
          </div>
          <div class="h-[70vh] md:h-[80vh] lg:h-full overflow-auto">
            <div
              v-for="(item, index) in filterKeyword.slice(0, 50)"
              :key="index"
              class="flex justify-between py-[2.5px] text-right px-[10px] rounded-[5px] cursor-pointer"
              :class="
                selectedKey.Word === item.Word
                  ? 'text-white bg-black '
                  : 'hover:bg-wv-gray-4'
              "
              @click="() => selectKey(item)"
            >
              <div class="flex items-center w-[100px]">
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
                <p class="wv-b6 font-bold">{{ item.Word }}</p>
              </div>
              <p class="wv-b7 opacity-50 flex-1 text-center">{{ item.total }}</p>
              <p class="wv-b7 opacity-50 flex-1">{{ convertMillion(item.amount) }}</p>
            </div>
          </div>
        </div>
      </div>
      <div class="ml-5 flex-1">
        <div
          class="px-5 pt-5 pb-10 borderKey h-fit"
          v-if="chartData.years && selectedKey.Word"
        >
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
          <div class="h-[500px] mt-10 relative pl-[35px]">
            <div class="absolute inset-0 flex flex-col-reverse mt-[0.5px]">
              <div
                v-for="item in formatYAxis()"
                :key="item.id"
                class="flex-1 relative border-t-[0.5px] border-t-wv-gray-3"
              >
                <div
                  class="translate-y-[-50%] absolute top-0 bg-white text-wv-gray-1 wv-b7"
                >
                  {{ item.toLocaleString("en-US", {}) }}
                </div>
              </div>
            </div>
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
                  v-if="
                    item.organize[selectFilter] && selectFilter !== filterOrganize[0]
                  "
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
                  {{
                    convertMillion(displayAmoutOrganize(item.organize[selectFilter]))
                  }}
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
                      (displayAmoutOrganize(item.organize[selectFilter]) /
                        item.amount) *
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
        <div class="lg:max-w-[400px] text-center lg:text-left mt-5">
          <p class="wv-b5 text-wv-gray-1">
            <b>ยุทธศาสตร์ 7 ด้าน</b> เป็นแผนพัฒนาที่กรุงเทพฯ <br />วางไว้
            เพื่อจะก้าวไปสู่การเป็น “มหานครแห่งเอเชีย” <br />ภายใน 20 ปี (2561-2580)
          </p>
          <div class="mt-5 flex flex-wrap lg:block text-start">
            <div
              v-for="(item, key) in navData()"
              :key="key"
              class="flex items-center space-x-2 py-[5px] w-[50%] lg:w-full"
            >
              <div
                class="min-w-[10px] min-h-[10px] rounded-[2px]"
                :class="colorFilter(item.name)"
              />
              <div class="flex wv-b5 text-wv-gray-1">
                {{ key + 1 }}. {{ item.name }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <ShareLabel />
  </div>
</template>

<script>
import _ from "lodash";
import { mapState, mapActions } from "vuex";
import { convertMillion, colorFilter, strategyList } from "../budget/utils";
import ToggleUnit from "../budget/charts/ToggleUnit.vue";
import { keywords } from "~/data/budgets/keywords";
import ModalDetails from "~/components/budget/charts/ModalDetails.vue";
import { navData } from "~/components/expore/navData";
import { filterByKey } from "~/components/budget/charts/filterBy";
import ShareLabel from "../budget/ShareLabel.vue";

export default {
  components: {
    ToggleUnit,
    ModalDetails,
    ShareLabel,
  },
  computed: {
    ...mapState(["chartData"]),
  },
  data() {
    return {
      data: "",
      filterKeyword: "",
      selectedKey: {},
      itemsChart: [],
      isMillion: true,
      selectFilter: "",
      selectSort: "งบมากไปน้อย",
      rawData: {},
      totalFilterAmout: 0,
      filterOrganize: [],
      isOpen: false,
      sortList: ["งบมากไปน้อย", "จำนวนที่พบ", "ตัวอักษร"],
      mobileKeyword: false,
    };
  },
  methods: {
    ...mapActions({
      updateIsModalDetails: "updateIsModalDetails",
      updateSubTitleModal: "updateSubTitleModal",
      updateSelectKeywordStrategy: "updateSelectKeywordStrategy",
    }),
    convertMillion,
    colorFilter,
    strategyList,
    keywords,
    filterByKey,
    navData,
    handdleModalMobile() {
      this.mobileKeyword = !this.mobileKeyword;
    },
    handleModal() {
      this.isOpen = !this.isOpen;
    },
    formatYAxis() {
      const max =
        this.selectFilter === this.filterOrganize[0]
          ? this.maxBudgets()
          : this.maxSelectedFilter();
      const result = [...Array(5)].map(
        (_, index) => ((parseInt(max) / 5) * (index + 1)) / 1000000,
      );
      const percent = [...Array(5)].map((_, index) => (100 / 5) * (index + 1));
      return this.isMillion ? [...result] : [...percent];
    },
    maxBudgets() {
      return this.roundBudget(
        Math.max(...this.chartData.years.map(o => o.amount)).toString(),
      );
    },
    roundBudget(items) {
      const startNumber = Number(items?.slice(0, 1)) + 1;
      const digits = items?.length - 1;
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
      this.updateSelectKeywordStrategy({ label: "2561-2566", value: "" });
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
        const formatFilter = result.map(r => {
          const item = this.$store.getters["data/getBudgetItems"]({
            keyword: r.Word,
          });
          return {
            total: item.total,
            Word: r.Word,
            amount: _.sumBy(item.items, "amount"),
          };
        });
        this.filterKeyword = this.filterByKey(this.selectSort, formatFilter);
      },
    },
    selectFilter() {
      if (this.selectFilter !== this.filterOrganize[0]) this.maxSelectedFilter();
    },
    selectSort(label) {
      this.filterKeyword = this.filterByKey(label, this.filterKeyword);
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
.sortInput > .el-input > .el-input__inner {
  margin-left: 8px;
  width: 120px;
  // height: 22px;
  border: none;
  font-size: 14px;
  border-bottom: 1px solid #737373;
  border-radius: 0%;
}
</style>
