<template>
  <div class="min-h-screen md:max-w-[600px] md:w-[600px] mx-auto flex flex-col font-bold">
    <div v-for="item in projects" :key="projects.no">
      <button
        class="w-full wv-b4 text-left p-[20px] my-[4px] rounded-[5px] hover:bg-black hover:text-white"
        v-for="(i, key) in item.Sub_problem"
        :key="key"
        @click="() => selectTopic(i.name, i.strategy)"
        :class="[
          selected.filter(s => s.problem === i.name).length != 0
            ? `bg-black text-white`
            : selected.length === 3
            ? `opacity-50 bg-white`
            : `bg-white`,
          `border-2 `,
        ]"
      >
        {{ i.name }}
      </button>
    </div>
    <div class="flex justify-center mt-5 items-center">
      <button
        @click="() => prevPage()"
        class="border-black border rounded-[5px] flex items-center justify-center h-[40px] w-[40px]"
      >
        <i class="el-icon-back text-2xl" />
      </button>
      <button
        class="border border-black rounded p-3 ml-2 wv-b6 font-bold"
        :class="selected.length < 3 ? `opacity-20` : ``"
        :disabled="selected.length < 3"
        @click.stop="openDialog"
      >
        ส่งความคิดเห็น
      </button>
    </div>
    <FormDialog
      :selected="selected"
      :closeDialog="closeDialog"
      v-if="dialogOpen"
      :setStepSurvey="setStepSurvey"
    />
  </div>
</template>

<script>
import FormDialog from "~/components/FormDialog.vue";
export default {
  components: {
    FormDialog,
  },
  props: {
    setStepSurvey: {
      type: Function,
    },
  },
  data() {
    return {
      projects: [],
      selected: [],
      dialogOpen: false,
      formData: {
        district: {},
        projects: [],
      },
    };
  },
  mounted() {
    this.projects = this.$store.state.selectedSurvey;
  },
  methods: {
    selectTopic(problem, strategy) {
      const max = 3;
      const maxLimit = this.selected.length < max;
      const isIncluded = this.selected.filter(el => el.problem === problem);
      if (isIncluded.length === 0) {
        if (maxLimit) this.selected.push({ problem: problem, strategy: strategy });
      } else {
        const filtered = this.selected.filter(el => el.problem !== problem);
        this.selected = filtered;
      }
    },
    prevPage() {
      this.setStepSurvey("prev");
    },
    openDialog() {
      this.dialogOpen = true;
    },
    closeDialog() {
      this.dialogOpen = false;
    },
  },
};
</script>

<style lang="scss" scoped></style>
