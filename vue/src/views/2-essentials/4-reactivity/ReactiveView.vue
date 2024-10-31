<template>
  <h1 class="mb-4 text-xl font-bold leading-tight text-gray-900">Reactive</h1>
  <article
    class="max-w-7xl space-y-2 format format-sm sm:format-base lg:format-lg format-blue dark:format-invert"
  >
    <p class="lead">
      There is another way to declare reactive state, with the reactive() API.
      Unlike a ref which wraps the inner value in a special object, reactive()
      makes an object itself reactive.
    </p>
    <p class="lead">It is used to make objects (including arrays) reactive.</p>
    <div class="bg-gray-100 rounded code-container p-3">
      <p>
        {{ `
        <script setup>
          ` }}</p>
                <p>&nbsp;&nbsp;&nbsp;{{ `import * as Vue from 'vue'` }}</p>
                <br />
                <p>&nbsp;&nbsp;&nbsp;{{ `const state = Vue.reactive({ count: 0 })` }}</p>
                <p>&nbsp;&nbsp;&nbsp;{{ `console.log(state.count)` }}</p>
                <p>{{ `
        </script>
        ` }}
      </p>
    </div>
  </article>
</template>

<script setup>
import * as Vue from "vue";
</script>
