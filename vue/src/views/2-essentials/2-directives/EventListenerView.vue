<template>
  <h1 class="mb-4 text-xl font-bold leading-tight text-gray-900">
    Event Listener
  </h1>
  <article
    class="max-w-7xl space-y-2 format format-sm sm:format-base lg:format-lg format-blue dark:format-invert"
  >
    <p class="lead">
      We can use the v-on directive, which we typically shorten to the @ symbol,
      to listen to DOM events and run some JavaScript when they're triggered.
    </p>
    <div class="bg-gray-100 rounded code-container p-3">
      <p>{{ `<button v-on:click="count++">Add 1</button>` }}</p>
      <p>{{ `<button @click="count++">Add 1</button>` }}</p>
    </div>
  </article>
</template>

<script setup>
import * as Vue from "vue";
</script>
