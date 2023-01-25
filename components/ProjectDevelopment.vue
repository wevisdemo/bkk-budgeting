<template>
  <div class="pb-8 sm:py-14 sm:px-20 grid gap-6">
    <p class="wv-h8 text-center">เลือกโครงการที่อยากพัฒนา เลือกได้ 3 โครงการ</p>
    <div class="grid gap-4">
      <div
        v-for="(project, index) in projectsList"
        :key="index"
        class="grid gap-4 projectItem"
      >
        <CoinIcon />
        <div class="py-1 px-2 rounded bg-wv-gray-3 text-center">
          <p class="wv-b3">{{ project.title }}</p>
          <p class="wv-b3">{{ project.subtitle }}</p>
        </div>
        <CoinIcon />
      </div>
      <div class="flex justify-center py-4">
        <button class="border border-black rounded p-3" @click.stop="openDialog">
          ส่งความคิดเห็น
        </button>
      </div>
    </div>
    <FormDialog v-if="dialogOpen">
      <div v-click-outside="closeDialog" class="p-4 bg-black max-w-lg">
        <button style="text-black" @click.stop="closeDialog">X</button>
        <div class="text-center">
          <div class="text-white">
            <p class="wv-b3">ขอสอบถามสั้นๆเกี่ยวกับคุณ ก่อนเข้าไปร่วมแสดงความคิดเห็น</p>
            <p class="wv-b6 font-thin">
              คำตอบของคุณจะใช้เพื่อการประมวลผลข้อมูลบนแพลตฟอร์มนี้และรวบรวมเพื่อ
              ยื่นต่อผู้ว่าราชการจังหวัดกรุงเทพมหานครและหน่วยงานที่เกี่ยวข้องต่อไป
            </p>
            <p class="wv-b6 font-thin">
              คุณใช้ชีวิตอยู่ในกรุงเทพมหานครหรือไม่? (เรียน/ทำงาน/พักอาศัย)
            </p>
          </div>
          <div class="flex gap-4 justify-center pb-4">
            <button class="bg-white text-black px-2 py-1 min-w-[50px] rounded-sm">
              ใช่
            </button>
            <button class="bg-white text-black px-2 py-1 min-w-[50px] rounded-sm">
              ไม่ใช่
            </button>
          </div>
          <p class="wv-b6 text-white">คุณอยู่จังหวัดไหน?</p>
          <div>
            <select id="province" name="province" class="rounded-sm px-2 py-1">
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
            <button class="bg-white text-black px-2 py-1 rounded-sm">ยืนยัน</button>
          </div>
        </div>
      </div>
    </FormDialog>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import CoinIcon from "~/components/CoinIcon.vue";
import FormDialog from "~/components/dialog/FormDialog.vue";

import provincesData from "~/data/provinces.json";

interface project {
  title: string;
  subtitle: string;
}

interface province {
  province_name: string;
}

interface ProjectDevelopmentData {
  dialogOpen: boolean;
  provinces: province[];
  projectsList: project[];
}

export default Vue.extend({
  name: "ProjectDevelopment",
  components: { CoinIcon, FormDialog },
  data(): ProjectDevelopmentData {
    return {
      dialogOpen: false,
      provinces: provincesData,
      projectsList: [
        {
          title: "ปรับปรุงระบบจัดการขยะ",
          subtitle: "(มหานครปลอดภัย)",
        },
        {
          title: "พัฒนาทางเท้า ทางข้าม",
          subtitle: "(มหานครสีเขียวสะดวกสบาย)",
        },
        {
          title: "ปรับปรุงการระบายน้ำและจัดการน้ำท่วม",
          subtitle: "(มหานครปลอดภัย)",
        },
        {
          title: "จัดการการจราจรติดขัด",
          subtitle: "(มหานครสีเขียวสะดวกสบาย)",
        },
        {
          title: "ติดตั้งแสงสว่างและกล้องวงจรอย่างทั่วถึง",
          subtitle: "(มหานครปลอดภัย)",
        },
        {
          title: "เพิ่มพื้นที่สีเขียว",
          subtitle: "(มหานครสีเขียวสะดวกสบาย)",
        },
        {
          title: "พัฒนาระบบการศึกษา",
          subtitle: "(มหานครสำหรับทุกคน)",
        },
        {
          title: "สร้างแพลตฟอร์มการมีส่วนร่วมและแสดงความคิดเห็นในการใช้งบฯ",
          subtitle: "(มหานครประชาธิปไตย)",
        },
        {
          title: "จัดระเบียบผังเมืองให้เหมาะสม",
          subtitle: "(มหานครกระชับ)",
        },
        {
          title: "ฟื้นฟูสถานที่ท่องเที่ยวสำคัญ",
          subtitle: "(มหานครแห่งเศรษฐกิจและเรียนรู้)",
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
  },
});
</script>

<style scoped>
.projectItem {
  grid-template-columns: auto 1fr auto;
}
</style>
