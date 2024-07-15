<template>
  <div>
    <div class="timer">
      <svg class="progress-circle" width="40" height="40">
        <circle class="circle-bg" cx="20" cy="20" r="18"></circle>
        <circle ref="circle" class="circle" cx="20" cy="20" r="18"></circle>
      </svg>
      <div class="time">{{ timeLeft }}s</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { gameStore } from "~/stores/state";

const appStore = gameStore();

const duration = ref(appStore.timeLeft);
const timeLeft = ref(duration);
const circle = ref(null);
let circumference;

const setProgress = (percent) => {
  const offset = circumference - (percent / 100) * circumference;
  circle.value.style.strokeDashoffset = offset;
};

const updateTimer = async () => {
  timeLeft.value--;

  if (timeLeft.value <= 0) {
    clearInterval(timerInterval);

    await appStore.postUserResult(); /**post user results */

    appStore.setTab("quizComplete");
    // alert("time up");
    // appStore.startQuizTimer();
    // appStore.setTab("quizComplete");
    return;
  }

  const progress = (timeLeft.value / duration) * 100;
  setProgress(progress);
};

const startTimer = () => {
  setProgress((timeLeft.value / duration) * 100); // Set initial progress
  timerInterval = setInterval(updateTimer, 1000);
};

let timerInterval;
onMounted(() => {
  const radius = circle.value.r.baseVal.value;
  circumference = 2 * Math.PI * radius;
  // circle.value.style.strokeDasharray = circumference;
  // circle.value.style.strokeDashoffset = circumference;

  const initialProgress = (timeLeft.value / duration) * 100;
  setProgress(initialProgress);

  startTimer();
});
</script>

<style lang="scss" scoped>
.timer {
  position: relative;
  width: 40px;
  height: 40px;
}

.progress-circle {
  transform: rotate(-90deg);
}

.circle-bg {
  fill: none;
  stroke: #e6e6e6;
  stroke-width: 5;
}

.circle {
  fill: none;
  stroke: #00aaff;
  stroke-width: 5;
  stroke-dasharray: 113;
  stroke-dashoffset: 113;
  transition: stroke-dashoffset 1s linear;
}

.time {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 12px;
  font-weight: bold;
}
</style>
