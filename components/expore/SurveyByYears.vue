<template>
  <div id="byYears" class="mt-7 flex space-x-[35px] justify-center">
    <div class="max-w-[400px]">
      <p class="wv-b5 text-wv-gray-1">
        <b>ยุทธศาสตร์ 7 ด้าน</b> เป็นแผนพัฒนาที่กรุงเทพฯ <br />วางไว้
        เพื่อจะก้าวไปสู่การเป็น “มหานครแห่งเอเชีย” <br />ภายใน 20 ปี (2561-2580)
      </p>
      <div id="explantion" class="mt-6">
        <div v-for="(strategy, key) in navData" :key="key">
          <button
            class="flex items-center border-b border-b-wv-gray-4 text-start py-[10px] bg-opacity-30 rounded-[2px] px-3 w-full"
            @click="haddleStategy(strategy.no)"
            :class="
              handleButton(
                Number(String(strategyChoice)[0]) === strategy.no,
                strategy.no,
              )
            "
          >
            <div class="flex justify-between w-full">
              <div class="flex items-center">
                <div
                  :class="selectHandle(strategy.no === strategyChoice, strategy.no)"
                  class="w-0 h-0 mr-2 border-t-[6px] border-t-transparent border-l-[8px] border-l-rose-600 border-b-[6px] border-b-transparent"
                />
                <p class="wv-b6">{{ strategy.no }}. {{ strategy.name }}</p>
              </div>
              <div
                class="w-[10px] h-[10px] min-w-[10px] rounded-full border-black border ml-[10px] flex items-center justify-center p-[1px]"
                :class="strategyChoice === strategy.no && 'bg-black'"
              >
                <img src="~/assets/icons/selected.svg" alt="selected" class="w-full" />
              </div>
            </div>
          </button>
          <div v-if="Number(String(strategyChoice)[0]) === strategy.no">
            <p class="wv-b7 my-1 text-wv-gray-1">
              ประกอบด้วย {{ strategy.sub_strategy.length }} มิติย่อย
            </p>
            <div class="ml-5">
              <button
                v-for="(sub, index) in strategy.sub_strategy"
                :key="index"
                class="p-[10px] w-full border-b border-b-wv-gray-4 text-start bg-opacity-30 rounded-[5px] flex justify-between"
                @click="haddleStategy(sub.no)"
                :class="handleSubButton(sub.no)"
              >
                <p class="wv-b6">{{ sub.no }}. {{ sub.name }}</p>

                <div
                  class="w-[10px] min-w-[10px] h-[10px] rounded-full border-black border ml-[10px] flex items-center justify-center p-[1px]"
                  :class="strategyChoice === sub.no && 'bg-black'"
                >
                  <img
                    src="~/assets/icons/selected.svg"
                    alt="selected"
                    class="w-full"
                  />
                </div>
              </button>
            </div>
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
import { borderFilter, colorFilter } from "~/components/budget/utils";

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

    selectHandle(isSlect, strategy) {
      if (isSlect)
        return `rotate-90 ${borderFilter(strategy)} ${colorFilter(strategy)}}`;
      return borderFilter(strategy);
    },
    haddleStategy(strategy) {
      this.updateStrategy(strategy);
    },
    handleButton(isSlect, strategy) {
      if (isSlect)
        return `${this.strategyChoice === strategy && colorFilter(strategy)} font-bold`;
      return "";
    },
    handleSubButton(strategy) {
      if (this.strategyChoice === strategy) {
        return `${colorFilter(Number(String(this.strategyChoice)[0]))} font-bold`;
      }
      return "";
    },
  },
};
</script>
