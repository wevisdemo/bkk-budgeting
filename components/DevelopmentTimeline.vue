<template>
  <BoxContainer>
    <div class="grid gap-8">
      <div class="text-center">
        <p class="wv-b3">
          ซึ่งเป็นแผนพัฒนาที่กรุงเทพฯ ตั้งเป้าหมายไว้ เพื่อจะก้าวไปสู่การเป็น
        </p>
        <p class="wv-h5 wv-bold wv-kondolar">“มหานครแห่งเอเชีย”</p>
        <p class="wv-b3">ภายในระยะเวลา 20 ปี (พ.ศ. 2561-2580)</p>
      </div>
      <div class="w-full m-auto">
        <div class="hidden sm:block">
          <div
            class="flex justify-center h-0 w-full relative"
            :style="`padding-top: ${paddingTopDesktop}%;`"
          >
            <TimelineDesktop class="max-w-full absolute top-0" />
          </div>
        </div>
        <div class="block sm:hidden">
          <div
            class="flex justify-center h-0 w-full relative"
            :style="`padding-top: ${paddingTopMobile}%;`"
          >
            <TimelineMobile class="max-w-full absolute top-0" />
          </div>
          <div class="grid gap-2 grid-cols-2 mt-4">
            <div
              v-for="({ year, text }, timelineIndex) in timeline"
              :key="timelineIndex"
              class="bg-white text-center p-1"
            >
              <div class="flex gap-1 justify-center items-center">
                <TimelinePointer />
                <p class="wv-b6">{{ year }}</p>
              </div>
              <p v-for="(item, itemIndex) in text" :key="itemIndex">{{ item }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </BoxContainer>
</template>

<script lang="ts">
import Vue from "vue";
import BoxContainer from "~/components/BoxContainer.vue";
// @ts-ignore
import TimelineDesktop from "~/assets/icons/timeline-desktop.svg?inline";
// @ts-ignore
import TimelineMobile from "~/assets/icons/timeline-mobile.svg?inline";
// @ts-ignore
import TimelinePointer from "~/assets/icons/timeline-pointer.svg?inline";

interface Timeline {
  year: number;
  text: string[];
}

interface DevelopmentTimelineData {
  timeline: Timeline[];
}

export default Vue.extend({
  name: "DevelopmentTimeline",
  components: { BoxContainer, TimelineDesktop, TimelineMobile, TimelinePointer },
  data(): DevelopmentTimelineData {
    return {
      timeline: [
        {
          year: 2556,
          text: ["ออกแผนพัฒนา", "กทม. 20 ปี ครั้งแรก"],
        },
        {
          year: 2561,
          text: ["ปรับปรุงแผนพัฒนา", "กทม. 20 ปี ใหม่"],
        },
      ],
    };
  },
  computed: {
    paddingTopDesktop() {
      return (193 / 924) * 100;
    },
    paddingTopMobile() {
      return (76 / 300) * 100;
    },
  },
});
</script>

<style lang="scss">
.box-timeline-present,
.arrow-timeline-present {
  color: black;
  animation: bgAnimate 1.5s ease-in-out infinite;
}

@keyframes bgAnimate {
  0% {
    color: rgba(0, 0, 0, 1);
  }
  50% {
    color: rgba(0, 0, 0, 0.6);
  }
  100% {
    color: rgba(0, 0, 0, 1);
  }
}
</style>
