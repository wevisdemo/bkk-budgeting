<template>
  <BoxContainer>
    <div id="vote-result">
      <div class="text-center">
        <h5 class="wv-h5 wv-bold wv-kondolar">ไอเดียโดนใจของผู้ที่ใช้แพลตฟอร์มนี้</h5>
        <div class="flex justify-center items-center my-3">
          <p class="wv-b5">ที่อยู่ใน</p>
          <div class="ml-2">
            <DistrictDropdown :type="2" @change="onChangeDistrict" />
          </div>
        </div>
        <p class="wv-b5">
          ทั้งหมด <strong>{{ totalVotes }}</strong> คน
        </p>
      </div>
    </div>
    <div class="flex flex-col gap-2 w-full my-4 max-w-[600px] m-auto">
      <template v-for="(vote, voteIndex) in ideaVotes">
        <VoteProgress
          :key="`voteIndex-${voteIndex}`"
          :strategy-vote="vote"
          :bg-color="`bg-wv-${vote.type}`"
        />
      </template>
    </div>
    <div class="flex justify-center py-4">
      <button
        class="border border-black rounded p-3 flex items-center gap-2"
        @click.stop="openDialog"
      >
        <i
          ><svg
            width="21"
            height="22"
            viewBox="0 0 21 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.5043 17.7804C9.95464 17.7804 9.3969 17.7804 8.84725 17.7804C8.16018 17.7804 7.64286 17.3891 7.43269 16.7288C7.35186 16.4598 7.25486 16.1908 7.19828 15.9137C7.02854 15.1148 6.66479 14.4301 6.1798 13.778C5.58973 12.9954 5.12091 12.1313 4.935 11.1613C4.61167 9.49023 5.05624 7.97404 6.1313 6.69425C7.63477 4.9009 9.58281 4.21617 11.8461 4.77048C14.069 5.31663 15.4674 6.80022 16.0413 9.03374C16.3565 10.2728 16.1463 11.4548 15.5644 12.5715C15.3784 12.9302 15.2006 13.3052 14.9419 13.6149C14.2387 14.4464 13.8992 15.4327 13.6567 16.468C13.4708 17.2587 12.9454 17.87 11.9188 17.7967C11.45 17.7478 10.9731 17.7804 10.5043 17.7804ZM6.28488 8.44683C6.2768 8.76474 6.30105 9.00114 6.55971 9.09896C6.81029 9.19678 6.97195 9.02559 7.10937 8.86256C7.24678 8.69953 7.37611 8.5202 7.48928 8.34086C7.95002 7.56646 8.58859 7.02846 9.45348 6.76761C9.65556 6.7024 9.85764 6.62088 10.0436 6.52306C10.2133 6.44155 10.2941 6.28667 10.2618 6.08288C10.2295 5.89539 10.1082 5.82203 9.93847 5.77312C9.67173 5.69976 9.40498 5.6916 9.13824 5.74867C8.16826 5.928 7.40844 6.4497 6.82646 7.2404C6.54355 7.63168 6.30913 8.0311 6.28488 8.44683ZM6.08281 10.4603C6.40613 10.4684 6.68904 10.2076 6.68096 9.89781C6.68096 9.60436 6.41421 9.3272 6.12322 9.31905C5.81606 9.30275 5.53315 9.58805 5.52507 9.89781C5.52507 10.1994 5.77564 10.4521 6.08281 10.4603Z"
              fill="black"
            />
            <path
              d="M10.674 19.6311C10.0597 19.6311 9.43732 19.6311 8.823 19.6311C8.58051 19.6311 8.40268 19.5903 8.40268 19.2805C8.40268 18.9789 8.57243 18.9219 8.81492 18.9219C10.0516 18.9219 11.2884 18.9219 12.517 18.9219C12.7757 18.9219 12.9293 19.0034 12.9212 19.2887C12.9131 19.5658 12.7595 19.6311 12.5251 19.6229C11.9027 19.6311 11.2884 19.6311 10.674 19.6311Z"
              fill="black"
            />
            <path
              d="M19.0159 11.1696C18.6117 11.1696 18.2076 11.1696 17.8034 11.1696C17.4963 11.1696 17.278 11.0392 17.2699 10.6968C17.2618 10.3463 17.5043 10.2322 17.8034 10.2322C18.6117 10.224 19.412 10.224 20.2203 10.2322C20.5436 10.2322 20.7861 10.3545 20.778 10.7213C20.7618 11.0555 20.5274 11.1696 20.2203 11.1696C19.8242 11.1696 19.42 11.1696 19.0159 11.1696Z"
              fill="black"
            />
            <path
              d="M1.89574 10.2324C2.28373 10.2324 2.67173 10.2324 3.0678 10.2324C3.37496 10.2406 3.64979 10.3221 3.64979 10.6971C3.64979 11.0639 3.39921 11.1698 3.07588 11.1698C2.30798 11.1698 1.54008 11.1698 0.780265 11.1698C0.473105 11.1698 0.23061 11.0557 0.222527 10.7215C0.20636 10.3628 0.456939 10.2324 0.780265 10.2324C1.14401 10.2324 1.52392 10.2324 1.89574 10.2324Z"
              fill="black"
            />
            <path
              d="M10.9731 1.86882C10.9731 2.24379 10.9812 2.62691 10.9731 3.00189C10.965 3.31165 10.8357 3.52359 10.4881 3.52359C10.1567 3.52359 10.0435 3.29534 10.0435 3.01004C10.0274 2.22749 10.0354 1.44494 10.0435 0.662388C10.0435 0.352628 10.1971 0.124384 10.5285 0.132536C10.8518 0.148839 10.9812 0.385234 10.9812 0.694994C10.9731 1.08627 10.9731 1.47754 10.9731 1.86882Z"
              fill="black"
            />
            <path
              d="M17.7872 17.4303C17.7872 17.6097 17.7144 17.7482 17.5528 17.8216C17.383 17.895 17.2052 17.9031 17.0678 17.7645C16.4696 17.1776 15.8796 16.5907 15.2976 15.9875C15.1198 15.8 15.1278 15.5555 15.3138 15.368C15.4997 15.1805 15.7502 15.1642 15.9362 15.3435C16.5343 15.9223 17.1163 16.5255 17.7064 17.1206C17.7791 17.2102 17.7872 17.3162 17.7872 17.4303Z"
              fill="black"
            />
            <path
              d="M5.8161 15.6858C5.84034 15.8488 5.73526 15.9711 5.6221 16.0934C5.11286 16.6069 4.59554 17.1286 4.0863 17.6422C3.86805 17.8623 3.62556 17.9438 3.38306 17.7074C3.13248 17.471 3.20523 17.2183 3.42348 16.9982C3.95697 16.4602 4.49046 15.9222 5.01586 15.3842C5.17752 15.2212 5.37152 15.1967 5.5736 15.2782C5.73526 15.3434 5.82418 15.482 5.8161 15.6858Z"
              fill="black"
            />
            <path
              d="M5.8969 5.24363C5.90498 5.42297 5.80798 5.54524 5.66248 5.63491C5.48465 5.74088 5.30683 5.71642 5.17749 5.586C4.55509 4.97463 3.93269 4.35511 3.32645 3.71929C3.14862 3.53996 3.18904 3.30356 3.36687 3.13238C3.55278 2.95304 3.79527 2.92044 3.98119 3.09977C4.60359 3.70299 5.20174 4.31435 5.80798 4.93387C5.88881 5.03169 5.90498 5.13766 5.8969 5.24363Z"
              fill="black"
            />
            <path
              d="M17.7872 3.46665C17.8034 3.60523 17.7307 3.71935 17.6337 3.81717C17.1325 4.32256 16.6313 4.83611 16.1221 5.34151C15.9119 5.5453 15.6775 5.61866 15.4431 5.39857C15.2006 5.17033 15.241 4.91763 15.4674 4.68938C15.9685 4.17584 16.4697 3.67044 16.9708 3.16504C17.1325 3.00201 17.3184 2.96125 17.5205 3.03462C17.7145 3.10798 17.7872 3.26286 17.7872 3.46665Z"
              fill="black"
            />
            <path
              d="M10.6822 18.0662C11.2884 18.0662 11.8946 18.0662 12.5009 18.0662C12.7434 18.0662 12.9293 18.0988 12.9212 18.4085C12.9131 18.7101 12.7434 18.759 12.4928 18.7509C11.2642 18.7427 10.0436 18.7427 8.81496 18.7509C8.56438 18.7509 8.40272 18.702 8.39463 18.4004C8.39463 18.0825 8.58055 18.058 8.82304 18.0662C9.44545 18.0743 10.0598 18.0662 10.6822 18.0662Z"
              fill="black"
            />
            <path
              d="M10.6902 20.7642C11.1752 20.7642 11.6602 20.7642 12.1452 20.7642C12.218 20.7642 12.3311 20.7234 12.3554 20.8131C12.3715 20.8701 12.323 20.9679 12.2745 21.025C12.1533 21.188 11.9755 21.294 11.7815 21.3592C11.0378 21.6282 10.2861 21.6201 9.54244 21.3511C9.40502 21.3022 9.28378 21.2125 9.16253 21.131C9.06553 21.0576 8.95237 20.9598 8.97662 20.8375C9.01703 20.6663 9.1787 20.7642 9.28378 20.7642C9.74452 20.7642 10.2133 20.7642 10.6902 20.7642Z"
              fill="black"
            />
            <path
              d="M10.6337 20.4869C10.0841 20.4869 9.52633 20.4787 8.97667 20.4869C8.75034 20.4869 8.62101 20.4298 8.6291 20.1689C8.63718 19.9325 8.75034 19.8755 8.96051 19.8755C10.0921 19.8836 11.2238 19.8836 12.3474 19.8755C12.5737 19.8755 12.6788 19.9733 12.6788 20.1771C12.6707 20.3809 12.5737 20.5032 12.3231 20.495C11.7654 20.4787 11.1995 20.4869 10.6337 20.4869Z"
              fill="black"
            />
          </svg>
        </i>
        <span>เสนอไอเดียเพิ่มเติม</span>
      </button>
    </div>
    <FormDialog v-if="dialogOpen">
      <form @submit.prevent="handleSendIdea">
        <div class="flex flex-col items-center justify-center gap-2">
          <p class="wv-h8 text-white">
            ขอเสนอโครงการเพิ่มเติมเพื่อออกแบบงบประมาณพัฒนาเมือง
          </p>
          <div
            v-click-outside="closeDialog"
            class="py-6 px-8 max-w-lg w-full"
            style="background-color: #dedede"
          >
            <div>
              <p class="wv-b3 font-thin">มีอะไรเพิ่มเติมอยากเสนอกรุงเทพฯไหม?</p>
              <textarea
                v-model="voteIdeaComment"
                class="w-full p-2"
                name=""
                placeholder="เช่น เสนอให้มีโครงการสอนภาษาญี่ปุ่น..."
                cols="30"
                rows="10"
              ></textarea>
              <div class="pt-6">
                <button
                  class="bg-white text-black px-2 py-1 rounded-sm"
                  :class="voteIdeaComment.length === 0 ? `opacity-30` : ``"
                  type="submit"
                  :disabled="voteIdeaComment.length === 0"
                >
                  ส่ง
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </FormDialog>
    <Transition name="slide-fade">
      <CookieWarning v-if="showCookieWarning" />
    </Transition>
  </BoxContainer>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import VoteProgress from "./VoteProgress.vue";
