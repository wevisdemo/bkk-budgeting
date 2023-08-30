<template>
  <BoxContainer>
    <div class="max-w-3xl m-auto flex flex-col gap-20">
      <div class="text-center mt-10 mb-12">
        <h1 class="wv-h4 wv-bold">Bangkok Budgeting</h1>
        <h1 class="wv-h7 wv-bold">
          เปิดเผยอย่างโปร่งใส เผื่อใครๆก็มีส่วนร่วมกับงบกรุงเทพฯ ได้
        </h1>
      </div>
      <!-- about -->
      <div class="grid gap-6">
        <h5 class="wv-h5 wv-bold">เกี่ยวกับโปรเจกต์นี้</h5>
        <div class="grid gap-4">
          <p>
            ในปัจจุบัน เราต่างใช้ชีวิตอยู่ในเมืองที่รายล้อมไปด้วยหลากหลายปัญหา เช่น
            ปัญหาขยะ น้ำเน่าเสีย ปัญหาทางเท้า หรือการจราจรติดขัด
            ปัญหาเหล่านี้ล้วนเป็นหน้าที่ของภาครัฐในการจัดการแก้ไข
            ผ่านการจัดสรรงบประมาณเพื่อพัฒนาคุณภาพชีวิตของประชาชน “เรา”
            ในฐานะประชาชนผู้จ่ายภาษี
            คงจะดีไม่น้อยหากสามารถเข้าไปมีส่วนในการร่วมออกแบบการใช้งบประมาณเพื่อพัฒนาเมืองของเราเองให้ดีขึ้นและเป็นไปอย่างที่ต้องการได้
          </p>
          <p>
            หลายประเทศเริ่มเปิดโอกาสให้ประชาชนมีส่วนร่วมกับงบประมาณได้ในรูปแบบที่เรียกว่า
            “งบประมาณแบบมีส่วนร่วม” (Participatory Budgeting)
            ซึ่งเป็นเครื่องมือในการมีส่วนร่วมที่ให้ประชาชนในชุมชนสามารถตัดสินเกี่ยวกับการใช้จ่ายงบประมาณเองได้
          </p>
          <p>
            ทีม <a href="https://punchup.world/" target="_blank">Punch Up</a> &
            <a href="https://wevis.info/" target="_blank">WeVis</a> ,
            องค์กรต่อต้านคอร์รัปชัน (ประเทศ) , Glow Story , Hand Social Enterprise ,
            Good Society Thailand และ Social Integrity Architecture and Mechanism Design
            Lab จึงตั้งใจพัฒนาแพลตฟอร์มนี้ในรูปแบบเทคโนโลยีภาคประชาชน (Civic Tech)
            เพื่อเปิดเผยข้อมูลให้ทุกคนในฐานะผู้เสียภาษี ได้เข้าถึง เข้าใจ
            และเป็นส่วนหนึ่งของการออกแบบงบประมาณของกรุงเทพฯ
            โดยเริ่มจากคำถามที่อาจจะคาใจหลายๆ คน ว่าตอนนี้กรุงเทพฯ วางแผนแก้ปัญหาต่าง ๆ
            ที่มีอยู่อย่างไร? ใช้งบประมาณเท่าไหร่?
            และประชาชนสามารถมีส่วนร่วมในการแสดงความคิดเห็นในเรื่องนี้ได้อย่างไรบ้าง?
            นอกจากนี้
            เรายังมีความตั้งใจที่จะนำความคิดเห็นจากการรวบรวมในครั้งนี้ยื่นต่อผู้ว่าราชการจังหวัดกรุงเทพฯ
            และหน่วยงานที่เกี่ยวข้องเพื่อพัฒนาต่อยอดการใช้จ่ายงบประมาณให้ตรงจุดเพื่อแก้ปัญหาที่มีอยู่ในสังคมต่อไป
          </p>
          <p>
            โปรเจกต์นี้นับเป็นโปรเจกต์ทดลองสร้างแพลตฟอร์มรูแปบบออนไลน์
            “งบประมาณแบบมีส่วนร่วม” ให้กับจังหวัด/เมืองต่างๆ ในประเทศไทย
            โดยเริ่มจากเมืองหลวงอย่างกรุงเทพฯ เป็นต้นแบบ แล้วพัฒนาไปสู่เมืองอื่น ๆ
            จึงอยากเชิญชวนทุกคนมามีส่วนร่วมในการพัฒนาสังคมให้ดีขึ้น
            เริ่มต้นจากการรู้ข้อมูลการวางแผน การใช้งบประมาณของกรุงเทพฯ
            และเป็นส่วนหนึ่งในการออกแบบงบประมาณ
            ผ่านการแสดงความคิดเห็นเสนอโครงการกับงบประมาณในการพัฒนาเมือง
          </p>
          <p>
            เราเชื่อว่าอย่างน้อย
            จุดเริ่มต้นนี้ผลักดันให้เกิดงบประมาณแบบมีส่วนร่วมอย่างแท้จริงในประเทศไทยได้
            !
          </p>
        </div>
      </div>
      <!-- data and restrictions -->
      <div class="grid gap-6">
        <h5 class="wv-h5 wv-bold">ที่มาของข้อมูล</h5>
        <div class="grid gap-4">
          <p>
            ทางทีมผู้พัฒนา ได้ใช้ข้อมูลจากเว็บไซต์ทางการของกรุงเทพฯ ตามลิงก์ที่แนบไว้
            แต่จากโครงสร้างของชุดข้อมูลที่ไม่ได้จัดทำในรูปแบบเดียวกันอย่างเป็นระบบ
            บางชุดข้อมูลเป็นไฟล์นามสกุล pdf
            ทำให้ทางทีมต้องมีการเรียบเรียงและตรวจสอบจากข้อมูลหลายแห่ง
            ซึ่งอาจส่งผลต่อความแม่นยำของชุดข้อมูลได้ นอกจากนี้งบประมาณที่แสดงในเว็บไซต์
            ไม่ใช่งบที่ทำการเบิกจ่ายใช้จริงๆ
            แต่เป็นข้อมูลตามข้อบัญญัติของแต่ละปีงบประมาณ
          </p>
        </div>
      </div>
      <!-- refs -->
      <div class="grid gap-6">
        <h5 class="wv-h5 wv-bold">อ้างอิงข้อมูลจาก</h5>
        <div class="grid gap-4">
          <ul class="list-disc list-inside">
            <li v-for="(ref, refIndex) in references" :key="refIndex">
              <a :href="ref" target="_blank" class="cursor-pointer">{{ ref }}</a>
            </li>
          </ul>
        </div>
      </div>
      <!-- policy -->
      <div class="grid gap-6">
        <h5 class="wv-h5 wv-bold">นโยบายการนำข้อมูลไปใช้ต่อ</h5>
        <div class="grid gap-4">
          <p>
            ทางทีมมีความตั้งใจที่พัฒนาทุกโปรเจ็กต์ให้เป็น Open Source และเปิดข้อมูลเป็น
            Open Data ภายใต้เงื่อนไข Creative Commons Attribution-ShareAlike License
            คือสามารถนำไปเผยแพร่และดัดแปลงได้ โดยต้องระบุที่มา แต่ห้ามนำไปใช้เพื่อการค้า
            และต้องเผยแพร่งานดัดแปลงโดยใช้สัญญาอนุญาตชนิดเดียวกัน
          </p>
          <p>
            หากมีข้อสงสัยต้องการสอบถามเพิ่มเติม
            ประสงค์แจ้งเปลี่ยนแปลงหรือเพิ่มเติมข้อมูลเพื่อความถูกต้อง
            หรือมีข้อเสนอแนะใดๆ สามารถติดต่อได้ที่ team@punchup.world
          </p>
        </div>
      </div>
      <!-- volunteers -->
      <div class="">
        <h5 class="wv-h5 wv-bold">อาสาสมัครร่วมพัฒนา</h5>
        <div class="">
          <div
            v-for="({ position, names, text }, volunteerIndex) in volunteers"
            :key="volunteerIndex"
          >
            <p class="wv-bold mb-2 mt-10">{{ position }}</p>
            <div class="flex flex-wrap">
              <template v-for="(name, nameIndex) in names">
                <span :key="nameIndex" class=""
                  ><div v-html="name" v-if="name"></div>
                </span>
              </template>
            </div>

            <div v-if="text" v-html="text"></div>
          </div>
        </div>
      </div>
      <!-- partners -->
      <div class="grid gap-6">
        <h5 class="wv-h5 wv-bold">PARTNERS</h5>
        <div class="grid gap-4">
          <ul class="list-disc list-inside">
            <li
              v-for="({ name, link }, partnerNameIndex) in partners"
              :key="partnerNameIndex"
            >
              <a :href="link" target="_blank">{{ name }}</a>
            </li>
          </ul>
        </div>
        <div class="flex gap-2">
          <div
            v-for="({ name, img, link }, partnerImgIndex) in partners"
            :key="partnerImgIndex"
            class=""
          >
            <a :href="link" target="_blank">
              <img
                :src="require(`~/assets/images/partners/logo_${img}.png`)"
                :alt="name"
                class="w-full h-auto"
              />
            </a>
          </div>
        </div>
      </div>
      <!-- download -->
      <div class="flex justify-center">
        <WvButton color="black" @click.stop="handleDownloadData">
          <svg
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M20 3V27.2101M10.1719 17.9494L20 27.3424L29.8281 17.9494M3 27.3424V37H37V27.8716"
              stroke="currentColor"
              stroke-width="5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <a
            class="wv-h5 wv-bold"
            href="https://docs.google.com/spreadsheets/d/1MNFtkwO7b84JI1WCkgFYKwgTGhKx4SYEl9143bWNMBk/edit?usp=sharing "
            target="_blank"
            >ดาวน์โหลดข้อมูล</a
          >
        </WvButton>
      </div>
      <div class="text-center mt-4">
        <div class="flex gap-3 justify-center items-center mb-4">
          <div>Share</div>
          <img
            v-sharer
            :src="icon_fb"
            class="sharer social-icon pointer"
            data-sharer="facebook"
            :data-url="shareUrl"
          />
          <img
            v-sharer
            :src="icon_twitter"
            class="sharer social-icon pointer"
            data-sharer="twitter"
            :data-url="shareUrl"
          />
          <img
            v-sharer
            :src="icon_line"
            class="sharer social-icon pointer"
            data-sharer="line"
            :data-url="shareUrl"
          />
        </div>
      </div>
    </div>
  </BoxContainer>
