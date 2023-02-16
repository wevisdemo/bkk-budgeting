<template>
  <BoxContainer class="pb-8 sm:py-10 md:py-14 sm:px-10 md:px-48">
    <div class="mb-2">
      <h5 class="wv-h5 wv-bold text-center">เลือก 3 โครงการที่อยากพัฒนา</h5>
    </div>
    <div class="grid gap-4">
      <div
        v-for="(project, index) in projectsList"
        :key="index"
        class="grid gap-10 w-full projectItem md:projectItem"
      >
        <CoinIcon :rotate="index" />
        <div
          class="py-2 px-2 rounded cursor-pointer flex-grow transition-colors"
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
            <div>
              <select
                id="district"
                v-model="formData.district"
                name="district"
                class="rounded-sm px-2 py-1"
              >
                <option
                  v-for="(district, districtIndex) in districts"
                  :key="districtIndex"
                  :value="district"
                >
                  {{ district.th_name }}
                </option>
              </select>
            </div>
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
    <div></div>
  </BoxContainer>
</template>

<script lang="ts">
import Vue from "vue";
import CoinIcon from "~/components/CoinIcon.vue";
import FormDialog from "~/components/dialog/FormDialog.vue";
import BoxContainer from "~/components/BoxContainer.vue";
import { StrategyTypes } from "~/models/strategies";

interface Project {
  type: StrategyTypes;
  title: string;
  subtitle: string;
}

interface District {
  id: string | null;
  en_name: string | null;
  th_name: string;
  zipcode: string;
}

interface FormDataProps {
  district: District;
  projects: Project[];
}

interface ProjectDevelopmentData {
  dialogOpen: boolean;
  districts: District[];
  projectsList: Project[];
  formData: FormDataProps;
}

