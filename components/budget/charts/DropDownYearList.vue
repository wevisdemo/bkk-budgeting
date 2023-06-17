<template>
  <div
    class="border relative border-wv-gray-3 w-[150px] px-[10px] py-[5px] rounded-[5px] flex items-center cursor-pointer"
    @click="handleSelectedYear"
  >
    <p class="font-bold">
      <slot></slot>
    </p>
    <div
      v-if="isOpenYearSelected"
      id="yearSelected"
      class="absolute top-[120%] bg-white w-[150px] z-20 left-0 border border-wv-gray-3 py-[5px]"
    >
      <div
        v-for="item in yearList"
        :key="item.id"
        class="hover:bg-wv-gray-3 cursor-pointer px-[10px]"
        @click="() => isSelectedYear(item)"
      >
        {{ item.label }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    handleSelectedYear: {
      type: Function,
    },
    isOpenYearSelected: {
      type: Boolean,
    },
    isSelectedYear: {
      type: Function,
    },
  },
  data() {
    return {
      yearList: [
        { label: "2561-2566", value: "" },
        { label: "2561", value: 61 },
        { label: "2562", value: 62 },
        { label: "2563", value: 63 },
        { label: "2564", value: 64 },
        { label: "2565", value: 65 },
        { label: "2566", value: 66 },
      ],
    };
  },
  methods: {},
};
</script>

<style lang="scss" scoped></style>
