import { createWebHistory, createRouter } from "vue-router";
import LoginComp from "./components/Login/LoginComp.vue";
import AuthenticationComp from "./components/Authentication/AuthenticationComp.vue";
import BlogPost from "./components/BlogPost/BlogPost.vue";
import BlogComp from "./components/Blog/BlogComp.vue";
const routes = [
  {
    name: "AuthenticationComp",
    path: "/",
    component: AuthenticationComp,
  },
  {
    name: "LoginComp",
    path: "/login",
    component: LoginComp,
  },
  {
    name: "BlogComp",
    path: "/blog",
    component: BlogComp,
  },
  {
    name: "Blogpost",
    path: "/blogpost/:title",
    component: BlogPost,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
