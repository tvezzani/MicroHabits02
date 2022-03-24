<template>
  <div class="my-goals">
    <MyGoals/>
    <div class="is-flex is-flex-wrap-wrap">
      <GoalCard v-for="card in cards" :key="card.id"/>
    </div>

  </div>
</template>

<script>
// @ is an alias to /src
import MyGoals from '../components/MyGoals.vue';
import GoalCard from '../components/GoalCard.vue';


export default {
  name: "MyGoalsView",
  components: {
    MyGoals,
    GoalCard
  },
  data() {
    return {
      cards:[{id:1},{id:2},{id:3}]
    }
  }
};
</script>