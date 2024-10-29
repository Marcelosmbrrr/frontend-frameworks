import { createRouter, createWebHistory } from "vue-router";
import HomeLayout from "../components/layout/HomeLayout.vue";
import IntroductionView from "../views/1-introduction/IntroductionView.vue";
import LifeCycleView from "../views/1-introduction/LifeCycleView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      component: HomeLayout,
      children: [
        {
          path: "/introduction",
          component: IntroductionView,
        },
        {
          path: "/life-cycle",
          component: LifeCycleView,
        },
      ],
    },
  ],
});

export default router;
