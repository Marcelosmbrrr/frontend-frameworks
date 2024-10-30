import { createRouter, createWebHistory } from "vue-router";
import HomeLayout from "../components/layout/HomeLayout.vue";
// Introduction
import IntroductionView from "@/views/1-introduction/IntroductionView.vue";
import LifeCycleView from "@/views/1-introduction/LifeCycleView.vue";
// Essentials - Components
import CompositionView from "@/views/2-essentials/1-components/CompositionView.vue";
import PropsView from "@/views/2-essentials/1-components/PropsView.vue";
import EventsView from "@/views/2-essentials/1-components/EventsView.vue";
import VModelView from "@/views/2-essentials/1-components/VModelView.vue";
import DynamicComponentsView from "@/views/2-essentials/1-components/DynamicComponentsView.vue";
import SlotView from "@/views/2-essentials/1-components/SlotView.vue";
// Essentials - Directives

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
        {
          path: "/composition",
          component: CompositionView,
        },
        {
          path: "/props",
          component: PropsView,
        },
        {
          path: "/events",
          component: EventsView,
        },
        {
          path: "/v-model-component",
          component: VModelView,
        },
        {
          path: "/dynamic-component",
          component: DynamicComponentsView,
        },
        {
          path: "/slot",
          component: SlotView,
        },
      ],
    },
  ],
});

export default router;
