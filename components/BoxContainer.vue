<template>
  <div class="py-14 grid gap-4 sm:grid-6">
    <slot />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "BoxContainer",
});
</script>
