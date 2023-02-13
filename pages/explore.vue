<template>
  <div class="container mx-auto">
    <div id="nav" class="flex justify-between my-5">
      <div class="wv-b6">สรุปภาพรวม</div>
      <div class="wv-b7 text-wv-gray-1">
        *เว็บไซต์นี้แสดงเฉพาะงบที่ใช้ตามยุทธศาสตร์ ซึ่งไม่ใช่งบทั้งหมดของกรุงเทพฯ
      </div>
    </div>
    <div id="header" class="flex wv-h5 wv-kondolar justify-between wv-black">
      <div>สำรวจการใช้งบกรุงเทพฯ ตามแผนยุทธศาสตร์</div>
      <div>toggle</div>
    </div>
    <ByYears :data="groupOfData" />
  </div>
</template>

<script>
import budget66 from "~/data/budgets/66.json";
import ByYears from "~/components/expore/ByYears.vue";

export default {
  components: { ByYears },
  data() {
    return {
      groupOfData: [...budget66],
    };
  },
};
</script>
