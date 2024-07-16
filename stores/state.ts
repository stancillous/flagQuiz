import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://flagquiz.botontapwater.tech",
  withCredentials: true,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
  timeout: 10000,
});

export const gameStore = defineStore("game_store", {
  state: () => ({
    currentTab: "getUsername",
    userScore: 0,
    userName: "",
    currentQuestionIndex: 0 /**keep track of the current question to be shown to the user */,
    timeLeft: 240 /**duration of the quiz before it ends */,
    flagQuestions: null,
  }),
  actions: {
    /**func to dynamically set the component to show */
    setTab(tabName: string) {
      this.currentTab = tabName;
    },
    /**func to restart quiz */
    async restartQuiz() {
      this.timeLeft = 240;
      await this.getQuestions();
      if (this.currentTab !== "quiz") {
        this.setTab("quiz");
      }
      this.currentQuestionIndex = 0;
      this.userScore = 0; /**reset */
      // this.startQuizTimer();
    },
    /**to check if time for the entire quiz is over */
    startQuizTimer() {
      let quizTimer = setInterval(async () => {
        if (this.timeLeft > 0) {
          this.timeLeft--; /**decreases every second */
        } else {
          clearInterval(quizTimer); /**time for quiz ended, post user results */

          await this.postUserResult(); /**post user results */

          this.setTab("quizComplete");
        }
      }, 1000);
    },
    async postUserResult() {
      /**func to post user result after completed quiz */

      try {
        // const {data} = await axiosInstance.post("/score/create", {

        const formData = new FormData();
        formData.append("username", this.userName);
        formData.append("score", this.userScore.toString());
        const { data } = await axiosInstance.post("/score/create/", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });
        if (data) {
          console.log("post score data ", data);
        }
      } catch (error) {
        console.log("post score error => ", error);
      }
    },
    async getLeaderboard() {
      try {
        const { data } = await axiosInstance("/results/");
        if (data) {
          return data;
        }
      } catch (error) {
        console.log("Error => ", error);
        return null;
      }
    },
    nextQuestion() {
      /**func to take user to next question */
      if (this.currentQuestionIndex < this.data.questions.length - 1) {
        this.currentQuestionIndex++;
      } else {
        this.setTab("quizComplete");
      }
    },
    updateUserScore(correct: boolean) {
      if (correct) this.userScore += 500;
    },
    async getQuestions() {
      /**func to get the questions */
      try {
        const { data } = await axiosInstance("/quiz/");
        if (data) {
          this.flagQuestions = data;
        }
      } catch (error) {
        console.log("Error => ", error);
      }
    },
  },
});
