<template>
  <div
    id="byYears"
    class="mt-7 md:w-[80%] mx-auto lg:w-full flex lg:space-x-[35px] min-h-screen flex-col lg:flex-row justify-center"
  >
    <ModalDetails
      :handle-modal="() => handleModal()"
      :is-open="isOpen"
      page="organize"
    />
    <div class="lg:max-w-[400px] text-center lg:text-left">
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
          <div class="flex wv-b5 text-wv-gray-1">{{ key + 1 }}. {{ item.name }}</div>
        </div>
      </div>
    </div>
    <div class="lg:max-w-[685px] mt-3 flex-1 flex flex-col justify-between">
      <div class="flex items-center">
        <p class="wv-h8 font-bold mr-2">หน่วยงานที่ได้รับงบในปี</p>
        <DropDownYearList
          :handle-selected-year="() => handleSelectedYear()"
          :is-open-year-selected="isOpenYearSelected"
          :is-selected-year="year => isSelectedYear(year)"
          >{{ selectYearOrganize.label }}</DropDownYearList
        >
      </div>
      <div class="flex justify-between mt-5">
        <div class="text-wv-gray-1 wv-b6 flex space-x-2 justify-center cursor-pointer">
          <p class="">เรียงตาม</p>
          <div class="underline pb-2 relative" @click="handleFilter">
            <p class="font-bold">{{ selectedFilter }}</p>
            <div
              v-if="isFilterModal"
              class="absolute top-[100%] bg-white w-[150px] left-0 border border-wv-gray-3 py-[5px]"
            >
              <div
                v-for="item in filterList"
                :key="item.id"
                class="hover:bg-wv-gray-3 cursor-pointer px-[10px]"
                @click="() => selectFilter(item.label)"
              >
                {{ item.label }}
              </div>
            </div>
          </div>
        </div>
        <ToggleUnit :toggle="() => toggle()" :is-million="isMillion" />
      </div>

      <div
        v-for="(item, key) in barChartData"
        :key="key"
        class="borderOrganize my-[5px] flex hover:border-black hover:border-[2px] border-[2px] border-transparent cursor-pointer"
        @click="() => selectOrganize(item.nameOrganization)"
      >
        <div class="wv-h8 text-gray-300">
          {{ key + 1 }}
        </div>
        <div class="ml-5 flex flex-col flex-1">
          <div class="flex justify-between">
            <div class="wv-b4 font-bold">
              {{ item.nameOrganization }}
            </div>
            <div class="flex items-center">
              <div v-if="isMillion">
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
              <div v-else class="wv-b6 font-bold">
                {{ ((item.amount / chartData.amount) * 100).toFixed(2) }} %
              </div>
              <div class="ml-1"><img src="~/assets/images/list-button.svg" /></div>
            </div>
          </div>

          <div class="h-[10px] w-full bg-wv-gray-4 flex">
            <div
              v-for="strategy in strategyList()"
              :key="strategy"
              class="h-[10px] "
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
import { filterByOrganize } from "../budget/charts/filterBy";
import { navData } from "~/components/expore/navData";
import { colorFilter, orderByStrategy, strategyList } from "~/components/budget/utils";
import { getChartDataGroupByOrganizations } from "~/data/get-chart-data";
import ModalDetails from "~/components/budget/charts/ModalDetails.vue";
import ToggleUnit from "~/components/budget/charts/ToggleUnit.vue";
import DropDownYearList from "~/components/budget/charts/DropDownYearList.vue";

export default {
  components: { ModalDetails, ToggleUnit, DropDownYearList },
  data() {
    return {
      barChartData: [],
      isOpen: false,
      maxValue: 0,
      isMillion: true,
      isOpenYearSelected: false,
      filterYears: [],
      filterList: [
        { label: "งบมากไปน้อย" },
        { label: "งบน้อยไปมาก" },
        { label: "ตัวอักษร" },
      ],
      selectedFilter: "งบมากไปน้อย",
      isFilterModal: false,
    };
  },
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
    filterByOrganize,
    getChartDataGroupByOrganizations,
    handleModal() {
      this.isOpen = !this.isOpen;
    },
    fetchByOrganizeYear(year) {
      const response = this.$store.getters["data/getChartDataGroupByOrganizations"]({
        year,
      });
      this.barChartData = filterByOrganize(this.selectedFilter, response);
    },

    fetchByOrganize(nameOrganization) {
      const response = this.$store.getters["data/getBudgetItems"]({ nameOrganization });
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
    },
    handleFilter() {
      this.isFilterModal = !this.isFilterModal;
      this.isOpenYearSelected = false;
    },
    selectFilter(label) {
      this.selectedFilter = label;
      const resultFilter = filterByOrganize(label, this.barChartData);
      this.barChartData = resultFilter;
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
      this.fetchByOrganizeYear(year.value);
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
