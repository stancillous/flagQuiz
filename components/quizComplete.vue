<template>
  <div class="qz-wrp">
    <div class="qz-wrp-container">
      <div class="qz-wrp-content">
        <h1>Time's up :(</h1>
        <h3>Your score: {{ appStore.userScore }}</h3>

        <div class="qz-dets">
          <button class="pa-btn" @click="callRestartQuiz()">
            <svg
              width="14px"
              height="14px"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <path
                  d="M12 20.5001C16.6944 20.5001 20.5 16.6945 20.5 12.0001C20.5 9.17456 19.1213 6.67103 17 5.1255M13 22.4001L11 20.4001L13 18.4001M12 3.5001C7.30558 3.5001 3.5 7.30568 3.5 12.0001C3.5 14.8256 4.87867 17.3292 7 18.8747M11 5.6001L13 3.6001L11 1.6001"
                  stroke="#053793"
                  stroke-width="1.3679999999999999"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </g>
            </svg>
            Play again
          </button>
          <button @click="viewLeaderboard = !viewLeaderboard">
            <svg
              fill="#053793"
              version="1.1"
              id="Layer_1"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              width="19px"
              height="19px"
              viewBox="0 0 100 100"
              enable-background="new 0 0 100 100"
              xml:space="preserve"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <g>
                  <path
                    d="M27.953,46.506c-1.385-2.83-2.117-6.008-2.117-9.192c0-1.743,0.252-3.534,0.768-5.468c0.231-0.87,0.521-1.702,0.847-2.509 c-1.251-0.683-2.626-1.103-4.101-1.103c-5.47,0-9.898,5.153-9.898,11.517c0,4.452,2.176,8.305,5.354,10.222L5.391,56.217 c-0.836,0.393-1.387,1.337-1.387,2.392v10.588c0,1.419,0.991,2.569,2.21,2.569h7.929V60.656c0-3.237,1.802-6.172,4.599-7.481 l10.262-4.779C28.624,47.792,28.273,47.161,27.953,46.506z"
                  ></path>
                  <path
                    d="M60.137,34.801h34.092v-0.001c0.002,0,0.004,0.001,0.006,0.001c0.973,0,1.761-0.789,1.761-1.761c0,0,0-0.001,0-0.001 l0-6.43h0c0-0.973-0.789-1.761-1.761-1.761c-0.002,0-0.004,0.001-0.006,0.001v-0.005H56.133c1.614,2.114,2.844,4.627,3.526,7.435 C59.874,33.168,60.03,33.999,60.137,34.801z"
                  ></path>
                  <path
                    d="M95.996,66.436c0-0.973-0.789-1.761-1.761-1.761c-0.002,0-0.004,0.001-0.006,0.001v-0.005H72.007v7.095v1.994 c0,0.293-0.016,0.582-0.045,0.867h22.267v-0.001c0.002,0,0.004,0.001,0.006,0.001c0.973,0,1.761-0.789,1.761-1.761l0-0.001 L95.996,66.436L95.996,66.436z"
                  ></path>
                  <path
                    d="M94.235,44.762c-0.002,0-0.004,0.001-0.006,0.001v-0.005H58.944c-0.159,0.419-0.327,0.836-0.514,1.249 c-0.364,0.802-0.773,1.569-1.224,2.297l10.288,4.908c0.781,0.378,1.473,0.897,2.078,1.503h24.657v-0.001 c0.002,0,0.004,0.001,0.006,0.001c0.973,0,1.761-0.789,1.761-1.761c0,0,0-0.001,0-0.001l0-6.43h0 C95.996,45.55,95.207,44.762,94.235,44.762z"
                  ></path>
                  <path
                    d="M65.323,57.702l-11.551-5.51l-4.885-2.33c2.134-1.344,3.866-3.418,5-5.917c0.899-1.984,1.435-4.231,1.435-6.631 c0-1.348-0.213-2.627-0.512-3.863c-1.453-5.983-6.126-10.392-11.736-10.392c-5.504,0-10.106,4.251-11.648,10.065 c-0.356,1.333-0.602,2.72-0.602,4.189c0,2.552,0.596,4.93,1.609,7c1.171,2.4,2.906,4.379,5.018,5.651l-4.678,2.178l-11.926,5.554 c-1.037,0.485-1.717,1.654-1.717,2.959v11.111v1.994c0,1.756,1.224,3.181,2.735,3.181h42.417c1.511,0,2.735-1.424,2.735-3.181 v-1.994V60.656C67.019,59.355,66.349,58.198,65.323,57.702z"
                  ></path>
                </g>
              </g>
            </svg>
            view leaderboard
          </button>
        </div>

        <div class="leaderboard">
          <template v-if="viewLeaderboard">
            <ScoreLeaderboard />
          </template>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { gameStore } from "~/stores/state";
const viewLeaderboard = ref(false);

const appStore = gameStore();

function toggleLeaderboard() {
  const leaderboard = document.querySelector(".lb-wrp-container");
  if (leaderboard) {
    leaderboard.classList.add("showLeaderboard");
    console.log("lead ", leaderboard);
  } else {
    alert("nop");
  }
}
async function callRestartQuiz() {
  await appStore.restartQuiz();
}
</script>

<style lang="scss" scoped>
.qz-wrp {
  padding: 2rem 0;
  .qz-wrp-container {
    .qz-wrp-content {
      text-align: center;

      h1 {
        margin: 1rem 0;
        font-weight: 400;
        font-size: 1.2rem;
      }
      h3 {
        font-size: 2rem;
        // color: #053793;
        // font-weight: 500;
        margin-bottom: 3rem;
        text-transform: capitalize;
      }

      .qz-dets {
        display: flex;
        justify-content: space-evenly;
        margin: 1rem 0;
        button {
          all: unset;
          color: #053793;
          font-size: 1.4rem;
          width: 20rem;
          text-align: center;
          padding: 1rem;
          text-transform: capitalize;
          box-shadow: var(--boxShadow);
          white-space: nowrap;
          display: flex;
          justify-content: space-evenly;
          cursor: pointer;
          align-items: center;
          margin: 0 0.5rem;
          svg {
            margin: 0 0.5rem;
          }
        }
      }
    }
  }
}

@media screen and (max-width: 470px) {
  .qz-wrp .qz-wrp-container .qz-wrp-content {
    h3 {
      font-size: 1.7rem;
    }
    .qz-dets {
      flex-direction: column;
      display: grid;
      grid-template-columns: 1fr;
      place-items: center;

      button {
        margin: 1rem 0;
      }
    }
  }
}
</style>
