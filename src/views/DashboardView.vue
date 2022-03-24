<template>
  <div class="dashboard">
    <Dashboard />
    <div class="is-flex is-flex-wrap-wrap">
      <HabitCard v-for="card in cards" :key="card.id" />
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
      cards: [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }, { id: 6 }, { id: 7 }],
    };
  },
};
</script>