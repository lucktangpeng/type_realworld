import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "home",
    component: () => import("@/views/home.vue"),
  },
  {
    path: "/login",
    name: "login",
    component: () => import("@/views/login.vue"),
  },
  {
    path: "/register",
    name: "register",
    component: () => import("@/views/login.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
