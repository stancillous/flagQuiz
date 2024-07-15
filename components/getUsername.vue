<template>
  <div>
    <div class="hpage-wrp">
      <div class="hpage-wrp-content">
        <div class="hpage-content">
          <h1>Welcome!</h1>
          <h2 class="hpage-ttl">Country flags quiz</h2>
          <p>
            Guess the flags of 197 countries: <br />
            from Afghanistan to Zimbambwe
          </p>

          <div class="user-name-wrp">
            <form action="">
              <input
                type="text"
                v-model="username"
                required
                placeholder="Enter username"
              />
              <template v-if="error">
                <p class="username-error">{{ error }}</p>
              </template>
              <button @click="startQuiz('quiz')">play</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import quiz from "./quiz.vue";
// import { gameStore } from "~/stores/state";
const appStore = gameStore();

const error = ref(""); /**error if user doesn't enter a username */
const username = ref(""); /**to hold username of player */

/**func to show the questions, first check if username exists, then change component */
function startQuiz(tabName: string) {
  if (!username.value || username.value.length < 3) {
    error.value = "Please enter a username with at least 3 letters";
    return;
  }
  appStore.userName = username.value;
  appStore.setTab(tabName);
}
</script>

<style lang="scss" scoped>
.hpage-wrp {
  max-width: 800px;
  margin: 2rem auto;
  display: grid;
  height: auto;
  place-items: center;
  .hpage-wrp-content {
    background-color: white;
    // max-height: 40rem;
    // min-width: 50rem;
    padding: 3rem 2rem;
    text-align: center;
    .hpage-content {
      h1 {
        font-size: 2.8rem;
        margin-bottom: 2rem;
      }
      .hpage-ttl {
        font-size: 2rem;
        text-transform: capitalize;
        font-weight: 700;
      }
      p {
        line-height: 140%;
        font-size: 1.3rem;
        margin: 1rem 0;
      }

      .user-name-wrp {
        padding: 0 0.3rem;
        margin: 2rem 0;
        input {
          background-color: transparent;
          color: black;
          padding: 1rem 0.8rem;
          width: 100%;
          text-align: center;
          font-size: 1.3rem;

          &::placeholder {
            font-size: 1.2rem;
          }
        }
        .username-error {
          color: red;
          font-size: 1.2rem;
        }
        button {
          all: unset;
          cursor: pointer;
          background-color: cornflowerblue;
          text-align: center;
          font-weight: 600;
          font-size: 1.3rem;
          text-transform: uppercase;
          padding: 1rem 0;
          // height: 100%;
          margin: 1rem 0;
          width: 100%;
        }
      }
    }
  }
}
</style>
