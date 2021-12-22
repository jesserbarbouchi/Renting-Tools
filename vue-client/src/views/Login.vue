<template>
<div class="signin">
<form  @submit.prevent="handleSubmit" >
  <div class="mb-3">
      <h1>Login</h1>
    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input type="email" class="form-control emailinput" v-model="email" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Your Email" >
    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Password</label>
    <input type="password" class="form-control"  v-model='password'   id="exampleInputPassword1" placeholder="Enter Your Password" >
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
</div>
</template>
<style>
 .signin{
     margin: 5rem 0;
     display:flex;
     flex-direction: column;
     justify-content: center;
     align-items: center;
}               
.signin h1{
     font-weight: 700;
     color: rgb(140, 140, 140);
     margin: 1rem 0;
}
form{
     padding: 1rem 2rem;
     background-color: rgb(240, 240, 240);
     width: 500px;
     border-radius: 5px;
     box-shadow: 3px 5px 7px rgba(0, 0, 0, 0.1);
}
form *{
     margin: 0.3rem 0;
}

form button{
     margin: 0.5rem 1rem 0 0;
     padding: .2rem 1rem;
}


     

</style>
<script>
import Axios from 'axios'

export default {
    name:"Login",
    data(){
        return {
            email:"",
            password:""
        }
    },
    methods:{
        async handleSubmit(){
           var data={
               email:this.email,
               password:this.password
           }
           console.log("clog login data",data);
            var response = await Axios.post('http://localhost:5000/users/login',data)
            console.log("response",response);
            localStorage.setItem('token',response.data.token)
            localStorage.setItem('session',response.data.user._id)
            console.log("id",response.data.user._id);
            this.$router.push("/")
        }
    }
}
</script>