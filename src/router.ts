import { createRouter, createWebHistory } from "vue-router";

import Home from "./pages/Home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("./pages/Login.vue")
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export { router };
