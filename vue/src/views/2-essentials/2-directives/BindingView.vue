<template>
  <h1 class="mb-4 text-xl font-bold leading-tight text-gray-900">Binding</h1>
  <article
    class="max-w-7xl space-y-2 format format-sm sm:format-base lg:format-lg format-blue dark:format-invert"
  >
    <p class="lead">
      Dynamically bind one or more attributes, or a component prop to an
      expression. It uses "v-bind:" or just ":" to bind. 
    </p>
    <div class="bg-gray-100 rounded code-container p-3">
      <p>{{ `<img v-bind:src="imageSrc" />` }}</p>
      <p>{{ `<img :src="imageSrc" />` }}</p>
    </div>
    <div class="bg-gray-100 rounded code-container p-3">
      <p>{{ `<button v-bind:[key]="value"></button>` }}</p>
    </div>
    <div class="bg-gray-100 rounded code-container p-3">
      <p>{{ `<div :class="{ red: isRed }"></div>` }}</p>
    </div>
    <div class="bg-gray-100 rounded code-container p-3">
      <p>{{ `<MyComponent v-bind="$props" />` }}</p>
    </div>
  </article>
</template>

<script setup>
import * as Vue from "vue";
</script>
