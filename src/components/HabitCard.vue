<template>
  <div class="box has-text-left m-4">
    <div class="content">
      <div class="title">
        <p class="title is-4">{{ card.title }}</p>
        <p class="subtitle is-6">
          {{ Math.round((card.daysSuccessful / card.daysTotal) * 100) / 100 }}%
        </p>
      </div>
      <progress
        class="progress is-info"
        :value="card.daysSuccessful"
        :max="card.daysTotal"
      ></progress>
    </div>
  </div>
</template>

<script>
export default {
  props: ["card"],
};
</script>

<style scoped>
.box {
  width: 300px;
}
</style>