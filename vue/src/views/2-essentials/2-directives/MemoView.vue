<template>
  <h1 class="mb-4 text-xl font-bold leading-tight text-gray-900">Memo</h1>
  <article
    class="max-w-7xl space-y-2 format format-sm sm:format-base lg:format-lg format-blue dark:format-invert"
  >
    <p class="lead">
      When the component re-renders, if both valueA and valueB remain the same, all updates for this {{ `<div></div>` }} and its children will be skipped.
    </p>
    <div class="bg-gray-100 rounded code-container p-3">
      <p>{{ `<div v-memo="[valueA, valueB]">` }}</p>
      <p>&nbsp;&nbsp;&nbsp;{{ `.....` }}</p>
      <p>{{ `</div>` }}</p>
    </div>
  </article>
</template>

<script setup>
import * as Vue from "vue";
</script>
