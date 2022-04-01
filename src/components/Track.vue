<template>
  <div class="block">
    <p class="subtitle">{{ card.prompt }}</p>
    <div class="control">
      <label class="radio">
        <input
          type="radio"
          id="yes"
          value="Yes"
          v-model="card.currentAnswer"
          @click="$emit('eventname', card)"
        />
        Yes
      </label>
      <label class="radio">
        <input
          type="radio"
          id="no"
          value="No"
          v-model="card.currentAnswer"
          @click="$emit('eventname', card)"
        />
        No
      </label>
      <!-- <input v-model="message" placeholder="edit me" />
      <p>Message is: {{ message }}</p> -->
      <!-- <input type="radio" id="one" value="One" v-model="picked" />
      <label for="one">One</label>
      <input type="radio" id="two" value="Two" v-model="picked" />
      <label for="two">Two</label>
      <br /> -->
      <!-- <br>
      <span>Picked: {{ picked }}</span> -->
    </div>
  </div>
</template>

<script>
export default {
  props: ["goals", "index"],
  data() {
    return {
      message: "test",
      picked: true,
    };
  },
  computed: {
    card() {
      return this.goals[this.index];
    },
  },
};
</script>