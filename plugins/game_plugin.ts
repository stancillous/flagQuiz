/**contains code to be loaded at the creation of the Nuxtjs app */
import { gameStore } from "../stores/state";

export default defineNuxtPlugin(async (nuxtApp) => {
  const appStore = gameStore(nuxtApp.$pinia);

  /**load the quiz questions before app is created */
  await appStore.getQuestions();
});
