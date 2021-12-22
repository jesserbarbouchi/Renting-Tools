<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/login">Login</router-link> |
    <router-link to="/signup">Signup</router-link>
    <router-link to="/login/admin">Login</router-link>
    <router-view />
  </div>
</template>

<script>
import Users from "./views/users.vue";
export default {
  name: "App",
  components: {
    Users,
  },
};
</script>

<style scoped></style>
