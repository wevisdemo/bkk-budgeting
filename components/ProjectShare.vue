<template>
  <div class="bg-white">
    <BoxContainer>
      <div class="flex flex-col items-center gap-6 text-center m-auto">
        <h5 class="wv-h5 wv-bold">
          ร่วมส่งต่อโครงการที่อยากให้เกิดขึ้นในพื้นที่ของคุณ
        </h5>
        <div class="grid grid-cols-2 gap-2">
          <DistrictDropdown @change="district => onDistrictChange(district)" />
          <ProjectDropdown @change="project => onProjectChange(project)" />
        </div>
        <p class="wv-b6 text-wv-gray-1">ภาพปกเมื่อคุณแชร์เว็บไซต์นี้ :</p>
        <div class="ogimage max-w-[1000px] border rounded outline">
          <img
            :src="
              isUpCountry
                ? `wevisdemo.github.io/bkk-budgeting/images/og-share/upcountry.png`
                : `wevisdemo.github.io/bkk-budgeting/images/og-share/${project_id}-og-${project_name}/${district_name}-${project_id}.jpg`
            "
          />
        </div>
      </div>
      <div class="text-center">
        <div class="flex justify-center">
          <div>Share</div>
          <img
            v-sharer
            :src="icon_fb"
            class="sharer social-icon pointer mx-1"
            data-sharer="facebook"
            :data-url="
              district == 'upcountry'
                ? `wevisdemo.github.io/bkk-budgeting/images/og-share/upcountry`
                : `wevisdemo.github.io/bkk-budgeting/images/og-share/${project_id}-og-${project_name}/${district_name}-${project_id}.jpg`
            "
          />
          <img
            v-sharer
            :src="icon_twitter"
            class="sharer social-icon pointer mx-1"
            data-sharer="twitter"
            :data-url="
              district == 'upcountry'
                ? `wevisdemo.github.io/bkk-budgeting/images/og-share/upcountry`
                : `wevisdemo.github.io/bkk-budgeting/images/og-share/${project_id}-og-${project_name}/${district_name}-${project_id}.jpg`
            "
          />
          <img
            v-sharer
            :src="icon_line"
            class="sharer social-icon pointer mx-1"
            data-sharer="line"
            :data-url="
              district == 'upcountry'
                ? `wevisdemo.github.io/bkk-budgeting/images/og-share/upcountry`
                : `wevisdemo.github.io/bkk-budgeting/images/og-share/${project_id}-og-${project_name}/${district_name}-${project_id}.jpg`
            "
          />
        </div>
        <div class="wv-b">
          <span class="text-wv-gray-1">หรือร่วมกันติดแฮชแท็ก</span>
          <span class="text-wv-green">#BangkokBudgeting</span>
        </div>
      </div>
    </BoxContainer>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
// @ts-ignore
import VueSharer from "vue-sharer";

import BoxContainer from "./BoxContainer.vue";
import DistrictDropdown, { District } from "~/components/DistrictDropdown.vue";
import ProjectDropdown, { Project } from "~/components/ProjectDropdown.vue";

import districtData from "~/data/districts.json";

export default Vue.extend({
  name: "ProjectShare",
  components: { BoxContainer, DistrictDropdown, ProjectDropdown },
  directives: {
    sharer: VueSharer,
  },
  data() {
    return {
      district_name: districtData[4].en_name,
      project_id: 1,
      project_name: "",
      isUpCountry: false,
      isDefault: true,
      icon_fb: require("~/assets/logo/facebook.svg"),
      icon_line: require("~/assets/logo/line.svg"),
      icon_twitter: require("~/assets/logo/twitter.svg"),
    };
  },
  methods: {
    onDistrictChange(district: District) {
      if (district.en_name === "upcountry") {
        this.$cookies.set("isUpCountry", true);
        this.isUpCountry = true;
      } else if (district.en_name === null) {
        // eslint-disable-next-line no-console
        console.log(`default`);
        this.isDefault = true;
        this.isUpCountry = false;
        if (!district.en_name) this.district_name = districtData[4].en_name;
      } else {
        this.isUpCountry = false;
        this.isDefault = false;
        if (district.en_name) this.district_name = district.en_name;
      }
    },
    onProjectChange(project: Project) {
      this.project_id = project.id;
      this.project_name = project.name;
    },
  },
});
</script>
