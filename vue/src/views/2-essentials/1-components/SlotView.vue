<template>
  <h1 class="mb-4 text-xl font-bold leading-tight text-gray-900">Slot</h1>
  <article
    class="max-w-7xl space-y-2 format format-sm sm:format-base lg:format-lg format-blue dark:format-invert"
  >
    <p class="lead">
      Slot, in React, is children; in Angular, it is "{{ `<ng-content />` }}". Both allow a parent component to pass a template fragment to a child component, which can render that content into its own template.
    </p>
    <div class="bg-gray-100 rounded code-container p-3">
      <p>{{ `<FancyButton>` }}</p>
      <p>&nbsp;&nbsp;&nbsp;{{ `button message` }}</p>
      <p>{{ `</FancyButton>` }}</p>
    </div>
    <div class="bg-gray-100 rounded code-container p-3">
      <p>{{ `<button class="fancy-btn">` }}</p>
      <p>&nbsp;&nbsp;&nbsp;{{ `<slot></slot>` }}</p>
      <p>{{ `</button>` }}</p>
    </div>
  </article>
</template>

<script setup>
import * as Vue from "vue";
</script>