export default Vue.extend({
  name: "ProjectDevelopment",
  components: { CoinIcon, FormDialog, BoxContainer },
  data(): ProjectDevelopmentData {
    return {
      dialogOpen: false,
      formData: {
        district: {
          id: null,
          en_name: null,
          th_name: "กรุณาเลือกเขต",
          zipcode: "00000",
        },
        projects: [],
      },
      districts: [
        {
          id: null,
          en_name: null,
          th_name: "กรุณาเลือกเขต",
          zipcode: "00000",
        },
        {
          id: "0",
          en_name: "upcountry",
          th_name: "จังหวัดอื่นๆ",
          zipcode: "00000",
        },
        {
          id: "1",
          en_name: "khlongtoei",
          th_name: "คลองเตย",
          zipcode: "10110",
        },
        {
          id: "2",
          en_name: "khlongsan",
          th_name: "คลองสาน",
          zipcode: "10600",
        },
        {
          id: "3",
          en_name: "khlongsamwa",
          th_name: "คลองสามวา",
          zipcode: "10510",
        },
        {
          id: "4",
          en_name: "khannayao",
          th_name: "คันนายาว",
          zipcode: "10230",
        },
        {
          id: "5",
          en_name: "chatuchak",
          th_name: "จตุจักร",
          zipcode: "10900",
        },
        {
          id: "6",
          en_name: "chomthong",
          th_name: "จอมทอง",
          zipcode: "10150",
        },
        {
          id: "7",
          en_name: "donmueang",
          th_name: "ดอนเมือง",
          zipcode: "10210",
        },
        {
          id: "8",
          en_name: "dindaeng",
          th_name: "ดินแดง",
          zipcode: "10400",
        },
        {
          id: "9",
          en_name: "dusit",
          th_name: "ดุสิต",
          zipcode: "10300",
        },
        {
          id: "10",
          en_name: "talingchan",
          th_name: "ตลิ่งชัน",
          zipcode: "10170",
        },
        {
          id: "11",
          en_name: "thawiwatthana",
          th_name: "ทวีวัฒนา",
          zipcode: "10170",
        },
        {
          id: "12",
          en_name: "thungkhru",
          th_name: "ทุ่งครุ",
          zipcode: "10140",
        },
        {
          id: "13",
          en_name: "thonburi",
          th_name: "ธนบุรี",
          zipcode: "10600",
        },
        {
          id: "14",
          en_name: "bangkoknoi",
          th_name: "บางกอกน้อย",
          zipcode: "10700",
        },
        {
          id: "15",
          en_name: "bangkokyai",
          th_name: "บางกอกใหญ่",
          zipcode: "10600",
        },
        {
          id: "16",
          en_name: "bangkapi",
          th_name: "บางกะปิ",
          zipcode: "10240",
        },
        {
          id: "17",
          en_name: "bangkhunthian",
          th_name: "บางขุนเทียน",
          zipcode: "10150",
        },
        {
          id: "18",
          en_name: "bangkhen",
          th_name: "บางเขน",
          zipcode: "10220",
        },
        {
          id: "19",
          en_name: "bangkholaem",
          th_name: "บางคอแหลม",
          zipcode: "10120",
        },
        {
          id: "20",
          en_name: "bangkhae",
          th_name: "บางแค",
          zipcode: "10160",
        },
        {
          id: "21",
          en_name: "bangsue",
          th_name: "บางซื่อ",
          zipcode: "10800",
        },
        {
          id: "22",
          en_name: "bangna",
          th_name: "บางนา",
          zipcode: "10260",
        },
        {
          id: "23",
          en_name: "bangbon",
          th_name: "บางบอน",
          zipcode: "10150",
        },
        {
          id: "24",
          en_name: "bangphlat",
          th_name: "บางพลัด",
          zipcode: "10700",
        },
        {
          id: "25",
          en_name: "bangrak",
          th_name: "บางรัก",
          zipcode: "10500",
        },
        {
          id: "26",
          en_name: "buengkum",
          th_name: "บึงกุ่ม",
          zipcode: "10240",
        },
        {
          id: "27",
          en_name: "pathumwan",
          th_name: "ปทุมวัน",
          zipcode: "10330",
        },
        {
          id: "28",
          en_name: "prawet",
          th_name: "ประเวศ",
          zipcode: "10250",
        },
        {
          id: "29",
          en_name: "pomprapsattruphai",
          th_name: "ป้อมปราบศัตรูพ่าย",
          zipcode: "10100",
        },
        {
          id: "30",
          en_name: "phayathai",
          th_name: "พญาไท",
          zipcode: "10400",
        },
        {
          id: "31",
          en_name: "phrakhanong",
          th_name: "พระโขนง",
          zipcode: "10260",
        },
        {
          id: "32",
          en_name: "phranakhon",
          th_name: "พระนคร",
          zipcode: "10200",
        },
        {
          id: "33",
          en_name: "phasicharoen",
          th_name: "ภาษีเจริญ",
          zipcode: "10160",
        },
        {
          id: "34",
          en_name: "minburi",
          th_name: "มีนบุรี",
          zipcode: "10510",
        },
        {
          id: "35",
          en_name: "yannawa",
          th_name: "ยานนาวา",
          zipcode: "10120",
        },
        {
          id: "36",
          en_name: "ratchathewi",
          th_name: "ราชเทวี",
          zipcode: "10400",
        },
        {
          id: "37",
          en_name: "ratburana",
          th_name: "ราษฏร์บูรณะ",
          zipcode: "10140",
        },
        {
          id: "38",
          en_name: "latkrabang",
          th_name: "ลาดกระบัง",
          zipcode: "10520",
        },
        {
          id: "39",
          en_name: "latphrao",
          th_name: "ลาดพร้าว",
          zipcode: "10230",
        },
        {
          id: "40",
          en_name: "wangthonglang",
          th_name: "วังทองหลาง",
          zipcode: "10310",
        },
        {
          id: "41",
          en_name: "watthana",
          th_name: "วัฒนา",
          zipcode: "10110",
        },
        {
          id: "42",
          en_name: "suanluang",
          th_name: "สวนหลวง",
          zipcode: "10250",
        },
        {
          id: "43",
          en_name: "saphansung",
          th_name: "สะพานสูง",
          zipcode: "10240",
        },
        {
          id: "44",
          en_name: "samphanthawong",
          th_name: "สัมพันธวงศ์",
          zipcode: "10100",
        },
        {
          id: "45",
          en_name: "sathon",
          th_name: "สาทร",
          zipcode: "10120",
        },
        {
          id: "46",
          en_name: "saimai",
          th_name: "สายไหม",
          zipcode: "10220",
        },
        {
          id: "47",
          en_name: "nongkhaem",
          th_name: "หนองแขม",
          zipcode: "10160",
        },
        {
          id: "48",
          en_name: "nongchok",
          th_name: "หนองจอก",
          zipcode: "10530",
        },
        {
          id: "49",
          en_name: "laksi",
          th_name: "หลักสี่",
          zipcode: "10210",
        },
        {
          id: "50",
          en_name: "huaikhwang",
          th_name: "ห้วยขวาง",
          zipcode: "10310",
        },
      ],
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
      // eslint-disable-next-line no-console
      console.log(this.formData.projects);
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
