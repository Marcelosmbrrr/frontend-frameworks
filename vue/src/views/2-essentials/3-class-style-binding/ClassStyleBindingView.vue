<template>
  <h1 class="mb-4 text-xl font-bold leading-tight text-gray-900">
    Class and Style Binding
  </h1>
  <article
    class="max-w-7xl space-y-2 format format-sm sm:format-base lg:format-lg format-blue dark:format-invert"
  >
    <p class="lead">
      A common need for data binding is manipulating an element's class list and inline styles. Since class and style are both attributes, we can use v-bind to assign them a string value dynamically.
    </p>
    <div class="bg-gray-100 rounded code-container p-3">
      <p>{{ `<div :class="{ active: isActive }"></div>` }}</p>
      <p>{{ `<div :style="{ color: activeColor, fontSize: fontSize + 'px' }"></div>` }}</p>
    </div>
  </article>
</template>

<script setup>
import * as Vue from "vue";
</script>
