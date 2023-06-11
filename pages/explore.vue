<template>
  <div class="container mx-auto min-h-[90vh] px-2 lg:px-8">
    <div id="nav" class="flex justify-between my-5">
      <div class="wv-b6">สรุปภาพรวม</div>
      <div class="wv-b7 text-wv-gray-1">
        *เว็บไซต์นี้แสดงเฉพาะงบที่ใช้ตามยุทธศาสตร์ ซึ่งไม่ใช่งบทั้งหมดของกรุงเทพฯ
      </div>
    </div>
    <div
      id="header"
      class="flex wv-kondolar lg:justify-between text-center lg:text-left items-center flex-col lg:flex-row"
    >
      <div class="wv-black wv-h5">สำรวจการใช้งบกรุงเทพฯ ตามแผนยุทธศาสตร์</div>
      <div class="flex wv-b5 items-center mt-3 lg:mt-0">
        <div
          v-for="item in toppics"
          :key="item.id"
          @click="chooseTopic(item.name)"
          class="px-[14px] hover:border-black cursor-pointer text-center whitespace-nowrap py-[5px] border border-wv-gray-4 min-w-[120px]"
          :class="topic === item.name ? 'bg-wv-gray-4 text-black' : 'text-gray-400'"
        >
          {{ item.name }}
        </div>
      </div>
    </div>
    <SurveyByYears v-if="topic === 'รายปี'" />
    <SurveyByOrganize v-if="topic === 'รายหน่วยงาน'" />
    <SurveyByKeyword v-if="topic === 'ค้นด้วยคีย์เวิร์ด'" />
  </div>
</template>

<script>
import { mapActions } from "vuex";
import SurveyByYears from "~/components/expore/SurveyByYears.vue";
import SurveyByOrganize from "~/components/expore/SurveyByOrganize.vue";
import SurveyByKeyword from "~/components/expore/SurveyByKeyword.vue";
import { getChartData, getChartDataGroupByOrganizations } from "~/data/get-chart-data";
// import {getBudgetItems } from '~/data/get-budget-items'

export default {
  components: { SurveyByYears, SurveyByOrganize, SurveyByKeyword },

  data() {
    return {
      toppics: [
        { name: "รายปี" },
        { name: "รายหน่วยงาน" },
        { name: "ค้นด้วยคีย์เวิร์ด" },
      ],
      topic: "รายหน่วยงาน",
    };
  },
  mounted() {
    this.fetchdata();
  },
  methods: {
    ...mapActions({
      updateChartData: "updateChartData",
      updateOrganizeData: "updateOrganizeData",
    }),
    async fetchdata() {
      await getChartData().then(response => {
        this.updateChartData(response);
      });
      await getChartDataGroupByOrganizations().then(response => {
        this.updateOrganizeData(response);
      });
    },
    chooseTopic(topicName) {
      this.topic = topicName;
    },
  },
};
</script>
