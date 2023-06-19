<template>
  <div class="absolute inset-0 bg-white z-40 py-[70px] px-[50px]">
    <p class="wv-b3 font-bold">{{ isProject.outputProjectName }}</p>
    <div class="flex py-5">
      <div class="flex-[1] border-r border-r-gray-300">
        <p class="wv-b7 font-bold">งบประมาณ</p>
        <p>{{ (isProject.amount).toLocaleString("en-US", {}) }} บาท</p>
      </div>
      <div class="flex-[3] pl-12">
        <p class="wv-b7 font-bold">ปีงบประมาณ</p>
        <p>25{{ isProject.budgetYear }}</p>
      </div>
    </div>
    <div class="py-5 border-t border-t-gray-300">
      <p class="wv-b7 font-bold">ด้านยุทธศาสตร์และมิติย่อย</p>
      <p class="wv-b5">{{ isProject.strategy }}</p>
      <p class="wv-b7">{{ isProject.substrategy }}</p>
    </div>
    <div class="py-5 border-t border-t-gray-300 border-b border-b-gray-300">
      <p class="wv-b7 font-bold">หน่วยงาน</p>
      <p class="wv-b5">{{ isProject.nameOrganization }}</p>
    </div>
    <div class="py-5">
      <p class="wv-b7 font-bold">เป้าประสงค์</p>
      <p class="wv-b5">{{ isProject.purposeProject }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    isProject: {
      type: Object || Boolean,
    },
  },
};
</script>

<style lang="scss" scoped></style>
