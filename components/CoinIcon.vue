<template>
  <div
    :style="`transform: rotate(${isEven(
      rotate,
    )}deg); transform-origin: center; width: fit-content;`"
  >
    <img src="~/assets/images/coin.svg" alt="Development timeline" class="w-full" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
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
