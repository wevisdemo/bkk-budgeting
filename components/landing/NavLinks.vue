<template>
  <div class="flex sm:flex-none flex-col gap-2 p-3">
    <p class="wv-b5 wv-bold">{{ title }}</p>
    <div class="divide-y divide-black divide-opacity-25">
      <a
        v-for="(item, index) in links"
        :key="index"
        :href="item.anchorLink || item.pageLink"
        class="py-1 px-1 flex hover:bg-black hover:rounded-[5px] hover:fill-white hover:text-white items-center justify-between gap-2"
      >
        <p class="wv-b5">{{ item.title }}</p>
        <div v-if="arrowDirection" class="w-[15px] h-[15px]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            v-if="arrowDirection === 'Right'"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
            />
          </svg>
          <svg
            v-else
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3"
            />
          </svg>
        </div>
      </a>
    </div>
  </div>
</template>

<script lang="ts">
import { PropType, defineComponent } from "vue";

interface Link {
  title: string;
  pageLink: string;
  anchorLink: string;
}

type ArrowDirection = "Down" | "Right";

export default defineComponent({
  name: "NavLinks",
  props: {
    title: {
      type: String,
      required: true,
    },
    links: { type: Array as PropType<Link[]>, default: () => [], required: true },
    arrowDirection: {
      type: String as PropType<ArrowDirection>,
      default: "Down",
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
