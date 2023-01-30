<template>
  <div class="bg-white">
    <BoxContainer class="pb-8 sm:py-10 md:py-14 sm:px-10 md:px-32">
      <p class="wv-h8 text-center">เลือกโครงการที่อยากพัฒนา เลือกได้ 3 โครงการ</p>
      <div class="grid gap-4">
        <div
          v-for="(project, index) in projectsList"
          :key="index"
          class="grid gap-10 w-full projectItem md:projectItem"
        >
          <CoinIcon :rotate="index" />
          <div
            class="py-1 px-2 rounded text-center cursor-pointer flex-grow hover:opacity-80"
            :class="
              formData.projects.includes(project)
                ? `bg-wv-${project.type}`
                : `bg-wv-gray-3`
            "
            @click="selectProjects(project)"
          >
            <p class="wv-b3">{{ project.title }}</p>
            <p class="wv-b3">{{ project.subtitle }}</p>
          </div>
          <CoinIcon :rotate="index + 1" />
        </div>
        <div class="flex justify-center py-4">
          <button class="border border-black rounded p-3" @click.stop="openDialog">
            ส่งความคิดเห็น
          </button>
        </div>
      </div>
      <FormDialog v-if="dialogOpen">
        <form @submit.prevent="e => handleSubmit(e)">
          <div v-click-outside="closeDialog" class="p-4 bg-black max-w-lg">
            <button class="text-white" @click.stop="closeDialog">
              <CloseSvg />
            </button>
            <div class="text-center">
              <div class="text-white">
                <p class="wv-b3">
                  ขอสอบถามสั้นๆเกี่ยวกับคุณ ก่อนเข้าไปร่วมแสดงความคิดเห็น
                </p>
                <p class="wv-b6 font-thin">
                  คำตอบของคุณจะใช้เพื่อการประมวลผลข้อมูลบนแพลตฟอร์มนี้และรวบรวมเพื่อ
                  ยื่นต่อผู้ว่าราชการจังหวัดกรุงเทพมหานครและหน่วยงานที่เกี่ยวข้องต่อไป
                </p>
                <p class="wv-b6 font-thin">
                  คุณใช้ชีวิตอยู่ในกรุงเทพมหานครหรือไม่? (เรียน/ทำงาน/พักอาศัย)
                </p>
              </div>
              <div class="flex gap-4 justify-center pb-4">
                <div
                  class="bg-white text-black px-2 py-1 min-w-[50px] rounded-sm cursor-pointer"
                  role="button"
                  @click="() => setInBangkok(true)"
                >
                  ใช่
                </div>
                <div
                  class="bg-white text-black px-2 py-1 min-w-[50px] rounded-sm cursor-pointer"
                  role="button"
                  @click="() => setInBangkok(false)"
                >
                  ไม่ใช่
                </div>
              </div>
              <p class="wv-b6 text-white">คุณอยู่จังหวัดไหน?</p>
              <div>
                <select
                  id="province"
                  v-model="formData.province"
                  name="province"
                  class="rounded-sm px-2 py-1"
                >
                  <option
                    v-for="(province, provIndex) in provinces"
                    :key="provIndex"
                    :value="province.province_name"
                  >
                    {{ province.province_name }}
                  </option>
                </select>
              </div>
              <div class="pt-6">
                <button class="bg-white text-black px-2 py-1 rounded-sm" type="submit">
                  ยืนยัน
                </button>
              </div>
            </div>
          </div>
        </form>
      </FormDialog>
    </BoxContainer>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import CoinIcon from "~/components/CoinIcon.vue";
import FormDialog from "~/components/dialog/FormDialog.vue";
import BoxContainer from "~/components/BoxContainer.vue";
// @ts-ignore
import CloseSvg from "~/assets/icons/close.svg?inline";

import provincesData from "~/data/provinces.json";
import { StrategyTypes } from "~/models/strategies";

interface project {
  type: StrategyTypes;
  title: string;
  subtitle: string;
}

interface province {
  province_name: string;
}

interface FormDataProps {
  inBangkok: boolean;
  province: string;
  projects: project[];
}

interface ProjectDevelopmentData {
  dialogOpen: boolean;
  provinces: province[];
  projectsList: project[];
  formData: FormDataProps;
}

export default Vue.extend({
  name: "ProjectDevelopment",
  components: { CoinIcon, FormDialog, CloseSvg, BoxContainer },
  data(): ProjectDevelopmentData {
    return {
      dialogOpen: false,
      provinces: provincesData,
      formData: { inBangkok: false, province: "กรุงเทพมหานคร", projects: [] },
      projectsList: [
        {
          type: "environment",
          title: "ปรับปรุงระบบจัดการขยะ",
          subtitle: "(การพัฒนาสิ่งแวดล้อมยั่งยืน)",
        },
        {
          type: "safe",
          title: "พัฒนาทางเท้า ทางข้าม",
          subtitle: "(การสร้างเมืองปลอดภัย)",
        },
        {
          type: "safe",
          title: "ปรับปรุงการระบายน้ำและจัดการน้ำท่วม",
          subtitle: "(มหานครปลอดภัย)",
        },
        {
          type: "connectivity",
          title: "จัดการการจราจรติดขัด",
          subtitle: "(การเชื่อมโยงเมืองที่มีความคล่องตัว)",
        },
        {
          type: "safe",
          title: "ติดตั้งแสงสว่างและกล้องวงจรอย่างทั่วถึง",
          subtitle: "(การสร้างเมืองปลอดภัย)",
        },
        {
          type: "environment",
          title: "เพิ่มพื้นที่สีเขียว",
          subtitle: "(การพัฒนาสิ่งแวดล้อมยั่งยืน)",
        },
        {
          type: "equality",
          title: "พัฒนาระบบการศึกษา",
          subtitle: "(การลดความเหลื่อมล้ำด้วยการบริหารเมือง)",
        },
        {
          type: "democracy",
          title: "สร้างแพลตฟอร์มการมีส่วนร่วมและแสดงความคิดเห็นในการใช้งบฯ",
          subtitle: "(การสร้างเมืองประชาธิปไตยแบบมีส่วนร่วม)",
        },
        {
          type: "connectivity",
          title: "จัดระเบียบผังเมืองให้เหมาะสม",
          subtitle: "(การเชื่อมโยงเมืองที่มีความคล่องตัว)",
        },
        {
          type: "economic",
          title: "ฟื้นฟูสถานที่ท่องเที่ยวสำคัญ",
          subtitle: "(การต่อยอดความเป็นเมืองศูนย์กลางเศรษฐกิจ)",
        },
      ],
    };
  },
  methods: {
    openDialog() {
      this.dialogOpen = true;
    },
    closeDialog() {
      this.dialogOpen = false;
    },
    selectProjects(project: project) {
      const max: number = 3;
      const maxLimit = this.formData.projects.length < max;
      const isIncluded = this.formData.projects.includes(project);
      if (!isIncluded) {
        if (maxLimit) this.formData.projects.push(project);
      } else {
        const filtered = this.formData.projects.filter(el => el !== project);
        this.formData.projects = filtered;
      }
      // eslint-disable-next-line no-console
      console.log(this.formData.projects);
    },
    setInBangkok(check: boolean) {
      this.formData.inBangkok = check;
    },
    handleSubmit(e: Event) {
      e.preventDefault();
      // eslint-disable-next-line no-console
      console.log(this.formData);
    },
  },
});
</script>

<style scoped>
.projectItem {
  grid-template-columns: 1fr;
}

@media (min-width: theme("screens.md")) {
  .md\:projectItem {
    grid-template-columns: auto 1fr auto;
  }
}
</style>
