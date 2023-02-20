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
            formData.projects.includes(project)
              ? `bg-wv-${project.type}`
              : formData.projects.length === 3
              ? `opacity-50 bg-white`
              : `bg-white`,
            `border-2 hover:border-wv-${project.type}`,
          ]"
          @click="selectProjects(project)"
        >
          <p class="wv-b3 wv-bold">{{ project.name }}</p>
          <p class="wv-b6">{{ project.desc }}</p>
        </div>
        <CoinIcon :rotate="index + 1" />
      </div>
      <div class="flex justify-center py-4">
        <button
          v-if="!isVoted"
          class="border border-black rounded p-3 wv-bold"
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
              <!-- resolve by using svg loader as import component  -->
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
                v-if="formData.district"
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
    <div
      v-if="isShowLoading"
      class="fixed top-0 left-0 right-0 bottom-0 w-full h-full bg-white z-[9999]"
    >
      <div
        class="flex flex-col gap-6 m-auto text-center h-full w-full justify-center items-center"
      >
        <h5 class="wv-h5 wv-bold">เรากำลังส่งข้อมูลของคุณ...</h5>
        <div class="lottie-img">
          <Lottie :options="defaultOptions" />
        </div>
        <p class="wv-b3">
          ข้อมูลนี้จะรวบรวมยื่นต่อผู้ว่าราชการจังหวัดกรุงเทพมหานคร
          <br />และหน่วยงานที่เกี่ยวข้องต่อไป
        </p>
      </div>
    </div>
  </BoxContainer>
</template>

<script lang="ts">
import { defineComponent } from "vue";

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
  id: number;
  type: StrategyTypes;
  name: string;
  desc: string;
  progress: number;
  vote_count: number;
  dimension: string;
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
  isVoted: boolean;
  loadingTime: number;
}

interface NocoTableRowType {
  userId: string;
  projectId: number;
  vote: string;
  dimension: string;
  district: string;
  province: string | null;
  hasHouseReg: boolean;
  isInBkk: boolean;
  date: string;
}

export default defineComponent({
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
      isVoted: false,
      loadingTime: 2000,
    };
  },
  mounted() {
    const cookieVoted: string = this.$cookies.get("isVoted");
    const isCookieVoted = cookieVoted === "true";
    if (!isCookieVoted || isCookieVoted === undefined) {
      this.isVoted = false;
    } else {
      this.isVoted = true;
    }
  },
  methods: {
    async findTableViewRow(cookieId: string) {
      const data: NocoTableRowType = await this.$nocoDb.dbViewRow.findOne(
        "v1",
        "bangkok-budgeting",
        "User-data",
        "BkkBudgetCsv",
        { where: `(userId,eq,${cookieId})` },
      );
      return data;
    },
    async postTableRow(data: NocoTableRowType[]) {
      await this.$nocoDb.dbTableRow.bulkCreate(
        "v1",
        "bangkok-budgeting",
        "User-data",
        data,
      );
    },
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
    async handleSubmit(e: Event) {
      e.preventDefault();
      this.dialogOpen = false;
      this.isShowLoading = true;
      await this.sendData();
      this.isShowLoading = false;
    },
    setDistrict(district: District) {
      this.formData.district = district;
    },
    showLoading() {
      return new Promise(resolve => {
        setTimeout(() => {
          resolve((this.isShowLoading = true));
        }, this.loadingTime);
      });
    },
    async sendData() {
      const array = [] as any;
      const arrayForNoco = [] as NocoTableRowType[];
      const arrayNoco = [] as NocoTableRowType[];
      const currentDate = this.$moment().format("YYYY-MM-DD");

      this.formData.projects.forEach(project => {
        array.push({
          projectId: project.id,
          userId: this.$cookies.get("uuid"),
        });
        arrayForNoco.push({
          userId: this.$cookies.get("uuid"),
          projectId: project.id,
          vote: project.name,
          dimension: project.dimension,
          district: `เขต${this.formData.district.th_name}`,
          province: null,
          hasHouseReg: false,
          isInBkk: true,
          date: currentDate,
        });
      });

      try {
        // find row from db that matches cookie uuid
        // find if the current user is a returning user??
        const cookieId = this.$cookies.get("uuid");
        const rowData: NocoTableRowType = await this.findTableViewRow(cookieId);

        if (rowData.userId === cookieId) {
          arrayNoco.push(rowData);
        } else {
          // eslint-disable-next-line no-console
          console.log(`User not found: ${cookieId} `);
        }
      } catch (e) {
        // eslint-disable-next-line no-console
        console.error(e);
        return;
      }

      // update current data for returning user??
      // if (arrayNoco.length > 1) {
      //   arrayForNoco.forEach(nocoRow => {
      //     nocoRow.district = arrayNoco[0].district === "" ? "-" : arrayNoco[0].district;
      //     nocoRow.province = arrayNoco[0].province === "" ? "-" : arrayNoco[0].province;
      //     if (arrayNoco[0].isInBkk) {
      //       if (arrayNoco[0].hasHouseReg) {
      //         nocoRow.hasHouseReg = "มี";
      //       } else nocoRow.hasHouseReg = "ไม่มี";
      //     } else {
      //       nocoRow.isInBkk = arrayNoco[0].isInBkk ? "อยู่" : "ไม่อยู่";
      //     }
      //   });
      // }

      try {
        await this.showLoading();
        await this.postTableRow(arrayForNoco);

        this.isVoted = true;
        this.$cookies.set("isVoted", "true");

        setTimeout(() => {
          const element = document.getElementById("vote-result");
          if (element) element.scrollIntoView();
        }, 3000);
      } catch (e) {
        // eslint-disable-next-line no-console
        console.error(e);
      }
    },
    // todo: update vote project count
    // updateVoteProjectCount(data: any, selectedProjects: Project[]) {},
  },
});
</script>

<style lang="scss" scoped>
.lottie-img {
  width: 300px;
  height: 300px;
}
</style>
