<template>
  <div class="my-goals-component">
    <section class="hero is-white">
      <div class="hero-body">
        <div class="columns">
          <div class="is-flex is-flex-direction-row">
            <p class="title">My Goals</p>
            <button id="submit" class="button is-link ml-4" @click="addMovie">
              Add Goal
            </button>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "MyGoals",
  props: {
    msg: String,
  },
};
</script>