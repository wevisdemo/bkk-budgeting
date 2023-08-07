<template>
  <div class="w-full relative rounded border-2 border-white">
    <div class="flex flex-col z-20 h-full w-full relative py-2 px-2">
      <div class="flex gap-1 items-center">
        <p class="wv-b4 wv-bold flex-grow text-left">{{ strategyVote.idea }}</p>
        <p class="wv-b4" v-if="strategyVote.count / totalVotes !== Infinity">
          {{ ((strategyVote.count / totalVotes) * 100).toFixed() }}%
        </p>
        <p class="wv-b4" v-else>0%</p>
      </div>
      <p class="wv-b6 flex-grow text-left">{{ strategyVote.strategy }}</p>
    </div>
    <div
      class="voteBar"
      :class="`top-0 left-0 z-10 absolute h-full ${
        strategyVote.progress === 100 ? `rounded` : `rounded-l`
      } ${colorFilter(strategyVote.strategy)}`"
      :style="`width: ${(strategyVote.count / totalVotes) * 100}%`"
    />
    <div class="top-0 left-0 right-0 z-0 absolute h-full" />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { colorFilter } from "~/components/budget/utils";
export default Vue.extend({
  name: "IdeaVote",
  props: {
    strategyVote: {
      type: Object,
      required: true,
    },
    totalVotes: {
      type: Number,
    },
  },

  methods: {
    colorFilter,
  },
});
</script>

<style lang="scss">
.voteBar {
  transition: 0.3s;
}
</style>
