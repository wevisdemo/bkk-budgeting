<template>
  <div class="flex flex-1 flex-col gap-2 p-3 rounded">
    <p class="wv-b5 font-bold">เข้าใจแผนการใช้งบ</p>
    <div class="divide-y divide-black divide-opacity-25">
      <NuxtLink
        v-for="(item, index) in links"
        :key="index"
        :to="item.link"
        class="py-1 flex items-center justify-between gap-2"
      >
        <p class="wv-b5">{{ item.title }}</p>
        <div v-if="arrowDirection">
          <img :src="ArrowDirection" />
        </div>
      </NuxtLink>
    </div>
  </div>
</template>

<script lang="ts">
import { PropType, defineComponent } from "vue";

interface Links {
  title: string;
  link: string;
}

type ArrowDirection = "Down" | "Right";

export default defineComponent({
  name: "NavLinks",
  props: {
    links: { type: Array as PropType<Links[]>, default: () => [], required: true },
    arrowDirection: {
      type: String as PropType<ArrowDirection>,
      default: String,
      required: false,
    },
  },

  computed: {
    ArrowDirection() {
      const direction = this.arrowDirection;
      let icon = "";
      switch (direction) {
        case "Down":
          icon = require("@/static/icons/arrowDown.svg");
          break;
        case "Right":
          icon = require("@/static/icons/arrowRight.svg");
          break;
        default:
          break;
      }
      return icon;
    },
  },
});
</script>
