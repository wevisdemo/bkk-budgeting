<template>
  <div id="byYears" class="mt-7 flex space-x-[35px] min-h-screen justify-center">
    <ModalDetails :handleModal="() => handleModal()" :isOpen="isOpen" page="organize" />
    <div class="max-w-[400px]">
      <p class="wv-b5 text-wv-gray-1">
        <b>ยุทธศาสตร์ 7 ด้าน</b> เป็นแผนพัฒนาที่กรุงเทพฯ <br />วางไว้
        เพื่อจะก้าวไปสู่การเป็น “มหานครแห่งเอเชีย” <br />ภายใน 20 ปี (2561-2580)
      </p>
      <div class="mt-5">
        <div
          v-for="(item, key) in navData()"
          :key="key"
          class="flex items-center space-x-2 py-[5px]"
        >
          <div
            class="w-[10px] h-[10px] rounded-[2px]"
            :class="colorFilter(item.name)"
          />
          <div class="flex wv-b5 text-wv-gray-1">{{ key + 1 }}. {{ item.name }}</div>
        </div>
      </div>
    </div>
    <div class="max-w-[685px] flex-1 flex flex-col justify-between">
      <div class="flex">
        <p class="wv-h8 font-bold">หน่วยงานที่ได้รับงบในปี</p>
        <DropDownYearList
          :handleSelectedYear="() => handleSelectedYear()"
          :isOpenYearSelected="isOpenYearSelected"
          :isSelectedYear="year => isSelectedYear(year)"
          >{{ selectYearOrganize.label }}</DropDownYearList
        >
      </div>
      <ToggleUnit :toggle="() => toggle()" :isMillion="isMillion" />
      <div
        v-for="(item, key) in barChartData"
        :key="key"
        @click="() => selectOrganize(item.nameOrganization)"
        class="borderOrganize my-[5px] flex hover:border-black hover:border-[2px] border-[2px] border-transparent cursor-pointer"
      >
        <div class="wv-h8 text-gray-300">
          {{ key + 1 }}
        </div>
        <div class="ml-5 flex flex-col flex-1">
          <div class="flex justify-between">
            <div class="wv-b4 font-bold">
              {{ item.nameOrganization }}
            </div>
            <div>
              <span class="wv-b6 font-bold">
                {{
                  (item.amount / 1000000).toLocaleString("en-US", {
                    maximumFractionDigits: 2,
                    minimumFractionDigits: 2,
                  })
                }}
              </span>
              <span class="wv-b7">ล้านบาท</span>
            </div>
          </div>
          <div class="h-[10px] w-full bg-wv-gray-4 flex">
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
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import { navData } from "~/components/expore/navData";
import { colorFilter, orderByStrategy, strategyList } from "~/components/budget/utils";
import { getBudgetItems } from "~/data/get-budget-items";
import ModalDetails from "~/components/budget/charts/ModalDetails.vue";
import ToggleUnit from "~/components/budget/charts/ToggleUnit.vue";
import DropDownYearList from "~/components/budget/charts/DropDownYearList.vue";

export default {
  data() {
    return {
      barChartData: [],
      isOpen: false,
      maxValue: 0,
      isMillion: true,
      isOpenYearSelected: false,
      filterYears: [],
    };
  },
  components: { ModalDetails, ToggleUnit, DropDownYearList },
  methods: {
    ...mapActions({
      updateIsModalDetails: "updateIsModalDetails",
      updateSubTitleModal: "updateSubTitleModal",
      updateSelectYearOrganize: "updateSelectYearOrganize",
    }),
    navData,
    colorFilter,
    orderByStrategy,
    strategyList,
    handleModal() {
      this.isOpen = !this.isOpen;
    },
    async fetchByOrganize(nameOrganization) {
      await getBudgetItems({
        nameOrganization,
      }).then(response => {
        let filterYear;
        if (this.selectYearOrganize.value) {
          filterYear = response.items.filter(
            i => i.budgetYear === this.selectYearOrganize.value,
          );
        } else {
          filterYear = response;
        }
        this.updateIsModalDetails({
          items: this.selectYearOrganize.value ? filterYear : response.items,
          total: this.selectYearOrganize.value ? filterYear.length : response.total,
        });
      });
    },
    selectOrganize(nameOrganization) {
      this.fetchByOrganize(nameOrganization);
      this.updateSubTitleModal(`ที่ของบโดย "${nameOrganization}""`);
      this.handleModal();
    },
    drawChart(item, strategy) {
      const matchStrategy = item.strategies.filter(i => i.name === strategy)[0];
      const divide = this.isMillion ? this.maxValue.amount : this.chartData.amount;
      return matchStrategy && `${(matchStrategy.amount / divide) * 100}%`;
    },
    toggle() {
      this.isMillion = !this.isMillion;
    },
    handleSelectedYear() {
      this.isOpenYearSelected = !this.isOpenYearSelected;
    },
    isSelectedYear(year) {
      if (year?.value) {
        this.updateSelectYearOrganize(year);
        this.filterYears = {
          items: this.isModalDetails?.items?.filter(
            str => str.budgetYear === year.value,
          ),
          total: this.isModalDetails?.items?.filter(
            str => str.budgetYear === year.value,
          ).length,
        };
      } else {
        this.updateSelectYearOrganize({ label: "2561-2566", value: "" });
        this.filterYears = this.isModalDetails;
      }
    },
  },
  computed: {
    ...mapState(["organizeData", "isModalDetails", "chartData", "selectYearOrganize"]),
  },

  watch: {
    organizeData: {
      immediate: true,
      deep: true,
      handler(newValue) {
        this.barChartData = orderByStrategy(newValue, "amount", "desc");
        this.maxValue = this.barChartData[0];
      },
    },
  },
};
</script>

<style lang="scss">
.borderOrganize {
  background: #ffffff;
  padding: 10px;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.12);
  border-radius: 5px;
}
</style>
