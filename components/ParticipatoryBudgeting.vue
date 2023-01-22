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
          src="~/assets/images/professor-portrait.jpg"
          width="100px"
          height="100px"
        />
        <p class="wv-b5 text-wv-green">กด + เพื่อฟังคลิปคำตอบ</p>
      </div>
      <div class="flex flex-col gap-4">
        <div
          v-for="(item, videoIndex) in videoAnswers"
          :key="videoIndex"
          class="flex gap-2 p-4 rounded-lg border border-wv-green cursor-pointer"
          @click.stop="setActiveQuestion(videoIndex)"
        >
          <div v-if="videoIndex !== openedQuestion">
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
          <div class="flex flex-col gap-8">
            <p class="wv-h8">{{ item.question }}</p>
            <div v-show="videoIndex === openedQuestion" class="flex flex-col gap-8">
              <video
                :id="`video-${videoIndex}`"
                width="100%"
                height="auto"
                class="m-auto"
                style="max-width: 400px"
                @click.stop="toggleVideo(videoIndex)"
              >
                <source
                  :src="require(`~/assets/videos/p${videoIndex + 1}.mp4`)"
                  type="video/mp4"
                />
              </video>
              <p class="wv-b3 text-center">{{ item.answer }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

interface QAndAnswer {
  question: string;
  answer: string;
  video: string;
}

interface ParticipatoryBudgetingData {
  openedQuestion: number | null;
  videoAnswers: QAndAnswer[];
}

export default Vue.extend({
  name: "ParticipatoryBudgeting",
  data(): ParticipatoryBudgetingData {
    return {
      openedQuestion: null,
      videoAnswers: [
        {
          question:
            "กรุงเทพมหานครมองเรื่องการมีส่วนร่วมโดยเฉพาะงบประมาณแบบมีส่วนร่วมอย่างไร?",
          answer:
            "การจะสร้างกลไกการมีส่วนร่วมให้มากที่สุด ต้องเป็นกลไกที่ทำให้เกิดความรับผิดชอบ โดยถ้ามีกำหนดให้ใช้จ่ายเงิน รัฐจะเป็นคนใช้จ่ายเงินลงความต้องการของพื้นใดพื้นที่นึง และพื้นที่นั้นต้องเสียสละเวลามาให้ข้อมูล ช่วยให้ความเห็นกำกับติดตาม เป็นเชิงสองฝ่ายทำงานร่วมกัน และการกำหนดกลไกงบประมาณแบบมีส่วนร่วม ช่วยหนุนให้แต่ละฝ่ายมีความสม่ำเสมอในการร่วมมือ และต่องบฯ ทำให้กลไกมีสลักสำคัญขึ้นจึงนำไปอยู่ในแผน",
          video: "",
        },
        {
          question: "ตอนนี้กรุงเทพมหานครกำลังดำเนินการอะไรอยู่?",
          answer:
            "การจะสร้างกลไกการมีส่วนร่วมให้มากที่สุด ต้องเป็นกลไกที่ทำให้เกิดความรับผิดชอบ โดยถ้ามีกำหนดให้ใช้จ่ายเงิน รัฐจะเป็นคนใช้จ่ายเงินลงความต้องการของพื้นใดพื้นที่นึง และพื้นที่นั้นต้องเสียสละเวลามาให้ข้อมูล ช่วยให้ความเห็นกำกับติดตาม เป็นเชิงสองฝ่ายทำงานร่วมกัน และการกำหนดกลไกงบประมาณแบบมีส่วนร่วม ช่วยหนุนให้แต่ละฝ่ายมีความสม่ำเสมอในการร่วมมือ และต่องบฯ ทำให้กลไกมีสลักสำคัญขึ้นจึงนำไปอยู่ในแผน",
          video: "",
        },
        {
          question: "ประเทศไทย หากจะไปสู่งบประมาณแบบมีส่วนร่วมได้ ควรเริ่มที่จุดไหน?",
          answer:
            "การจะสร้างกลไกการมีส่วนร่วมให้มากที่สุด ต้องเป็นกลไกที่ทำให้เกิดความรับผิดชอบ โดยถ้ามีกำหนดให้ใช้จ่ายเงิน รัฐจะเป็นคนใช้จ่ายเงินลงความต้องการของพื้นใดพื้นที่นึง และพื้นที่นั้นต้องเสียสละเวลามาให้ข้อมูล ช่วยให้ความเห็นกำกับติดตาม เป็นเชิงสองฝ่ายทำงานร่วมกัน และการกำหนดกลไกงบประมาณแบบมีส่วนร่วม ช่วยหนุนให้แต่ละฝ่ายมีความสม่ำเสมอในการร่วมมือ และต่องบฯ ทำให้กลไกมีสลักสำคัญขึ้นจึงนำไปอยู่ในแผน",
          video: "",
        },
      ],
    };
  },
  methods: {
    setActiveQuestion(id: number) {
      if (this.openedQuestion === id) {
        this.openedQuestion = null;
      } else {
        this.openedQuestion = id;
      }
    },
    toggleVideo(id: number) {
      const videoEl: any = document.getElementById(`video-${id}`);
      // eslint-disable-next-line no-console
      if (!videoEl) return;
      if (videoEl.paused) {
        videoEl.play();
      } else {
        videoEl.pause();
      }
    },
  },
});
</script>
