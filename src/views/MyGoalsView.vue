<template>
  <div class="my-goals">
    <section class="hero is-white">
      <div class="hero-body">
        <div class="columns">
          <div class="is-flex is-flex-direction-row">
            <p class="title">My Goals</p>
            <button
              id="submit"
              class="button is-link ml-4"
              @click="$router.push('add-goal')"
            >
              Add Goal
            </button>
          </div>
        </div>
      </div>
    </section>
    <div class="is-flex is-flex-wrap-wrap">
      <!-- <div v-if="loading" class="loading">Loading...</div>

      <div v-if="error" class="error">{{ error }}</div>

      <div v-if="card" class="content"> -->
        <!-- <h2>{{ card.title }}</h2>
        <p>{{ card.body }}</p> -->
      <GoalCard v-for="goal in displayGoalsList" :card="goal" :key="goal.id"/>
      <!-- </div> -->
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import GoalCard from "../components/GoalCard.vue";

export default {
  name: "MyGoalsView",
  components: {
    GoalCard,
  },
  data() {
    return {};
  },
  computed: {
    displayGoalsList() {
      return this.$store.getters["displayGoals"];
    },
  },
};
</script>