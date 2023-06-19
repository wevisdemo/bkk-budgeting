<template>
  <div class="fixed md:absolute inset-0 h-full bg-white z-40 py-[70px] px-[50px]">
    <i class="el-icon-back absolute top-0 left-0 m-[20px] wv-h5 cursor-pointer" @click="()=>handleProject()"></i>
    <p class="wv-b3 font-bold">{{ isProject.outputProjectName }}</p>
    <div class="flex py-5">
      <div class="flex-[1] border-r border-r-gray-300 pr-4">
        <p class="wv-b7 font-bold">งบประมาณ</p>
        <p>{{ isProject.amount.toLocaleString("en-US", {}) }} บาท</p>
      </div>
      <div class="flex-[3] pl-12">
        <p class="wv-b7 font-bold">ปีงบประมาณ</p>
        <p>25{{ isProject.budgetYear }}</p>
      </div>
    </div>
    <div class="py-5 border-t border-t-gray-300">
      <p class="wv-b7 font-bold">ด้านยุทธศาสตร์และมิติย่อย</p>
      <div class="flex items-top">
        <div
          class="w-[15px] h-[15px] rounded-[2px] mr-2"
          :class="colorFilter(isProject.strategy)"
        />
        <p class="wv-b5">{{ isProject.strategy }}</p>
      </div>

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
import { colorFilter } from "../utils";
export default {
  props: {
    isProject: {
      type: Object || Boolean,
    },
    handleProject:{
      type:Function
    }
  },
  methods: {
    colorFilter,
  },
};
</script>

<style lang="scss" scoped></style>
