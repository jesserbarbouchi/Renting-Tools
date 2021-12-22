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
  }
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
 
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