import BoxContainer from "~/components/BoxContainer.vue";
import DistrictDropdown from "~/components/DistrictDropdown.vue";
import FormDialog from "~/components/dialog/FormDialog.vue";
import CookieWarning from "~/components/CookieWarning.vue";

import type { District } from "~/components/DistrictDropdown.vue";
import type { ProjectVote } from "~/components/ProjectDropdown.vue";
import projectsData from "~/data/projects.json";

interface NocoDBResponseType {
  list: {
    projectId: string;
    count: string;
  }[];
  pageInfo: {
    isFirstPage: boolean;
    isLastPage: boolean;
    page: number;
    pageSize: number;
    totalRows: number;
  };
}

interface IdeaVoteData {
  dialogOpen: boolean;
  ideaVotes: ProjectVote[];
  projectResponseData: NocoDBResponseType;
  isAllDistrict: boolean;
  selected_district_name: string;
  voteIdeaComment: any;
  showCookieWarning: boolean;
}

export default defineComponent({
  name: "IdeaVote",
  components: {
    VoteProgress,
    BoxContainer,
    DistrictDropdown,
    FormDialog,
    CookieWarning,
  },
  data(): IdeaVoteData {
    return {
      dialogOpen: false,
      ideaVotes: projectsData.map(p => ({
        ...p,
        vote_count: 0,
        progress: 0,
      })) as ProjectVote[],
      projectResponseData: {} as NocoDBResponseType,
      isAllDistrict: true,
      selected_district_name: "ทุกเขต",
      voteIdeaComment: "",
      showCookieWarning: false,
    };
  },
  computed: {
    totalVotes(): number | undefined {
      if (!this.projectResponseData?.pageInfo) return;
      return this.projectResponseData?.pageInfo.totalRows;
    },
  },
  async mounted() {
    this.projectResponseData = await this.getProjectData();
    this.calculatePercentage();
  },
  methods: {
    openDialog() {
      if (this.$store.state.isCookieSet) {
        this.dialogOpen = true;
      } else {
        this.showCookieWarning = true;
        setTimeout(() => {
          this.showCookieWarning = false;
        }, 2000);
      }
    },
    closeDialog() {
      this.dialogOpen = false;
    },
    async onChangeDistrict(district: District) {
      this.resetVotes();
      this.selected_district_name = district.th_name;
      this.projectResponseData = await this.getProjectData(district.th_name);
      this.calculatePercentage();
    },
    async groubByTableRow(
      columnName: string,
      sortName?: string[],
      districtThName?: District["th_name"],
    ) {
      try {
        const data = await this.$nocoDb.dbTableRow.groupBy(
          "v1",
          "bangkok-budgeting",
          "poll-data",
          {
            column_name: columnName,
            sort: sortName,
            where: districtThName ? `(district,eq,เขต${districtThName})` : ``,
          },
        );
        return data;
      } catch (error) {
        // eslint-disable-next-line no-console
        console.error(error);
      }
    },
    async handleSendIdea() {
      if (!this.voteIdeaComment) return;

      try {
        const data = await this.$nocoDb.dbTableRow.create(
          "v1",
          "bangkok-budgeting",
          "idea-data",
          {
            userId: this.$cookies.get("uuid"),
            idea: this.voteIdeaComment,
          },
        );
        this.dialogOpen = false;
        return data;
      } catch (error) {
        // eslint-disable-next-line no-console
        console.error(error);
      }
    },
    resetVotes() {
      this.ideaVotes.forEach(strategy => {
        strategy.progress = 0;
        strategy.vote_count = 0;
      });
    },
    async getProjectData(districtThName?: string) {
      const result: NocoDBResponseType = await this.groubByTableRow(
        "projectId",
        ["projectId"],
        districtThName,
      );

      if (result?.list.length > 0) {
        this.ideaVotes.forEach((strategy, index) => {
          const _vouteCount = parseInt(result.list[index]?.count);
          strategy.vote_count = _vouteCount;
        });
      }
      return result;
    },
    calculatePercentage() {
      const totalVote = this.projectResponseData?.pageInfo.totalRows;
      this.ideaVotes.forEach(project => {
        if (project.vote_count > 0) {
          const percentage = (project.vote_count / totalVote) * 100;
          project.progress = parseFloat(percentage.toFixed(2));
        }
      });
    },
  },
});
</script>

<style lang="scss" scoped>
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
