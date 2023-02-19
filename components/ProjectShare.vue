<template>
  <div class="bg-white">
    <BoxContainer>
      <div class="flex flex-col items-center gap-6 text-center m-auto">
        <h5 class="wv-h5 wv-bold max-w-[600px]">
          ร่วมส่งต่อโครงการที่อยากให้เกิดขึ้นในพื้นที่ของคุณ
        </h5>
        <p class="wv-b6 text-wv-gray-1">ภาพปกเมื่อคุณแชร์เว็บไซต์นี้ :</p>
        <div class="max-w-[1200px] border rounded outline">
          <!-- implement image on district and strategy type -->
          <img src="~/assets/images/good-society.jpg" />
        </div>
        <div>
          <!-- add share social -->
          <div>Share</div>
          <div class="wv-b">
            <span class="text-wv-gray-1">หรือร่วมกันติดแฮชแท็ก</span>
            <span class="text-wv-green">#BangkokBudgeting</span>
          </div>
        </div>
      </div>
    </BoxContainer>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import BoxContainer from "./BoxContainer.vue";

export default Vue.extend({
  name: "ProjectShare",
  components: { BoxContainer },
});
</script>
