<template>
  <div>
    <div
      @click="handleModal"
      class="bg-black text-white w-fit wv-b6 px-[10px] py-[6px] rounded-[5px] cursor-pointer"
    >
      ดูรายการใช้งบ
    </div>
    <div class="fixed inset-0 z-20" v-if="isOpen">
      <div class="fixed inset-0 bg-wv-gray-4 bg-opacity-70" @click="handleModal" />
      <div
        class="w-[850px] h-[600px] px-12 py-8 bg-white absolute top-[50%] translate-y-[-50%] translate-x-[-50%] left-[50%]"
      >
        <div class="absolute top-0 right-0">
          <img
            @click="handleModal"
            src="~/assets/images/cancel.svg"
            class="translate-y-[-50%] translate-x-[50%] cursor-pointer"
          />
        </div>
        <div class="flex justify-between flex-col h-full">
          <div>
            <!-- ------- header -->
            <div class="wv-b5 flex space-x-2 items-center justify-center">
              <p>ปีงบประมาณ</p>
              <div
                class="border relative border-wv-gray-3 w-[150px] px-[10px] py-[5px] rounded-[5px] flex items-center cursor-pointer"
                @click="handleSelectedYear"
              >
                <p class="font-bold">{{ selectedYear.label }}</p>
                <div
                  id="yearSelected"
                  v-if="isOpenYearSelected"
                  class="absolute top-[120%] bg-white w-[150px] z-20 left-0 border border-wv-gray-3 py-[5px]"
                >
                  <div
                    @click="() => isSlectedYear(item)"
                    v-for="item in yearList"
                    :key="item.id"
                    class="hover:bg-wv-gray-3 cursor-pointer px-[10px]"
                  >
                    {{ item.label }}
                  </div>
                </div>
              </div>
              <span>มี </span>
              <span class="font-bold">{{ filterYears?.total }}</span>
              <span>รายการ ({{ sumAllBudget() }} ล้านบาท)</span>
            </div>
            <p class="wv-b6 text-center my-2">{{ subTitleModal }}</p>
            <div
              class="text-wv-gray-1 wv-b6 flex space-x-2 justify-center cursor-pointer"
            >
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
                    @click="() => filterBy(item.label)"
                  >
                    {{ item.label }}
                  </div>
                </div>
              </div>
            </div>
            <!-- ------- header -->
            <div class="flex flex-col">
              <div
                v-for="(item, id) in paginate(currentPage)"
                :key="id"
                class="flex justify-between hover:bg-wv-gray-4 items-center border-b border-b-wv-gray-4 cursor-pointer py-[15px] flex-1"
              >
                <div class="flex-1 pr-5">{{ item.outputProjectName }}</div>
                <div class="w-[128px]">
                  {{
                    (item.amount / 1000000).toLocaleString("en-US", {
                      maximumFractionDigits: 2,
                      minimumFractionDigits: 2,
                    })
                  }}
                  ล้านบาท
                </div>
              </div>
            </div>
          </div>
          <b-pagination
            v-model="currentPage"
            :total-rows="filterYears?.total"
            :per-page="perPage"
            first-number
            last-number
          ></b-pagination>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import _ from "lodash";
import { BPagination } from "bootstrap-vue";
import { convertMillion, orderByStrategy } from "../utils";
import { getBudgetItems } from "~/data/get-budget-items";

export default {
  components: {
    "b-pagination": BPagination,
  },
  data() {
    return {
      isOpen: false,
      perPage: 5,
      currentPage: 1,
      yearList: [
        { label: "2561-2566", value: "" },
        { label: "2561", value: 61 },
        { label: "2562", value: 62 },
        { label: "2563", value: 63 },
        { label: "2564", value: 64 },
        { label: "2565", value: 65 },
        { label: "2566", value: 66 },
      ],
      filterList: [
        { label: "งบมากไปน้อย" },
        { label: "งบน้อยไปมาก" },
        { label: "ตัวอักษร" },
      ],
      selectedFilter: "งบมากไปน้อย",
      selectedYear: "",
      isOpenYearSelected: false,
      isFilterModal: false,
      filterYears: [],
    };
  },

  computed: {
    ...mapState(["isModalDetails", "chartData", "subTitleModal"]),
  },
  methods: {
    convertMillion,
    orderByStrategy,
    ...mapActions({
      updateIsModalDetails: "updateIsModalDetails",
    }),
    handleModal() {
      this.isOpen = !this.isOpen;
      this.selectedYear = this.yearList[0];
      if (this.subTitleModal === "ตามแผนยุทธศาสตร์ 7 ด้าน") this.fetchByYear();
    },
    async fetchByYear(year) {
      await getBudgetItems({
        budgetYear: year,
      }).then(response => {
        this.updateIsModalDetails(response);
      });
    },
    paginate(pageNumber) {
      return this.filterYears?.items?.slice(
        (pageNumber - 1) * this.perPage,
        pageNumber * this.perPage,
      );
    },
    handleSelectedYear() {
      this.isOpenYearSelected = !this.isOpenYearSelected;
      this.isFilterModal = false;
    },
    handleFilter() {
      this.isFilterModal = !this.isFilterModal;
      this.isOpenYearSelected = false;
    },
    filterBy(label) {
      this.selectedFilter = label;
      if (label === "งบมากไปน้อย") {
        this.filterYears = {
          items: orderByStrategy(this.filterYears.items, "amount", "desc"),
          total: this.filterYears.total,
        };
      }
      if (label === "งบน้อยไปมาก") {
        this.filterYears = {
          items: orderByStrategy(this.filterYears.items, "amount", "asc"),
          total: this.filterYears.total,
        };
      }
      if (label === "ตัวอักษร") {
        this.filterYears = {
          items: orderByStrategy(this.filterYears.items, "outputProjectName", "asc"),
          total: this.filterYears.total,
        };
      }
    },
    isSlectedYear(year) {
      if (year?.value) {
        this.selectedYear = year;
        this.filterYears = {
          items: this.isModalDetails?.items?.filter(
            str => str.budgetYear === year.value,
          ),
          total: this.isModalDetails?.items?.filter(
            str => str.budgetYear === year.value,
          ).length,
        };
      } else {
        this.selectedYear = this.yearList[0];
        this.filterYears = this.isModalDetails;
      }
    },
    sumAllBudget() {
      return convertMillion(_.sumBy(this.filterYears.items, a => a.amount));
    },
  },
  mounted() {
    this.selectedYear = this.yearList[0];
    this.filterYears = this.isModalDetails;
  },
  watch: {
    isModalDetails(newValue) {
      this.filterYears = {
        items: orderByStrategy(newValue.items, "amount", "desc"),
        total: newValue.total,
      };
    },
  },
};
</script>

<style lang="scss">
ul.b-pagination {
  font-weight: 700;
  font-size: 14px;
  font-family: "IBM Plex Sans Thai";
  @apply flex justify-center;
  li {
    @apply py-[5px] px-[10px] rounded-[5px];
  }
  li.active {
    @apply bg-wv-gray-3;
  }
}
</style>
