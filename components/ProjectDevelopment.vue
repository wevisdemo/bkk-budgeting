<template>
  <BoxContainer>
    <Topic :setStepSurvey="setStepSurvey" v-if="stepSurvey === 1" />
    <Projects :setStepSurvey="setStepSurvey" v-if="stepSurvey === 2" />
    <Review v-if="stepSurvey === 3" />

    <Transition name="slide-fade">
      <CookieWarning v-if="showCookieWarning" />
    </Transition>
  </BoxContainer>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import BoxContainer from "~/components/BoxContainer.vue";
import CookieWarning from "~/components/CookieWarning.vue";

import Topic from "~/components/survey/Topic.vue";
import Projects from "~/components/survey/Projects.vue";
import Review from "~/components/survey/Review.vue";

interface ProjectDevelopmentData {
  isVoted: boolean;
  showCookieWarning: any;
  stepSurvey: number;
}

export default defineComponent({
  name: "ProjectDevelopment",
  components: { BoxContainer, CookieWarning, Topic, Projects, Review },
  data(): ProjectDevelopmentData {
    return {
      isVoted: false,
      showCookieWarning: false,
      stepSurvey: 0,
    };
  },

  mounted() {
    const cookieVoted: string = this.$cookies.get("voted");

    if (cookieVoted === "true") {
      this.stepSurvey = 3;
    } else {
      this.stepSurvey = 1;
    }
  },
  methods: {
    setStepSurvey(direction: string) {
      const cookieVoted: string = this.$cookies.get("isVoted");
      if (cookieVoted === "false" || !cookieVoted) {
        this.showCookieWarning = true;
        setTimeout(() => {
          this.showCookieWarning = false;
        }, 2000);
      } else {
        if (direction === "next") this.stepSurvey++;
        if (direction === "prev") this.stepSurvey--;
      }
    },
  },
});
</script>

<style lang="scss" scoped>
.lottie-img {
  width: 300px;
  height: 300px;
}

.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.5s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter,
.slide-fade-leave-to {
  opacity: 0;
}
</style>
