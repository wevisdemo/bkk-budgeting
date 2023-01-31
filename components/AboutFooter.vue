<template>
  <div class="bg-black h-52 flex justify-center items-center">
    <div class="flex gap-4">
      <PunchUpSvg />
      <div class="text-white">
        <p>หากมีข้อสงสัยหรือคำแนะนำเพิ่มเติมใด ๆ เกี่ยวกับงานนี้</p>
        <p>ทักมาหาพวกเราได้ที่ m.me/punchupworld</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
// @ts-ignore
import PunchUpSvg from "~/assets/icons/punchup.svg?inline";

export default Vue.extend({
  name: "AboutFooter",
  components: { PunchUpSvg },
});
</script>
