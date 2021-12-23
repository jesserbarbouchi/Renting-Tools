import { createRouter, createWebHistory } from "vue-router";
import Users from "@/views/Users.vue";
import LoginAdmin from "@/views/LoginAdmin.vue";
import Home from "../views/Home.vue";
import Login from "../views/Login.vue";
import Signup from "../views/Signup.vue";



const routes = [
  { path: "/", name: "Home", component: Home },
  { path: "/admin/login", name: "LoginAdmin", component: LoginAdmin },
  { path: "/users", name: "Users", component: Users }, 
  { path: "/login", name: "Login", component: Login },
  { path: "/signup", name: "Signup", component: Signup },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
