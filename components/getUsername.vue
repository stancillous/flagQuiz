<template>
  <div>
    <div class="hpage-wrp">
      <div class="hpage-wrp-content">
        <div class="hpage-content">
          <h1>Welcome!</h1>
          <h2 class="hpage-ttl">Country flags quiz</h2>
          <div class="user-name-wrp">
            <form action="">
              <input
                autofocus
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
  // max-width: 800px;
  width: 100%;
  margin: 1.4rem auto;
  display: grid;
  height: auto;
  place-items: center;
  .hpage-wrp-content {
    background-color: white;

    padding: 3rem 2rem;
    text-align: center;
    .hpage-content {
      h1 {
        font-size: 8rem;
        color: #053793;
        margin-bottom: 1rem;
      }
      .hpage-ttl {
        font-size: 2.8rem;
        opacity: 0.6;
        text-transform: capitalize;
        font-weight: 700;
      }

      .user-name-wrp {
        padding: 0 0.3rem;
        margin: 2rem 0;
        input {
          background-color: transparent;
          color: black;
          padding: 1rem 0.8rem;
          width: 100%;
          // font-family: 'Aruma Regular';
          text-align: center;
          font-size: 1.5rem;
          border: 0.1px solid rgb(25, 22, 22);
          &::placeholder {
            font-size: 1.2rem;
          }
          &:focus{
            border: 0.1px solid rgb(25, 22, 22);
            outline: none;
          }
        }
        .username-error {
          color: red;
          font-weight: 400;
          font-size: 1.2rem;
        }
        button {
          all: unset;
          cursor: pointer;
          background-color: #053793;
          color: white;
          text-align: center;
          font-weight: 600;
          font-size: 1.3rem;
          text-transform: uppercase;
          padding: 1rem 0;
          margin: 1rem 0;
          width: 100%;
        }
      }
    }
  }
}

@media screen and (max-width: 500px) {
  .hpage-wrp .hpage-wrp-content .hpage-content {
    h1 {
      font-size: 4rem;
    }
    .hpage-ttl {
      font-size: 2.4rem;
    }
  }
}
</style>
