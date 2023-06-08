<template>
  <div>
    <slot></slot>
    <div class="fixed inset-0 z-40" v-if="isOpen">
      <div class="fixed inset-0 bg-wv-gray-4 bg-opacity-70 z-40" @click="handleModal" />
      <div
        class="w-[850px] h-[600px] px-12 py-8 bg-white absolute z-50 top-[50%] translate-y-[-50%] translate-x-[-50%] left-[50%]"
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
              <DropDownYearList
                :handleSelectedYear="() => handleSelectedYear()"
                :isOpenYearSelected="isOpenYearSelected"
                :isSelectedYear="year => isSelectedYear(year)"
              >
                <span v-if="page === 'organize'"> {{ selectYearOrganize.label }}</span>
                <span v-if="page === 'strategy'"> {{ selectYearStrategy.label }}</span>
              </DropDownYearList>
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
                    @click="() => selectFilter(item.label)"
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
import { convertMillion } from "../utils";
import { filterBy } from "./filterBy";
import DropDownYearList from "./DropDownYearList.vue";
import { getBudgetItems } from "~/data/get-budget-items";

export default {
  props: {
    handleModal: {
      type: Function,
    },
    isOpen: {
      type: Boolean,
      default: false,
    },
    page: {
      type: String,
    },
  },
  components: {
    "b-pagination": BPagination,
    DropDownYearList,
  },
  data() {
    return {
      perPage: 5,
      currentPage: 1,
      filterList: [
        { label: "งบมากไปน้อย" },
        { label: "งบน้อยไปมาก" },
        { label: "ตัวอักษร" },
      ],
      selectedFilter: "งบมากไปน้อย",
      isOpenYearSelected: false,
      isFilterModal: false,
      filterYears: [],
      defaultByFilter: [],
    };
  },

  computed: {
    ...mapState([
      "isModalDetails",
      "subTitleModal",
      "selectYearOrganize",
      "selectYearStrategy",
    ]),
  },
  methods: {
    convertMillion,
    filterBy,
    ...mapActions({
      updateIsModalDetails: "updateIsModalDetails",
      updateSelectYearOrganize: "updateSelectYearOrganize",
      updateSelectYearStrategy: "updateSelectYearStrategy",
    }),

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
    selectFilter(label) {
      this.selectedFilter = label;
      const resultFilter = filterBy(label, this.filterYears);
      this.filterYears = resultFilter;
    },
    isSelectedYear(year) {
      if (year?.value) {
        if (this.page === "organize") this.updateSelectYearOrganize(year);
        if (this.page === "strategy") this.updateSelectYearStrategy(year);
        this.filterYears = {
          items: this.isModalDetails?.items?.filter(
            str => str.budgetYear === year.value,
          ),
          total: this.isModalDetails?.items?.filter(
            str => str.budgetYear === year.value,
          ).length,
        };
      } else {
        if (this.page === "organize")
          this.updateSelectYearOrganize({ label: "2561-2566", value: "" });
        if (this.page === "strategy")
          this.updateSelectYearStrategy({ label: "2561-2566", value: "" });
        this.filterYears = this.isModalDetails;
      }
    },
    sumAllBudget() {
      return convertMillion(_.sumBy(this.filterYears.items, a => a.amount));
    },
  },
  mounted() {
    this.filterYears = filterBy(this.selectedFilter, this.isModalDetails);
    if (this.subTitleModal === "ตามแผนยุทธศาสตร์ 7 ด้าน") this.fetchByYear();
  },
  watch: {
    isModalDetails(newValue) {
      this.filterYears = filterBy(this.selectedFilter, newValue);
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
