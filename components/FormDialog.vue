<template>
  <div>
    <FormDialog>
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
  </div>
</template>

<script>
import FormDialog from "~/components/dialog/FormDialog.vue";
import DistrictDropdown from "~/components/DistrictDropdown.vue";
import projectAnimation from "~/assets/lottie/project-loading.json";
import Lottie from "vue-lottie/src/lottie.vue";
export default {
  props: {
    selected: {
      type: Array,
    },
    closeDialog: {
      type: Function,
    },
    setStepSurvey: {
      type: Function,
    },
  },
  data() {
    return {
      formData: { district: "" },
      isShowLoading: false,
      defaultOptions: {
        animationData: projectAnimation,
        loop: true,
        autoplay: true,
      },
    };
  },

  components: {
    FormDialog,
    DistrictDropdown,
    Lottie,
  },
  methods: {
    async postTableRow(table, data) {
      await this.$nocoDb.dbTableRow.bulkCreate("v1", "bangkok-budgeting", table, data);
    },
    async handleSubmit(e) {
      e.preventDefault();
      this.dialogOpen = false;
      this.isShowLoading = true;
      await this.sendData();
      await this.senduser();
    },
    setDistrict(district) {
      this.formData.district = district;
    },
    async senduser() {
      const cookieId = this.$cookies.get("uuid");
      try {
        await this.postTableRow("User-data", [
          {
            userId: cookieId,
            district: `เขต${this.formData.district.th_name}`,
          },
        ]);
      } catch (e) {
        // eslint-disable-next-line no-console
        console.error(e);
      }
    },
    async sendData() {
      const arrayForNoco = [];
      const cookieId = this.$cookies.get("uuid");
      this.selected.forEach(project => {
        arrayForNoco.push({
          userId: cookieId,
          idea: project.problem,
          strategy: project.strategy,
          district: `เขต${this.formData.district.th_name}`,
        });
      });

      try {
        await this.postTableRow("Survey", arrayForNoco).then(() => {
          setTimeout(() => {
            this.isShowLoading = false;
            this.setStepSurvey("next");
            // this.closeDialog();
          }, 2000);
          this.$cookies.set("voted", "true");
        });
      } catch (e) {
        // eslint-disable-next-line no-console
        console.error(e);
      }
    },
  },
};
</script>

<style lang="scss" scoped></style>
