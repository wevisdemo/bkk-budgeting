<template>
  <div class="max-w-7xl px-3 md:px-6 py-6 m-auto">
    <div
      id="budgetplans"
      class="flex flex-col gap-16 relative -mx-14 sm:mx-4 scroll-mt-8"
    >
      <div class="flex justify-center items-center w-full text-center">
        <img
          src="~/assets/illustrations/budgetplans.svg"
          alt="Budget plan"
          width="100%"
          height="auto"
          class="max-w-[600px]"
        />
        <div class="absolute max-w-lg p-16 sm:p-8">
          <h4 class="wv-h4 wv-bold">
            เพื่อพัฒนาสู่ยุทธศาสตร์ 7 ด้าน มาดูกันว่ากรุงเทพฯ ใช้งบประมาณอย่างไร?
          </h4>
        </div>
      </div>
    </div>
    <div
      class="flex flex-col sm:flex-row items-center sm:items-start gap-4 max-w-xl m-auto text-center sm:text-left mb-10"
    >
      <img
        src="~/assets/illustrations/budgetfolder.svg"
        width="100%"
        height="auto"
        alt="Budget folder"
        class="max-w-[100px] sm:max-w-[130px]"
      />
      <p>
        <strong>หมายเหตุ :</strong> งบที่ใช้ตามแผนยุทธศาสตร์ ไม่ใช่งบทั้งหมดของกรุงเทพฯ
        แต่เราโฟกัสเฉพาะส่วนนี้
        เพราะเกี่ยวข้องกับการให้บริการประชาชนและประชาชนมีส่วนร่วมได้มากที่สุด
      </p>
    </div>
    <div class="flex flex-col space-y-[20px]">
      <YearlyBudgetVue />
      <BudgetUsage />
      <BudgetExplorer />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import BoxContainer from "~/components/BoxContainer.vue";
import BudgetExplorer from "~/components/budget/charts/BudgetExplorer.vue";
import BudgetUsage from "~/components/budget/charts/BudgetUsage.vue";
import YearlyBudgetVue from "~/components/budget/charts/YearlyBudget.vue";

export default Vue.extend({
  name: "BudgetPlans",
  components: {
    BoxContainer,
    YearlyBudgetVue,
    BudgetUsage,
    BudgetExplorer,
  },
  data() {
    return {};
  },
});
</script>

<style lang="scss"></style>
