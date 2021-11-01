import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Signup from "../views/Signup.vue";
import Login from "../views/Login.vue";
import Logout from "../views/Logout.vue";
import UsersShow from "../views/UsersShow.vue";
import UsersUpdate from "../views/UsersUpdate.vue";
import CategoriesShow from "../views/CategoriesShow.vue";
import PostsNew from "../views/PostsNew.vue";
import PostsShow from "../views/PostsShow.vue";
import PostsUpdate from "../views/PostsUpdate.vue";
import MeetupsIndex from "../views/MeetupsIndex.vue";
import MeetupsShow from "../views/MeetupsShow.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  { path: "/signup", name: "signup", component: Signup },
  { path: "/login", name: "login", component: Login },
  { path: "/logout", name: "logout", component: Logout },
  { path: "/users/:id", name: "users-show", component: UsersShow },
  { path: "/users/:id/edit", name: "users-update", component: UsersUpdate },
  { path: "/categories/:id", name: "categories", component: CategoriesShow },
  { path: "/posts/new", name: "posts-new", component: PostsNew },
  { path: "/posts/:id", name: "posts-show", component: PostsShow },
  { path: "/posts/:id/edit", name: "posts-update", component: PostsUpdate },
  { path: "/meetups", name: "meetups-index", component: MeetupsIndex },
  { path: "/meetups/:id", name: "meetups-show", component: MeetupsShow },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
