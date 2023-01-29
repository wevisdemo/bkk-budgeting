<template>
  <BoxContainer>
    <div class="text-center">
      <p class="wv-b3">
        ซึ่งเป็นแผนพัฒนาที่กรุงเทพฯ ตั้งเป้าหมายไว้ เพื่อจะก้าวไปสู่การเป็น
      </p>
      <p class="wv-h5 font-bold">“มหานครแห่งเอเชีย”</p>
      <p class="wv-b3">ภายในระยะเวลา 20 ปี (พ.ศ. 2561-2580)</p>
    </div>
    <div class="w-full">
      <TimelineDesktop class="hidden sm:block" />
      <div class="block sm:hidden">
        <TimelineMobile />
        <div class="grid gap-2 grid-cols-2 mt-4">
          <div
            v-for="({ year, text }, timelineIndex) in timeline"
            :key="timelineIndex"
            class="bg-white text-center"
          >
            <div class="flex gap-1 justify-center items-center">
              <TimelinePointer />
              <p class="wv-b6">{{ year }}</p>
            </div>
            <p>{{ text }}</p>
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
  text: string;
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
          text: "ออกแผนพัฒนากทม. 20 ปี ครั้งแรก",
        },
        {
          year: 2561,
          text: "ปรับปรุงแผนพัฒนากทม. 20 ปี ใหม่",
        },
      ],
    };
  },
});
</script>

<style lang="scss"></style>
