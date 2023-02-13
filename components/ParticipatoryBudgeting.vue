<template>
  <div class="bg-black text-white">
    <BoxContainer>
      <div class="p-0 sm:p-10">
        <div class="mx-10">
          <p class="wv-b3 text-center text-wv-green">ข้อมูลเพิ่มเติม</p>
        </div>
        <div class="flex flex-col items-center justify-center gap-4 my-4"></div>
        <div class="flex flex-col gap-4">
          <div
            v-for="(info, infoIndex) in information"
            :key="infoIndex"
            class="flex gap-2 p-4 border-t border-wv-green cursor-pointer justify-between"
            @click.stop="setActiveQuestion(infoIndex)"
          >
            <div class="flex flex-col gap-8">
              <div class="flex flex-col gap-2">
                <p class="wv-h8">{{ info.title }}</p>
                <p class="wv-b4 opacity-60">{{ info.subtitle }}</p>
              </div>
              <div v-show="infoIndex === openedPanel">
                <div v-show="info.content_text" class="flex flex-col gap-4">
                  <div
                    v-for="(content, contentIndex) in info.content_text"
                    :key="contentIndex"
                    class="flex flex-col gap-2"
                  >
                    <p class="wv-b3 wv-bold text-wv-green">{{ content.title }}</p>
                    <p class="wv-b3">{{ content.text }}</p>
                    <ul v-show="content.list">
                      <li v-for="(list, listIndex) in content.list" :key="listIndex">
                        {{ list }}
                      </li>
                    </ul>
                  </div>
                </div>
                <div v-show="info.content_video" class="grid grid-cols-3 gap-4">
                  <div
                    v-for="(item, videoIndex) in info.content_video"
                    :key="videoIndex"
                    class="grid gap-2 content-between"
                  >
                    <p class="wv-b3 wv-bold text-wv-green">{{ item.title }}</p>
                    <video
                      :id="`video-${videoIndex}`"
                      width="100%"
                      height="auto"
                      class="m-auto"
                      style="max-width: 400px"
                      @click.stop="toggleVideo(videoIndex)"
                    >
                      <source
                        :src="require(`~/assets/videos/${item.video}.mp4`)"
                        type="video/mp4"
                      />
                    </video>
                  </div>
                </div>
              </div>
            </div>
            <div v-if="infoIndex !== openedPanel">
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
          </div>
        </div>
      </div>
    </BoxContainer>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import BoxContainer from "./BoxContainer.vue";

interface ContentText {
  title: string;
  text?: string;
  list?: string[];
}

interface ContentVideo {
  title: string;
  video: string;
}

interface QAndAnswer {
  title: string;
  subtitle: string;
  content_text?: ContentText[];
  content_video?: ContentVideo[];
}

interface ParticipatoryBudgetingData {
  openedPanel: number | null;
  information: QAndAnswer[];
}

