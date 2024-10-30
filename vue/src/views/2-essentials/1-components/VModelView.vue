<template>
  <h1 class="mb-4 text-xl font-bold leading-tight text-gray-900">
    V-Model with Components
  </h1>
  <article
    class="max-w-7xl space-y-2 format format-sm sm:format-base lg:format-lg format-blue dark:format-invert"
  >
    <p class="lead">
      The directive v-model can be used to establish communication between Parent and Child.
    </p>
    <p class="lead">
      Parent:
    </p>
    <div class="bg-gray-100 rounded code-container p-3">
      <p>{{ `<template>` }}</p>
      <p>&nbsp;&nbsp;&nbsp;{{ `<Child v-model:title="bookTitle" />` }}</p>
      <p>{{ `</template>` }}</p>
    </div>
    <p class="lead">
      Child:
    </p>
    <div class="bg-gray-100 rounded code-container p-3">
      <p>{{ `<script setup>` }}</p>
      <p>&nbsp;&nbsp;&nbsp;{{ `const title = defineModel('title')` }}</p>
      <p>{{ `<script />` }}</p>
    </div>
  </article>
</template>

<script setup>
import * as Vue from "vue";
</script>
