<template>
  <h1 class="mb-4 text-xl font-bold leading-tight text-gray-900">
    Conditional
  </h1>
  <article
    class="max-w-7xl space-y-2 format format-sm sm:format-base lg:format-lg format-blue dark:format-invert"
  >
    <p class="lead">
      The directive v-if is used to conditionally render a block. The block will
      only be rendered if the directive's expression returns a truthy value.
    </p>
    <div class="bg-gray-100 rounded code-container p-3">
      <p>{{ `<h1 v-if="awesome">Vue is awesome!</h1>` }}</p>
    </div>
    <p class="lead">
      You can use the v-else directive to indicate an "else block" for v-if:
    </p>
    <div class="bg-gray-100 rounded code-container p-3">
      <p>{{ `<template>` }}</p>
      <p>&nbsp;&nbsp;&nbsp;{{ `<h1 v-if="var">Vue is awesome!</h1>` }}</p>
      <p>&nbsp;&nbsp;&nbsp;{{ `<h1 v-else>Vue is shit!</h1>` }}</p>
      <p>{{ `</template>` }}</p>
      <br />
      <p>{{ `<script setup>` }}</p>
      <p>&nbsp;&nbsp;&nbsp;{{ `const var = Vue.ref(true);` }}</p>
      <p>{{ `</script>` }}</p>
    </div>
    <p class="lead">
      The v-else-if, as the name suggests, serves as an "else if block" for v-if. It can also be chained multiple times.
    </p>
    <div class="bg-gray-100 rounded code-container p-3">
      <p>{{ `<div v-if="type === 'A'">` }}</p>
      <p>&nbsp;&nbsp;&nbsp;{{ ` A` }}</p>
      <p>{{ `</div>` }}</p>
      <p>{{ `<div v-else-if="type === 'B'">` }}</p>
      <p>&nbsp;&nbsp;&nbsp;{{ `B` }}</p>
      <p>{{ `</div>` }}</p>
    </div>
    <p class="lead">
      Another option for conditionally displaying an element is the v-show directive. 
      The difference is that an element with v-show will always be rendered and remain in the DOM; v-show only toggles the display CSS property of the element.
      The usage is largely the same:
    </p>
    <div class="bg-gray-100 rounded code-container p-3">
      <p>{{ `<h1 v-show="ok">Hello!</h1>` }}</p>
    </div>
  </article>
</template>

<script setup>
import * as Vue from "vue";
</script>
