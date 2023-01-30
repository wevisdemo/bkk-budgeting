<template>
  <div class="hidden md:block">
    <div
      :style="`transform: rotate(${isEven(
        rotate,
      )}deg); transform-origin: center; width: fit-content;`"
      class="h-full flex justify-center items-center"
    >
      <img src="~/assets/icons/coin.svg" alt="Development timeline" class="w-full" />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "CoinIcon",
  props: {
    rotate: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      rotation: 0,
    };
  },
  methods: {
    isEven(index: number = 0) {
      const min = Math.ceil(30);
      const max = Math.floor(50);
      const random = Math.floor(Math.random() * (max - min) + min);
      return index % 2 ? `${random}` : `${-random}`;
    },
  },
});
</script>