</template>

<script lang="ts">
import Vue from "vue";
// @ts-ignore
import VueSharer from "vue-sharer";
// @ts-ignore
import WvButton from "@wevisdemo/ui/vue2/button";

import BoxContainer from "~/components/BoxContainer.vue";
import { createMetadata } from "~/utils/metadata";

export default Vue.extend({
  name: "AboutPage",
  components: { BoxContainer, WvButton },
  directives: {
    sharer: VueSharer,
  },
  data() {
    return {
      shareUrl: `https://wevisdemo.github.io/bkk-budgeting/images/og_default.jpg`,
      isDownloadReady: false,
      download: require("~/assets/icons/download.svg"),
      icon_fb: require("~/assets/logo/facebook.svg"),
      icon_line: require("~/assets/logo/line.svg"),
      icon_twitter: require("~/assets/logo/twitter.svg"),
      references: [
        "http://dp2.bangkok.go.th/mobile/mymenu.php",
        "https://main.bangkok.go.th/",
        "http://www.ratchakitcha.soc.go.th/RKJ/announce/search_result.jsp?openPageTime=1631042151747",
        "https://www.citizenlab.co/blog/civic-engagement/participatory-budgeting/one-tool-multiple-possibilities-three-examples-of-participatory-budgets/",
        "https://www.local.gov.uk/case-studies/govanhill-glasgow",
        "https://www.local.gov.uk/case-studies/tower-hamlets-you-decide",
        "https://www.local.gov.uk/case-studies/case-study-porto-alegre-brazil",
        "ศูนย์สารสนเทศของกรุงเทพมหานคร",
      ],
      volunteers: [
        {
          position: "เขียนโปรแกรม",
          names: [
            "<a href='https://www.linkedin.com/mwlite/in/pimpatipan-angkharuengrattana-560898209' target='_blank'>พิมพ์ปฏิภาณ อังคเรืองรัตนา<a/>,&nbsp;",
            "<a href='https://github.com/palminister' target='_blank'>ธนภัทร จำนงรัตน์ </a>,&nbsp;",
            "ณัฐกิตติ์ แซ่ตัน,&nbsp",
            "<a href='https://github.com/napatswift' target='_blank'>ณภัทร ดลภาวิจิต</a>,&nbsp;",
            "<a href='https://github.com/mixth' target='_blank'>ณรัฐ สุชาติสุนทร</a>,&nbsp;",
            "<a href='https://github.com/MEEP00H' target='_blank'>โสภณ จำปาซ่อนกลิ่น</a>",
          ],
        },
        {
          position: "ออกแบบ",
          names: [
            "นัฐพล ไก่แก้ว,&nbsp;",
            "<a href='https://www.instagram.com/namsaisupavong/' target='_blank'>น้ำใส ศุภวงศ์</a>",
          ],
        },
        {
          position: "สืบค้นและรวบรวมข้อมูล",
          names: [
            "<a href='https://www.linkedin.com/in/suphisara-isaranugul-a943b017b/' target='_blank'>ศุภิสรา อิศรานุกูล</a>,&nbsp;",
            "<a href='https://www.linkedin.com/in/adisak-saiprasert-23a06910a/?fbclid=IwAR0V0TGb8Kp0ktfUsy26pove7hx4nE_-6Z9KiFdCLjWwM0vBooj8BX5MtLg' target='_blank'>อดิศักดิ์ สายประเสริฐ</a>,&nbsp;",
            "<a href='https://www.linkedin.com/in/alawee-wamae-113a7a1b3' target='_blank'>อาลาวีย์ วาแม</a>",
          ],
        },
        {
          position: "บรรณาธิการ",
          names: [
            "<a href=https://www.linkedin.com/in/thanisara-r/' target='_blank'>ธนิสรา เรืองเดช</a>",
          ],
        },
        {
          position: "ประสานงานและจัดการอื่นๆ",
          text: "<a href='https://punchup.world/' target='_blank'>Punch Up</a> และ <a href='https://wevis.info/' target='_blank'>WeVis</a> โปรเจกต์ Bangkok Budgeting ยังได้รับการสนับสนุนทุนในการดำเนินงานจาก <a href='https://www.ned.org/' target='_blank'>National Endowment for Democracy (NED)</a> และ Good Society ซึ่งนำมาใช้เป็นต้นทุนในการรวมรวมข้อมูล ออกแบบ พัฒนาเว็บไซต์ ประสานงาน บริหารจัดการ ตลอดจนการจัด Meetup เพื่อดำเนินโครงการ",
        },
        {
          position: "ขอขอบคุณผู้ให้ข้อมูล",
          text: "ผศ.ดร.ทวิดา กมลเวชช ที่ปรึกษาการพัฒนาการจัดทำแผนกรุงเทพฯ",
        },
      ],
      partners: [
        {
          name: "Good Society Thailand",
          img: "good_society",
          link: "https://www.facebook.com/goodsocietythailand",
        },
        { name: "Glow Story", img: "glow", link: "https://www.glowyourstory.com/" },
        {
          name: "องค์กรต่อต้านคอร์รัปชัน (ประเทศไทย)",
          img: "act",
          link: "http://www.anticorruption.in.th/2016/th/",
        },
        {
          name: "Hand social enterprise",
          img: "hand",
          link: "https://www.facebook.com/HANDenterprise",
        },
        {
          name: "Social Integrity Architecture and Mechanism Design Lab",
          img: "siam_lab",
          link: "https://www.facebook.com/siamlab.cu",
        },
      ],
    };
  },
  head: createMetadata({ pageName: "เกี่ยวกับโครงการ" }),
  methods: {
    async handleDownloadData() {
      try {
        const result = await this.$nocoDb.dbTableRow.csvExport(
          "v1",
          "bangkok-budgeting",
          "Survey",
          "csv",
        );

        const blob = new Blob([result.data], { type: "text/csv;charset=utf-8;" });
        const url = URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.setAttribute("href", url);
        link.setAttribute("download", "bangkok_budget_data.csv");
        link.click();
        return result;
      } catch (error) {
        // eslint-disable-next-line no-console
        console.error(error);
      }
    },
  },
});
</script>
