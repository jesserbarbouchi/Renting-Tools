<template>
  <nav>
    <ul class="menu">
      <li><router-link to="/">Home</router-link></li>
      <li>
        <a>About Us</a>
      </li>
      <li>
        <a>Tools</a>
      </li>
      <li>
        <router-link to="/auth/login">Log in</router-link>
      </li>
      <li>
        <router-link to="/auth/register">Sign in</router-link>
      </li>
    </ul>
  </nav>
</template>

<style scoped>
nav {
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  border: 1px solid rgba(0, 0, 0, 0.04);
  background-color: #ffffff;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 100;
}
nav .menu li a {
  height: 40px;
  line-height: 43px;
  margin: 0px;
  padding: 0px 22px;
  display: flex;
  font-size: 0.8rem;
  text-transform: uppercase;
  font-weight: 500;
  color: #585858;
  letter-spacing: 1px;
}

nav .menu li a:hover {
  background-color: #242424;
  color: #ffffff;
  box-shadow: 5px 10px 30px rgba(53, 53, 53, 0.1);
  transition: all ease 0.2s;
}
li {
  display: inline-block;
}
</style>
