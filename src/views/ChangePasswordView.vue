<template>
  <div class="change-password">
    <ChangePassword />
  </div>
</template>

<script>
// @ is an alias to /src
import ChangePassword from "../components/ChangePassword.vue";

export default {
  name: "ChangePasswordView",
  components: {
    ChangePassword,
  },
};
</script>