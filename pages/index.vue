<template>
  <div>
    <div class="video-bg">
      <div class="vbg-wrp">
        <video src="../assets/856356-hd_1280_720_25fps.mp4" loop muted autoplay></video>
        <!-- <img src="../assets/earth-countries-256-medium.gif" alt="earth spinning image"> -->
      </div>
    </div>
    <div class="index-wrp">


      <div class="index-wrp-content">
        <component :is="currentComponent"></component>
        <!-- <KeepAlive> </KeepAlive> -->
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { axiosInstance } from "../stores/state";
import getUsername from "~/components/getUsername.vue";
import quiz from "~/components/quiz.vue";
import quizComplete from "~/components/quizComplete.vue";

const appStore = gameStore();

onMounted(async () => {
  // appStore.getQuestions();
});

const componentMap = {
  getUsername: getUsername,
  quiz: quiz,
  quizComplete: quizComplete,
};

const currentComponent = computed(() => {
  return componentMap[appStore.currentTab] || getUsername;
  return quizComplete;
});
</script>

<style lang="scss" scoped>
  .video-bg{
    // border: 5px solid red;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 100vh;
    width: 100vw;

    &::after{
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      width: 100%;
      background-color: rgba(0,0,0,0.5);
    }
    .vbg-wrp{
      height: 100vh;
      width: 100vw;

      video{
        height: 100%;
        width: 100%;
        border: 4px solid;
        object-fit: cover;
      }

      img{
        width: 100%;
        height: 100%;
        z-index: -1;
        object-fit: cover;
      }
    }
  }
.index-wrp {
  max-width: 800px;
  min-height: 100vh;
  margin: 0 auto;
  display: grid;
  place-items: center;
  position: relative;


  .index-wrp-content {
    background-color: white;
    padding: 1rem 0;
    margin: 1rem 0;
    min-width: 50rem;
    border-radius: var(--borderRadius);
  }
}

@media screen and (max-width: 580px) {
  .index-wrp .index-wrp-content {
    min-width: unset;
    width: 80vw;
  }
}
</style>
