import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Registration from "./components/Auth//Registration.vue";
import Login from "./components/Auth//Login.vue";
console.log(Login);
console.log(Registration);

Vue.use(Router);

export default new Router({
  mode: "history",
  // base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/login",
      name: "login",
      component: Login
    },
    {
      path: "/registration",
      name: "registration",
      component: Registration
    }
  ]
});
