<template>
  <h1 class="mb-4 text-xl font-bold leading-tight text-gray-900">Computed</h1>
  <article
    class="max-w-7xl space-y-2 format format-sm sm:format-base lg:format-lg format-blue dark:format-invert"
  >
    <p class="lead">
      For complex logic that includes reactive data, it is recommended to use a
      computed property. This functionality is just like React's useMemo.
    </p>
    <div class="bg-gray-100 rounded code-container p-3">
      <p>{{ `const publishedBooksMessage = computed(() => {` }}</p>
      <p>&nbsp;&nbsp;&nbsp;{{ `return author.books.length > 0 ? 'Yes' : 'No'` }}</p>
      <p>{{ `})` }}</p>
    </div>
  </article>
</template>

<script setup>
import * as Vue from "vue";
</script>