export default Vue.extend({
  name: "ParticipatoryBudgeting",
  components: { BoxContainer },
  data(): ParticipatoryBudgetingData {
    return {
      openedPanel: null,
      information: [
        {
          title: "ทำความรู้จัก “งบประมาณแบบมีส่วนร่วม”?",
          subtitle: "คืออะไร ทำอย่างไร และตัวอย่างในประเทศอื่นๆ",
          content_text: [
            {
              title: "งบประมาณแบบมีส่วนร่วม คืออะไร?",
              text: `
                Partipatory Budgeting (PB) หรือที่เรียกว่า 
                งบประมาณแบบมีส่วนร่วมเป็นกระบวนการหรือเครื่องมือทางการบริหารที่ให้ประชาชนเข้าไปมีส่วนร่วมโดยตรงในการเข้าถึงทรัพยากรและตัดสินใจจัดสรรงบประมาณสอดคล้องกับความต้องการของประชาชนเอง`,
            },
            {
              title: "ทำอย่างไรจะเป็นงบประมาณแบบมีส่วนร่วม?",
              text: "ตาม citizenlab ได้อธิบายถึง 8 ขั้นตอนที่เป็นได้",
              list: [
                "1.  การวางรากฐาน ต้องวางแผนการมีส่วนร่วมของประชาชนแบบไหน",
                "2. ชี้แจงรายละเอียดให้ผู้เข้าร่วม ให้ประชาชนได้รับรู้เข้าใจตรงกัน",
                "3. สร้างวิธีการหรือเครื่องมือรวบรวมข้อมูล มีส่วนร่วมได้ง่าย",
                "4. วิเคราะห์ข้อมูลที่ได้รับ  โดยผู้เชี่ยวชาญที่เกี่ยวข้อง",
                "5. แบ่งรูปแบบการมีส่วนร่วม ต้องแบ่งแยกการให้แสดงความคิดเชัดเจน",
                "6. ชี้แจงผลลัพธ์ที่ได้ สื่อสารให้ประชาชนทุกคนทราบ ว่าผลลัพธ์ที่เกิดขึ้นได้อะไร",
                "7. แผนงาน โครงการ ได้รับงบอนุมัติและเกิดขึ้นจริง รัฐต้องเปิดเผย ‘อย่างโปร่งใสต่อสาธารณะ’ ",
                "8. ทำอย่างต่อเนื่องและเป็นระบบ สร้างการมีส่วนร่วมของประชาชนให้เพิ่มขึ้นต่อไปอย่างต่อเนื่อง",
              ],
            },
            {
              title: "ตัวอย่างงบประมาณแบบมีส่วนร่วมที่เกิดขึ้นแล้ว",
              list: [
                "1. Peñalolen, Chile เป็นการให้ประชาชนได้มีส่วนร่วมในการจัดการงบฯ ในแพลตฟอร์มออนไลน์ ภายใต้โครงการ (ในชุมชนของฉัน ฉันตัดสินใจ!) ประชาชนสามารถระบุความต้องการของชุมชนได้",
                "2. Govanhill, Glasgow ดำเนินโครงการ ‘ความไม่เท่าเทียมทางสุขภาพ Equally Well ’ เป็นโครงการนำร่องเปิดโอกาสให้ประชาชนมีส่วนร่วมในงบฯ",
                "3. Tower  Hamlets, ‘You Decide!’ โครงการชื่อว่า ‘คุณตัดสินใจ’ ช่วยกำหนดรูปแบบและตรวจสอบสิ่งที่สำคัญที่ควรจัดในชุมชนเป็นอันดับแรกๆ",
                "4. Porto Alegre, BrazilI ให้คนยากจนและผู้ที่มักถูกกีดกันทางการเมือง เข้ามามีบทบาทด้วยจัดสรรงบประมาณได้มาสู่ส่วนที่จำเป็นหรือเหมาะสมมากที่สุด",
              ],
            },
          ],
        },
        {
          title: "ตอนนี้กรุงเทพมหานครกำลังดำเนินการอะไรอยู่?",
          subtitle:
            "คุยกับ “ผศ.ดร.ทวิดา กมลเวชช” ที่ปรึกษาเรื่องการจัดทำแผนพัฒนาของกรุงเทพมหานคร",
          content_video: [
            {
              title:
                "กรุงเทพมหานครมองเรื่องการมีส่วนร่วมโดยเฉพาะงบประมาณแบบมีส่วนร่วม อย่างไร??",
              video: "p1",
            },
            {
              title: "ตอนนี้กรุงเทพมหานคร กำลังดำเนินการอะไรอยู่??",
              video: "p2",
            },
            {
              title:
                "ประเทศไทย หากจะไปสู่งบประมาณ แบบมีส่วนร่วมได้ ควรเริ่มที่จุดไหน??",
              video: "p3",
            },
          ],
        },
      ],
    };
  },
  methods: {
    setActiveQuestion(id: number) {
      if (this.openedPanel === id) {
        this.openedPanel = null;
      } else {
        this.openedPanel = id;
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
