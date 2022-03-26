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
      <GoalCard v-for="card in cards" :card="card" :key="card.id" />
    </div>
    <!-- <div class="columns is-multiline">
      <div
        v-for="card in cards"
        :card="card"
        :key="card.id"
        class="column is-one-quarter"
      >
        <router-link :to="'/event/' + card.id">
          <GoalCard :card="card" />
        </router-link>
      </div>
    </div> -->
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