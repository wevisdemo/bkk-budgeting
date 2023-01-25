<template>
  <div class="w-full h-10 relative">
    <div class="flex gap-1 items-center z-20 h-full w-full relative py-4 px-2">
      <p class="wv-b3 flex-grow text-left">{{ strategyVote.title }}</p>
      <p class="wv-b4">({{ strategyVote.progress }}%)</p>
    </div>
    <div
      :class="`top-0 left-0 z-10 absolute h-full ${bgColor}`"
      :style="`width: ${strategyVote.progress}%`"
    />
    <div class="top-0 left-0 right-0 z-0 absolute h-full bg-wv-gray-4" />
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from "vue";

export interface VoteType {
  type:
    | "safe"
    | "management"
    | "environment"
    | "economic"
    | "democracy"
    | "equality"
    | "connectivity";
}

export interface TypeColor {
  colors:
    | "bg-wv-safe"
    | "bg-wv-management"
    | "bg-wv-environment"
    | "bg-wv-economic"
    | "bg-wv-democracy"
    | "bg-wv-equality"
    | "bg-wv-connectivity";
}

export interface Vote {
  title: string;
  progress: number;
  type: VoteType["type"];
}

export default Vue.extend({
  name: "IdeaVote",
  props: {
    strategyVote: {
      type: Object as PropType<Vote>,
      required: true,
    },
    bgColor: {
      type: String as PropType<TypeColor["colors"]>,
      required: true,
    },
  },
});
</script>
