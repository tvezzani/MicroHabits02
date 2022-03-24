<template>
  <div class="movies">
    <Movies msg="This is the movies view."/>
  </div>
</template>

<script>
// @ is an alias to /src
import Movies from '@/components/Movies.vue'

export default {
  name: 'MoviesView',
  components: {
    Movies
  }
}
</script>
