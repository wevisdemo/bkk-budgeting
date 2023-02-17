<template>
  <div id="byYears" class="mt-7 flex space-x-[35px] justify-center">
    <div class="max-w-[360px]">
      <p class="wv-b5 text-wv-gray-1">
        <b>ยุทธศาสตร์ 7 ด้าน</b> เป็นแผนพัฒนาที่กรุงเทพฯ <br />วางไว้
        เพื่อจะก้าวไปสู่การเป็น “มหานครแห่งเอเชีย” <br />ภายใน 20 ปี (2561-2580)
      </p>
      <div id="explantion" class="mt-6">
        <div v-for="(strategy, key) in navData" :key="key">
          <button
            class="wv-b5 border-b border-b-wv-gray-4 text-start py-[10px]"
            @click="updateStrategy(strategy.no)"
          >
            {{ strategy.no }}. {{ strategy.name }}
          </button>
          <div v-if="strategy.no === strategyChoice">
            <button
              v-for="(sub, index) in strategy.sub_strategy"
              :key="index"
              class="py-[15px] border-b border-b-wv-gray-4 text-start w-full"
              @click="updateSubStrategy(sub.no)"
            >
              {{ sub.no }}. {{ sub.name }}
            </button>
          </div>
        </div>
      </div>
    </div>
    <HorizontalBarChartVue :data="data" />
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import HorizontalBarChartVue from "../budget/charts/HorizontalBarChart.vue";

export default {
  components: {
    HorizontalBarChartVue,
  },
  props: {
    data: {
      default: [],
    },
  },
  data() {
    return {};
  },
  computed: {
    ...mapState(["strategyChoice"]),
    navData() {
      return Object.values(this.data[0])[0];
    },
  },

  methods: {
    ...mapActions({
      updateStrategy: "updateStrategy",
      updateSubStrategy: "updateSubStrategy",
    }),
  },
};
</script>
