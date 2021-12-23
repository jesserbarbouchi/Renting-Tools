import { createApp } from "vue";
import { createWebHistory, createRouter } from "vue-router";

import "@fortawesome/fontawesome-free/css/all.min.css";
import "@/assets/styles/tailwind.css";

import App from "@/App.vue";

import Auth from "@/layouts/Auth.vue";

import Login from "@/views/auth/Login.vue";
import Register from "@/views/auth/Register.vue";

import Landing from "@/views/Landing.vue";

const routes = [
    {
        path: "/auth",
        redirect: "/auth/login",
        component: Auth,
        children: [
            {
                path: "/auth/login",
                component: Login,
            },
            {
                path: "/auth/register",
                component: Register,
            },
        ],
    },

    {
        path: "/",
        component: Landing,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

createApp(App).use(router).mount("#app");
