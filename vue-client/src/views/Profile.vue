<template>
  <div
    class="max-w-4xl flex items-center h-auto lg:h-screen flex-wrap mx-auto my-32 lg:my-0"
  >
    <!--Main Col-->
    <div
      v-if="!edite"
      id="profile"
      class="w-full lg:w-3/5 rounded-lg lg:rounded-l-lg lg:rounded-r-none shadow-2xl bg-white opacity-75 mx-6 lg:mx-0"
    >
      <div class="p-4 md:p-12 text-center lg:text-left">
        <!-- Image for mobile view-->
        <div
          class="block lg:hidden rounded-full shadow-xl mx-auto -mt-16 h-48 w-48 bg-cover bg-center"
          style="
            background-image: url({user.profile_image_uri});
          "
        ></div>

        <h1 class="text-3xl font-bold pt-8 lg:pt-0"> {{user.fullname}}</h1>
        <div
          class="mx-auto lg:mx-0 w-4/5 pt-3 border-b-2 border-green-500 opacity-25"
        ></div>
        <p
          class="pt-4 text-base font-bold flex items-center justify-center lg:justify-start"
        >
          <svg
            class="h-4 fill-current text-green-700 pr-4"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 50 50"
          >
            <path
              d="M9 12H1v6a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-6h-8v2H9v-2zm0-1H0V5c0-1.1.9-2 2-2h4V2a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1h4a2 2 0 0 1 2 2v6h-9V9H9v2zm3-8V2H8v1h4z"
            />
          </svg>
         phone N° : {{user.phone_number}}
        </p>
          <p
          class="pt-4 text-base font-bold flex items-center justify-center lg:justify-start"
        >
          <svg
            class="h-4 fill-current text-green-700 pr-4"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 50 50"
          >
            <path
              d="M9 12H1v6a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-6h-8v2H9v-2zm0-1H0V5c0-1.1.9-2 2-2h4V2a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1h4a2 2 0 0 1 2 2v6h-9V9H9v2zm3-8V2H8v1h4z"
            />
          </svg>
         Address : {{user.address}}
        </p>
          <p
          class="pt-4 text-base font-bold flex items-center justify-center lg:justify-start"
        >
          <svg
            class="h-4 fill-current text-green-700 pr-4"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 50 50"
          >
            <path
              d="M9 12H1v6a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-6h-8v2H9v-2zm0-1H0V5c0-1.1.9-2 2-2h4V2a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1h4a2 2 0 0 1 2 2v6h-9V9H9v2zm3-8V2H8v1h4z"
            />
          </svg>
         joined from : {{joined}}
        </p>
     

        <p class="pt-8 text-sm">
          Totally optional short description about yourself, what you do and so
          on.
        </p>

        <div class="pt-12 pb-8">
          <button
            class="bg-green-700 hover:bg-green-900 text-white font-bold py-2 px-4 rounded-full"
            @click="changeview"
          >
            edite profile
          </button>
        </div>

        <!-- Use https://simpleicons.org/ to find the svg for your preferred product -->
      </div>
    </div>

    <!--Img Col-->
    <div class="w-full lg:w-2/5">
      <!-- Big profile image for side bar (desktop) -->

      <img
        :src="user.profile_image_uri"
        class="rounded-none lg:rounded-lg shadow-2xl hidden lg:block"
      />
      <!-- Image from: http://unsplash.com/photos/MP0IUfwrn0A -->
    </div>

    <!-- Pin to top right corner -->
    <div class="absolute top-0 right-0 h-12 w-18 p-4">
      <button class="js-change-theme focus:outline-none">🌙</button>
    </div>

    <!-- ////////////// EDITE PROFILE //////////////// -->

    <div v-if="edite" class="w-full max-w-xs">
      <form
        @submit.prevent="editeProfile"
        class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
      >
        <div class="mb-4">
          <label
            class="block text-gray-700 text-sm font-bold mb-2"
            for="First Name"
          >
            First Name
          </label>
          <input
            v-model="this.data.username"
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="username"
            type="text"
            placeholder="Last Name"
          />
        </div>
        <div class="mb-6">
          <label
            class="block text-gray-700 text-sm font-bold mb-2"
            for="password"
          >
            Last Name
          </label>
          <input
            v-model="this.data.lastname"
            class="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="Email"
            placeholder="Email"
          />
        </div>
        <div class="mb-6">
          <label
            class="block text-gray-700 text-sm font-bold mb-2"
            for="password"
          >
            Email
          </label>
          <input
            v-model="this.data.Email"
            class="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="text"
            placeholder="phone Number"
          />
        </div>
        <div class="mb-6">
          <label
            class="block text-gray-700 text-sm font-bold mb-2"
            for="password"
          >
            phone Number
          </label>
          <input
            v-model="this.data.phone_number"
            class="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="text"
            placeholder="image"
          />
        </div>
        <div class="mb-6">
          <label
            class="block text-gray-700 text-sm font-bold mb-2"
            for="password"
          >
            Image
          </label>
          <input
            @change="previewimage"
            class="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="file"
            placeholder="image"
          />
        </div>
        <div class="mb-6">
          <label
            class="block text-gray-700 text-sm font-bold mb-2"
            for="password"
          >
            address
          </label>
          <input
            v-model="this.data.address"
            class="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="text"
            placeholder="address"
          />
        </div>

        <div class="pt-12 pb-8">
          <button @click="previewimage">Uploadt image</button>
          <button
            @click="editeProfile"
            class="bg-green-700 hover:bg-green-900 text-white font-bold py-2 px-4 rounded-full"
          >
            submit changes
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
// ///////////////////////JAVA SCRIPT//////////////////////
import Axios from "axios";
import moment from "moment"

export default {
  name: "profile",
  data() {
    return {
      user:{fullname:"",email:"",phone_number:"",profile_image_uri:"",address:""},
      data: {
        username: "",
        lastname: "",
        Email: "",
        phone_number: "",
        address: "",
        imageUrl: "",
      },
      imageData: null,
      picture: "https://source.unsplash.com/MP0IUfwrn0A",
      upluadValue: 0,
      edite: false,
      userId: "61c455152e6c9376129025fb",
      date :""
    };
  },
  mounted : async function(){
      this.userId = localStorage.session;
      var url = `http://localhost:5000/users/getone/${this.userId}`;
     const res = await Axios.get(url);
    this.user=res.data
   
    this.joined =  moment(res.data.createdAt).fromNow();
  },
  methods: {
    async editeProfile() {
      var url = `http://localhost:5000/users/update/${this.userId}`;
      const res = await Axios.put(url, this.data);
      if (!JSON.stringify(res).includes("error")) {
        this.edite = false;
        console.log(res);
      }
    },
    changeview() {
      this.edite = !this.edite;
    },
    previewimage(e) {
      this.picture = e.target.files[0].name;
      console.log(this.picture);
    },
  },
};

////////////////////////JAVA SCRIPT ///////////////////////////
</script>

<style></style>

<style></style>
