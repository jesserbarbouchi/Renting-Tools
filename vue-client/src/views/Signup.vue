<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-12 col-md-4 well well-sm">
        <legend>
          <a href="http://www.jquery2dotnet.com">
            <i class="glyphicon glyphicon-globe"></i>
          </a>
          Sign up!
        </legend>
        <form
          action="#"
          method="post"
          class="form"
          role="form"
          @submit.prevent="handleSubmit"
        >
          <div class="row">
            <div class="col-xs-6 col-md-6">
              <input
                class="form-control"
                name="fullname"
                v-model="fullname"
                placeholder="fullname"
                type="text"
                required
                autofocus
              />
            </div>
            <div class="col-xs-6 col-md-6">
              <input
                class="form-control"
                name="username"
                v-model="username"
                placeholder="username"
                type="text"
                required
              />
            </div>
          </div>
          <input
            class="form-control"
            name="youremail"
            v-model="email"
            placeholder="Your Email"
            type="email"
          />
          <input
            class="form-control"
            name="phone_number"
            v-model="phone_number"
            placeholder="phone_number"
            type="text"
            required
          />
         
          <input
            class="form-control"
            name="address"
            v-model="address"
            placeholder="address"
            type="text"
            required
          />
          <input
            class="form-control"
            name="password"
            v-model="password"
            placeholder="password"
            type="password"
          />
          <button
            class="btn btn-lg btn-primary btn-block"
            v-on:click="fetchData"
            type="submit"
          >
            Sign up
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<style scoped>
.form-control {
  display: flex;
  justify-content: space-between;
  margin-top: 130px;
}
</style>

<script>
import Axios from "axios";
export default {
  name: "Signup",
  data() {
    return {
      username: "",
      fullname: "",
      email: "",
      phone_number: "",
      password: "",
      address: "",
    };
  },
  methods: {
    handleSubmit() {
      var data = {
        fullname: this.fullname,
        username: this.username,
        email: this.email,
        phone_number: this.phone_number,
        address: this.address,
        password: this.password,
      };
      Axios.post("http://localhost:5000/signup", { data })
        .then((response) => {
          console.log("response", response);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    fetchData() {
      var data = {
        fullname: this.fullname,
        username: this.username,
        email: this.email,
        phone_number: this.phone_number,
        address: this.address,
        password: this.password,
      };
      Axios.get("http://localhost:5000/signup", { data })
        .then((response) => {
          console.log("response", response);
        })
        .catch((error) => {
          console.log("this error", error);
        });
    },
  },
};
</script>
