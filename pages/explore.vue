<template>
  <div class="container mx-auto min-h-[90vh] px-2 lg:px-8">
    <div id="nav" class="flex justify-between my-5">
      <NuxtLink :to="{ path: '/', hash: `#${topic}` }">
        <div class="text-wv-green flex items-center">
          <i class="el-icon-back mr-1" />
          สรุปภาพรวม
        </div>
      </NuxtLink>
      <div class="wv-b7 text-wv-gray-1">
        *เว็บไซต์นี้แสดงเฉพาะงบที่ใช้ตามยุทธศาสตร์<br class="md:hidden" />
        ซึ่งไม่ใช่งบทั้งหมดของกรุงเทพฯ
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
          class="px-[14px] hover:border-black cursor-pointer text-center whitespace-nowrap py-[5px] border border-wv-gray-4 min-w-[120px]"
          :class="topic === item.value ? 'bg-wv-gray-4 text-black' : 'text-gray-400'"
          @click="chooseTopic(item.value)"
        >
          {{ item.name }}
        </div>
      </div>
    </div>
    <SurveyByYears v-if="topic === 'YearlyBudget'" />
    <SurveyByOrganize v-if="topic === 'OrganizeBudget'" />
    <SurveyByKeyword v-if="topic === 'KeyWordBudget'" />
  </div>
</template>

<script>
import { mapActions } from "vuex";
import SurveyByYears from "~/components/expore/SurveyByYears.vue";
import SurveyByOrganize from "~/components/expore/SurveyByOrganize.vue";
import SurveyByKeyword from "~/components/expore/SurveyByKeyword.vue";

export default {
  components: { SurveyByYears, SurveyByOrganize, SurveyByKeyword },

  data() {
    return {
      toppics: [
        { name: "รายปี", value: "YearlyBudget" },
        { name: "รายหน่วยงาน", value: "OrganizeBudget" },
        { name: "ค้นด้วยคีย์เวิร์ด", value: "KeyWordBudget" },
      ],
      topic: {},
    };
  },
  mounted() {
    this.fetchdata();
    this.topic = this.$route.query.select || "YearlyBudget";
  },
  methods: {
    ...mapActions({
      updateChartData: "updateChartData",
      updateOrganizeData: "updateOrganizeData",
    }),
    fetchdata() {
      const chartResponse = this.$store.getters["data/getChartData"]();
      this.updateChartData(chartResponse);

      const chartDataByOrganizations =
        this.$store.getters["data/getChartDataGroupByOrganizations"]();
      this.updateOrganizeData(chartDataByOrganizations);
    },
    chooseTopic(topicValue) {
      this.topic = topicValue;
      this.$router.push({ query: { select: topicValue } });
    },
  },
};
</script>
