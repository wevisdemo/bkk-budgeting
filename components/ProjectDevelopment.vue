<template>
  <BoxContainer>
    <div class="mb-2">
      <h5 class="wv-h5 wv-bold text-center">เลือก 3 โครงการที่อยากพัฒนา</h5>
    </div>
    <div class="flex items-center gap-0 xs:gap-4 sm:gap-6 md:gap-10 m-auto">
      <img
        src="~/assets/icons/coins-vertical-left.svg"
        class="h-full hidden sm:block"
      />
      <div class="grid gap-4 pb-4 sm:pb-0">
        <div
          v-for="(project, index) in projectsList"
          :key="index"
          class="flex justify-center gap-10"
        >
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
            @click="() => selectProjects(project)"
          >
            <p class="wv-b3 wv-bold">{{ project.name }}</p>
            <p class="wv-b6">{{ project.desc }}</p>
          </div>
        </div>
      </div>
      <img
        src="~/assets/icons/coins-vertical-right.svg"
        class="h-full hidden sm:block"
      />
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
    <div class="flex justify-center sm:hidden -mx-10 sm:-mx-0">
      <img src="~/assets/icons/coins-horizontal.svg" class="w-full" />
    </div>
    <FormDialog v-if="dialogOpen">
      <form @submit.prevent="e => handleSubmit(e)">
        <div v-click-outside="closeDialog" class="py-6 px-8 bg-black max-w-lg">
          <button class="text-white" @click.stop="closeDialog">
            <img src="~/assets/icons/close.svg" />
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
    <Transition name="slide-fade">
      <div
        v-if="showCookieWarning"
        class="fixed w-full h-full left-0 right-0 top-0 bottom-0 flex justify-center items-center z-[9999]"
      >
        <div
          class="py-6 px-8 rounded-lg bg-black max-w-lg text-white flex flex-col gap-2 justify-center items-center warning-modal"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="48"
            viewBox="0 96 960 960"
            width="48"
          >
            <path
              fill="currentColor"
              d="M453 776h60V536h-60v240Zm26.982-314q14.018 0 23.518-9.2T513 430q0-14.45-9.482-24.225-9.483-9.775-23.5-9.775-14.018 0-23.518 9.775T447 430q0 13.6 9.482 22.8 9.483 9.2 23.5 9.2Zm.284 514q-82.734 0-155.5-31.5t-127.266-86q-54.5-54.5-86-127.341Q80 658.319 80 575.5q0-82.819 31.5-155.659Q143 347 197.5 293t127.341-85.5Q397.681 176 480.5 176q82.819 0 155.659 31.5Q709 239 763 293t85.5 127Q880 493 880 575.734q0 82.734-31.5 155.5T763 858.316q-54 54.316-127 86Q563 976 480.266 976Zm.234-60Q622 916 721 816.5t99-241Q820 434 721.188 335 622.375 236 480 236q-141 0-240.5 98.812Q140 433.625 140 576q0 141 99.5 240.5t241 99.5Zm-.5-340Z"
            />
          </svg>
          <p>กรุณากดยอมรับคุกกี้ก่อนโหวตโครงการ</p>
        </div>
      </div>
    </Transition>
  </BoxContainer>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import Lottie from "vue-lottie/src/lottie.vue";
import FormDialog from "~/components/dialog/FormDialog.vue";
import BoxContainer from "~/components/BoxContainer.vue";
import DistrictDropdown from "~/components/DistrictDropdown.vue";

import type { District } from "~/components/DistrictDropdown.vue";
import type { Project } from "~/components/ProjectDropdown.vue";

import projectAnimation from "~/assets/lottie/project-loading.json";
import projectsData from "~/data/projects.json";

interface FormDataProps {
  district: District;
  projects: Project[];
}

interface LottieOptions {
  animationData: any;
  loop: boolean;
  autoplay: boolean;
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

interface ProjectDevelopmentData {
  defaultOptions: LottieOptions;
  dialogOpen: boolean;
  projectsList: Project[];
  formData: FormDataProps;
  isShowLoading: boolean;
  isVoted: boolean;
  loadingTime: number;
  showCookieWarning: any;
}

export default defineComponent({
  name: "ProjectDevelopment",
  components: { FormDialog, BoxContainer, Lottie, DistrictDropdown },
  data(): ProjectDevelopmentData {
    return {
      defaultOptions: {
        animationData: projectAnimation,
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
      showCookieWarning: false,
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
      if (this.$store.state.isCookieSet) {
        const max: number = 3;
        const maxLimit = this.formData.projects.length < max;
        const isIncluded = this.formData.projects.includes(project);
        if (!isIncluded) {
          if (maxLimit) this.formData.projects.push(project);
        } else {
          const filtered = this.formData.projects.filter(el => el !== project);
          this.formData.projects = filtered;
        }
      } else {
        this.showCookieWarning = true;
        setTimeout(() => {
          this.showCookieWarning = false;
        }, 2000);
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
        }, 5000);
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

.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.5s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter,
.slide-fade-leave-to {
  opacity: 0;
}
</style>
