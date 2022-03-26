<template>
  <div class="dashboard">
    <Dashboard />
    <div class="is-flex is-flex-wrap-wrap">
          <!-- <test-goal-item v-for="goal in displayGoalsList" :key="goal.id" :goalData="goal"></test-goal-item> -->
      <HabitCard v-for="goal in displayGoalsList" :card="goal" :key="goal.id" :goalData="goal"/>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Dashboard from "../components/Dashboard.vue";
import HabitCard from "../components/HabitCard.vue";

export default {
  name: "DashboardView",
  components: {
    Dashboard,
    HabitCard,
  },
  data() {
    return {
    };
  },
    computed: {
    displayGoalsList(){
      return this.$store.getters['displayGoals'];
    }
  },
};
</script>