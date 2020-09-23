import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import ListPage from "../views/ListPage.vue";
import Event from "../views/Event.vue";

Vue.use(VueRouter);

const routes = [{
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import( /* webpackChunkName: "about" */ "../views/About.vue")
  }, {
    path: "/forif",
    name: "forif",
    component: () =>
      import( /* webpackChunkName: "about" */ "../views/forif.vue")
  }, {
    path: "/if",
    name: "if",
    component: () =>
      import("../views/if.vue")
  }, {
    path: "/List",
    name: "List",
    component: ListPage,
  }, {
    path: "/Event",
    name: "Event",
    component: Event,
  },

];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;