<template>
  <div class="dashboard-component">
    <section class="hero is-light" v-if="callToActionActive">
      <div class="section">
        <p class="callToActionMessage subtitle is-4">
          Ready to log your progress for today?
        </p>
        <div class="collumn is-narrow"></div>
        <button class="button callToAction is-link" @click="$router.push('track')">Track Habits</button>
      </div>
    </section>
    <section class="hero is-white">
      <div class="hero-body">
        <p class="title heroTitle">My Habits</p>
        <div class="progress-bar">
          <p class="title progressTitle">
            Progress: <span class="has-text-success progressTitle">76%</span>
          </p>
        </div>
        <progress class="progress is-success" value="76" max="100">
          15%
        </progress>
      </div>
    </section>

    <div class="section">
      <p class="title has-text-left">Last Month</p>
      <div class="buttons">
        <button class="button is-primary">Last Week</button>
        <button class="button is-primary">Last Month</button>
        <button class="button is-primary">Last 3 Months</button>
        <button class="button is-primary">Last Year</button>
        <button class="button is-primary">Last 5 Years</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Dashboard",
  props: {
    msg: String,
  },
  data() {
    return {
      callToActionActive: true,
    };
  },
};
</script>

<style scoped>
.button.callToAction {
  width: 200px;
  margin: 0 auto;
}

.callToActionMessage {
  margin-bottom: 1em;
}

.heroTitle {
  overflow: auto;
  float: left;
}

.progressTitle {
  float: right;
}

.goalCardTitle p:nth-child(1) {
  float: left;
}

@media only screen and (max-width: 600px) {
  .heroTitle {
    float: none;
  }

  .progressTitle {
    float: none;
  }
}
</style>

