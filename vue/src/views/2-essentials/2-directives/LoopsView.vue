<template>
  <h1 class="mb-4 text-xl font-bold leading-tight text-gray-900">Loops</h1>
  <article
    class="max-w-7xl space-y-2 format format-sm sm:format-base lg:format-lg format-blue dark:format-invert"
  >
    <p class="lead">
      We can use the v-for directive to render a list of items based on an
      array. The v-for directive requires a special syntax in the form of item
      in items, where items is the source data array and item is an alias for
      the array element being iterated on:
    </p>
    <div class="bg-gray-100 rounded code-container p-3">
      <p>{{ `<template>` }}</p>
      <p>&nbsp;&nbsp;&nbsp;{{ `<li v-for="item in items">` }}</p>
      <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{ `&#123;&#123; "item.message" &#125;&#125;` }}</p>
      <p>&nbsp;&nbsp;&nbsp;{{ `</li>` }}</p>
      <p>{{ `</template>` }}</p>
      <br />
      <p>{{ `<script setup>` }}</p>
      <p>&nbsp;&nbsp;&nbsp;{{ `const items = ref([{ message: 'Foo' }, { message: 'Bar' }])` }}</p>
      <p>{{ `</script>` }}</p>
    </div>
  </article>
</template>

<script setup>
import * as Vue from "vue";
</script>
