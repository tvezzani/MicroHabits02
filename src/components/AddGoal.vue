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
          <div class="field">
            <label class="label">Correct Answer</label>
            <div class="field has-text-grey">
              Select the correct answer. For example, no for bad habits you want
              to break, and yes for everything else.
            </div>
            <label class="radio">
              <input
                type="radio"
                id="yes"
                value="Yes"
                v-model="correctAnswer"
              />
              Yes
            </label>
            <label class="radio">
              <input type="radio" id="no" value="No" v-model="correctAnswer" />
              No
            </label>
          </div>
        </div>
        <div class="buttons is-centered">
          <button id="submit" class="button is-link" @click="addGoal">
            Add Goal
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { AuthState } from '@/utils/useAuth0';
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
      correctAnswer: "Yes",
      currentAnswer: "Yes",
      daysSuccessful: 0,
      daysTotal: 0,
      username: "admin",
    };
  },
  methods: {
    payload: function () {
      return {
        title: this.title,
        description: this.description,
        prompt: this.prompt,
        correctAnswer: this.correctAnswer,
        currentAnswer: this.currentAnswer,
        daysSuccessful: this.daysSuccessful,
        daysTotal: this.daysTotal,
        username: AuthState.user.name,
      };
    },
    showSomething: function () {
      return `**${this.name}**`;
    },
    addGoal: async function () {
      // make call to express to get json
      await fetch(`http://localhost:3000/goals`, {
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
          // this.$router.push("/my-goals");
        })
        .catch((err) => {
          console.error(err);
        });
      this.$store
        .dispatch("fetchSomething")
        .then(() => {
          this.$router.push("my-goals");
        })
        .catch((error) => {
          // you got an error!
        });
      // await fetch(`http://localhost:3000/`)
      //   .then((response) => response.json())
      //   .then((data) => {
      //     this.dispatch;
      //     this.$router.push("/my-goals");
      //   })
      //   .catch((err) => {
      //     console.error(err);
      //   });
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
