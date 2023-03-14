<template>
  <div>
    <!-- <div class="grid justify-center gap-2" style="height: 630px; overflow: auto">
      <div
        v-for="(item, i) in districts"
        :id="'district-' + i"
        :key="i"
        class="ogimage text-center bg-wv-cream"
      >
        <img
          v-if="withLogo"
          :src="wevis_logo"
          class="m-auto my-8"
          style="width: 120px"
        />
        <div :class="!withLogo ? `mt-12` : ``">
          <h5 class="wv-h5">พวกเราชาว “{{ item.th_name }}”</h5>
          <div class="max-w-[600px] m-auto">
            <h4 class="wv-h4 font-extrabold">
              ต้องการให้ใช้งบเพื่อ "{{ current_project.name }}"
            </h4>
          </div>
        </div>
      </div>
    </div>
    <hr />
    <div class="my-2 mx-auto">
      <button @click="downloadImageZip">
        Download - {{ current_project.type }} {{ current_project.id }} - ({{
          districts.length
        }})
      </button>
    </div>
    <div class="mt-4">
      <div id="result" class="grid justify-center gap-2" />
    </div> -->
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import html2canvas from "html2canvas";
// @ts-ignore
import { saveAs } from "file-saver";

import districtData from "~/data/districts.json";
import projectsData from "~/data/projects.json";

const PROJECT_ID = 10;

export default Vue.extend({
  data() {
    return {
      withLogo: true,
      districts: districtData.slice(4),
      current_project: projectsData[PROJECT_ID - 1],
      wevis_logo: require("~/assets/logo/wevis_logo.svg"),
    };
  },
  // head() {
  //   return {
  //     meta: [
  //     {
  //         hid: "og-image",
  //         property: "og:image",
  //         content: this.$cookies.get("isUpCountry")
  //           ? "https://d208eq9ndr4893.cloudfront.net/og-image/upcountry.png"
  //           : "https://d208eq9ndr4893.cloudfront.net/og-image/" +
  //             this.$route.params.variation +
  //             ".png",
  //       },
  //     ]
  //   }
  // },
  mounted() {
    // this.convertHtml2Canvas();
    window.location.href = "https://wevisdemo.github.io/bkk-budgeting/";
  },
  methods: {
    convertHtml2Canvas() {
      this.districts.forEach((element: any, index: number) => {
        const images = document.getElementById("district-" + index)!;
        html2canvas(images).then(canvas => {
          const dataURL = canvas.toDataURL("image/png");
          dataURL.replace(/^data:image\/(png|jpg);base64,/, "");

          const img = document.createElement("img");
          img.src = dataURL;
          img.width = 1200;
          img.id = "result-" + element.en_name;
          document.getElementById("result")!.appendChild(img);
        });
      });
    },
    downloadImageZip() {
      const JSZip = require("jszip");
      const zip = new JSZip();
      const TYPE = this.current_project.type;

      document.querySelectorAll("img").forEach(element => {
        const zipFolder = zip.folder(`${PROJECT_ID}-og-${TYPE}`);
        zipFolder.file(
          element.id.replace("result-", "") + `-${PROJECT_ID}.png`,
          element.src.replace(/^data:image\/(png|jpg);base64,/, ""),
          {
            base64: true,
          },
        );
      });
      zip.generateAsync({ type: "blob" }).then(function (content: any) {
        saveAs(content, `${PROJECT_ID}-og-${TYPE}.zip`);
      });
    },
  },
});
</script>

<style lang="scss" scoped>
$projectId: 10;

.ogimage {
  background-image: url("@/assets/images/ogimages/og_asset_#{$projectId}.png");
  width: 1200px;
  height: 630px;
  background-size: contain;
  background-repeat: no-repeat;
  position: relative;
}
</style>
Vue
