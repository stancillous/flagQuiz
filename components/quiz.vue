<template>
  <div class="flags-q-wrp">
    <div class="flags-wrp-content">
      <div class="user-score-wrp">
        <div class="quit-match">
          <svg @click="appStore.setTab('getUsername')" data-v-3e1c973b="" width="25px" height="25px" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="none"><path data-v-3e1c973b="" class="icon-styleable-color" fill="rgba(0, 0, 0, .88)" fill-rule="evenodd" clip-rule="evenodd" d="M6.58579 8.00008L3.05025 11.5356C2.65973 11.9261 2.65973 12.5593 3.05025 12.9498C3.44078 13.3404 4.07394 13.3404 4.46447 12.9498L8 9.41429L11.5355 12.9498C11.9261 13.3404 12.5592 13.3404 12.9497 12.9498C13.3403 12.5593 13.3403 11.9261 12.9497 11.5356L9.41421 8.00008L12.9497 4.46455C13.3403 4.07402 13.3403 3.44086 12.9497 3.05033C12.5592 2.65981 11.9261 2.65981 11.5355 3.05033L8 6.58587L4.46447 3.05033C4.07394 2.65981 3.44078 2.65981 3.05025 3.05033C2.65973 3.44086 2.65973 4.07402 3.05025 4.46455L6.58579 8.00008Z"></path></svg>
          <span>Quit</span>
        </div>
        <div class="nav-wrp">
          <QuizTimer />
          <div>
            <h1 class="user-score">Score: {{ appStore.userScore }}</h1>
            <span class="add-score">+500</span>
          </div>
        </div>
      </div>

      <div class="current-question" v-if="currentQuestion">
        <div class="img-wrp">
          <!--question progress bar -->
          <div class="progress-bar">
            <div class="progress" :style="{ width: progress + '%' }"></div>
          </div>
          <img :src="currentQuestion.question.flag_url" alt="Flag" />
        </div>
        <div class="choices-wrp">
          <ul>
            <li
              v-for="(choice, index) in currentQuestion.choices"
              :key="index"
              :class="getChoiceClass(choice)"
              @click="selectChoice(choice)"
            >
              {{ choice }}
            </li>
          </ul>
          <div class="btn-wrp">
            <button style="color: white;" class="nxt-btn" @click="nextQuestion">Next</button>
          </div>
        </div>
      </div>
      <div v-else>
        <p>Quiz complete! Your score: {{ appStore.userScore }}</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted, watch } from "vue";
import { gameStore } from "~/stores/state";

const appStore = gameStore();

const progress = ref(5000); /**for the progress bar for each question */

const isQuestionTimeUp = ref(false);
let questionTimer: any;

const selectedChoice = ref("");
let interval: any = null;

/**computed property to get the current question to show */
const currentQuestion = computed(() => {
  if (appStore.flagQuestions)
    return (
      appStore.flagQuestions.questions[appStore.currentQuestionIndex] || null
    );
  // return appStore.data.questions[appStore.currentQuestionIndex] || null;
});

function startQuestionTimer() {
  progress.value = 100;
  const durationInSeconds = 10;
  const step = 100 / ((durationInSeconds * 1000) / 100);
  interval = setInterval(() => {
    progress.value -= step;
    if (progress.value <= 0) {
      clearInterval(interval);
      isQuestionTimeUp.value = true;
      selectChoice(currentQuestion.value.question.answer);
      setTimeout(() => {
        /**show next flag after some seconds */
        nextQuestion();
      }, 3000);
    }
  }, 100); // Update the progress every 100ms
}

function nextQuestion() {
  // progress.value = 4000;
  isQuestionTimeUp.value = false;
  selectedChoice.value = "";
  clearInterval(interval);
  clearInterval(questionTimer);
  appStore.nextQuestion();
  if (currentQuestion.value) {
    startQuestionTimer();
  }
}

function selectChoice(choice: string) {
  selectedChoice.value = choice;
  const correct = choice === currentQuestion.value.question.answer;
  if (isQuestionTimeUp.value) return; /**time ran up */

  if (correct) {
    const addScorePopup = document.querySelector(".add-score");

    if (addScorePopup) {
      addScorePopup.classList.add("showAddedScore");
      setTimeout(() => {
        addScorePopup.classList.remove("showAddedScore");
      }, 900);
    }
    appStore.userScore += 500;
  }
  // appStore.updateUserScore(correct);
}

