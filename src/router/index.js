import Vue from "vue";
import VueRouter from "vue-router";
import BasicInfo from "../views/BasicInfo.vue";
import Career from "../views/Career.vue";
import Summary from "../views/Summary.vue";

Vue.use(VueRouter);

const routes = [
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
    path: "/summary",
    name: "Summary",
    component: Summary
  }
];

const router = new VueRouter({
  routes
});

export default router;
