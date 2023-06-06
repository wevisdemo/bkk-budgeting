<template>
  <div
    class="flex wv-b7 mt-6 cursor-pointer bg-wv-gray-3 relative w-fit py-[2.8px] px-[12.5px] rounded-[20px]"
    @click="toggle"
  >
    <div class="mr-[30px] opacity-50">ล้านบาท</div>
    <div class="opacity-50">ร้อยละ</div>
    <div
      class="py-[2.0px] w-[68px] font-bold text-center px-[8px] rounded-[20px] absolute bg-white top-[50%] translate-y-[-50%]"
      :class="isMillion ? 'left-[0.8px]' : ' right-[0.8px]'"
    >
      {{ isMillion ? "ล้านบาท" : "ร้อยละ" }}
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  computed: {
    ...mapState(["isMillion"]),
  },

  methods: {
    ...mapActions({
      updateIsMillion: "updateIsMillion",
    }),
    toggle() {
      this.updateIsMillion(!this.isMillion);
    },
  },
};
</script>

<style lang="scss" scoped></style>
