import { createRouter, createWebHistory } from "vue-router";
import Index from "../views/Index.vue";
import Other from "../views/Index.vue";

const routes = [
  {
    path: "/",
    name: "Index",
    component: Index,
  },
  {
    path: "/other",
    name: "Other",
    component: Other,
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
