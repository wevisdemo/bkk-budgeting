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
        v-for="(item, problemsIndex) in problems"
        :key="`${item.strategy}-problemsIndex`"
        class="sm:h-[260px] flex flex-col justify-between items-center z-30"
        @mouseover="(onHoverImg = problemsIndex), (selectedTopic = problemsIndex)"
      >
        <img
          class="w-20"
          :class="
            selectedTopic === problemsIndex
              ? `border border-solid border-black rounded-full`
              : `opacity-50`
          "
          :src="`${$config.path.images}/persistent-problems/${item.img}.png`"
          :alt="item.title"
        />
        <div class="flex-1">
          <div class="arrow">
            <div
              class="h-14 border-2"
              :class="[
                selectedTopic === problemsIndex
                  ? `border-solid`
                  : `border-dashed opacity-50`,
                `border-wv-${item.strategy}`,
              ]"
            />
            <div
              class="point-down"
              :class="[
                `border-t-wv-${item.strategy}`,
                selectedTopic === problemsIndex ? 'opacity-100' : 'opacity-80',
              ]"
            />
          </div>
        </div>
        <img
          :id="problemsIndex.toString()"
          class="w-20 h-28"
          :src="setImageHover(item.icon, problemsIndex)"
          :alt="item.title"
        />
        <div v-show="selectedTopic === problemsIndex" class="point-up" />
      </div>
    </div>
    <div class="bg-white flex flex-col items-center justify-center p-4 w-full">
      <div class="text-center pb-4">
        <p class="wv-b6">ยุทธศาสตร์ด้าน</p>
        <p class="wv-h8 wv-bold">การสร้างเมืองปลอดภัย</p>
        <p class="wv-b6">ประกอบด้วย {{ allTopics[selectedTopic].length }} มิติย่อย</p>
      </div>
      <div class="grid grid-cols-4 divide-x w-full">
        <div
          v-for="(topics, topicIndex) in allTopics[selectedTopic]"
          :key="topicIndex"
          style="background-color: white"
          class="flex flex-col items-center grid-rows-[repeat(2,_min-content)] gap-1 text-center p-4 min-h-[200px] w-full"
        >
          <div
            class="bg-wv-blue text-white w-5 h-5 rounded-full flex items-center justify-center"
          >
            {{ topicIndex + 1 }}
          </div>
          <template v-for="(item, itemIndex) in topics.topic">
            <p :key="itemIndex" class="text-black wv-bold">{{ item }}</p>
          </template>
        </div>
      </div>
    </div>
  </BoxContainer>
</template>

<script lang="ts">
import Vue from "vue";
import BoxContainer from "~/components/BoxContainer.vue";
import { problemsData } from "~/data/problems-data";

interface StrategeicPlansData {
  onHoverImg: number | null;
  selectedTopic: number;
  strategicIcon: string;
}

export default Vue.extend({
  name: "StrategicPlans",
  components: { BoxContainer },
  data(): StrategeicPlansData {
    return {
      onHoverImg: null,
      selectedTopic: 0,
      strategicIcon: "",
    };
  },
  computed: {
    problems() {
      return problemsData;
    },
    allTopics() {
      const topics = problemsData.map(item => {
        return item.topics;
      });

      return topics;
    },
    currentHoveredImage() {
      return this.$store.state.currentImage;
    },
  },
  watch: {
    currentHoveredImage(newCount) {
      this.selectedTopic = newCount;
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
