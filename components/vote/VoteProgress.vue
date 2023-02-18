<template>
  <div class="w-full relative rounded border-2 border-white">
    <div class="flex flex-col z-20 h-full w-full relative py-2 px-2">
      <div class="flex gap-1 items-center">
        <p class="wv-b4 wv-bold flex-grow text-left">{{ strategyVote.title }}</p>
        <p class="wv-b4">{{ strategyVote.progress }}%</p>
      </div>
      <p class="wv-b6 flex-grow text-left">{{ strategyVote.subtitle }}</p>
    </div>
    <div
      :class="`top-0 left-0 z-10 absolute h-full ${
        strategyVote.progress === 100 ? `rounded` : `rounded-l`
      } ${bgColor}`"
      :style="`width: ${strategyVote.progress}%`"
    />
    <div class="top-0 left-0 right-0 z-0 absolute h-full" />
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from "vue";

import type { TypeColor } from "~/models/strategies";
import type { Project } from "~/components/ProjectDevelopment.vue";

export default Vue.extend({
  name: "IdeaVote",
  props: {
    strategyVote: {
      type: Object as PropType<Project>,
      required: true,
    },
    bgColor: {
      type: String as PropType<TypeColor>,
      required: true,
    },
  },
});
</script>
