<template>
  <div class="home">
    <h1>This is our Home Page!</h1>
  </div>
</template>

<script>
import Axios from 'axios'
export default {
  name: "Home",
  async created(){
    var response = await Axios.get('http://localhost:5000/users');
    console.log("response",response);
  }
};
</script>
