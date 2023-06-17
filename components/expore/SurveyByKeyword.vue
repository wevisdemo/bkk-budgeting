<template>
  <div>
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
          v-for="(item, index) in filterKeyword"
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
      <div v-if="chartData.years" class="ml-5 p-5 borderKey flex-1 h-fit">
        <p class="wv-h8 font-bold">{{ selectedKey.Word }}</p>
        <ToggleUnit :toggle="() => toggle()" :is-million="isMillion" />
        <div class="h-[500px]">
          <div class="flex h-full items-end">
            <div
              v-for="(item, key) in chartData.years"
              :key="key"
              class="bg-wv-gray-4 flex-1 ml-[25px]"
              :style="{ height: calHeight(item.amount) }"
            ></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import _ from "lodash";
import { mapState } from "vuex";
import { convertMillion } from "../budget/utils";
import ToggleUnit from "../budget/charts/ToggleUnit.vue";
import { keywords } from "~/data/budgets/keywords";

export default {
  components: {
    ToggleUnit,
  },
  computed: {
    ...mapState(["chartData"]),
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
  data() {
    return {
      data: "",
      filterKeyword: "",
      selectedKey: {},
      itemsChart: [],
      isMillion: false,
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
  },
  methods: {
    convertMillion,
    keywords,
    toggle() {
      this.isMillion = !this.isMillion;
    },
    selectKey(item) {
      this.selectedKey = item;
      this.fetchbudgetItem(item);
    },
    calHeight(item) {
      return this.isMillion ? "100%" : `${(item / this.roundBudget) * 100}%`;
    },
    fetchbudgetItem(item) {
      const response = this.$store.getters["data/getBudgetItems"]({
        keyword: item.Word,
      });
      this.itemsChart = {
        years: _.groupBy(response.items, "budgetYear"),
        total: response.total,
      };
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
</style>
