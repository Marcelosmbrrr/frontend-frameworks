<template>
  <h1 class="mb-4 text-xl font-bold leading-tight text-gray-900">Watchers</h1>
  <article
    class="max-w-7xl space-y-2 format format-sm sm:format-base lg:format-lg format-blue dark:format-invert"
  >
    <p class="lead">
      Computed properties allow us to declaratively compute derived values.
      However, there are cases where we need to perform "side effects" in
      reaction to state changes - for example, mutating the DOM, or changing
      another piece of state based on the result of an async operation.
    </p>
    <p class="lead">
      With Composition API, we can use the watch function to trigger a callback
      whenever a piece of reactive state changes:
    </p>
    <div class="bg-gray-100 rounded code-container p-3">
      <p>{{ `<script setup>` }}</p>
      <p>&nbsp;&nbsp;&nbsp;{{ `import * as Vue from 'vue'` }}</p>
      <br />
      <p>&nbsp;&nbsp;&nbsp;{{ `const question = Vue.ref('')` }}</p>
      <br />
      <p>&nbsp;&nbsp;&nbsp;{{ `Vue.watch(question, async (newQuestion, oldQuestion) => {` }}</p>
      <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{ `.....` }}</p>
      <p>&nbsp;&nbsp;&nbsp;{{ `}` }}</p>
      <p>{{ `</script>` }}</p>
    </div>
  </article>
</template>

<script setup>
import * as Vue from "vue";
</script>
