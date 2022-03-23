<template>
  <div class="blah">
    <h1>{{ msg }}</h1>
    <div>Blah, bleh, blah; take that, {{ name }}</div>
    <div>Blah, bleh, blah; take that, {{ showSomething() }}</div>
    <div>Blah, bleh, blah; take that, {{ red }}</div>
    <div>Blah, bleh, blah; take that, {{ (payload.title) ? payload.title : 'n/a' }}</div>
    <textarea name="firstName" id="" cols="30" rows="10"></textarea>

<div class="field">
  <label class="label">Name</label>
  <div class="control">
    <input class="input" type="text" placeholder="Text input">
  </div>
</div>

<div class="field">
  <label class="label">Username</label>
  <div class="control has-icons-left has-icons-right">
    <input class="input is-success" type="text" placeholder="Text input" value="bulma">
    <span class="icon is-small is-left">
      <i class="fas fa-user"></i>
    </span>
    <span class="icon is-small is-right">
      <i class="fas fa-check"></i>
    </span>
  </div>
  <p class="help is-success">This username is available</p>
</div>

<div class="field">
  <label class="label">Email</label>
  <div class="control has-icons-left has-icons-right">
    <input class="input is-danger" type="email" placeholder="Email input" value="hello@">
    <span class="icon is-small is-left">
      <i class="fas fa-envelope"></i>
    </span>
    <span class="icon is-small is-right">
      <i class="fas fa-exclamation-triangle"></i>
    </span>
  </div>
  <p class="help is-danger">This email is invalid</p>
</div>

<div class="field">
  <label class="label">Subject</label>
  <div class="control">
    <div class="select">
      <select>
        <option>Select dropdown</option>
        <option>With options</option>
      </select>
    </div>
  </div>
</div>

<div class="field">
  <label class="label">Message</label>
  <div class="control">
    <textarea class="textarea" placeholder="Textarea"></textarea>
  </div>
</div>

<div class="field">
  <div class="control">
    <label class="checkbox">
      <input type="checkbox">
      I agree to the <a href="#">terms and conditions</a>
    </label>
  </div>
</div>

<div class="field">
  <div class="control">
    <label class="radio">
      <input type="radio" name="question">
      Yes
    </label>
    <label class="radio">
      <input type="radio" name="question">
      No
    </label>
  </div>
</div>

<div class="field is-grouped">
  <div class="control">
    <button class="button is-link">Submit</button>
  </div>
  <div class="control">
    <button class="button is-link is-light">Cancel</button>
  </div>
</div>

  </div>
</template>

<script>
export default {
  name: 'Blah',
  props: {
    msg: String
  },
  computed: {
    red: function() {
      return `${this.name}-red`
    }
  },
  data() {
    return {
      name: "Tim", 
      payload: {}
    }
  },
  methods: {
    showSomething: function() {
      return `**${this.name}**`
    }
  },
  mounted() {
    // make call to express to get json
    setTimeout(() => {
    fetch(`http://localhost:3000`)
    .then(response => response.json())
    .then(data => {
      console.log(">>>data", data)
      this.payload = data
    })
    .catch(err => { this.payload = {} })
    }, 2000)
  }
}
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
.blah {
  max-width: 600px;
  margin: 0 auto 3em auto;
}
</style>
