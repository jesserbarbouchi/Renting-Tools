<template>
  <div class="container mt-2">
    <button @click="fetchData">kkkkkkkkkk</button>
      <div v-if="users.length">
      <div v-for="user in users" :key="user._id">

  <div class="row">
    <div class="col-md-3 col-sm-6">
      <div class="card card-block">
      <h4 class="card-title text-right"><i class="material-icons">settings</i></h4>
    <img src= {{user. profile_image_uri}} alt="Photo of sunset">
        <h5 class="card-title mt-3 mb-3">{{user.fullname}}</h5>
        <h5 class="card-title mt-3 mb-3">{{user.email}}</h5>
        <h5 class="card-title mt-3 mb-3">{{user.phone_number}}</h5>
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
  name: "Users",
  data() {
    return {
    
      fullname:"",
      email:"",
      phone_number:"",
      address:"",
      profile_image_uri:"",
      users:[]
      }
  },
  methods: {
 fetchData() {
      // var data = {
      //   fullname: this.fullname,
      //   email: this.email,
      //   phone_number: this.phone_number,
      //   address: this.address,
      //   profile_image_uri:this.profile_image_uri
      
      // };
      Axios.get("http://localhost:5000/users")
        .then((response) => {
          // console.log("response", response);
          this.users=response.data
          console.log(this.users)

        })
        .catch((error) => {
          console.log("this error", error);
        });
    },
  },

 
};
</script>

<style>
img{
  height:150px;
  width:100%;
}

div [class^="col-"]{
  padding-left:25px;
  padding-right:5px;
}
.card{
  transition:0.5s;
  cursor:pointer;
}
.card-title{  
  font-size:15px;
  transition:1s;
  cursor:pointer;
}
.card-title i{  
  font-size:15px;
  transition:1s;
  cursor:pointer;
  color:#ffa710
}
.card-title i:hover{
  transform: scale(1.25) rotate(100deg); 
  color:#18d4ca;
  
}
.card:hover{
  transform: scale(1.05);
  box-shadow: 10px 10px 15px rgba(0,0,0,0.3);
}
.card-text{
  height:80px;  
}

.card::before, .card::after {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  transform: scale3d(0, 0, 1);
  transition: transform .3s ease-out 0s;
  background: rgba(255, 255, 255, 0.1);
  content: '';
  pointer-events: none;
}
.card::before {
  transform-origin: left top;
}
.card::after {
  transform-origin: right bottom;
}
.card:hover::before, .card:hover::after, .card:focus::before, .card:focus::after {
  transform: scale3d(1, 1, 1);
}


</style>

