<template>
  <BoxContainer class="relative overflow-hidden h-full">
    <div
      class="flex flex-col sm:flex-row gap-6 justify-between p-0 sm:px-10 lg:px-20 lg:pt-10"
    >
      <div
        class="flex flex-col gap-3 sm:w-min z-10 sm:pt-30 sm:pb-20 text-center sm:text-left"
      >
        <h1 class="wv-h2  wv-kondolar font-extrabold">
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
        <div class="block sm:hidden w-full">
          <Lottie :options="defaultOptions" />
        </div>
      </div>
      <div class="flex sm:flex-col gap-2 w-full sm:max-w-[300px]">
        <div class="bg-wv-cream-2 rounded flex-1 sm:flex-none">
          <NavLinks
            title="เข้าใจแผนการใช้งบ"
            :links="budgetPlans"
            arrow-direction="Down"
          />
        </div>
        <div class="bg-wv-green rounded flex-1 sm:flex-none">
          <NavLinks
            title="สำรวจการใช้งบ"
            :links="budgetExplore"
            arrow-direction="Right"
          />
        </div>
      </div>
    </div>
    <div class="max-w-[1000px] hidden sm:block opacity-95 mx-auto w-full">
      <Lottie :options="defaultOptions" />
    </div>
  </BoxContainer>
</template>

<script lang="ts">
import Vue from "vue";
import Lottie from "vue-lottie/src/lottie.vue";
import NavLinks from "~/components/landing/NavLinks.vue";
import BoxContainer from "~/components/BoxContainer.vue";

import landingAnimation from "~/assets/lottie/landing.json";

interface LottieOptions {
  animationData: any;
  loop: boolean;
  autoplay: boolean;
}

interface LandingData {
  budgetPlans: any;
  budgetExplore: any;
  defaultOptions: LottieOptions;
}

export default Vue.extend({
  name: "LandingPage",
  components: { NavLinks, BoxContainer, Lottie },
  data(): LandingData {
    return {
      defaultOptions: {
        animationData: landingAnimation,
        loop: true,
        autoplay: true,
      },
      budgetPlans: [
        {
          title: "วางแผนแก้ปัญหาแบบไหน",
          anchorLink: "#problemPlanning",
        },
        {
          title: "ใช้ทำอะไรไปแล้ว",
          anchorLink: "#budgetplans",
        },
        {
          title: "อยากให้งบทำเรื่องอะไร",
          anchorLink: "#projectsDevelopment",
        },
      ],
      budgetExplore: [
        {
          title: "รายปี",
          pageLink: "explore",
        },
        {
          title: "รายหน่วยงาน",
          pageLink: "explore?select=OrganizeBudget",
        },
        {
          title: "ค้นด้วยคีย์เวิร์ด",
          pageLink: "explore?select=KeyWordBudget",
        },
      ],
    };
  },
});
</script>
