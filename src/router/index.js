import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Playground from "../views/playGround.vue";

Vue.use(VueRouter);

const routes = [{
    path: "/",
    name: "Home",
    component: Home,
    children: [{
      path: '/',
      component: () => import('../views/main/Main.vue')
    }, ],
  },
  {
    path: "/playground",
    name: "Playground",
    component: Playground
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import( /* webpackChunkName: "about" */ "../views/About.vue")
    //맨 위에 import 시켜서 일일이 불러오는 것 보다는 해당 영역(이 곳)에 import 하는 게 효율적
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;