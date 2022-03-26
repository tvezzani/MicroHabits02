<template>
  <div class="profile-view">
    <p class="title section">Profile</p>
    <div class="box is-white">
      <div class="buttons">
        <p class="topLeft m-2"><b>Name:</b> Tom</p>
        <button class="button is-primary">Edit</button>
      </div>
      <div class="buttons">
        <p class="topLeft m-2"><b>Email:</b> tommtboy@gmail.com</p>
        <button class="button is-primary">Edit</button>
      </div>
      <div class="buttons">
        <button
          class="button is-primary"
          @click="$router.push('change-password')"
        >
          Change Password
        </button>
        <button class="button is-danger">Clear All Goals</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Profile",
  props: {
    msg: String,
  },
};
</script>

<style scoped>
.box {
  max-width: 700px;
  margin: 0 auto;
}
</style>