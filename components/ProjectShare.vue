<template>
  <div class="bg-white">
    <BoxContainer class="sm:py-20">
      <div class="flex flex-col items-center gap-6 text-center m-auto">
        <h5 class="wv-h5 wv-bold wv-kondolar" >
          ร่วมส่งต่อโครงการที่อยากให้เกิดขึ้นในพื้นที่ของคุณ
        </h5>
        <div class="grid grid-cols-2 gap-2">
          <DistrictDropdown
            :type="3"
            @change="district => onDistrictChange(district)"
          />
          <ProjectDropdown @change="project => onProjectChange(project)" />
        </div>
        <p class="wv-b6 text-wv-gray-1">ภาพปกเมื่อคุณแชร์เว็บไซต์นี้ :</p>
        <div class="ogimage max-w-[1000px] border rounded outline">
          <img
            :src="`https://wevisdemo.github.io/bkk-budgeting/images/og-share/${project_id}-og-${project_type}/${district_name}-${project_id}.jpg`"
          />
        </div>
      </div>
      <div class="text-center mt-4">
        <div class="flex gap-3 justify-center items-center mb-4">
          <div>Share</div>
          <img
            v-sharer
            :src="icon_fb"
            class="sharer social-icon pointer"
            data-sharer="facebook"
            :data-url="`https://wevisdemo.github.io/bkk-budgeting/images/og-share/${project_id}-og-${project_type}/${district_name}-${project_id}.jpg`"
          />
          <img
            v-sharer
            :src="icon_twitter"
            class="sharer social-icon pointer"
            data-sharer="twitter"
            :data-url="`https://wevisdemo.github.io/bkk-budgeting/images/og-share/${project_id}-og-${project_type}/${district_name}-${project_id}.jpg`"
          />
          <img
            v-sharer
            :src="icon_line"
            class="sharer social-icon pointer"
            data-sharer="line"
            :data-url="`https://wevisdemo.github.io/bkk-budgeting/images/og-share/${project_id}-og-${project_type}/${district_name}-${project_id}.jpg`"
          />
        </div>
        <div class="wv-b">
          <span>หรือร่วมกันติดแฮชแท็ก</span>
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

const defaultDistrict = "pomprapsattruphai";

export default Vue.extend({
  name: "ProjectShare",
  components: { BoxContainer, DistrictDropdown, ProjectDropdown },
  directives: {
    sharer: VueSharer,
  },
  data() {
    return {
      district_name: districtData.filter(
        _district => _district.en_name === defaultDistrict,
      )[0].en_name,
      project_id: 1,
      project_type: "environment",
      isUpCountry: false,
      icon_fb: require("~/assets/logo/facebook.svg"),
      icon_line: require("~/assets/logo/line.svg"),
      icon_twitter: require("~/assets/logo/twitter.svg"),
    };
  },
  methods: {
    onDistrictChange(district: District) {
      if (district.en_name !== null) {
        this.district_name = district.en_name;
        this.$store.commit("setSelectedVoteDropdown", {
          district_name: district.en_name,
        });
      } else {
        this.district_name = districtData.filter(
          _district => _district.en_name === defaultDistrict,
        )[0].en_name;
      }
    },
    onProjectChange(project: Project) {
      if (project.name === "เลือกโครงการ") {
        this.project_id = 1;
        this.project_type = "environment";
        this.$store.commit("setSelectedVoteDropdown", {
          project_type: "environment",
          project_id: 1,
        });
      } else {
        this.project_id = project.id;
        this.project_type = project.type;
        this.$store.commit("setSelectedVoteDropdown", {
          project_type: project.type,
          project_id: project.id,
        });
      }
    },
  },
});
</script>
