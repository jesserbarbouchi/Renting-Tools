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
        <div class="w-full lg:w-6/12 px-4">
          <div
            class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-200 border-0"
          >
           
            <div class="flex-auto px-4 lg:px-10 py-10 pt-0">
              <div class="text-blueGray-400 text-center mb-3 font-bold">
    
              </div>
              <form @submit.prevent="handleSubmit">
                <div class="relative w-full mb-3">
                  <label
                    class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    full name
                  </label>
                  <input
                    v-model="this.data.fullName"
                    type="text"
                    class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    placeholder="Name"
                  />
                </div>

                <div class="relative w-full mb-3">
                  <label
                    class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    username
                  </label>
                  <input
                    v-model="this.data.username"
                    type="text"
                    class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    placeholder="Email"
                  />
                </div>

                <div class="relative w-full mb-3">
                  <label
                    class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    Email
                  </label>
                  <input
                    v-model="this.data.email"
                    type="text"
                    class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    placeholder="Email"
                  />
                </div>
                               <div class="relative w-full mb-3">
                  <label
                    class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    city
                  </label>
                  <input
                    v-model="this.data.city"
                    type="text"
                    class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    placeholder="Email"
                  />
                </div>
                             <div class="relative w-full mb-3">
                  <label
                    class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    Phone Number
                  </label>
                  <input
                    v-model="this.data.phoneNumber"
                    type="text"
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
                   v-model="this.data.password"
                    type="password"
                    class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    placeholder="Password"
                  />
                </div>

                <div>
                  <label class="inline-flex items-center cursor-pointer">
                    <input
                      id="customCheckLogin"
                      type="checkbox"
                      class="form-checkbox border-0 rounded text-blueGray-700 ml-1 w-5 h-5 ease-linear transition-all duration-150"
                    />
                    <span class="ml-2 text-sm font-semibold text-blueGray-600">
                      I agree with the
                      <a href="javascript:void(0)" class="text-emerald-500">
                        Privacy Policy
                      </a>
                    </span>
                  </label>
                </div>

                <div class="text-center mt-6">
                  <button
                    class="bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                    type="button"
                    @click="handleSubmit"
                  >
                    Create Account
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Checkout />
  </div>
</template>

<script>
import Checkout from "../Checkout.vue";
import Axios from "axios";
export default {
  components: { Checkout },
  name: "Signup",
  data() {
    return {
      data: {
        username: "",
        fullName: "",
        email: "",
        phoneNumber: "",
        city: "",
        password: ""
    
      },
    };
  },
  methods: {
    // sendMail() {
    //   Axios.post("http://localhost:5000/", {
    //     email: this.data.email,
    //     username: this.data.username,
    //   }).then(() => {
    //     console.log("email", this.data.email, this.data.username);
    //   });
    // },
    handleSubmit() {
      console.log("hello")
      var data = this.data;
      console.log("data", this.data);
      Axios.post("http://localhost:5000/auth/signup", data)
        .then((response) => {
          console.log("response", response.data);
   
        })
        .then(() => {
             
        })
        .catch((error) => {
          console.log("this is an error", error);
        });
      // this.$router.push("/login");
    }
    //     fetchData(){
    //              var data ={
    // fullname   : this.fullname,
    //         username   : this.username,
    //         email      : this.email,
    //         phone_number: this.phone_number,
    //         address    : this.address,
    //         password   :this.password
    //         }
    //         Axios.get("http://localhost:5000/signup",{data})
    //         .then(response=>{console.log("response",response);})
    //         .catch(error=>{console.log("this error",error);})
    //     }
  },
};
</script>
