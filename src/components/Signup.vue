<template>
  <div>
    <section class="title section">Sign up</section>
    <div class="column is-narrow is-flex is-justify-content-center">
      <div class="box">
        <div class="section">
          <div class="field">
            <p class="control has-icons-left has-icons-right">
              <input class="input" type="email" placeholder="Email" />
              <span class="icon is-small is-left">
                <i class="fas fa-envelope"></i>
              </span>
              <span class="icon is-small is-right">
                <i class="fas fa-check"></i>
              </span>
            </p>
          </div>
          <div class="field">
            <p class="control has-icons-left">
              <input class="input" type="password" placeholder="Password" />
              <span class="icon is-small is-left">
                <i class="fas fa-lock"></i>
              </span>
            </p>
          </div>
          <div class="field">
            <p class="control has-icons-left">
              <input
                class="input"
                type="password"
                placeholder="Confirm Password"
              />
              <span class="icon is-small is-left">
                <i class="fas fa-lock"></i>
              </span>
            </p>
          </div>
        </div>
        <div class="button is-medium is-link">Sign up</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Signup",
  props: {
    msg: String,
  },
};
</script>

<style scoped>
.box {
  width: 500px;
}
</style>