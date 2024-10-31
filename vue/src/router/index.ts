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
import BindingView from "@/views/2-essentials/2-directives/BindingView.vue";
import TwoWayBindingView from "@/views/2-essentials/2-directives/TwoWayBindingView.vue";
import ConditionalView from "@/views/2-essentials/2-directives/ConditionalView.vue";
import LoopsView from "@/views/2-essentials/2-directives/LoopsView.vue";
import EventListenerView from "@/views/2-essentials/2-directives/EventListenerView.vue";
import MemoView from "@/views/2-essentials/2-directives/MemoView.vue";

// Class and style binding
import ClassStyleBindingView from "@/views/2-essentials/3-class-style-binding/ClassStyleBindingView.vue";

// Reactivity 
import RefView from "@/views/2-essentials/4-reactivity/RefView.vue";
import ReactiveView from "@/views/2-essentials/4-reactivity/ReactiveView.vue";

// Routing, Computed, Watchers and Stores
import RoutingView from "@/views/2-essentials/5-routing/RoutingView.vue";
import ComputedView from "@/views/2-essentials/6-computed/ComputedView.vue";
import WatchersView from "@/views/2-essentials/7-watchers/WatchersView.vue";
import StoresView from "@/views/2-essentials/8-stores/StoresView.vue";

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
        {
          path: "/binding",
          component: BindingView,
        },
        {
          path: "/two-way-binding",
          component: TwoWayBindingView,
        },
        {
          path: "/conditionals",
          component: ConditionalView,
        },
        {
          path: "/loops",
          component: LoopsView,
        },
        {
          path: "/event-listener",
          component: EventListenerView,
        },
        {
          path: "/memo",
          component: MemoView,
        },
        {
          path: "/class-style-binding",
          component: ClassStyleBindingView,
        },
        {
          path: "/ref",
          component: RefView,
        },
        {
          path: "/reactive",
          component: ReactiveView,
        },
        {
          path: "/routing",
          component: RoutingView,
        },
        {
          path: "/computed",
          component: ComputedView,
        },
        {
          path: "/watchers",
          component: WatchersView,
        },
        {
          path: "/stores",
          component: StoresView,
        },
      ],
    },
  ],
});

export default router;
