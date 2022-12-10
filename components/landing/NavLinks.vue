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
        <div v-if="arrowDirection" v-html="ArrowDirection" />
      </NuxtLink>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";

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
          icon = `<svg
            width="8"
            height="9"
            viewBox="0 0 8 9"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3.64645 8.35355C3.84171 8.54882 4.15829 8.54882 4.35355 8.35355L7.53553 5.17157C7.7308 4.97631 7.7308 4.65973 7.53553 4.46447C7.34027 4.2692 7.02369 4.2692 6.82843 4.46447L4 7.29289L1.17157 4.46447C0.976311 4.2692 0.659728 4.2692 0.464466 4.46447C0.269204 4.65973 0.269204 4.97631 0.464466 5.17157L3.64645 8.35355ZM3.5 0L3.5 8H4.5V0L3.5 0Z"
              fill="black"
            />
          </svg>`;
          break;
        case "Right":
          icon = `<svg
            width="9"
            height="8"
            viewBox="0 0 9 8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
              <path
                d="M8.35355 4.35355C8.54882 4.15829 8.54882 3.84171 8.35355 3.64645L5.17157 0.464466C4.97631 0.269204 4.65973 0.269204 4.46447 0.464466C4.2692 0.659728 4.2692 0.976311 4.46447 1.17157L7.29289 4L4.46447 6.82843C4.2692 7.02369 4.2692 7.34027 4.46447 7.53553C4.65973 7.7308 4.97631 7.7308 5.17157 7.53553L8.35355 4.35355ZM0 4.5H8V3.5H0V4.5Z" 
                fill="black"
              />
          </svg>`;
          break;
        default:
          break;
      }
      return icon;
    },
  },
});
</script>
