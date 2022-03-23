<template>
  <div class="movies">
    <h1>{{ msg }}</h1>
    <div>Blah, bleh, blah; take that, {{ name }}</div>
    <div class="field">
      <label class="label">Movie Title</label>
      <div class="control">
        <input
          name="movie-title"
          class="input"
          type="text"
          placeholder="Text input"
          v-model="title"
        />
      </div>
      <p class="help">This is a help text</p>
    </div>
    <div class="field">
      <label class="label">Message</label>
      <div class="control">
        <textarea
          v-model="description"
          class="textarea"
          placeholder="Textarea"
        ></textarea>
      </div>
    </div>
    <div class="buttons is-centered">
      <button id="submit" class="button is-primary" @click="addMovie">Add Movie</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Movies",
  props: {
    msg: String,
  },
  computed: {
    red: function () {
      return `${this.name}-red`;
    },
  },
  data() {
    return {
      title: "",
      description: "",
      name: "Tim",
    };
  },
  methods: {
    payload: function() {
        return { title: this.title, description: this.description };
    },
    showSomething: function () {
      return `**${this.name}**`;
    },
    addMovie: function () {
      console.log(
        JSON.stringify({ title: this.title, description: this.description })
      );
    // make call to express to get json
    fetch(`http://localhost:3000/movie`,{
        method: "POST",
    headers: {
      'Content-Type': 'application/json'
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },        
        body: JSON.stringify(this.payload())
        })
    .then(response => response.json())
    .then(data => {
      console.log(">>>data", data)
    })
    .catch(err => {console.error(err)})
    },
  },
  mounted() {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.movies .field,
.movies .buttons {
  max-width: 600px;
  margin: 0 auto;
}
.movies .buttons {
  padding: 1em;
}
</style>
