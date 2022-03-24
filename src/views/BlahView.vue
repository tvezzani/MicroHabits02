<template>
  <div class="blah">
    <Blah msg="Hello, Tim.  How are you?" />
    <Movies/>
  </div>
</template>

<script>
// @ is an alias to /src
import Blah from "@/components/Blah.vue";
import Movies from "@/components/Movies.vue";

export default {
  name: "BlahView",
  components: {
    Blah,
    Movies,
  },
};
</script>
