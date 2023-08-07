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
      <template v-for="(vote, voteIndex) in formatData">
        <VoteProgress
          :key="`voteIndex-${voteIndex}`"
          :strategy-vote="vote"
          :totalVotes="totalVotes"
        />
      </template>
    </div>
    <div class="flex justify-center py-4">
      <button
        class="border border-black rounded p-3 flex items-center gap-2"
        @click.stop="openDialog"
      >
        <img src="~/assets/images/idea.svg" alt="idea" />
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
import _ from "lodash";

import type { District } from "~/components/DistrictDropdown.vue";
import type { ProjectVote } from "~/components/ProjectDropdown.vue";
import projectsData from "~/data/projects.json";

interface NocoDBResponseType {
  list: {
    count: string;
    strategy: string;
    idea: string;
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
  formatData: any;
  voter: any;
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
      formatData: [],
      voter: [],
    };
  },
  computed: {
    totalVotes(): number | undefined {
      if (!this.voter?.pageInfo) return 0;
      return this.voter?.pageInfo.totalRows;
    },
  },
  async mounted() {
    this.projectResponseData = await this.getProjectData();
    this.voter = await this.getTotalVote();
    this.formatIdea(this.projectResponseData);
  },
  methods: {
    formatIdea(projectResponseData: any) {
      const groupBy = _.groupBy(projectResponseData.list, "idea");
      const data = Object.values(groupBy).map(data => ({
        count: data.length,
        strategy: data[0].strategy,
        idea: data[0].idea,
      }));
      this.formatData = _.orderBy(data, ["count"], ["desc"]).slice(0, 10);
    },
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
      this.selected_district_name = district.th_name;
      this.projectResponseData = await this.getProjectData(district.th_name);
      this.formatIdea(this.projectResponseData);
    },
    async groubByTableRow(districtThName?: District["th_name"]) {
      try {
        if (districtThName === "ทุกเขต" || !districtThName) {
          const data = await this.$nocoDb.dbTableRow.list(
            "v1",
            "bangkok-budgeting",
            "Survey",
          );
          return data;
        } else {
          const data = await this.$nocoDb.dbTableRow.list(
            "v1",
            "bangkok-budgeting",
            "Survey",
            {
              where: `(district,eq,เขต${districtThName})`,
            },
          );
          return data;
        }
      } catch (error) {
        // eslint-disable-next-line no-console
        console.error(error);
      }
    },

    async getTotalVote(districtThName?: District["th_name"]) {
      try {
        if (districtThName === "ทุกเขต" || !districtThName) {
          const data = await this.$nocoDb.dbTableRow.list(
            "v1",
            "bangkok-budgeting",
            "User-data",
          );
          return data;
        } else {
          const data = await this.$nocoDb.dbTableRow.list(
            "v1",
            "bangkok-budgeting",
            "User-data",
            {
              where: `(district,eq,เขต${districtThName})`,
            },
          );
          return data;
        }
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
          "ideas-data",

          {
            userId: this.$cookies.get("uuid"),
            idea: this.voteIdeaComment,
          },
        );
        this.dialogOpen = false;
        this.voteIdeaComment = "";
        return data;
      } catch (error) {
        // eslint-disable-next-line no-console
        console.error(error);
      }
    },

    async getProjectData(districtThName?: string) {
      const result: NocoDBResponseType = await this.groubByTableRow(districtThName);
      this.voter = await this.getTotalVote(districtThName);
      if (result?.list.length > 0) {
        this.ideaVotes.forEach((strategy, index) => {
          const _vouteCount = parseInt(result.list[index]?.count);
          strategy.vote_count = _vouteCount;
        });
      }
      return result;
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
