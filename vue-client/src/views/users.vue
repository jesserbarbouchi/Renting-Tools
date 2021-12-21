<template>

  <div class="usersListContainer">
    <h1>helooooooooo</h1>
    <div v-for="user in users" :key="user._id">
      <div class="container">
        <div class="row">
          <div>
            <div class="our-team">
              <div class="picture">
                <img class="img-fluid" src="{{ user.profile_image_uri }}" />
              </div>
              <div class="team-content">
                <h3 class="name">{{ user.fullname }}</h3>
                <h5 class="title">{{ user.phone_number }}</h5>
                <h5 class="title">{{ user.email }}</h5>
                <h5 class="title">{{ user.adrress }}</h5>
              </div>
              <ul class="social">
                <li class="fa fa-facebook">
                  <span @click="banne(user._id)">Banne</span> /
                  <span @click="allow(user._id)">allow</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Users",
  data() {
    return {
      users: [],
    };
  },
  methods: {
    getUsers() {
      axios
        .get("/users")
        .then((response) => {
          console.log(response.data);
          this.users = response.data;
        })
        .catch((err) => console.log(err));
    },
  },
};
</script>

<style scoped>
body {
  font-family: tahoma;
  height: 100vh;
  background-image: url(https://picsum.photos/g/3000/2000);
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
}
.usersListContainer {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 40px;
  grid-row-gap: 0px;
  margin:80px 40px 40px 40px;
}

.our-team {
  padding: 30px 0 40px;
  margin-bottom: 30px;
  background-color: #f7f5ec;
  text-align: center;
  overflow: hidden;
  position: relative;
  width: 400px;
}

.our-team .picture {
  display: inline-block;
  height: 160px;
  width: 160px;
  margin-bottom: 50px;
  z-index: 1;
  position: relative;
}

.our-team .picture::before {
  content: "";
  width: 100%;
  height: 0;
  border-radius: 50%;
  background-color: #1369ce;
  position: absolute;
  bottom: 135%;
  right: 0;
  left: 0;
  opacity: 0.9;
  transform: scale(3);
  transition: all 0.3s linear 0s;
}

.our-team:hover .picture::before {
  height: 100%;
}

.our-team .picture::after {
  content: "";
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background-color: #1369ce;
  top: 0;
  left: 0;
  z-index: -1;
}

.our-team .picture img {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  transform: scale(1);
  transition: all 0.9s ease 0s;
}

.our-team:hover .picture img {
  box-shadow: 0 0 0 14px #f7f5ec;
  transform: scale(0.7);
}

.our-team .title {
  display: block;
  font-size: 15px;
  color: #4e5052;
  text-transform: capitalize;
}

.our-team .social {
  width: 100%;
  padding: 0;
  margin: 0;
  background-color: #1369ce;
  position: absolute;
  bottom: -100px;
  left: 0;
  transition: all 0.5s ease 0s;
}

.our-team:hover .social {
  bottom: 0;
}

.our-team .social li {
  display: inline-block;
}

.our-team .social li {
  display: block;
  padding: 10px;
  font-size: 20px;
  color: white;
  transition: all 0.3s ease 0s;
  text-decoration: none;
  cursor: pointer;
}

.our-team .social li :hover {
  color: #1369ce;
  background-color: #f7f5ec;
}


</style>
