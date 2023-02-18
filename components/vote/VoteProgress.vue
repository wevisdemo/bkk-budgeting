<template>
  <div class="w-full h-10 relative rounded border-2 border-white">
    <div class="flex gap-1 items-center z-20 h-full w-full relative py-4 px-2">
      <p class="wv-b3 flex-grow text-left">{{ strategyVote.title }}</p>
      <p class="wv-b4">({{ strategyVote.progress }}%)</p>
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
import { TypeColor } from "~/models/strategies";
import { Vote } from "~/models/voting";

export default Vue.extend({
  name: "IdeaVote",
  props: {
    strategyVote: {
      type: Object as PropType<Vote>,
      required: true,
    },
    bgColor: {
      type: String as PropType<TypeColor>,
      required: true,
    },
  },
});
</script>
