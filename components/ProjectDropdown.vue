<template>
  <div>
    <select
      v-model="selected_project"
      name="project"
      class="rounded-sm px-2 py-1 outline outline-black max-w-[220px] w-full"
      :class="disabled ? `opacity-40` : ``"
      :disabled="disabled"
      @change="onChange"
    >
      <option
        v-for="(project, districtIndex) in projects"
        :key="districtIndex"
        :value="project"
      >
        {{ project.name }}
      </option>
    </select>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import projectsData from "~/data/projects.json";
import { StrategyTypes } from "~/models/strategies";

export interface Project {
  id: number;
  type: string | StrategyTypes;
  name: string;
  desc: string;
  dimension: string;
}

export interface ProjectVote extends Project {
  progress: number;
  vote_count: number;
}

interface DistrictDropdownData {
  selected_project: Project | null;
  projects: Project[];
}

const defaultOption = {
  id: 1,
  type: "",
  name: "เลือกโครงการ",
  desc: "",
  dimension: "",
};

export default defineComponent({
  name: "DistrictDropdown",
  props: {
    disabled: {
      type: Boolean,
    },
    type: {
      type: Number,
      default: null,
    },
  },
  emits: ["change"],
  data(): DistrictDropdownData {
    return {
      selected_project: null,
      projects: [defaultOption, ...projectsData],
    };
  },
  created() {
    this.selected_project = this.projects[0];
  },
  methods: {
    onChange() {
      this.$emit("change", this.selected_project);
    },
  },
});
</script>

<style lang="scss" scoped>
.select-dropdown {
  width: 175px;
  font-family: "Anuphan", serif;
  font-size: 14px;
}
</style>
