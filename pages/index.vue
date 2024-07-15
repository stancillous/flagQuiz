<template>
  <div>
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
.index-wrp {
  max-width: 800px;
  min-height: 100vh;
  margin: 0 auto;
  display: grid;
  place-items: center;
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
