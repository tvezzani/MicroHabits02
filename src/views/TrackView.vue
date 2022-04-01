<template>
  <div class="track">
    <section class="title section">Track Goals</section>
    <div class="column is-narrow is-flex is-justify-content-center">
      <div class="box">
        <Track
          v-for="(goal, index) in displayGoalsList"
          :goals="displayGoalsList"
          :index="index"
          :key="goal.id"
          @eventname="updateparent"
        />
        <div class="button is-link" @click="submitGoalsTracked">Submit</div>
        <!-- <div class="button is-primary" @click="testForm">Test</div> -->
        <!-- <div class="section" :v-model="testResults">{{ testResults }}</div> -->
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Track from "../components/Track.vue";

export default {
  name: "TrackView",
  components: {
    Track,
  },
  data() {
    return {
      displayGoalsList: [],
      testResults: "click 'Test'",
    };
  },
  methods: {
    //Retrive Goal objects
    //Submit goals
    payload: function (index) {
      return {
        daysSuccessful: this.displayGoalsList[index].daysSuccessful,
        daysTotal: this.displayGoalsList[index].daysTotal,
      };
    },
    updateGoal: async function (index) {
      // make call to express to put json
      console.log(
        `Days successful: ${this.displayGoalsList[index].daysSuccessful}, Days total: ${this.displayGoalsList[index].daysTotal}`
      );
      // console.log(`Days total: ${this.displayGoalsList[index].daysTotal}`);
      // console.log(`Object: ${JSON.stringify(this.displayGoalsList[index])}`);
      await fetch(
        `http://localhost:3000/goals/${this.displayGoalsList[index]._id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(this.payload(index)),
        }
      )
        .then((response) => response.json())
        .then((data) => {
          console.log(">>>data", data);
          // this.$router.push("/my-goals");
        })
        .catch((err) => {
          console.error(err);
        });
      this.$store
        .dispatch("fetchSomething")
        .then(() => {
          this.$router.push("dashboard");
        })
        .catch((error) => {
          // you got an error!
        });
    },
    submitGoalsTracked() {
      //Update goal days successful and total
      for (var i = 0; i < this.displayGoalsList.length; i++) {
        if (
          this.displayGoalsList[i].currentAnswer ===
          this.displayGoalsList[i].correctAnswer
        ) {
          this.displayGoalsList[i].daysSuccessful++;
        }
        this.displayGoalsList[i].daysTotal++;

        // console.log(
        //   "Update " +
        //     this.displayGoalsList[i]._id +
        //     " with daysSuccessful " +
        //     this.displayGoalsList[i].daysSuccessful +
        //     " and daysTotal " +
        //     this.displayGoalsList[i].daysTotal
        // );
        this.updateGoal(i);
      }
      // this.$router.push("/dashboard");
    },
    testForm() {
      var data = "";
      for (var i = 0; i < this.displayGoalsList.length; i++) {
        data += this.displayGoalsList[i].currentAnswer;
      }
      this.testResults = data;
    },
    updateParent(card) {
      console.log(card);
      const targetCard = this.displayGoalsList.find((entry) => {
        return entry._id == card._id;
      });
      console.log(targetCard);
      targetCard.correctAnswer = card.correctAnswer === "true";
    },
  },
  created() {
    setTimeout(() => {
      this.displayGoalsList = JSON.parse(
        JSON.stringify(this.$store.getters["displayGoals"])
      );
    }, 100);
  },
  computed: {},
};
</script>

<style scoped>
.box {
  width: 500px;
}
</style>