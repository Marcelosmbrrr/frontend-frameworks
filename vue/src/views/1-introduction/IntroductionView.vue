<template>
  <h1 class="mb-4 text-xl font-bold leading-tight text-gray-900">Introduction</h1>
  <article
    class="max-w-7xl space-y-2 format format-sm sm:format-base lg:format-lg format-blue dark:format-invert"
  >
    <p class="lead">
      Vue.js 3 is a progressive framework for building user interfaces. With a
      reactive, component-based approach, it enables Build interactive and
      scalable applications efficiently.
    </p>
    <p>
      One of the great new features of Vue 3 is the Composition API, which makes
      it easy to organization and code reuse, and what was the structure used in
      this app. In addition, Vue 3 offers performance improvements and
      TypeScript support.
    </p>
    <p>
      This app serves as a summary of the key functionalities available in the
      Vue.js <a href="https://vuejs.org/guide/introduction.html" class="underline text-emerald-400" target="_blank">documentation</a>.
    </p>
  </article>
  <div class="mt-5">
    <img :src="VueDocImage" width="800" height="800" />
  </div>
</template>

<script setup>
import * as Vue from "vue";
import VueDocImage from "../../../public/images/vuejs-doc.jpg";
</script>
