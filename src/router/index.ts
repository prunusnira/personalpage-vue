import MainView from "@/views/MainView.vue";
import AboutView from "@/views/AboutView.vue";
import LinkView from "@/views/LinkView.vue";
import ProjectViewVue from "@/views/ProjectView.vue";
import TechStackViewVue from "@/views/TechStackView.vue";
import { createRouter, createWebHashHistory } from "vue-router";

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: "/",
      name: "index",
      component: MainView,
    },
    {
      path: "/about",
      name: "about",
      component: AboutView,
    },
    {
      path: "/tech",
      name: "tech",
      component: TechStackViewVue,
    },
    {
      path: "/project",
      name: "project",
      component: ProjectViewVue,
    },
    {
      path: "/link",
      name: "link",
      component: LinkView,
    },
  ],
});

export default router;
