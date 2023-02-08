<template>
  <BoxContainer class="relative landing-bg overflow-hidden">
    <img
      class="max-w-4xl hidden sm:block absolute opacity-95 bottom-0 left-0 right-0 pb-8 m-auto w-full"
      :src="`${$config.path.images}/background/landing.png`"
      alt="landing_bg"
    />
    <div
      class="flex flex-col sm:flex-row gap-6 justify-between p-0 sm:px-10 lg:px-20 lg:pt-10"
    >
      <div
        class="flex flex-col gap-3 sm:w-min z-10 sm:pt-30 sm:pb-20 text-center sm:text-left"
      >
        <h1 class="wv-h2 font-extrabold">
          <div>Bangkok</div>
          <div>Budgeting</div>
        </h1>
        <div class="wv-b3 wv-bold hidden sm:block">
          <p>เปิดเผยอย่างโปร่งใส</p>
          <p>เพื่อใครๆก็มีส่วนร่วมกับงบฯ กรุงเทพได้</p>
        </div>
        <div class="wv-b4 wv-bold block sm:hidden">
          <p>เปิดเผยอย่างโปร่งใส</p>
          <p>เพื่อใครๆก็มีส่วนร่วมกับงบฯ กรุงเทพได้</p>
        </div>
        <img
          class="w-full sm:hidden"
          :src="`${$config.path.images}/background/landing.png`"
          alt="landing_bg"
        />
      </div>
      <div class="flex sm:flex-col gap-2 w-full sm:max-w-[300px]">
        <NavLinks :links="budgetPlans" arrow-direction="Down" class="bg-wv-cream-2" />
        <NavLinks :links="budgetExplore" arrow-direction="Right" class="bg-wv-green" />
      </div>
    </div>
  </BoxContainer>
</template>

<script lang="ts">
import Vue from "vue";
import NavLinks from "~/components/landing/NavLinks.vue";
import BoxContainer from "~/components/BoxContainer.vue";

export default Vue.extend({
  name: "LandingPage",
  components: { NavLinks, BoxContainer },
  data() {
    return {
      budgetPlans: [
        {
          title: "วางแผนแก้ปัญหาแบบไหน",
          link: "",
        },
        {
          title: "ใช้ทำอะไรไปแล้ว",
          link: "",
        },
        {
          title: "อยากให้งบทำเรื่องอะไร",
          link: "",
        },
      ],
      budgetExplore: [
        {
          title: "รายปี",
          link: "",
        },
        {
          title: "รายหน่วยงาน",
          link: "",
        },
        {
          title: "ค้นด้วยคีย์เวิร์ด",
          link: "",
        },
      ],
    };
  },
});
</script>

<style scoped>
.landing-bg {
  height: 100%;
}
@media (min-width: theme("screens.sm")) {
  .landing-bg {
    height: calc(100vh - 200px);
  }
}

@media (min-width: theme("screens.md")) {
  .landing-bg {
    height: calc(100vh - 52px);
  }
}
</style>
