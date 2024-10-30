<template>
  <h1 class="mb-4 text-xl font-bold leading-tight text-gray-900">
    Dynamic Component
  </h1>
  <article
    class="max-w-7xl space-y-2 format format-sm sm:format-base lg:format-lg format-blue dark:format-invert"
  >
    <p class="lead">
      Sometimes, it's useful to dynamically switch between components. This is possible by Vue's {{ `<component />` }} element.
    </p>
    <div class="bg-gray-100 rounded code-container p-3">
      <p>{{ `<template>` }}</p>
      <p>&nbsp;&nbsp;&nbsp;{{ `<component :is="tabs[currentTab]"></component>` }}</p>
      <p>{{ `</template>` }}</p>
    </div>
  </article>
</template>

<script setup>
import * as Vue from "vue";
</script>
