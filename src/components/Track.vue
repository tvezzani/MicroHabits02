<template>
  <div class="block">
    <p class="subtitle">{{ card.prompt }}</p>
    <div class="control">
      <label class="radio">
        <input
          type="radio"
          :name="card.id"
          value="true"
          v-model="card.correctAnswer"
          @click="$emit('eventname', card)"
        />
        Yes
      </label>
      <label class="radio">
        <input
          type="radio"
          :name="card.id"
          value="false"
          v-model="card.correctAnswer"
          @click="$emit('eventname', card)"
        />
        No
      </label>
    </div>
  </div>
</template>

<script>
export default {
  props: ["card"],
};
</script>