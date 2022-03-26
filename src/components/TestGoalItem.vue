<template>
  <div class="col md-4">
    <div class="card mb-3">
      <div class="card-header">{{ goalData.title }}</div>
      <div class="card-body">
        <ul class="list-group">
          <li class="list-group-item">Details</li>
          <li class="list-group-item">
            Description: {{ goalData.description }}
          </li>
          <li class="list-group-item">Prompt: {{ goalData.prompt }}</li>
          <li class="list-group-item">
            Correct Answer: {{ goalData.correctAnswer }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    data(){
        return {

        }
    },
    props:['goalData'],
}
</script>
