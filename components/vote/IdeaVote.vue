<template>
  <BoxContainer class="justify-center text-center">
    <div class="max-w-3xl">
      <p class="wv-h8">ไอเดียโดนใจของผู้ที่ใช้แพลตฟอร์มนี้</p>
      <div class="flex justify-center">
        <p class="wv-b5">ที่อยู่ใน</p>
        <div class="ml-2">
          <select
            id="district"
            name="district"
            class="border border-black rounded-sm px-2 py-1 min-w-[220px]"
          >
            <option
              v-for="(district, districtIndex) in districts"
              :key="districtIndex"
              :value="district"
            >
              {{ district }}
            </option>
          </select>
        </div>
      </div>
      <p class="wv-b5">ทั้งหมด <strong>xx,xxxx</strong> คน</p>
      <div class="flex flex-col gap-2 w-full my-4">
        <div v-for="(vote, voteIndex) in ideaVotes" :key="`voteIndex-${voteIndex}`">
          <VoteProgress :strategy-vote="vote" :bg-color="`bg-wv-${vote.type}`" />
        </div>
      </div>
      <div class="flex flex-wrap items-center gap-2">
        <div
          v-for="({ title, type }, strategyLegendIndex) in strategyLegend"
          :key="`strategyLegendIndex-${strategyLegendIndex}`"
          class="flex items-center gap-1"
        >
          <div :class="`w-4 h-4 rounded bg-wv-${type}`" />
          <p class="wv-b6">{{ title }}</p>
        </div>
      </div>
      <div class="flex justify-center py-4">
        <button class="border border-black rounded p-3" @click="openDialog">
          เสนอไอเดียเพิ่มเติม
        </button>
      </div>
    </div>
  </BoxContainer>
</template>

<script lang="ts">
import Vue from "vue";
import VoteProgress from "./VoteProgress.vue";
import { StrategyTypes } from "~/models/strategies";
import { Vote } from "~/models/voting";
import BoxContainer from "~/components/BoxContainer.vue";

interface VoteLegend {
  title: string;
  type: StrategyTypes;
}

interface IdeaVoteData {
  dialogOpen: boolean;
  districts: string[];
  ideaVotes: Vote[];
  strategyLegend: VoteLegend[];
}

export default Vue.extend({
  name: "IdeaVote",
  components: { VoteProgress, BoxContainer },
  data(): IdeaVoteData {
    return {
      dialogOpen: false,
      districts: ["ทุกเขต"],
      ideaVotes: [
        {
          title: "ปรับปรุงระบบจัดการขยะ",
          progress: 32,
          type: "safe",
        },
        {
          title: "พัฒนาทางเท้า ทางข้าม",
          progress: 43,
          type: "environment",
        },
        {
          title: "ปรับปรุงการระบายน้ำและจัดการน้ำท่วม",
          progress: 25,
          type: "safe",
        },
        {
          title: "จัดการการจราจรติดขัด",
          progress: 22,
          type: "environment",
        },
        {
          title: "ติดตั้งแสงสว่างและกล้องวงจรอย่างทั่วถึง",
          progress: 55,
          type: "safe",
        },
        {
          title: "เพิ่มพื้นที่สีเขียว",
          progress: 48,
          type: "environment",
        },
        {
          title: "พัฒนาระบบการศึกษา",
          progress: 33,
          type: "connectivity",
        },
        {
          title: "สร้างแพลตฟอร์มการมีส่วนร่วมและแสดงความคิดเห็นในการใช้งบฯ",
          progress: 72,
          type: "democracy",
        },
        {
          title: "จัดระเบียบผังเมืองให้เหมาะสม",
          progress: 67,
          type: "management",
        },
        {
          title: "ฟื้นฟูสถานที่ท่องเที่ยวสำคัญ",
          progress: 38,
          type: "economic",
        },
      ],
      strategyLegend: [
        { title: "การสร้างเมืองปลอดภัย", type: "safe" },
        { title: "การลดความเหลื่อมล้ำ", type: "equality" },
        { title: "การพัฒนาสิ่งแวดล้อมยั่งยืน", type: "environment" },
        { title: "การสร้างความเป็นมืออาชีพในการบริหาร", type: "management" },
        { title: "การเชื่อมโยงเมืองที่มีความคล่องตัว", type: "connectivity" },
        { title: "การต่อยอดความเป็นเมืองศูนย์กลางเศรษฐกิจ", type: "economic" },
        { title: "ส่งเสริมการสร้างเมืองประชาธิปไตย", type: "democracy" },
      ],
    };
  },
  methods: {
    openDialog() {
      this.dialogOpen = true;
    },
  },
});
</script>
