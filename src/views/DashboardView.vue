<template>
  <div class="dashboard">
  <div class="dashboard-component">
    <section class="hero is-light" v-if="callToActionActive">
      <div class="section">
        <p class="callToActionMessage subtitle is-4">
          Ready to log your progress for today?
        </p>
        <div class="collumn is-narrow"></div>
        <button
          class="button callToAction is-link"
          @click="$router.push('track')"
        >
          Track Habits
        </button>
      </div>
    </section>
    <section class="hero is-white">
      <div class="hero-body">
        <p class="title heroTitle">My Habits</p>
        <div class="progress-bar">
          <p class="title progressTitle">
            Progress: <span class="has-text-success progressTitle">{{calculateTotalProgress()}}%</span>
          </p>
        </div>
        <progress class="progress is-success" :value="calculateSuccessfulDays()" :max="calculateTotalDays()"></progress>
      </div>
    </section>

    <div class="section">
      <p class="title has-text-left">Last Month</p>
      <div class="buttons">
        <button class="button is-primary">Last Week</button>
        <button class="button is-primary">Last Month</button>
        <button class="button is-primary">Last 3 Months</button>
        <button class="button is-primary">Last Year</button>
        <button class="button is-primary">Last 5 Years</button>
      </div>
    </div>
  </div>
    <div class="is-flex is-flex-wrap-wrap">
      <!-- <test-goal-item v-for="goal in displayGoalsList" :key="goal.id" :goalData="goal"></test-goal-item> -->
      <HabitCard
        v-for="goal in displayGoalsList"
        :card="goal"
        :key="goal.id"
        :goalData="goal"
      />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import Dashboard from "../components/Dashboard.vue";
import HabitCard from "../components/HabitCard.vue";

export default {
  name: "DashboardView",
  components: {
    HabitCard,
  },
  data() {
    return {
      callToActionActive: true,
      goalData: [],
    };
  },
  computed: {
    displayGoalsList() {
      return this.$store.getters["displayGoals"];
    },
  },
  methods: {
    calculateSuccessfulDays() {
      var result = 0;
      for (var i = 0; i < this.displayGoalsList.length; i++)
      {
        result += this.displayGoalsList[i].daysSuccessful;
      }
      // console.log("The data: " + (this.displayGoalsList.length));
      return result;
    },
    calculateTotalDays() {
      var result = 0;
      for (var i = 0; i < this.displayGoalsList.length; i++)
      {
        result += this.displayGoalsList[i].daysTotal;
      }
      return result;
    },
    calculateTotalProgress() {
      var value = 0;
      var max = 0;
      for (var i = 0; i < this.displayGoalsList.length; i++)
      {
        value += this.displayGoalsList[i].daysSuccessful;
        max += this.displayGoalsList[i].daysTotal;
      }
      return  Math.round((value / max)*100);
    },
  },
};
</script>

<style scoped>
.button.callToAction {
  width: 200px;
  margin: 0 auto;
}

.callToActionMessage {
  margin-bottom: 1em;
}

.heroTitle {
  overflow: auto;
  float: left;
}

.progressTitle {
  float: right;
}

.goalCardTitle p:nth-child(1) {
  float: left;
}

@media only screen and (max-width: 600px) {
  .heroTitle {
    float: none;
  }

  .progressTitle {
    float: none;
  }
}
</style>