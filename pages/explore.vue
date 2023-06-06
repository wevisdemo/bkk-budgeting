<template>
  <div class="container mx-auto min-h-[90vh] px-8">
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
    <SurveyByYears />
  </div>
</template>

<script>
import { mapActions } from "vuex";
import SurveyByYears from "~/components/expore/SurveyByYears.vue";
import { getChartData } from "~/data/get-chart-data";

// getBudgetItems
export default {
  components: { SurveyByYears },

  mounted() {
    this.fetchdata();
  },
  methods: {
    ...mapActions({
      updateChartData: "updateChartData",
    }),
    async fetchdata() {
      await getChartData().then(response => {
        this.updateChartData(response);
      });
    },
  },
};
</script>
