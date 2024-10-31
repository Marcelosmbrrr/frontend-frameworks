<template>
  <h1 class="mb-4 text-xl font-bold leading-tight text-gray-900">Ref</h1>
  <article
    class="max-w-7xl space-y-2 format format-sm sm:format-base lg:format-lg format-blue dark:format-invert"
  >
    <p class="lead">
      In Composition API, the recommended way to declare reactive state is using
      the ref() function. It takes the argument and returns it wrapped within a ref object with a .value property.
    </p>
    <p class="lead">
      Refs can hold any value type, including deeply nested objects and arrays.
    </p>
    <div class="bg-gray-100 rounded code-container p-3">
      <p>{{ `<script setup>` }}</p>
      <p>&nbsp;&nbsp;&nbsp;{{ `import * as Vue from 'vue'` }}</p>
      <br />
      <p>&nbsp;&nbsp;&nbsp;{{ `const count = Vue.ref(0)` }}</p>
      <p>&nbsp;&nbsp;&nbsp;{{ `console.log(count.value)` }}</p>
      <p>{{ `</script>` }}</p>
    </div>
  </article>
</template>

<script setup>
import * as Vue from "vue";
</script>
