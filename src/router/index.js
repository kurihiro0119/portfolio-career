import Vue from "vue";
import VueRouter from "vue-router";
import Profile from "../views/Profile.vue";
import Skill from "../views/Skill.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Profile",
    component: Profile
  },
  {
    path: "/Profile",
    name: "Profile",
    component: Profile
  },
  {
    path: "/skill",
    name: "Skill",
    component: Skill
  },
];

const router = new VueRouter({
  routes
});

export default router;
