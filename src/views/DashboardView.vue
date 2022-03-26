<template>
  <div class="dashboard">
    <Dashboard />
    <div class="is-flex is-flex-wrap-wrap">
      <HabitCard v-for="card in cards" :card="card" :key="card.id" />
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
      card: {},
      cards: [
        {
          id: 1,
          title: "Wash Dishes",
          description: "Wash the dishes daily.",
          prompt: "Did you wash the dishes?",
          correctAnswer: true,
          daysSuccessful: 3,
          daysTotal: 4,
        },
        {
          id: 2,
          title: "Read Book",
          description: "Read a book to gain more knowledge.",
          prompt: "Did you read a book?",
          correctAnswer: true,
          daysSuccessful: 9,
          daysTotal: 12,
        },
        {
          id: 3,
          title: "Avoid Junkfood",
          description: "Do you really need that chocolate dougnut?",
          prompt: "Did you avoid junkfood?",
          correctAnswer: false,
          daysSuccessful: 14,
          daysTotal: 15,
        },
      ],
    };
  },
};
</script>