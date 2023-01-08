<template>
  <BoxContainer>
    <div class="grid grid-cols-7 relative">
      <div
        class="text-center absolute left-0 right-0 flex flex-col justify-center h-full z-0"
      >
        <p class="wv-b3 font-bold">‘น้ำเน่าเสีย, ขยะ, ฝุ่นละออง’</p>
        <p class="wv-b3">
          เป็นเพียงส่วนหนึ่งของอีกหลายประเด็นที่กรุงเทพฯ วางแผนเพื่อแก้ไข ภายใต้
        </p>
        <p class="wv-h8 font-extrabold">แผนยุทธศาสตร์ 7 ด้าน</p>
      </div>
      <div
        v-for="(item, problemsIndex) in problems"
        :key="problemsIndex"
        class="h-[500px] flex flex-col justify-between items-center z-50"
        @mouseover="(onHoverImg = problemsIndex), (selectedTopic = problemsIndex)"
        @mouseleave="onHoverImg = null"
      >
        <img
          class="w-20 h-20"
          :src="`${$config.path.images}/persistent-problems/${item.img}.png`"
          :alt="item.title"
        />
        <div class="flex-1">
          <div class="arrow">
            <div class="line" />
            <div class="point" />
          </div>
        </div>
        <img
          :id="problemsIndex.toString()"
          class="w-20 h-auto"
          :src="setImageHover(item.icon, problemsIndex)"
          :alt="item.title"
        />
      </div>
    </div>
    <div class="max-w-7xl bg-black flex flex-col items-center justify-center p-4">
      <div class="text-white text-center pb-4">
        <p class="wv-h6">การสร้างเมืองปลอดภัย</p>
        <p class="wv-b6">ประกอบด้วย 4 มิติย่อย</p>
      </div>
      <div class="grid grid-cols-4 gap-4">
        <div
          v-for="(topic, topicIndex) in allTopics[selectedTopic]"
          :key="topicIndex"
          style="background-color: white"
          class="flex flex-col items-center grid-rows-[repeat(2,_min-content)] gap-1 text-center p-4 min-h-[200px]"
        >
          <div
            class="bg-wv-blue text-white w-5 h-5 rounded-full flex items-center justify-center"
          >
            {{ topicIndex + 1 }}
          </div>
          <template v-for="(item, itemIndex) in topic">
            <p :key="itemIndex" class="text-black font-bold">{{ item }}</p>
          </template>
        </div>
      </div>
    </div>
  </BoxContainer>
</template>

<script lang="ts">
import Vue from "vue";
import BoxContainer from "~/components/BoxContainer.vue";
import problemsData from "~/data/problems.json";

interface StrategeicPlansDataProp {
  onHoverImg: number | null;
  selectedTopic: number;
  strategicIcon: string;
}

export default Vue.extend({
  name: "StrategicPlans",
  components: { BoxContainer },
  data(): StrategeicPlansDataProp {
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
        return item.topic;
      });

      return topics;
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

.line {
  height: calc(100% - 4px);
  background: blue;
  width: 2px;
}

.point {
  width: 0;
  height: 0;
  border-left: 15px solid transparent;
  border-right: 15px solid transparent;
  border-top: 15px solid blue;
  @apply absolute bottom-0;
}
</style>