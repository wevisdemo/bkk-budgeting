<template>
  <div>
    <slot></slot>
    <div v-if="isOpen" class="fixed inset-0 z-[50]">
      <div class="fixed inset-0 bg-wv-gray-4 bg-opacity-70 z-40" @click="handleModal" />
      <div
        class="lg:w-[850px] overflow-auto inset-0 lg:h-[600px] px-3 md:px-12 py-8 bg-white absolute z-50 lg:top-[50%] lg:translate-y-[-50%] lg:translate-x-[-50%] lg:left-[50%]"
      >
        <ModalProject
          v-if="isProject"
          :isProject="isProject"
          :handleProject="handleProject"
        />
        <div class="fixed w-[25px] md:w-[50px] z-50 top-0 right-0 m-5">
          <img
            src="~/assets/images/cancel.svg"
            class="cursor-pointer"
            @click="handleModal"
          />
        </div>
        <div class="flex justify-between flex-col h-auto lg:h-full">
          <div class="mb-4">
            <!-- ------- header -->
            <div class="wv-b5 flex space-x-2 items-center justify-center">
              <p>ปีงบประมาณ</p>
              <el-select
                v-model="selectFilter"
                placeholder="Select"
                class="ml-2 w-[150px] wv-b4 font-bold"
              >
                <el-option
                  v-for="(item, index) in yearList"
                  :key="index"
                  :label="item.label"
                  :value="item.value"
                >
                </el-option>
              </el-select>
              <span>มี </span>
              <span class="font-bold">{{ filterYears?.total }}</span>
              <span class="hidden md:block">รายการ ({{ sumAllBudget() }} ล้านบาท)</span>
            </div>
            <div class="md:hidden mx-auto text-center mt-3">
              รายการ ({{ sumAllBudget() }} ล้านบาท)
            </div>
            <p class="wv-b6 text-center my-2">{{ subTitleModal }}</p>
            <div
              class="text-wv-gray-1 wv-b6 flex space-x-2 justify-center cursor-pointer"
            >
              <p class="">เรียงตาม</p>
              <el-select
                v-model="selectedFilter"
                placeholder="Select"
                class="sortInput"
                size="mini"
              >
                <el-option
                  v-for="(item, key) in filterList"
                  :key="key"
                  :label="item.label"
                  :value="item.label"
                >
                </el-option>
              </el-select>
            </div>
            <!-- ------- header -->
            <div class="flex flex-col">
              <div
                v-for="(item, id) in paginate(currentPage)"
                :key="id"
                @click="() => handleSelected(item)"
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
          <el-pagination
            class="mx-auto"
            :pager-count="perPage"
            layout="prev, pager, next"
            :total="filterYears?.total"
            @current-change="handleCurrentChange"
          >
          </el-pagination>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import _ from "lodash";
import { convertMillion } from "../utils";
import { filterBy } from "./filterBy";
import DropDownYearList from "./DropDownYearList.vue";
import ModalProject from "./ModalProject.vue";

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
    DropDownYearList,
    ModalProject,
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
      isProject: false,
      selectFilter: "2561-2566",
      yearList: [
        { label: "2561-2566", value: "" },
        { label: "2561", value: 61 },
        { label: "2562", value: 62 },
        { label: "2563", value: 63 },
        { label: "2564", value: 64 },
        { label: "2565", value: 65 },
        { label: "2566", value: 66 },
      ],
    };
  },

  computed: {
    ...mapState([
      "isModalDetails",
      "subTitleModal",
      "selectYearOrganize",
      "selectYearStrategy",
      "selectKeywordStrategy",
    ]),
  },
  methods: {
    convertMillion,
    filterBy,
    ...mapActions({
      updateIsModalDetails: "updateIsModalDetails",
      updateSelectYearOrganize: "updateSelectYearOrganize",
      updateSelectYearStrategy: "updateSelectYearStrategy",
      updateSelectKeywordStrategy: "updateSelectKeywordStrategy",
    }),
    handleCurrentChange(val) {
      this.currentPage = val;
    },
    handleSelected(item) {
      this.isProject = item;
    },
    handleProject() {
      this.isProject = false;
    },
    fetchByYear(year) {
      const response = this.$store.getters["data/getBudgetItems"]({ budgetYear: year });
      this.updateIsModalDetails(response);
    },
    paginate(pageNumber) {
      return this.filterYears?.items?.slice(
        (pageNumber - 1) * this.perPage,
        pageNumber * this.perPage,
      );
    },
    selectSort(label) {
      this.selectedFilter = label;
      const resultFilter = filterBy(label, this.filterYears);
      this.filterYears = resultFilter;
    },
    isSelectedYear(year) {
      if (year) {
        if (this.page === "organize") this.updateSelectYearOrganize(year);
        if (this.page === "strategy") this.updateSelectYearStrategy(year);
        if (this.page === "keyword") this.updateSelectKeywordStrategy(year);
        const itemsList = this.isModalDetails?.items?.filter(
          str => str.budgetYear === year,
        );
        this.filterYears = filterBy(this.selectedFilter, {
          items: itemsList,
          total: itemsList.length,
        });
      } else {
        if (this.page === "organize")
          this.updateSelectYearOrganize({ label: "2561-2566", value: "" });
        if (this.page === "strategy")
          this.updateSelectYearStrategy({ label: "2561-2566", value: "" });
        if (this.page === "keyword")
          this.updateSelectKeywordStrategy({ label: "2561-2566", value: "" });
        this.filterYears = this.isModalDetails;
      }
    },
    sumAllBudget() {
      return convertMillion(_.sumBy(this.filterYears.items, a => a.amount));
    },
  },
  watch: {
    isModalDetails(newValue) {
      this.filterYears = filterBy(this.selectedFilter, newValue);
    },
    isOpen(newValue) {
      if (newValue === false) this.isProject = false;
    },
    selectFilter(newValue) {
      this.isSelectedYear(newValue);
    },
    selectedFilter(newValue) {
      this.selectSort(newValue);
    },
  },
  mounted() {
    this.filterYears = filterBy(this.selectedFilter, this.isModalDetails);
    if (this.subTitleModal === "ตามแผนยุทธศาสตร์ 7 ด้าน") this.fetchByYear();
    if (this.page === "organize") this.selectFilter = this.selectYearOrganize.label;
    if (this.page === "strategy") this.selectFilter = this.selectYearStrategy.label;
    if (this.page === "keyword") this.selectFilter = this.selectKeywordStrategy.label;
    this.isSelectedYear();
  },
};
</script>

<style lang="scss">
ul.el-pager {
  font-weight: 700;
  font-size: 14px;
  font-family: "IBM Plex Sans Thai";
  li {
    @apply rounded-[5px];
  }
  li.active {
    @apply bg-wv-gray-3 text-black;
  }
}
</style>
