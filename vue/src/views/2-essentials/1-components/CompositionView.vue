<template>
  <h1 class="mb-4 text-xl font-bold leading-tight text-gray-900">
    Composition API
  </h1>
  <article
    class="max-w-7xl space-y-2 format format-sm sm:format-base lg:format-lg format-blue dark:format-invert"
  >
  <div class="bg-gray-100 rounded code-container p-3">
      <p>{{ `<template>` }}</p>
      <p>&nbsp;&nbsp;&nbsp;{{ `component html` }}</p>
      <p>{{ `</template>` }}</p>
      <br />
      <p>{{ `<script setup>` }}</p>
      <p>&nbsp;&nbsp;&nbsp;{{ `component logic` }}</p>
      <p>{{ `</script>` }}</p>
      <br>
      <p>{{ `<style>` }}</p>
      <p>&nbsp;&nbsp;&nbsp;{{ `component styling (optional)` }}</p>
      <p>{{ `</style>` }}</p>
    </div>
    <p class="lead">
      The Vue 3 Composition API is a new way to organize and structure your
      component's logic, allowing for a more flexible and reusable approach
      compared to the Options API that was used in previous versions.
    </p>
    <p class="lead">
      Composition API represents a step up from the Options API, which organized
      logic into a single object. In the Options API, you define properties such
      as data, methods, and computed, grouping everything in one place. With the
      Composition API, the logic is organized into a setup() function, where you
      can declare reactive states, methods, and side effects more flexibly.
    </p>
    <h2 class="text-lg font-semibold">1. Setup Function</h2>
    <p>
      Components using the Composition API define a function called
      <code>setup()</code> or an attribute "setup" for script tag itself. Inside this function, you can declare reactive states and define functions that manipulate those states.
    </p>
    <h2 class="text-lg font-semibold">2. Reactive System</h2>
    <p>
      It utilizes Vue's reactivity system, where you can create reactivity using
      functions like <code>ref()</code> and <code>reactive()</code>.
    </p>
    <ul>
      <li>
        <strong>ref</strong>: Used to create a reactive reference to a primitive
        value.
      </li>
      <li><strong>reactive</strong>: Used to create a reactive object.</li>
    </ul>
    <h2 class="text-lg font-semibold">3. Importing Composables</h2>
    <p>
      You can create external functions (composables) that encapsulate reusable
      logic and import them into any component, promoting code reuse.
    </p>
    <h2 class="text-lg font-semibold">4. Better TypeScript Support</h2>
    <p>
      The Composition API offers improved support for TypeScript, allowing you
      to write more typed and safer code.
    </p>
  </article>
</template>

<script setup>
import * as Vue from "vue";
</script>