/**func with classes to be added to the choices, to show if selected choise is right or wrong */
function getChoiceClass(choice: string) {
  if (selectedChoice.value) {
    if (selectedChoice.value === choice) {
      return choice === currentQuestion.value.question.answer
        ? "correct"
        : "incorrect";
    }
    if (choice === currentQuestion.value.question.answer) {
      return "correct";
    }
    return "";
  }
  return "";
}

onMounted(async () => {
  // appStore.restartQuiz();
  // await appStore.getQuestions();
  isQuestionTimeUp.value = false;
  startQuestionTimer();
  // appStore.startQuizTimer();
});

onUnmounted(() => {
  clearInterval(questionTimer);
  clearInterval(interval);
});
</script>

<style scoped lang="scss">
.showAddedScore {
  opacity: 1;
  visibility: visible;
  max-height: 3rem;
}

button{
  color: white;
}

.flags-q-wrp {
  padding: 0.5rem;
  max-width: 800px;
  margin: 0rem auto;
  .flags-wrp-content {
    background-color: white;
    // min-width: 55rem;
    border-radius: var(--borderRadius);
    padding: 0.5rem 2rem;
    .user-score-wrp {

      .quit-match{
        margin-bottom: 4rem;
        // float: right;
        display: flex;
        justify-content: flex-end;
        display: flex;
        align-items: center;
        
        svg{
          cursor: pointer;
          opacity: .4;
        }
        span{
          font-weight: 500;
          font-size: 1.3rem;
          opacity: .5;
          margin-left: .3rem;
        }
        // width: 3rem;
        
      }
      .nav-wrp {
        display: flex;
        padding: 1rem 0;
        align-items: center;
        justify-content: space-between;

        div {
          // border: 1px solid;
          position: relative;
          .user-score {
            text-align: center;
            font-size: 1.5rem;
            font-weight: 500;
          }
          .add-score {
            position: absolute;
            top: -1.4rem;
            right: 0rem;
            font-size: 1rem;
            color: var(--priColor);
            opacity: 0;
            visibility: hidden;
            max-height: 0;
            transition: all 0.2s ease-in-out;
          }
          .showAddedScore {
            opacity: 1;
            visibility: visible;
            max-height: 3rem;
          }
        }
      }
    }

    .current-question {
      .img-wrp {
        // height: ;
        display: grid;
        place-items: center;

        .progress-bar {
          width: 30rem;
          height: 1.1rem;
          margin: 1rem 0;
          border-radius: 0.2rem;
          background-color: #f3f3f3;
        }

        .progress {
          height: 100%;
          background-color: rgba(100, 149, 237, 0.1);
          transition: width 0.1s linear;
        }

        img {
          // object-fit: cover;
          width: 100%;

          object-fit: contain;
          box-shadow: var(--boxShadow);
          width: 30rem;
          height: 18rem;
        }
      }
      .choices-wrp {
        padding: 2rem 0;
        ul {
          display: grid;
          grid-template-columns: 1fr 1fr;
          grid-gap: 0.8rem;
          li {
            box-shadow: var(--boxShadow);
            // border: 0.1px solid gainsboro;
            list-style: none;
            width: 100%;
            font-weight: 600;
            display: inline-block;
            font-size: 1.6rem;
            margin: 1rem 0.8rem;
            font-size: 16px;
            cursor: pointer;
            padding: 0.8rem 0.5rem;
            text-align: center;
            opacity: 0.8;
            border-radius: 0.2rem;
            // display: inline-block;
          }
        }

        .btn-wrp {
          display: grid;
          margin: 1rem 0;
          place-items: center;
          .nxt-btn {
            height: auto;
            width: 8rem;
            padding: 1rem 0;
            color: black;
            font-size: 1.4rem;
            cursor: pointer;
          }
        }
      }
    }
  }
}

.correct {
  background-color: green;
  color: white;
}
.incorrect {
  // background-color: red;
  position: relative;
  &::after {
    content: "X";
    display: grid;
    font-weight: 800;
    color: red;
    place-items: center;
    position: absolute;
    right: 4px;
    top: 0;
    bottom: 0;
    height: 20px;
    font-size: 1.4rem;
    border-radius: 50%;
    width: 20px;
  }
}

@media screen and (max-width: 470px) {
  .flags-q-wrp .flags-wrp-content {
    .user-score-wrp .nav-wrp .user-score {
      font-size: 1.4rem;
    }
    .current-question {
      .img-wrp {
        .progress-bar {
          width: 100%;
        }
        img {
          width: 100%;
        }
      }

      .choices-wrp ul {
        grid-template-columns: 1fr;

        li {
          font-size: 1.33rem;
          padding-top: 0.5rem;
          padding-bottom: 0.5rem;
        }
      }
    }
  }
}
</style>
