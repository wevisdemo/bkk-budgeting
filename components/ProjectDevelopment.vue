<template>
  <div class="pb-8 sm:py-14 sm:px-20 grid gap-6">
    <p class="wv-h8 text-center">เลือกโครงการที่อยากพัฒนา เลือกได้ 3 โครงการ</p>
    <div class="grid gap-4">
      <div
        v-for="(project, index) in projectsList"
        :key="index"
        class="py-1 px-2 rounded bg-wv-gray-3 text-center flex"
      >
        <CoinIcon />
        <p class="wv-b3">{{ project.title }}</p>
        <p class="wv-b3">{{ project.subtitle }}</p>
        <CoinIcon />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import CoinIcon from "~/components/icons/CoinIcon.vue";

export default Vue.extend({
  name: "ProjectDevelopment",
  components: { CoinIcon },
  data() {
    return {
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
});
</script>
