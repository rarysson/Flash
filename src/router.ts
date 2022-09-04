import { authGuard } from "@auth0/auth0-vue";
import { createRouter, createWebHistory } from "vue-router";

import Landing from "./pages/Landing/Landing.vue";

const routes = [
  {
    path: "/",
    name: "Landing",
    component: Landing
  },
  {
    path: "/app",
    name: "App",
    component: () => import("./pages/Home/Home.vue"),
    beforeEnter: authGuard
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export { router };
