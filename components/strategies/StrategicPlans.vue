<template>
  <BoxContainer>
    <div class="grid grid-cols-7 relative">
      <div
        class="text-center absolute left-0 right-0 flex flex-col justify-center h-full"
      >
        <p class="wv-b3 font-bold">‘น้ำเน่าเสีย, ขยะ, ฝุ่นละออง’</p>
        <p class="wv-b3">
          เป็นเพียงส่วนหนึ่งของอีกหลายประเด็นที่กรุงเทพฯ วางแผนเพื่อแก้ไข ภายใต้
        </p>
        <p class="wv-h8 font-extrabold">แผนยุทธศาสตร์ 7 ด้าน</p>
      </div>
      <div
        v-for="(item, index) in problems"
        :key="index"
        class="h-[500px] flex flex-col justify-between items-center"
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
          class="w-20 h-auto"
          :src="`${$config.path.images}/strategies/${item.icon}.svg`"
          :alt="item.title"
        />
      </div>
    </div>
    <div
      class="max-w-7xl bg-black text-white flex flex-col items-center justify-center"
    >
      <p class="wv-h6">title lorem ipsum</p>
      <p class="wv-h8">subtitle lorem ipsum</p>
      <div class="grid grid-cols-4 gap-4">
        <div
          v-for="(item, problemsIndex) in problems"
          :key="problemsIndex"
          style="background-color: white"
        >
          <template v-for="(topic, topicIndex) in item.topic">
            <p :key="topicIndex" class="text-black">{{ topic.text }}</p>
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

export default Vue.extend({
  name: "StrategicPlans",
  components: { BoxContainer },
  computed: {
    problems() {
      return problemsData;
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
  height: calc(100% - 30px);
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
