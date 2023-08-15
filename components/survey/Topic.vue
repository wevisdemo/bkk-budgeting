<template>
  <div
    class="min-h-screen md:max-w-[600px] md:w-[600px] mx-auto flex flex-col font-bold w-full"
  >
    <div class="grid grid-cols-2 gap-2 md:gap-4">
      <button
        v-for="item in surveyData()"
        :key="item.no"
        class="h-[60px] rounded-[5px] flex items-center justify-center hover:bg-black hover:text-white"
        @click="() => selectTopic(item.Problem)"
        :class="[
          selected.includes(item.Problem)
            ? `bg-black text-white`
            : selected.length === 3
            ? `opacity-50 bg-white`
            : `bg-white`,
          `border-2 `,
        ]"
      >
        {{ item.Problem }}
      </button>
    </div>
    <button
      @click="() => nextPage()"
      :class="[selected.length === 3 ? `opacity-100` : `opacity-20`]"
      :disabled="selected.length != 3"
      class="mx-auto mt-5 border-black border rounded-[5px] flex items-center justify-center h-[40px] w-[40px]"
    >
      <i class="el-icon-right text-2xl" />
    </button>
  </div>
</template>

<script>
import { surveyData } from "~/data/survey-data";

export default {
  props: {
    setStepSurvey: {
      type: Function,
    },
  },
  data() {
    return {
      selected: [],
    };
  },
  mounted() {
    this.selected = this.$store.state.selectedSurvey.map(s => s.Problem);
  },
  methods: {
    surveyData,
    selectTopic(problem) {
      const max = 3;
      const maxLimit = this.selected.length < max;
      const isIncluded = this.selected.includes(problem);
      if (!isIncluded) {
        if (maxLimit) this.selected.push(problem);
      } else {
        const filtered = this.selected.filter(el => el !== problem);
        this.selected = filtered;
      }
    },
    nextPage() {
      const filtered = this.surveyData().filter(el =>
        this.selected.includes(el.Problem),
      );
      this.$store.commit("setSurvey", filtered);
      this.setStepSurvey("next");
    },
  },
};
</script>

<style lang="scss" scoped></style>
