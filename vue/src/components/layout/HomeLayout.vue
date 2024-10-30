<template>
  <div class="antialiased bg-gray-50">
    <nav
      class="bg-white border-b border-gray-200 px-4 py-2.5 fixed left-0 right-0 top-0 z-50"
    >
      <div class="flex flex-wrap justify-between items-center">
        <div class="flex justify-start items-center">
          <button
            data-drawer-target="drawer-navigation"
            data-drawer-toggle="drawer-navigation"
            aria-controls="drawer-navigation"
            class="p-2 mr-2 text-gray-600 rounded-lg cursor-pointer md:hidden hover:text-gray-900 hover:bg-gray-100 focus:bg-gray-100 focus:ring-2 focus:ring-gray-100"
          >
            <IconMenu />
          </button>
          <span
            class="flex items-center justify-between mr-4"
          >
            <IconVue />
            <span
              class="self-center text-2xl font-semibold whitespace-nowrap text-gray-900"
              >{{ name }}</span
            >
          </span>
        </div>
      </div>
    </nav>

    <!-- Sidebar -->

    <aside
      class="fixed top-0 left-0 z-40 w-64 h-screen pt-14 transition-transform -translate-x-full bg-white border-r border-gray-200 md:translate-x-0"
      aria-label="Sidenav"
      id="drawer-navigation"
    >
      <div class="overflow-y-auto py-5 px-3 h-full bg-white">
        <ul class="space-y-2">
          <li>
            <RouterLink
              to="introduction"
              class="flex items-center p-2 text-base font-medium text-gray-900 rounded-lg hover:bg-gray-100 group"
            >
              <Squares2X2Icon
                class="w-6 h-6 text-gray-500 transition duration-75 group-hover:text-gray-900"
              />
              <span class="ml-3">Introduction</span>
            </RouterLink>
          </li>
          <li>
            <RouterLink
              to="life-cycle"
              class="flex items-center p-2 text-base font-medium text-gray-900 rounded-lg hover:bg-gray-100 group"
            >
              <ArrowPathRoundedSquareIcon
                class="w-6 h-6 text-gray-500 transition duration-75 group-hover:text-gray-900"
              />
              <span class="ml-3">Life Cycle</span>
            </RouterLink>
          </li>
          <li>Essentials</li>
          <li>
            <button
              type="button"
              class="flex items-center p-2 w-full text-base font-medium text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100"
              aria-controls="dropdown-pages"
              data-collapse-toggle="dropdown-pages"
              @click="openComponentsList"
            >
              <Square3Stack3DIcon
                class="w-6 h-6 text-gray-500 transition duration-75 group-hover:text-gray-900"
              />
              <span class="flex-1 ml-3 text-left whitespace-nowrap"
                >Components</span
              >
              <IconArrowDown />
            </button>
            <Transition>
              <ul v-if="openComponents" class="py-2 space-y-2 transition-all">
                <li>
                  <RouterLink
                    to="composition"
                    class="flex items-center p-2 pl-11 w-full text-base font-medium text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100"
                  >
                    Composition Api
                  </RouterLink>
                </li>
                <li>
                  <RouterLink
                    to="props"
                    class="flex items-center p-2 pl-11 w-full text-base font-medium text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100"
                  >
                    Props
                  </RouterLink>
                </li>
                <li>
                  <RouterLink
                    to="events"
                    class="flex items-center p-2 pl-11 w-full text-base font-medium text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100"
                  >
                    Events
                  </RouterLink>
                </li>
                <li>
                  <RouterLink
                    to="v-model-component"
                    class="flex items-center p-2 pl-11 w-full text-base font-medium text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100"
                  >
                    V-Model
                  </RouterLink>
                </li>
                <li>
                  <RouterLink
                    to="slot"
                    class="flex items-center p-2 pl-11 w-full text-base font-medium text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100"
                  >
                    Slot
                  </RouterLink>
                </li>
                <li>
                  <RouterLink
                    to="dynamic-component"
                    class="flex items-center p-2 pl-11 w-full text-base font-medium text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100"
                  >
                    Dynamic Component
                  </RouterLink>
                </li>
              </ul>
            </Transition>
          </li>
          <li>
            <button
              type="button"
              class="flex items-center p-2 w-full text-base font-medium text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100"
              aria-controls="dropdown-pages"
              data-collapse-toggle="dropdown-pages"
              @click="openDirectivesList"
            >
              <CodeBracketIcon
                class="w-6 h-6 text-gray-500 transition duration-75 group-hover:text-gray-900"
              />
              <span class="flex-1 ml-3 text-left whitespace-nowrap"
                >Directives</span
              >
              <IconArrowDown />
            </button>
            <Transition>
              <ul v-if="openDirectives" class="py-2 space-y-2 transition-all">
                <li>
                  <RouterLink
                    to="binding"
                    class="flex items-center p-2 pl-11 w-full text-base font-medium text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100"
                  >
                    Binding
                  </RouterLink>
                </li>
                <li>
                  <RouterLink
                    to="two-way-binding"
                    class="flex items-center p-2 pl-11 w-full text-base font-medium text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100"
                  >
                    Two-way Binding
                  </RouterLink>
                </li>
                <li>
                  <RouterLink
                    to="conditionals"
                    class="flex items-center p-2 pl-11 w-full text-base font-medium text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100"
                  >
                    Conditional
                  </RouterLink>
                </li>
                <li>
                  <RouterLink
                    to="loops"
                    class="flex items-center p-2 pl-11 w-full text-base font-medium text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100"
                  >
                    Loops
                  </RouterLink>
                </li>
                <li>
                  <RouterLink
                    to="event-listener"
                    class="flex items-center p-2 pl-11 w-full text-base font-medium text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100"
                  >
                    Event Listener
                  </RouterLink>
                </li>
                <li>
                  <RouterLink
                    to="memo"
                    class="flex items-center p-2 pl-11 w-full text-base font-medium text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100"
                  >
                    Memo
                  </RouterLink>
                </li>
              </ul>
            </Transition>
          </li>
          <li>
            <RouterLink
              to="class-style-binding"
              class="flex items-center p-2 text-base font-medium text-gray-900 rounded-lg hover:bg-gray-100 group"
            >
              <PaintBrushIcon
                class="w-6 h-6 text-gray-500 transition duration-75 group-hover:text-gray-900"
              />
              <span class="ml-3">Class-Style Binding</span>
            </RouterLink>
          </li>
          <li>
            <button
              type="button"
              class="flex items-center p-2 w-full text-base font-medium text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100"
              aria-controls="dropdown-pages"
              data-collapse-toggle="dropdown-pages"
              @click="openReactivityList"
            >
              <SparklesIcon
                class="w-6 h-6 text-gray-500 transition duration-75 group-hover:text-gray-900"
              />
              <span class="flex-1 ml-3 text-left whitespace-nowrap"
                >Reactivity</span
              >
              <IconArrowDown />
            </button>
            <Transition>
              <ul v-if="openReactivity" class="py-2 space-y-2 transition-all">
                <li>
                  <RouterLink
                    to="ref"
                    class="flex items-center p-2 pl-11 w-full text-base font-medium text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100"
                  >
                    Ref
                  </RouterLink>
                </li>
                <li>
                  <RouterLink
                    to="reactive"
                    class="flex items-center p-2 pl-11 w-full text-base font-medium text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100"
                  >
                    Reactive
                  </RouterLink>
                </li>
              </ul>
            </Transition>
          </li>
          <li>
            <RouterLink
              to="watchers"
              class="flex items-center p-2 text-base font-medium text-gray-900 rounded-lg hover:bg-gray-100 group"
            >
              <WindowIcon
                class="w-6 h-6 text-gray-500 transition duration-75 group-hover:text-gray-900"
              />
              <span class="ml-3">Routing</span>
            </RouterLink>
          </li>
          <li>
            <RouterLink
              to="stores"
              class="flex items-center p-2 text-base font-medium text-gray-900 rounded-lg hover:bg-gray-100 group"
            >
              <ArchiveBoxIcon
                class="w-6 h-6 text-gray-500 transition duration-75 group-hover:text-gray-900"
              />
              <span class="ml-3">Stores</span>
            </RouterLink>
          </li>
          <li>
            <RouterLink
              to="computed"
              class="flex items-center p-2 text-base font-medium text-gray-900 rounded-lg hover:bg-gray-100 group"
            >
              <CalculatorIcon
                class="w-6 h-6 text-gray-500 transition duration-75 group-hover:text-gray-900"
              />
              <span class="ml-3">Computed</span>
            </RouterLink>
          </li>
          <li>
            <RouterLink
              to="watchers"
              class="flex items-center p-2 text-base font-medium text-gray-900 rounded-lg hover:bg-gray-100 group"
            >
              <EyeIcon
                class="w-6 h-6 text-gray-500 transition duration-75 group-hover:text-gray-900"
              />
              <span class="ml-3">Watchers</span>
            </RouterLink>
          </li>
        </ul>
      </div>
    </aside>

    <!-- Main -->

    <main class="p-4 md:ml-64 h-auto pt-20 bg-white">
      <RouterView />
    </main>
  </div>
</template>

<script setup>
import * as Vue from "vue";
import IconVue from "../icons/IconVue.vue";
import IconMenu from "../icons/IconMenu.vue";
import IconArrowDown from "../icons/IconArrowDown.vue";
import {
  ArrowPathRoundedSquareIcon,
  Square3Stack3DIcon,
  PaintBrushIcon,
  SparklesIcon,
  CodeBracketIcon,
  CalculatorIcon,
  EyeIcon,
  ArchiveBoxIcon,
  Squares2X2Icon,
  WindowIcon
} from "@heroicons/vue/24/outline";
import { useAppNameStore } from "@/stores/appname";

const { name } = useAppNameStore();

const openComponents = Vue.ref(false);
const openReactivity = Vue.ref(false);
const openDirectives = Vue.ref(false);

function openComponentsList() {
  openComponents.value = !openComponents.value;
}

function openReactivityList() {
  openReactivity.value = !openReactivity.value;
}

function openDirectivesList() {
  openDirectives.value = !openDirectives.value;
}
</script>
