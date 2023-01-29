<template>
  <BoxContainer>
    <div class="text-center">
      <p class="wv-b3">
        ซึ่งเป็นแผนพัฒนาที่กรุงเทพฯ ตั้งเป้าหมายไว้ เพื่อจะก้าวไปสู่การเป็น
      </p>
      <p class="wv-h5 font-bold">“มหานครแห่งเอเชีย”</p>
      <p class="wv-b3">ภายในระยะเวลา 20 ปี (พ.ศ. 2561-2580)</p>
    </div>
    <TimelineSvg />
  </BoxContainer>
</template>

<script lang="ts">
import Vue from "vue";
import BoxContainer from "~/components/BoxContainer.vue";
// @ts-ignore
import TimelineSvg from "~/assets/icons/timeline.svg?inline";

export default Vue.extend({
  name: "DevelopmentTimeline",
  components: { BoxContainer, TimelineSvg },
  data() {
    return {};
  },
});
</script>

<style lang="scss"></style>
