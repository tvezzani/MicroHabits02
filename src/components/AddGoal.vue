<template>
  <div class="add-goal">
    <section class="title section">New Goal</section>
    <div class="column is-narrow is-flex is-justify-content-center">
      <div class="box">
        <div class="section">
          <div class="field">
            <label class="label">Title</label>
            <input
              class="input"
              type="text"
              placeholder="e.g. Wash Dishes"
              v-model="title"
            />
          </div>
          <div class="field">
            <label class="label">Description</label>
            <textarea
              class="textarea"
              placeholder="e.g. Wash the dishes daily"
              v-model="description"
            ></textarea>
          </div>
          <div class="field">
            <label class="label">Prompt</label>
            <textarea
              class="textarea"
              placeholder="e.g. Did you wash the dishes today?"
              v-model="prompt"
            ></textarea>
          </div>
        </div>
        <div class="buttons is-centered">
          <button id="submit" class="button is-link" @click="addMovie">
            Add Goal
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AddMovie",
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
      prompt: "",
      name: "Tim",
    };
  },
  methods: {
    payload: function () {
      return {
        title: this.title,
        description: this.description,
        prompt: this.prompt,
      };
    },
    showSomething: function () {
      return `**${this.name}**`;
    },
    addMovie: function () {
      // make call to express to get json
      fetch(`http://localhost:3000/goals`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: JSON.stringify(this.payload()),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(">>>data", data);
        })
        .catch((err) => {
          console.error(err);
        });
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
.box {
  width: 500px;
}
</style>
