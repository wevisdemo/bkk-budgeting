<template>
  <div>
    <div class="bg-wv-cream overflow-x-hidden">
      <Landing />
      <div
        class="max-w-7xl w-full p-6 m-auto flex flex-col justify-center items-center"
      >
        <!-- intro box -->
        <div
          class="sm:max-w-lg rounded-lg sm:bg-black sm:text-white sm:py-14 sm:px-20 grid gap-6"
        >
          <p class="wv-b3 text-center">
            ทุกวันนี้เมืองที่เราใช้ชีวิต
            ยังมีหลายอย่างไม่ได้เป็นแบบที่เราวาดฝันไว้ใช่ไหม?
          </p>
          <p class="wv-b3 text-center">
            เราเองในฐานะประชาชนผู้เสียภาษีทางตรงและทางอ้อม
            ก็ควรได้ร่วมออกแบบการใช้งบประมาณของเมือง
            เพื่อสร้างเมืองในแบบที่เราต้องการได้
          </p>
          <p class="wv-b3 text-center sm:text-wv-green font-bold">
            ถ้างั้นขอชวนมาลองเริ่มต้นที่เมืองหลวงอย่างกรุงเทพมหานครกันก่อนเลย!!
          </p>
        </div>
        <!-- issues -->
        <PersistProblems />
        <!-- strategies -->
        <div class="py-14 px-20 grid gap-6">
          <div class="grid grid-cols-7 relative">
            <div class="text-center absolute top-1/2 bottom-1/2 left-0 right-0">
              Lorem Ipsum
            </div>
            <div
              v-for="(item, index) in problems"
              :key="index"
              class="h-80 flex flex-col justify-between"
            >
              <img :src="item.img" :alt="item.title" />
              <div class="flex-1">arrow</div>
              <img :src="item.img" :alt="item.title" />
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
        </div>
        <div class="py-14 px-20 grid gap-6">
          <p class="wv-b5">Lorem ipsum</p>
          <h5 class="wv-h5">Lorem ipsum title bold</h5>
          <p class="wv-b5">Date</p>
        </div>
        <!-- text:  -->
        <div class="py-14 px-20 grid gap-6">
          <p class="wv-b5">Lorem ipsum</p>
          <h5 class="wv-h5">Lorem ipsum title bold</h5>
          <p class="wv-b5">Date</p>
        </div>
        <!-- timeline -->
        <div class="py-14 px-20 grid gap-6">
          <!-- todo -->
        </div>
        <!-- text: budget -->
        <div class="py-14 px-20 grid gap-6">
          <h2 class="wv-h1">Lorem ipsum title bold</h2>
          <p class="wv-b5">Date</p>
          <p class="wv-b5">budget</p>
        </div>
        <!-- viz -->
        <div class="py-14 px-20 grid gap-6">
          <!-- todo -->
        </div>
        <AllocationQuestion />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import AllocationQuestion from "~/components/AllocateQuestion.vue";
import Landing from "~/components/Landing.vue";
import PersistProblems from "~/components/PersistProblems.vue";
import problemsData from "~/data/problems.json";

export default Vue.extend({
  name: "IndexPage",
  components: { Landing, AllocationQuestion, PersistProblems },
  data() {
    return {
      intro: [
        "ทุกวันนี้เมืองที่เราใช้ชีวิต ยังมีหลายอย่างไม่ได้เป็นแบบที่เราวาดฝันไว้ใช่ไหม?",
        "เราเองในฐานะประชาชนผู้เสียภาษีทางตรงและทางอ้อม ก็ควรได้ร่วมออกแบบการใช้งบประมาณของเมือง เพื่อสร้างเมืองในแบบที่เราต้องการได้",
        "ถ้างั้นขอชวนมาลองเริ่มต้นที่เมืองหลวงอย่างกรุงเทพมหานครกันก่อนเลย!!",
      ],
    };
  },
  computed: {
    problems() {
      return problemsData;
    },
  },
});
</script>
