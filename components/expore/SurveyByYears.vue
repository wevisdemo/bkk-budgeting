<template>
  <div
    id="byYears"
    class="mt-7 flex lg:space-x-[35px] justify-center flex-col lg:flex-row"
    :class="chartData.years ? 'pointer-events-auto' : 'pointer-events-none'"
  >
    <div class="lg:w-[400px] mb-4 lg:mb-0">
      <p class="wv-b5 text-wv-gray-1 text-center lg:text-left">
        <b>ยุทธศาสตร์ 7 ด้าน</b> เป็นแผนพัฒนาที่กรุงเทพฯ <br />วางไว้
        เพื่อจะก้าวไปสู่การเป็น “มหานครแห่งเอเชีย” <br />ภายใน 20 ปี (2561-2580)
      </p>
      <div v-if="$mq === 'md'" class="flex items-center w-max mx-auto">
        <div
          class="p-[10px] my-[10px] text-left flex justify-between wv-b5 border-black border w-[300px] mx-auto rounded-[5px]"
          @click="mobileStrategy = true"
        >
          {{ chartSelected || "ทุกแผนยุทธศาสตร์" }}
          <img src="~/assets/images/open-modal.svg" />
        </div>
        <div class="ml-3" v-if="chartSelected" @click="reloadStrategy">
          <img src="~/assets/images/reload.svg" />
        </div>
      </div>
      <div
        v-if="($mq === 'md' && mobileStrategy) || $mq === 'lg'"
        id="explantion"
        class="lg:mt-6 fixed lg:relative inset-0 bg-white p-10 z-50 lg:p-0"
      >
        <div
          v-if="$mq === 'md' && chartSelected"
          class="absolute top-0 right-0 m-5"
          @click="mobileStrategy = false"
        >
          <div class="wv-b5 border-black rounded-[5px] border py-[5px] px-[10px]">
            ยืนยัน
          </div>
        </div>
        <img
          v-if="$mq === 'md' && !chartSelected"
          src="~/assets/images/close-black.svg"
          class="absolute top-0 right-0 m-5"
          @click="mobileStrategy = false"
        />
        <p class="wv-b5 font-bold mb-2 lg:hidden">แผนยุทธศาสตร์ 7 ด้าน</p>

        <div v-for="(strategy, key) in navData()" :key="key">
          <button
            class="flex items-center border-b border-b-wv-gray-4 text-start py-[10px] bg-opacity-30 rounded-[2px] px-3 w-full"
            :class="handleButton(chartSelected === strategy.name, strategy.name)"
            @click="handleStategy(strategy.name)"
          >
            <div class="flex justify-between w-full">
              <div class="flex items-center">
                <div
                  :class="selectHandle(strategy.name === chartSelected, strategy.name)"
                  class="w-0 h-0 mr-2 border-t-[6px] border-t-transparent border-l-[8px] border-b-[6px] border-b-transparent"
                />
                <p class="wv-b6">{{ key + 1 }}. {{ strategy.name }}</p>
              </div>
              <div
                class="w-[10px] h-[10px] min-w-[10px] rounded-full border-black border ml-[10px] flex items-center justify-center p-[1px]"
                :class="chartSelected === strategy.name && 'bg-black'"
              >
                <img src="~/assets/icons/selected.svg" alt="selected" class="w-full" />
              </div>
            </div>
          </button>
          <div
            v-if="
              chartSelected === strategy.name ||
              strategy.substrategies.includes(chartSelected)
            "
          >
            <p
              v-if="strategy.substrategies.length > 1"
              class="wv-b7 my-1 text-wv-gray-1"
            >
              ประกอบด้วย {{ strategy.substrategies.length }} มิติย่อย
            </p>
            <div class="ml-5">
              <button
                v-for="(sub, index) in strategy.substrategies"
                :key="index"
                class="p-[10px] w-full border-b border-b-wv-gray-4 text-start bg-opacity-30 rounded-[5px] flex justify-between"
                :class="handleSubButton(sub, strategy.name)"
                @click="handleStategy(sub)"
              >
                <p class="wv-b6">{{ key + 1 }}.{{ index + 1 }}. {{ sub }}</p>

                <div
                  class="w-[10px] min-w-[10px] h-[10px] rounded-full border-black border ml-[10px] flex items-center justify-center p-[1px]"
                  :class="chartSelected === sub && 'bg-black'"
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
    <div class="flex-1">
      <HorizontalBarChartVue class="mb-6" :pointer="pointer" />
      <ShareLabel />
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import HorizontalBarChartVue from "../budget/charts/HorizontalBarChart.vue";
import { borderFilter, colorFilter } from "~/components/budget/utils";
import { navData } from "~/components/expore/navData";
import { handleRemoveSelected } from "~/components/budget/utils";
import ShareLabel from "~/components/budget/ShareLabel.vue";

export default {
  components: {
    HorizontalBarChartVue,
    ShareLabel,
  },
  data() {
    return {
      mobileStrategy: false,
      pointer: "",
    };
  },

  computed: {
    ...mapState(["chartSelected", "strategyChoice", "chartData"]),
  },
  methods: {
    navData,
    handleRemoveSelected,
    ...mapActions({
      updateStrategy: "updateStrategy",
      updateChartSelected: "updateChartSelected",
      updateSubTitleModal: "updateSubTitleModal",
    }),
    selectHandle(isSlect, strategy) {
      if (isSlect)
        return `rotate-90 ${borderFilter(strategy)} ${colorFilter(strategy)}}`;
      return borderFilter(strategy);
    },
    handleStategy(strategy) {
      this.updateStrategy(strategy);
    },
    handleButton(isSlect, strategy) {
      if (isSlect)
        return `${this.chartSelected === strategy && colorFilter(strategy)} font-bold`;
      return "";
    },
    handleSubButton(strategy, name) {
      if (this.chartSelected === strategy) {
        return `${colorFilter(name)} font-bold`;
      }
      return "";
    },
    reloadStrategy() {
      this.updateChartSelected();
      handleRemoveSelected(".wrapper-sub-strategy", "z-[20]");
      handleRemoveSelected(".wrapper-strategy", "grayScale");
      handleRemoveSelected(".wrapper-strategy", "hidden");
      this.updateSubTitleModal("ตามแผนยุทธศาสตร์ 7 ด้าน");
    },
  },
};
</script>
