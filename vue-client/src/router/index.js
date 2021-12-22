import { createRouter, createWebHistory } from "vue-router";
import Users from "@/views/users.vue";
import Login from "@/views/loginAdmin.vue";

const routes = [
  {
    path: "login/admin",
    name: "login",
    component:"Login"

  },
  {
    path: "/users",
    name: "Users",
    component: Users,
  },

  {
    path: "/tools",
    name: "Tools", 
    component:Tools
  }]
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
 
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import Login from "../views/Login.vue";
import Signup from "../views/Signup.vue";
const routes = [
  { path: "/", name: "Home", component: Home },
  { path: "/about", name: "About", component: About },
  { path: "/login", name: "Login", component: Login },
  { path: "/signup", name: "Signup", component: Signup },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
