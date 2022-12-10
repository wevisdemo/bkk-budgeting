<template>
  <div class="container py-6 sm:py-14 grid gap-2 sm:grid-6">
    <slot />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "BoxContainer",
});
</script>
