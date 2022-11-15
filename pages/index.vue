<template>
  <div class="flex flex-col">
    <Landing />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Landing from "~/components/Landing.vue";

export default Vue.extend({
  name: "IndexPage",
  components: { Landing },
});
</script>
