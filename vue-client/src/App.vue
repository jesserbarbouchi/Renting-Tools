<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/login">Login</router-link> |
    <router-link to="/signup">Signup</router-link>
    <router-link to="/admin/login">AdminLogin</router-link>
    <router-link to="/users">Users</router-link>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
  components: {
    

  }
};
</script>

<style scoped></style>
