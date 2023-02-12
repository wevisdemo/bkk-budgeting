<template>
  <BoxContainer>
    <div class="hidden sm:block h-full pb-6">
      <div class="text-center flex flex-col justify-center h-full z-0">
        <p class="wv-b3">
          เป็นเพียงส่วนหนึ่งของอีกหลายประเด็นที่กรุงเทพฯ วางแผนเพื่อแก้ไข ภายใต้
        </p>
        <p class="wv-h8 font-extrabold">แผนยุทธศาสตร์ 7 ด้าน</p>
      </div>
    </div>
    <div
      class="flex gap-2 sm:gap-6 md:gap-12 grid-cols-7 relative justify-center w-full"
    >
      <div
        v-for="(item, planIndex) in plans"
        :key="`${item.strategy_en}-problemsIndex`"
        class="sm:h-[260px] flex flex-col justify-between items-center z-30"
        @mouseover="(onHoverImg = planIndex), (selectedStrategy = planIndex)"
      >
        <img
          class="w-20"
          :class="
            selectedStrategy === planIndex
              ? `border border-solid border-black rounded-full`
              : `opacity-50`
          "
          :src="`${$config.path.images}/persistent-problems/${item.img}.png`"
          :alt="item.strategy"
        />
        <div class="flex-1">
          <div class="arrow">
            <div
              class="h-14 border-2"
              :class="[
                selectedStrategy === planIndex
                  ? `border-solid`
                  : `border-dashed opacity-50`,
                `border-wv-${item.strategy_en}`,
              ]"
            />
            <div
              class="point-down"
              :class="[
                `border-t-wv-${item.strategy_en}`,
                selectedStrategy === planIndex ? 'opacity-100' : 'opacity-80',
              ]"
            />
          </div>
        </div>
        <img
          :id="planIndex.toString()"
          class="w-20 h-28"
          :src="setImageHover(item.icon, planIndex)"
          :alt="item.strategy"
        />
        <div v-show="selectedStrategy === planIndex" class="point-up" />
      </div>
    </div>
    <div class="bg-white flex flex-col items-center justify-center p-4 w-full">
      <div class="text-center pb-4">
        <p class="wv-b6">ยุทธศาสตร์ด้าน</p>
        <p class="wv-h8 wv-bold">การสร้างเมืองปลอดภัย</p>
        <p class="wv-b6">
          ประกอบด้วย {{ allStrategies[selectedStrategy].length }} มิติย่อย
        </p>
      </div>
      <div class="flex divide-x w-full">
        <div
          v-for="(strategy, strategyIndex) in allStrategies[selectedStrategy]"
          :key="strategyIndex"
          class="flex flex-col grid-rows-[repeat(2,_min-content)] gap-4 p-4 min-h-[200px] w-full bg-white"
        >
          <div class="flex flex-col items-center justify-center w-full gap-1">
            <div
              class="text-white w-5 h-5 rounded-full flex justify-center wv-b6"
              :class="`bg-wv-${plans[selectedStrategy].strategy_en}`"
            >
              <span>{{ strategyIndex + 1 }}</span>
            </div>
            <p class="wv-b5 wv-bold text-center">{{ strategy.sub_strategy }}</p>
          </div>
          <p v-if="strategy.sample" class="wv-b6 wv-bold text-wv-gray-1">
            {{ strategy.sample }} <br />
            อยู่ในมิตินี้
          </p>
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
  </BoxContainer>
</template>

<script lang="ts">
import Vue from "vue";
import BoxContainer from "~/components/BoxContainer.vue";
import { planData } from "~/data/plan-data";

interface StrategeicPlansData {
  onHoverImg: number | null;
  selectedStrategy: number;
  strategicIcon: string;
}

export default Vue.extend({
  name: "StrategicPlans",
  components: { BoxContainer },
  data(): StrategeicPlansData {
    return {
      onHoverImg: null,
      selectedStrategy: 0,
      strategicIcon: "",
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
      return this.$store.state.currentImage;
    },
  },
  watch: {
    currentHoveredImage(newCount) {
      this.selectedStrategy = newCount;
      this.onHoverImg = newCount;
    },
  },
  methods: {
    setImageHover(icon: string, index: number) {
      if (this.onHoverImg === index) {
        return `${this.$config.path.images}/strategies/${icon}_hover.svg`;
      } else {
        return `${this.$config.path.images}/strategies/${icon}.svg`;
      }
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
