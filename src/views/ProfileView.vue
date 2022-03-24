<template>
  <div class="profile">
    <Profile />
  </div>
</template>

<script>
// @ is an alias to /src
import Profile from "../components/Profile.vue";

export default {
  name: "ProfileView",
  components: {
    Profile,
  },
};
</script>