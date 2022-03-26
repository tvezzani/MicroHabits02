<template>
  <div class="track">
    <section class="title section">Track Goals</section>
    <div class="column is-narrow is-flex is-justify-content-center">
      <div class="box">
        <Track
          v-for="goal in displayGoalsList"
          :card="goal"
          :key="goal.id"
          @eventname="updateparent"
        />
        <div class="button is-link" @click="submitGoalsTracked">Submit</div>
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
    };
  },
  methods: {//Retrive Goal objects
    //Submit goals
    submitGoalsTracked() {
      this.$router.push("/dashboard");
      console.log("Submit button is linked");
    },
    updateparent(card) {
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