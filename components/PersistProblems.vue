<template>
  <BoxContainer>
    <div
      id="problemPlanning"
      class="wv-kondolar wv-h5 font-extrabold pb-1 text-center hidden sm:block scroll-mt-8"
    >
      {{ title }}
    </div>
    <div
      id="problemPlanning"
      class="wv-kondolar wv-h5 sm:pb-8 text-center block sm:hidden wv-bold"
    >
      {{ title }}
    </div>
    <p class="text-center">เลือกได้ 1 ข้อ</p>
    <div class="flex flex-col gap-2 md:gap-5 max-w-[800px] mx-auto">
      <div class="flex flex-wrap gap-2 md:gap-3 lg:gap-5 justify-center">
        <div
          v-for="(item, index) in planData"
          :key="index"
          class="flex sm:flex-col bg-white rounded-md basis-full sm:basis-28 md:basis-40 flex-shrink-0 gap-2 sm:text-center items-center py-3 px-2 sm:py-5 sm:px-4 cursor-pointer hover:bg-gray-100"
          :class="index === currentHoveredImage ? 'border-inset' : ''"
          @click="() => setCurrentImage(index)"
        >
          <img
            class="w-10 h-10 sm:w-28 sm:h-28 md:w-32 md:h-32 lg:h-36 lg:w-36 max-w-none"
            :src="`${$config.path.images}/persistent-problems/${item.img}.png`"
            :alt="item.issue"
          />
          <p class="wv-b4 wv-bold">{{ item.issue }}</p>
        </div>
      </div>
    </div>
  </BoxContainer>
</template>

<script lang="ts">
import Vue from "vue";
import BoxContainer from "~/components/BoxContainer.vue";
import { planData } from "~/data/plan-data";

export default Vue.extend({
  name: "AllocationQuestion",
  components: { BoxContainer },
  data() {
    return {
      title: "อะไรที่ยังเป็นปัญหาที่ค้างคาใจคุณอยู่ทุกวันนี้",
    };
  },
  computed: {
    currentHoveredImage() {
      return this.$store.state.currentImage;
    },
    planData() {
      return planData;
    },
  },
  methods: {
    setCurrentImage(image: number) {
      this.$store.commit("setCurrentImage", image);
    },
  },
});
</script>

<style lang="scss" scoped>
.border-inset {
  box-shadow: inset 0px 0px 0px 2px #000000;
}
</style>
