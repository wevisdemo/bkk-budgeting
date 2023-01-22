<template>
  <div class="bg-black text-white">
    <div class="max-w-5xl w-full p-6 m-auto flex flex-col justify-center items-center">
      <div class="mx-10">
        <p class="wv-b3 text-center">
          ทางทีมได้สอบถามไปยัง <span class="text-wv-green">“ผศ.ดร.ทวิดา กมลเวชช”</span>
          ที่ปรึกษาเรื่องการจัดทำแผนพัฒนาของกรุงเทพมหานคร” เกี่ยวกับความหวังในการเห็น
          <strong>“ระบบงบประมาณแบบมีส่วนร่วม (Participatory Budgeting)”</strong>
          ที่จะเกิดขึ้นโดยกรุงเทพมหานคร
        </p>
      </div>
      <div class="flex flex-col items-center justify-center gap-4 my-4">
        <img
          class="rounded-full"
          src="~/assets/professor-portrait.jpg"
          width="100px"
          height="100px"
        />
        <p class="wv-b5 text-wv-green">กด + เพื่อฟังคลิปคำตอบ</p>
      </div>
      <div class="flex flex-col gap-4">
        <div
          v-for="(item, videoIndex) in videoAnswers"
          :key="videoIndex"
          class="flex gap-2 p-4 rounded border border-wv-green"
          @click="handleQuestion"
        >
          <div v-if="!openQuestion">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect y="11" width="24" height="2" fill="#4CC45D" />
              <rect
                x="13"
                width="24"
                height="2"
                transform="rotate(90 13 0)"
                fill="#4CC45D"
              />
            </svg>
          </div>
          <div v-else>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect y="11" width="24" height="2" fill="#4CC45D" />
            </svg>
          </div>
          <p class="wv-h8">{{ item.question }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "ParticipatoryBudgeting",
  data() {
    return {
      openQuestion: false,
      videoAnswers: [
        {
          question:
            "กรุงเทพมหานครมองเรื่องการมีส่วนร่วมโดยเฉพาะงบประมาณแบบมีส่วนร่วมอย่างไร?",
          answer: "",
          video: "",
        },
        {
          question: "ตอนนี้กรุงเทพมหานครกำลังดำเนินการอะไรอยู่?",
          answer: "",
          video: "",
        },
        {
          question: "ประเทศไทย หากจะไปสู่งบประมาณแบบมีส่วนร่วมได้ ควรเริ่มที่จุดไหน?",
          answer: "",
          video: "",
        },
      ],
    };
  },
  methods: {
    handleQuestion() {
      this.openQuestion = !this.openQuestion;
    },
  },
});
</script>
