<template>
  <div id="byYears" class="mt-7 flex space-x-[35px]">
    <div class="max-w-[360px]">
      <p class="wv-b5 text-wv-gray-1">
        <b>ยุทธศาสตร์ 7 ด้าน</b> เป็นแผนพัฒนาที่กรุงเทพฯ <br />วางไว้
        เพื่อจะก้าวไปสู่การเป็น “มหานครแห่งเอเชีย” <br />ภายใน 20 ปี (2561-2580)
      </p>
      <div id="explantion" class="mt-6">
        <div v-for="(strategy, key) in groupByStrategy" :key="key">
          <button
            class="wv-b5 border-b border-b-wv-gray-4 text-start py-[10px]"
            @click="setStrategy(key)"
          >
            {{ key }}
          </button>
          <div v-if="strategy_choice === key">
            <button
              v-for="(item, index) in strategy"
              :key="index"
              class="py-[15px] border-b border-b-wv-gray-4 text-start"
              @click="setSubStrategy(item.sub_strategy)"
            >
              - {{ item.sub_strategy }}
            </button>
          </div>
        </div>
      </div>
    </div>
    <div>
      <p>{{ strategy_choice }}</p>
      <p>{{ sub_strategy_choice }}</p>
    </div>
  </div>
</template>

<script>
import _ from "lodash";
export default {
  props: {
    data: {
      default: [],
    },
  },
  data() {
    return {
      strategy_choice: "",
      sub_strategy_choice: "",
    };
  },
  computed: {
    groupByStrategy() {
      return _.groupBy(this.data, "strategy");
    },
  },
  methods: {
    setStrategy(strategy) {
      if (this.strategy_choice === strategy) {
        this.strategy_choice = "";
      } else {
        this.strategy_choice = strategy;
      }
      this.sub_strategy_choice = "";
    },
    setSubStrategy(subStrategy) {
      this.sub_strategy_choice === subStrategy
        ? (this.sub_strategy_choice = "")
        : (this.sub_strategy_choice = subStrategy);
    },
  },
};
</script>
