<template>
  <div class="box has-text-left m-4">
    <div class="goalCardTitle">
      <p class="title is-4">Wash Dishes</p>
      <button class="delete is-medium"></button>
    </div>
    <div class="content">
      <div class="block">
        <b>Description</b>
        <p>Wash the dishes daily.</p>
      </div>
      <div class="block">
        <b>Question</b>
        <p>Did you wash the dishes?</p>
      </div>
      <div class="block">
        <b>Correct Answer</b>
        <p>Yes</p>
      </div>
    </div>
  </div>
</template>

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