<template>
  <BoxContainer>
    <div class="text-center mx-4 pb-10">
      <h4 class="wv-h4 font-bold pb-10">
        เพื่อพัฒนาสู่ยุทธศาสตร์ 7 ด้าน มาดูกันว่ากรุงเทพฯ ใช้งบประมาณอย่างไร?
      </h4>
      <p>ตั้งแต่ปี 2561 - 2566 กรุงเทพฯ ใช้งบฯ รวม</p>
      <h5 class="wv-h5">x,xxx,xxx ล้านบาท</h5>
    </div>
    <div class="grid gap-8">
      <YearlyBudgetVue />
      <BudgetUsage />
      <BudgetExplorer />
    </div>
  </BoxContainer>
</template>

<script lang="ts">
import Vue from "vue";
import BoxContainer from "~/components/BoxContainer.vue";
import BudgetExplorer from "~/components/budget/charts/BudgetExplorer.vue";
import BudgetUsage from "~/components/budget/charts/BudgetUsage.vue";
import YearlyBudgetVue from "~/components/budget/charts/YearlyBudget.vue";

export default Vue.extend({
  name: "BudgetPlans",
  components: { BoxContainer, YearlyBudgetVue, BudgetUsage, BudgetExplorer },
  data() {
    return {};
  },
});
</script>

<style lang="scss"></style>
