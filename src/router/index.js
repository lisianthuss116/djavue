import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/post/:id",
    name: "post",
    component: () => import("../views/Article.vue")
  },
  {
    path: "/create",
    name: "create",
    component: () => import("../views/Create.vue")
  },
  {
    path: "/edit/:id",
    name: "edit",
    component: () => import("../views/Edit.vue")
  }
];

export default new VueRouter({
  routes,
  mode: "history"
});
