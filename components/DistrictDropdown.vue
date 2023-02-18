<template>
  <div>
    <select
      v-model="selected_district"
      name="district"
      class="rounded-sm px-2 py-1 outline outline-blackw-56"
      :disabled="disabled"
      @change="onChange"
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
</template>

<script lang="ts">
import { defineComponent } from "vue";
import districtData from "~/data/districts.json";

export interface District {
  id: string | null;
  en_name: string | null;
  th_name: string;
  zipcode: string;
}

interface DistrictDropdownData {
  selected_district: District | null;
  districts: District[];
}

export default defineComponent({
  name: "DistrictDropdown",
  props: {
    disabled: {
      type: Boolean,
    },
    type: {
      type: Number,
      default: null,
    },
  },
  emits: ["change"],
  data(): DistrictDropdownData {
    return {
      selected_district: null,
      districts: districtData,
    };
  },
  created() {
    if (this.type === 1) {
      this.districts = this.districts.filter(
        x =>
          x.th_name !== "เลือกพื้นที่ของคุณ" &&
          x.th_name !== "ทุกเขต" &&
          x.th_name !== "จังหวัดอื่นๆ",
      );
      this.selected_district = this.districts[0];
    } else if (this.type === 2) {
      this.districts = this.districts.filter(
        x =>
          x.th_name !== "กรุณาเลือกเขต" &&
          x.th_name !== "จังหวัดอื่นๆ" &&
          x.th_name !== "เลือกพื้นที่ของคุณ",
      );
      this.selected_district = this.districts[0];
    } else {
      this.districts = this.districts.filter(
        x => x.th_name !== "กรุณาเลือกเขต" && x.th_name !== "ทุกเขต",
      );
      this.selected_district = this.districts[0];
    }
  },
  methods: {
    onChange() {
      this.$emit("change", this.selected_district);
    },
  },
});
</script>

<style lang="scss" scoped>
.select-dropdown {
  width: 175px;
  font-family: "Anuphan", serif;
  font-size: 14px;
}
</style>
