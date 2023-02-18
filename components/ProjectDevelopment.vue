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
          <p class="wv-b3 wv-bold">{{ project.name }}</p>
          <p class="wv-b6">{{ project.desc }}</p>
        </div>
        <CoinIcon :rotate="index + 1" />
      </div>
      <div class="flex justify-center py-4">
        <button
          v-if="!isVoted"
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
import firebase from "firebase/compat/app";

import Lottie from "vue-lottie/src/lottie.vue";
import CoinIcon from "~/components/CoinIcon.vue";
import FormDialog from "~/components/dialog/FormDialog.vue";
import BoxContainer from "~/components/BoxContainer.vue";
import DistrictDropdown from "~/components/DistrictDropdown.vue";

import type { District } from "~/components/DistrictDropdown.vue";
import type { StrategyTypes } from "~/models/strategies";

import animData from "~/assets/lottie/project-loading.json";
import projectsData from "~/data/projects.json";

const googleSheetUrlProject =
  "https://cheesy.punchup.world/api/project/617ba453e90567588618dcfb/sheet/project/row";

export interface Project {
  id: number;
  type: StrategyTypes;
  name: string;
  desc: string;
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
  isVoted: boolean;
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
    };
  },
  mounted() {
    if (!this.$cookies.get("isVoted") || this.$cookies.get("isVoted") === undefined) {
      this.isVoted = false;
    } else {
      this.isVoted = true;
    }
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
    async handleSubmit(e: Event) {
      e.preventDefault();
      this.dialogOpen = false;
      this.isShowLoading = true;
      await this.sendData();
      this.isShowLoading = false;
      // eslint-disable-next-line no-console
    },
    setDistrict(district: District) {
      // eslint-disable-next-line no-console
      console.log(district);
      this.formData.district = district;
    },
    async sendData() {
      this.isShowLoading = true;
      this.isVoted = true;

      const array = [] as any;
      const arrayForExcel = [] as any;
      const arrayFb = [] as any;

      const messageRef = this.$fire.database.ref("user");

      this.formData.projects.forEach(project => {
        array.push({
          projectid: project.id,
          userid: this.$cookies.get("uuid"),
        });
        arrayForExcel.push({
          userid: this.$cookies.get("uuid"),
          projectid: project.id,
          name: project.name,
          dimension: project.desc,
          district: "",
          province: "",
          hashousereg: "",
          isinbkk: "",
          date: this.$moment().format("DD-MM-YYYY"),
        });
      });

      try {
        const data = await messageRef.once("value");
        const r = data.val();
        for (const [, value] of Object.entries(r) as any) {
          if (value.userid === this.$cookies.get("uuid")) {
            arrayFb.push(value);
            break;
          }
        }
      } catch (e) {
        alert(e);
        return;
      }

      this.updateVoteProjectCount(arrayFb, this.formData.projects);

      for (let i = 0; i < arrayForExcel.length; i++) {
        arrayForExcel[i].district =
          arrayFb[0].district === "" ? "-" : arrayFb[0].district;
        arrayForExcel[i].province =
          arrayFb[0].province === "" ? "-" : arrayFb[0].province;

        if (arrayFb[0].isInBkk) {
          if (arrayFb[0].hasHouseReg) arrayForExcel[i].hashousereg = "มี";
          else arrayForExcel[i].hashousereg = "ไม่มี";
        } else arrayForExcel[i].hashousereg = "-";
        arrayForExcel[i].isinbkk = arrayFb[0].isInBkk ? "อยู่" : "ไม่อยู่";
      }

      const sequence = this.$fire.database.ref("sequence").child("project_sequence");
      const messageRefProject = this.$fire.database.ref("project");

      try {
        const a = await sequence.once("value");
        let count = a.val() as number;
        for (let i = 0; i < array.length; i++) {
          await messageRefProject.child((++count).toString()).set(array[i]);
        }
        sequence.set(count);
      } catch (e) {
        alert(e);
        return;
      }
      await this.$axios
        .$post(googleSheetUrlProject, arrayForExcel)
        .then(() => {
          // eslint-disable-next-line no-console
          console.log("sent");
        })
        .catch(error => {
          // eslint-disable-next-line no-console
          console.log(error);
        });
      this.$cookies.set("isVoted", true);

      setTimeout(() => {
        // todo: use event bus to emit and execute in ideaVote
        // this.$root.$refs.ideaVote?.getChartData();
        // todo: deselect selection
        const element = document.getElementById("vote-result");
        if (element) element.scrollIntoView();
      }, 3000);
    },
    updateVoteProjectCount(data: any, selectedProjects: Project[]) {
      const refHasHouseReg = this.$fire.database.ref("voteProject/all_district");
      const refNoHouseReg = this.$fire.database.ref(
        "voteProject/all_district_nohousereg",
      );
      if (data[0].isInBkk && data[0].hasHouseReg) {
        const ref = this.$fire.database.ref(
          "voteProject/choice_1/" + data[0].district.replace("เขต", ""),
        );
        selectedProjects.forEach(element => {
          ref
            .child("project_" + element)
            .set(firebase.database.ServerValue.increment(1));
          refHasHouseReg
            .child("project_" + element)
            .set(firebase.database.ServerValue.increment(1));
        });
      } else if (data[0].isInBkk && !data[0].hasHouseReg) {
        const ref = this.$fire.database.ref(
          "voteProject/choice_2/" + data[0].district.replace("เขต", ""),
        );
        selectedProjects.forEach(element => {
          ref
            .child("project_" + element)
            .set(firebase.database.ServerValue.increment(1));
          refNoHouseReg
            .child("project_" + element)
            .set(firebase.database.ServerValue.increment(1));
        });
      } else {
        const ref = this.$fire.database.ref("voteProject/choice_3");
        selectedProjects.forEach(element => {
          ref
            .child("project_" + element)
            .set(firebase.database.ServerValue.increment(1));
        });
      }
      const refCount = this.$fire.database.ref("voteProject/user_count");
      refCount.set(firebase.database.ServerValue.increment(1));
    },
  },
});
</script>

<style lang="scss" scoped>
.lottie-img {
  width: 300px;
  height: 300px;
}
</style>
