
<script setup>
import { useAuth0, AuthState } from "./utils/useAuth0";
const { login, logout, initAuth } = useAuth0(AuthState);

initAuth();
</script>


<template>
  <div class="app">
    <nav
      class="navbar is-primary"
      role="navigation"
      aria-label="main navigation"
    >
      <div class="navbar-brand">
        <a class="navbar-item" href="/">
          <img src="MicroHabitsIcon.png" />
        </a>
        <a
          role="button"
          class="navbar-burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbar"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbar" class="navbar-menu">
        <div class="navbar-start" v-if="AuthState.isAuthenticated">
          <a class="navbar-item" href="/dashboard">Dashboard</a>
          <a class="navbar-item" href="/track">Track</a>
          <a class="navbar-item" href="/my-goals">My Goals</a>
          <a class="navbar-item" href="/profile">Profile</a>
        </div>

        <div class="navbar-end">
          <div class="navbar-item">
            <div v-if="AuthState.isAuthenticated" class="mobile-logout is-flex">
              <p class="m-2">
                Welcome, <b>{{ AuthState.user.name }}</b>
              </p>
              <button @click="logout()" class="button is-primary">
                Logout
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
    <div v-if="!AuthState.loading">
      <div v-if="!AuthState.isAuthenticated">
        <div class="section has-background-light">
          <p class="subtitle">Log in to get started!</p>
        <button class="button is-link" @click="login()">
          Login
        </button>
        </div>
      </div>
    </div>
    <div v-else>
      <button class="button is-medium is-link mt-4 is-loading"></button>
    </div>
    <router-view />
    <div class="footer has-background-light">
      <section class="section is-medium">
        <b>Micro Habits</b> by Timothy Vezzani. All rights reserved.
      </section>
    </div>
  </div>
</template>

<script>
function mobileMenu() {
  document.addEventListener("DOMContentLoaded", () => {
    // Get all "navbar-burger" elements
    const $navbarBurgers = Array.prototype.slice.call(
      document.querySelectorAll(".navbar-burger"),
      0
    );
    console.log($navbarBurgers);

    // Check if there are any navbar burgers
    if ($navbarBurgers.length > 0) {
      // Add a click event on each of them
      $navbarBurgers.forEach((el) => {
        el.addEventListener("click", () => {
          // Get the target from the "data-target" attribute

          const target = el.dataset.target;
          const $target = document.getElementById(target);

          // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
          el.classList.toggle("is-active");
          $target.classList.toggle("is-active");
        });
      });
    }
  });
}

export default {
  name: "App",
  methods: {
    // Log the user in
    login() {
      this.$auth.loginWithRedirect();
    },
    // Log the user out
    logout() {
      this.$auth.logout({
        returnTo: window.location.origin,
      });
    },
  },
  mounted() {
    mobileMenu();
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  padding: 0;
  background-color: hsl(0, 0%, 96%);
}

.mobile-logout {
  flex-direction: column;
}

@media (min-width: 1000px) {
  .mobile-logout {
    flex-direction: row;
  }
}
</style>
