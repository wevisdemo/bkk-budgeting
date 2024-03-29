<template>
  <BoxContainer>
    <div class="hidden sm:block h-full pb-6 pt-5" id="strategic-plan">
      <div class="text-center flex flex-col justify-center h-full z-0">
        <p class="wv-b3">
          เป็นเพียงส่วนหนึ่งของอีกหลายประเด็นที่กรุงเทพฯ วางแผนเพื่อแก้ไข ภายใต้
        </p>
        <p class="wv-h8 wv-kondolar font-extrabold">แผนยุทธศาสตร์ 7 ด้าน</p>
      </div>
    </div>
    <div
      class="flex gap-2 sm:gap-6 md:gap-12 grid-cols-7 relative justify-center w-full"
    >
      <div
        v-for="(item, planIndex) in plans"
        :key="`${item.strategy_en}-problemsIndex`"
        class="sm:h-[260px] flex flex-col justify-between items-center z-30"
        @mouseover="(onHoverImg = item.topic_img), (selectedStrategy = item.topic_img)"
      >
        <img
          class="w-20"
          :class="
            selectedStrategy === item.topic_img
              ? `border border-solid border-black rounded-full`
              : `opacity-50`
          "
          :src="`${$config.path.images}/persistent-problems/issue_${
            item.topic_img + 1
          }.png`"
          :alt="item.strategy"
        />
        <div class="flex-1">
          <div class="arrow">
            <div
              class="h-14 border-2"
              :class="[
                selectedStrategy === item.topic_img
                  ? `border-solid`
                  : `border-dashed opacity-50`,
                `border-wv-${item.strategy_en}`,
              ]"
            />
            <div
              class="point-down"
              :class="[
                `border-t-wv-${item.strategy_en}`,
                selectedStrategy === item.topic_img ? 'opacity-100' : 'opacity-80',
              ]"
            />
          </div>
        </div>
        <img
          v-show="onHoverImg === item.topic_img"
          :id="planIndex.toString()"
          class="w-20 h-28"
          :src="`${$config.path.images}/strategies/${item.icon}_hover.svg`"
          :alt="item.strategy"
        />
        <img
          v-show="onHoverImg !== item.topic_img"
          :id="planIndex.toString()"
          class="w-20 h-28"
          :src="`${$config.path.images}/strategies/${item.icon}.svg`"
          :alt="item.strategy"
        />
        <div v-show="selectedStrategy === item.topic_img" class="point-up" />
      </div>
    </div>
    <!-- strategy -->
    <div class="bg-white flex flex-col items-center justify-center p-4 w-full">
      <div class="text-center pb-4">
        <p class="wv-b6">ยุทธศาสตร์ด้าน</p>
        <p class="wv-h8 wv-bold wv-kondolar">
          {{ pointerHover?.strategy }}
        </p>
        <div class="wv-b6 flex md:block space-x-2 md:space-x-0">
          <p v-if="pointerHover">
            ประกอบด้วย
            {{ pointerHover?.strategies?.length }}
            มิติย่อย
          </p>
          <span class="text-wv-gray-1 block sm:hidden">(กด + เพื่ออ่านคำอธิบาย)</span>
        </div>
      </div>
      <!-- desktop -->
      <div class="hidden sm:block">
        <div class="flex divide-x w-full">
          <div
            v-for="(strategy, strategyIndex) in pointerHover?.strategies"
            :key="strategyIndex"
            class="flex flex-col grid-rows-[repeat(2,_min-content)] gap-4 p-4 min-h-[200px] w-full bg-white"
          >
            <div class="flex flex-col items-center justify-center w-full gap-1">
              <div
                class="text-white w-5 h-5 rounded-full wv-b6 relative"
                :class="`bg-wv-${pointerHover?.strategy_en}`"
              >
                <span
                  class="absolute top-[50%] left-[50%] translate-x-[-51%] translate-y-[-50%]"
                  >{{ strategyIndex + 1 }}</span
                >
              </div>
              <p class="wv-b5 wv-bold text-center">{{ strategy.sub_strategy }}</p>
            </div>
            <div
              class="wv-b6 text-wv-gray-1"
              v-if="strategy.sample && currentHoveredImage === pointerHover?.topic_img"
            >
              <div class="flex space-x-[5px]">
                <img
                  class="w-[20px] h-[20px]"
                  :src="
                    require(`~/assets/images/sample_${pointerHover?.topic_img + 1}.png`)
                  "
                />
                <div class="flex flex-col">
                  <p class="wv-bold">{{ strategy.sample }}</p>
                  <p>อยู่ในมิตินี้</p>
                </div>
              </div>
            </div>
            <ul>
              <li
                v-for="(item, itemIndex) in strategy.sub_srategy_def"
                :key="itemIndex"
                class="wv-b5 text-black list-disc list-inside"
              >
                {{ item }}
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="flex flex-col sm:hidden w-full divide-y">
        <div
          v-for="(strategy, strategyIndex) in pointerHover?.strategies"
          :key="strategyIndex"
          class="flex flex-col w-full bg-white py-2 gap-2"
          @click="selectHandle(strategy.sub_strategy)"
        >
          <div class="flex relative">
            <img
              v-if="selected != strategy.sub_strategy"
              src="~/assets/icons/expand.svg"
              class="absolute right-0 cursor-pointer"
            />
            <img
              v-else
              src="~/assets/icons/un-expand.svg"
              class="absolute right-0 cursor-pointer"
            />
            <div
              class="text-white min-w-[15px] w-[15px] h-[15px] rounded-full relative wv-b6"
              :class="`bg-wv-${pointerHover?.strategy_en}`"
            >
              <p
                class="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]"
              >
                {{ strategyIndex + 1 }}
              </p>
            </div>
            <p class="wv-b5 ml-3 wv-bold mr-4">{{ strategy.sub_strategy }}</p>
          </div>
          <div
            class="wv-b6 ml-5 text-wv-gray-1"
            v-if="strategy.sample && currentHoveredImage === pointerHover?.topic_img"
          >
            <div class="flex space-x-[5px]">
              <img
                class="w-[20px] h-[20px]"
                :src="
                  require(`~/assets/images/sample_${pointerHover?.topic_img + 1}.png`)
                "
              />
              <div class="flex flex-row space-x-1">
                <p class="wv-bold">{{ strategy.sample }}</p>
                <p>อยู่ในมิตินี้</p>
              </div>
            </div>
          </div>
          <ul class="ml-3" v-if="selected === strategy.sub_strategy">
            <li
              v-for="(item, itemIndex) in strategy.sub_srategy_def"
              :key="itemIndex"
              class="wv-b5 text-black list-disc list-inside"
            >
              {{ item }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </BoxContainer>
</template>

<script>
import Vue from "vue";
import BoxContainer from "~/components/BoxContainer.vue";
import { planData } from "~/data/plan-data";

export default Vue.extend({
  name: "StrategicPlans",
  components: { BoxContainer },
  data() {
    return {
      onHoverImg: null,
      selectedStrategy: 0,
      strategicIcon: "",
      selected: "",
      pointerHover: {},
    };
  },

  computed: {
    plans() {
      return planData;
    },
    allStrategies() {
      return planData.map(item => {
        return item.strategies;
      });
    },
    currentHoveredImage() {
      // eslint-disable-next-line vue/no-side-effects-in-computed-properties
      this.selected = "";
      return this.$store.state.currentImage;
    },
  },
  watch: {
    currentHoveredImage(newCount) {
      this.selectedStrategy = newCount;
      this.onHoverImg = newCount;
      this.pointerHover = this.plans.find(p => p.topic_img === newCount);
    },
    selectedStrategy(newCount) {
      this.pointerHover = this.plans.find(p => p.topic_img === newCount);
    },
  },
  mounted() {
    this.pointerHover = this.plans.find(p => p.topic_img === this.selectedStrategy);
  },
  methods: {
    selectHandle(index) {
      this.selected = index;
    },
  },
});
</script>

<style lang="scss">
.grid-cols-auto {
  grid-auto-columns: auto;
}

.arrow {
  height: 100%;
  @apply relative flex justify-center;
}

.point-down {
  width: 0;
  height: 0;
  border-left: 8px solid transparent;
  border-right: 8px solid transparent;
  border-top-width: 12px;
  border-top-style: solid;
  @apply absolute bottom-0;
}

.point-up {
  width: 0;
  height: 0;
  border-left: 18px solid transparent;
  border-right: 18px solid transparent;
  border-bottom-width: 22px;
  border-bottom-style: solid;
  border-bottom-color: white;
  @apply absolute -bottom-5;
}
</style>
