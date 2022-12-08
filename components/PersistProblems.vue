<template>
  <BoxContainer>
    <div class="wv-h8 sm:pb-12 text-center hidden sm:block">
      {{ title }}
    </div>
    <div class="wv-h5 sm:pb-12 text-center block sm:hidden wv-font-bold">
      {{ title }}
    </div>
    <p class="block sm:hidden text-center">เลือกได้ 1 ข้อ</p>
    <!-- top -->
    <div class="flex flex-wrap gap-4 md:gap-6 lg:gap-10 justify-center">
      <div
        v-for="(item, index) in problemsTop"
        :key="index"
        class="flex sm:flex-col bg-white sm:bg-inherit p-2 sm:p-0 rounded-md basis-full sm:basis-32 md:basis-40 flex-shrink-0 gap-4 sm:text-center items-center"
      >
        <img
          class="w-10 h-10 sm:w-32 sm:h-32 md:w-40 md:h-40"
          :src="`${$config.path.images}/persistent-problems/${item.img}.png`"
          :alt="item.title"
        />
        <p class="wv-b4 wv-font-bold">{{ item.title }}</p>
      </div>
    </div>
    <!-- bottom -->
    <div class="flex flex-wrap gap-4 md:gap-6 lg:gap-10 justify-center">
      <div
        v-for="(item, index) in problemsBottom"
        :key="index"
        class="flex sm:flex-col bg-white sm:bg-inherit p-2 sm:p-0 rounded-md basis-full sm:basis-32 md:basis-40 flex-shrink-0 gap-4 sm:text-center items-center"
      >
        <img
          class="w-10 h-10 sm:w-32 sm:h-32 md:w-40 md:h-40"
          :src="`${$config.path.images}/persistent-problems/${item.img}.png`"
          :alt="item.title"
        />
        <p class="wv-b4 wv-font-bold">{{ item.title }}</p>
      </div>
    </div>
  </BoxContainer>
</template>

<script lang="ts">
import Vue from "vue";
import BoxContainer from "~/components/BoxContainer.vue";
import problemsData from "~/data/problems.json";

export default Vue.extend({
  name: "AllocationQuestion",
  components: { BoxContainer },
  data() {
    return {
      title: "อะไรที่ยังเป็นปัญหาที่ค้างคาใจคุณอยู่ทุกวันนี้",
    };
  },
  computed: {
    problemsTop() {
      const topData = problemsData.slice(0, 4);
      return topData;
    },
    problemsBottom() {
      const topData = problemsData.slice(4, 7);
      return topData;
    },
  },
});
</script>
