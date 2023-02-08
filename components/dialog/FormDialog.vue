<template>
  <div
    class="fixed w-full h-full left-0 right-0 top-0 bottom-0 flex justify-center items-center z-40 bg-dialog"
  >
    <slot />
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "FormDialog",
});
</script>

<style scoped>
.bg-dialog {
  background-color: rgba(0, 0, 0, 0.6);
}
</style>
