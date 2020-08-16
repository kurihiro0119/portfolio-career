import Vue from "vue";
import VueRouter from "vue-router";
import BasicInfo from "../views/BasicInfo.vue";
import Career from "../views/Career.vue";
import Skill from "../views/Skill.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "BasicInfo",
    component: BasicInfo
  },
  {
    path: "/basicinfo",
    name: "BasicInfo",
    component: BasicInfo
  },
  {
    path: "/career",
    name: "Career",
    component: Career
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
