<template>
  <h1 class="mb-4 text-xl font-bold leading-tight text-gray-900">Stores</h1>
  <article
    class="max-w-7xl space-y-2 format format-sm sm:format-base lg:format-lg format-blue dark:format-invert"
  >
    <p class="lead">
      A simpler solution for state sharing among components is to extract the
      shared state out of the components, and manage it in a global singleton.
    </p>
    <p class="lead">
      <a href="https://pinia.vuejs.org/" class="underline text-emerald-400"
        target="_blank">Pinia</a
      >
      is a state management library that implements all the necessary for it. It
      is maintained by the Vue core team, and works with both Vue 2 and Vue 3.
    </p>
    <p class="lead">
      Compared to
      <a href="https://vuex.vuejs.org/" class="underline text-emerald-400"
        target="_blank">Vuex</a
      >, Pinia provides a simpler API with less ceremony, offers
      Composition-API-style APIs, and most importantly, has solid type inference
      support when used with TypeScript.
    </p>
  </article>
  <form
    action="#"
    class="w-full mt-5 rounded-lg border border-gray-200 bg-white p-4 shadow-sm sm:p-6 lg:max-w-xl lg:p-8"
  >
    <div class="space-y-5">
      <div class="col-span-2 sm:col-span-1">
        <label
          for="full_name"
          class="mb-2 block text-sm font-medium text-gray-900"
        >
          App Name
        </label>
        <input
          v-model="name"
          type="text"
          id="appname"
          class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-emerald-500 focus:ring-emerald-500"
        />
      </div>
    </div>
    <button
      @click="() => name = 'Vue.js 3'"
      type="button"
      class="w-full mt-5 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
    >
      Reset
    </button>
  </form>
</template>

<script setup>
import * as Vue from "vue";
import { storeToRefs } from 'pinia'
import { useAppNameStore } from "@/stores/appname";

const store = useAppNameStore();
const { name } = storeToRefs(store);
</script>
