<template>
  <div class="bg-white p-8 rounded-lg">
    <div class="flex justify-between w-full">
      <h5 class="wv-h5 wv-bold">{{ title }}</h5>
      <button
        class="flex bg-wv-gray-3 text-wv-gray-5 rounded-full border-2 h-min"
        @click="handleChartMode"
      >
        <div
          class="flex items-center gap-1 px-4 py-1 rounded-full h-auto"
          :class="{ active: !isPercentage }"
        >
          <svg
            width="14"
            height="11"
            viewBox="0 0 14 11"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect x="0.5" width="13" height="2" />
            <rect x="0.5" y="4.5" width="8" height="2" />
            <rect x="0.5" y="9" width="4" height="2" />
          </svg>
          <span class="wv-b7">ดูปริมาณ</span>
        </div>
        <div
          class="flex items-center gap-1 px-4 py-1 rounded-full h-auto"
          :class="{ active: isPercentage }"
        >
          <svg
            width="13"
            height="11"
            viewBox="0 0 13 11"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="6" height="2" />
            <rect x="7" width="6" height="2" />
            <rect y="4.5" width="9" height="2" />
            <rect x="10" y="4.5" width="3" height="2" />
            <rect y="9" width="3" height="2" />
            <rect x="4" y="9" width="9" height="2" />
          </svg>

          <span class="wv-b7">ดูสัดส่วน</span>
        </div>
      </button>
    </div>
    <slot />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

interface VizChartData {
  isPercentage: boolean;
}

export default defineComponent({
  name: "VizChart",
  model: {
    prop: "percentage",
  },
  props: {
    title: {
      type: String,
      default: "",
      required: false,
    },
    percentage: {
      type: Boolean,
      default: false,
      required: false,
    },
  },
  emits: ["chart"],
  data(): VizChartData {
    return {
      isPercentage: this.percentage,
    };
  },
  methods: {
    handleChartMode() {
      const state = (this.isPercentage = !this.isPercentage);
      this.$emit("chart", state);
      return state;
    },
  },
});
</script>

<style lang="scss">
.active {
  background-color: white;
  color: black;
}
</style>
