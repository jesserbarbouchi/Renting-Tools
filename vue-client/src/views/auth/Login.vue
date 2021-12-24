<template>
  <div>
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
          <router-link to="/auth/signup">Sign in</router-link>
        </li>
      </ul>
    </nav>
    <div class="container mx-auto px-4 h-full">
      <div class="flex content-center items-center justify-center h-full">
        <div class="w-full lg:w-4/12 px-4">
          <div
            class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-200 border-0"
          >
            <div class="rounded-t mb-0 px-6 py-6">
              <div class="text-center mb-3">
                <h6 class="text-blueGray-500 text-sm font-bold">
                  Sign in with
                </h6>
              </div>

              <hr class="mt-6 border-b-1 border-blueGray-300" />
            </div>
            <div class="flex-auto px-4 lg:px-10 py-10 pt-0">
              <div class="text-blueGray-400 text-center mb-3 font-bold">
                <small>Or sign in with credentials</small>
              </div>
              <form @submit.prevent="handleSubmit">
                <div class="relative w-full mb-3">
                  <label
                    class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    Email
                  </label>
                  <input
                  v-model="username_or_email"
                    type="email"
                    class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    placeholder="Email"
                  />
                </div>

                <div class="relative w-full mb-3">
                  <label
                    class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    Password
                  </label>
                  <input
                  v-model="password"
                    type="password"
                    class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    placeholder="Password"
                  />
                </div>


                <div class="text-center mt-6">
                  <button
                  @click="handleSubmit"
                    class="bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                    type="button"
                  >
                    Sign In
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div class="flex flex-wrap mt-6 relative">
            <div class="w-1/2">
              <a href="javascript:void(0)" class="text-blueGray-200">
                <small>Forgot password?</small>
              </a>
            </div>
            <div class="w-1/2 text-right">
              <router-link to="/auth/register" class="text-blueGray-200">
                <small>Create new account</small>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Axios from "axios";

export default {
  name: "Login",
  data() {
    return {
      username_or_email: "",
      password: "",
    };
  },
  methods: {
    async handleSubmit() {
      var data = {
        username_or_email: this.username_or_email,
        password: this.password,
      };
      console.log("clog login data", data);
      var response = await Axios.post(
        "http://localhost:5000/auth/login",
        data
      );
      console.log("response", response);
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("session", response.data.user._id);
      console.log("id", response.data.user._id);
      this.$router.push("/");
    },
    forgotpassword() {
      this.$router.push("/forgotpassword");
    },
  },
};
</script>
