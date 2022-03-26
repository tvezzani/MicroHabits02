<template>
  <div class="box has-text-left m-4">
    <div class="goalCardTitle">
      <p class="title is-4">{{card.title}}</p>
      <button class="delete is-medium"></button>
    </div>
    <div class="content">
      <div class="block">
        <b>Description</b>
        <p>{{card.description}}</p>
      </div>
      <div class="block">
        <b>Question</b>
        <p>{{card.prompt}}</p>
      </div>
      <div class="block">
        <b>Correct Answer</b>
        <p>{{card.correctAnswer}}</p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['card'],
  };
</script>

<style scoped>
.box {
  width: 400px;
}

.goalCardTitle {
  overflow: auto;
}

.goalCardTitle button {
  float: right;
}

.goalCardTitle p:nth-child(1) {
  float: left;
}
</style>