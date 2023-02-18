<template>
  <BoxContainer>
    <div class="mb-2">
      <h5 class="wv-h5 wv-bold text-center">เลือก 3 โครงการที่อยากพัฒนา</h5>
    </div>
    <div class="grid gap-4">
      <div
        v-for="(project, index) in projectsList"
        :key="index"
        class="flex justify-center gap-10"
      >
        <CoinIcon :rotate="index" />
        <div
          class="py-2 px-2 rounded cursor-pointer flex-grow transition-colors max-w-[600px]"
          :class="[
            formData.projects.includes(project) ? `bg-wv-${project.type}` : `bg-white`,
            `border-2 hover:border-wv-${project.type}`,
          ]"
          @click="selectProjects(project)"
        >
          <p class="wv-b3 wv-bold">{{ project.title }}</p>
          <p class="wv-b6">{{ project.subtitle }}</p>
        </div>
        <CoinIcon :rotate="index + 1" />
      </div>
      <div class="flex justify-center py-4">
        <button
          class="border border-black rounded p-3"
          :class="formData.projects.length === 0 ? `opacity-20` : ``"
          :disabled="formData.projects.length === 0"
          @click.stop="openDialog"
        >
          ส่งความคิดเห็น
        </button>
      </div>
    </div>
    <FormDialog v-if="dialogOpen">
      <form @submit.prevent="e => handleSubmit(e)">
        <div v-click-outside="closeDialog" class="py-6 px-8 bg-black max-w-lg">
          <button class="text-white" @click.stop="closeDialog">
            <svg
              width="16px"
              height="16px"
              viewBox="0 0 17 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2.00012 1.66895L15.3311 14.9999"
                stroke="currentColor"
                stroke-width="3"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M2 15L15.331 1.669"
                stroke="white"
                stroke-width="3"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
          <div class="text-center">
            <div class="text-white">
              <div class="mb-2">
                <p class="wv-b3 wv-bold">
                  ขอสอบถามสั้นๆเกี่ยวกับคุณ <br />
                  ก่อนเข้าไปร่วมแสดงความคิดเห็น
                </p>
              </div>
              <div class="grid gap-2 mb-2">
                <p class="wv-b6 font-thin">
                  คำตอบของคุณจะใช้เพื่อการประมวลผลข้อมูลบนแพลตฟอร์มนี้และรวบรวมเพื่อ
                  ยื่นต่อผู้ว่าราชการจังหวัดกรุงเทพมหานครและหน่วยงานที่เกี่ยวข้องต่อไป
                </p>
                <p class="wv-b6 font-thin">
                  คุณใช้ชีวิตอยู่ในเขตไหนของกรุงเทพฯ (เรียน/ทำงาน/พักอาศัย)
                </p>
              </div>
            </div>
            <DistrictDropdown :type="1" @change="district => setDistrict(district)" />
            <div class="pt-6">
              <button
                class="bg-white text-black px-2 py-1 rounded-sm"
                :class="formData.district.id === null ? `opacity-30` : ``"
                type="submit"
                :disabled="formData.district.id === null"
              >
                ยืนยัน
              </button>
            </div>
          </div>
        </div>
      </form>
    </FormDialog>
    <div v-if="isShowLoading" class="absolute top-0 w-full h-full bg-white">
      <div class="flex flex-col gap-4 m-auto tex-center">
        <h5 class="wv-h5 wv-bold">เรากำลังส่งข้อมูลของคุณ...</h5>
        <div class="lottie-img">
          <Lottie :options="defaultOptions" />
        </div>
        <p>
          ข้อมูลนี้จะรวบรวมยื่นต่อผู้ว่าราชการจังหวัดกรุงเทพมหานคร
          และหน่วยงานที่เกี่ยวข้องต่อไป
        </p>
      </div>
    </div>
  </BoxContainer>
</template>

<script lang="ts">
import Vue from "vue";
import Lottie from "vue-lottie/src/lottie.vue";
import CoinIcon from "~/components/CoinIcon.vue";
import FormDialog from "~/components/dialog/FormDialog.vue";
import BoxContainer from "~/components/BoxContainer.vue";
import DistrictDropdown from "~/components/DistrictDropdown.vue";

import type { District } from "~/components/DistrictDropdown.vue";
import type { StrategyTypes } from "~/models/strategies";

import animData from "~/assets/lottie/project-loading.json";
import projectsData from "~/data/projects.json";

export interface Project {
  type: StrategyTypes;
  title: string;
  subtitle: string;
  progress: number;
  vote_count: number;
}

interface FormDataProps {
  district: District;
  projects: Project[];
}

interface LottieOptions {
  animationData: any;
  loop: boolean;
  autoplay: boolean;
}

interface ProjectDevelopmentData {
  defaultOptions: LottieOptions;
  dialogOpen: boolean;
  projectsList: Project[];
  formData: FormDataProps;
  isShowLoading: boolean;
}

export default Vue.extend({
  name: "ProjectDevelopment",
  components: { CoinIcon, FormDialog, BoxContainer, Lottie, DistrictDropdown },
  data(): ProjectDevelopmentData {
    return {
      defaultOptions: {
        animationData: animData,
        loop: true,
        autoplay: true,
      },
      isShowLoading: false,
      dialogOpen: false,
      formData: {
        district: {} as District,
        projects: [],
      },
      projectsList: projectsData as Project[],
    };
  },
  methods: {
    openDialog() {
      this.dialogOpen = true;
    },
    closeDialog() {
      this.dialogOpen = false;
    },
    selectProjects(project: Project) {
      const max: number = 3;
      const maxLimit = this.formData.projects.length < max;
      const isIncluded = this.formData.projects.includes(project);
      if (!isIncluded) {
        if (maxLimit) this.formData.projects.push(project);
      } else {
        const filtered = this.formData.projects.filter(el => el !== project);
        this.formData.projects = filtered;
      }
    },
    handleSubmit(e: Event) {
      e.preventDefault();
      this.isShowLoading = true;
      // async await submit form data
      // eslint-disable-next-line no-console
      console.log(this.formData);
    },
    setDistrict(district: District) {
      // eslint-disable-next-line no-console
      console.log(district);
      this.formData.district = district;
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
