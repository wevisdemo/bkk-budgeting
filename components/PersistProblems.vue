<template>
  <div class="py-14 px-20 grid gap-6">
    <div class="wv-h8 text-center">อะไรที่ยังเป็นปัญหาที่ค้างคาใจคุณอยู่ทุกวันนี้</div>
    <div class="grid grid-cols-4">
      <div v-for="(item, index) in problems" :key="index" class="grid justify-center">
        <img
          class="w-40 h-40"
          :src="`${$config.path.images}/persistent-problems/${item.img}.png`"
          :alt="item.title"
        />
        <p class="wv-b4 wv-font-bold">{{ item.title }}</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import problemsData from "~/data/problems.json";

export default Vue.extend({
  name: "AllocationQuestion",
  computed: {
    problems() {
      return problemsData;
    },
  },
});
</script>
