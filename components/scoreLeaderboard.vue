<template>
  <div class="lb-wrp">
    <div class="lb-wrp-container">
      <div class="lb-wrp-content">
        <h2 class="lb-ttl">Leaderboard</h2>
        <p>
          Auto-refreshes in <span>{{ timeLeft }} seconds</span>
        </p>

        <table>
          <tr>
            <th></th>
            <th>name</th>
            <th>score</th>
            <th>time</th>
          </tr>

          <tr v-for="(result, index) in leaderboard" :key="index">
            <td>{{ index + 1 }}</td>
            <td>{{ result.username }}</td>
            <td>{{ result.score }}</td>
            <td>{{ result.created_at }}</td>
          </tr>
        </table>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { gameStore } from "~/stores/state";
const viewLeaderboard = ref(false);

onMounted(() => {
  startInterval();
});

const timeLeft = ref(300);
const appStore = gameStore();
let interval: any = null;
const leaderboard = ref(await appStore.getLeaderboard());

function startInterval() {
  interval = setInterval(async () => {
    timeLeft.value--;

    if (timeLeft.value <= 0) {
      resetInterval();
      leaderboard.value = await appStore.getLeaderboard();
    }
  }, 1000);
}

function resetInterval() {
  clearInterval(interval);
  timeLeft.value = 9;
  startInterval();
}
</script>

<style lang="scss" scoped>
.lb-wrp {
  max-width: 800px;
  margin: 2rem auto;
  display: grid;
  place-items: center;
  .lb-wrp-container {
    background-color: white;
    padding: 1rem;
    min-width: 40rem;
    min-width: 60rem;
    overflow-x: scroll;
    .lb-wrp-content {
      .lb-ttl {
        font-size: 2rem;
      }
      p {
        padding: 0.8rem 0;
        font-size: 1.2rem;

        span {
          color: #053793;
        }
      }

      table {
        margin: 2rem 0;
        width: 100%;
        text-align: left;
        border-spacing: 0;
        border-collapse: collapse;
        white-space: nowrap;

        tr {
          &:nth-child(odd) {
            background-color: whitesmoke;
          }
        }
        th {
          margin: 0 1rem;
          text-align: left;
          font-size: 1.4rem;
          opacity: 0.8;
          padding: 1rem;
          text-transform: capitalize;
        }
      }
      td {
        font-size: 1.3rem;
        border-top: 1px solid gainsboro;
        padding: 1.8rem 1rem;
        // min-width: 12rem;
        border: 0.1px solid gainsboro;
        opacity: 0.9;
        &:nth-child(1) {
          color: blue;
          font-size: 1.1rem;
          // min-width: 6rem;
        }
      }
    }
  }
}

@media screen and (max-width: 470px) {
  .lb-wrp .lb-wrp-container {
    min-width: unset;
    width: 100%;

    .lb-wrp-content {
      table {
        th {
          font-size: 1.2rem;
        }
        td {
          font-size: 1.2rem;
        }
      }
    }
  }
}
</style>
