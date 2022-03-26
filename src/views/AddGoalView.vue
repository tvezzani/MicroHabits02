<template>
  <div class="add-goal">
    <AddGoal />
  </div>
</template>

<script>
// @ is an alias to /src
import AddGoal from "../components/AddGoal.vue";

export default {
  name: "AddGoalView",
  components: {
    AddGoal,
  },
};
</script>