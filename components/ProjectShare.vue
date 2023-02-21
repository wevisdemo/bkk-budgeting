<template>
  <div class="bg-white">
    <BoxContainer>
      <div class="flex flex-col items-center gap-6 text-center m-auto">
        <h5 class="wv-h5 wv-bold">
          ร่วมส่งต่อโครงการที่อยากให้เกิดขึ้นในพื้นที่ของคุณ
        </h5>
        <div class="grid grid-cols-2 gap-2">
          <DistrictDropdown @change="district => onDistrictChange(district)" />
          <ProjectDropdown
            :disabled="isUpCountry"
            @change="project => onProjectChange(project)"
          />
        </div>
        <p class="wv-b6 text-wv-gray-1">ภาพปกเมื่อคุณแชร์เว็บไซต์นี้ :</p>
        <div class="ogimage max-w-[1000px] border rounded outline">
          <img
            :src="
              isUpCountry
                ? `https://d208eq9ndr4893.cloudfront.net/og-image/upcountry.png`
                : `https://d208eq9ndr4893.cloudfront.net/og-image/${district_name}-${project_id}.png`
            "
          />
        </div>
      </div>
      <div class="text-center">
        <!-- add share social -->
        <div>Share</div>
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
import BoxContainer from "./BoxContainer.vue";
import DistrictDropdown, { District } from "~/components/DistrictDropdown.vue";
import ProjectDropdown, { Project } from "~/components/ProjectDropdown.vue";

import districtData from "~/data/districts.json";

export default Vue.extend({
  name: "ProjectShare",
  components: { BoxContainer, DistrictDropdown, ProjectDropdown },
  data() {
    return {
      district_name: districtData[4].en_name,
      project_id: 1,
      isUpCountry: false,
      isDefault: true,
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
    },
  },
});
</script>
