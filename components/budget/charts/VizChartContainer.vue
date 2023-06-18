<template>
  <div class="bg-white px-4 py-6 sm:p-10 relative">
    <div class="absolute -top-[1px] right-0">
      <img src="~/assets/icons/paper-corner.svg" />
    </div>
    <div >
      <slot />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "VizChart",
  props: {
    title: {
      type: String,
      default: "",
      required: false,
    },
    percentage: {
      type: Boolean,
      default: false,
      required: false,
    },
  },
});
</script>

<style lang="scss">
.active {
  background-color: white;
  color: black;
}
</style>
