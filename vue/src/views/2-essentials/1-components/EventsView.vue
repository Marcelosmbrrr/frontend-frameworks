<template>
  <h1 class="mb-4 text-xl font-bold leading-tight text-gray-900">Events</h1>
  <article
    class="max-w-7xl space-y-2 format format-sm sm:format-base lg:format-lg format-blue dark:format-invert"
  >
    <p class="lead">
      In Vue 3, an event refers to a form of communication between components,
      where one component can emit events to notify other components of changes
      or actions that have occurred.
    </p>
    <h2 class="text-lg font-semibold">Emit</h2>
    <p class="lead">
      The emit is a function that allows a child component to send an event to
      its parent component.
    </p>
    <div class="bg-gray-100 rounded code-container p-3">

      {{ `<button @click="$emit('someEvent')">Click Me</button>` }}
    </div>
    <h2 class="text-lg font-semibold">Event Listen</h2>
    <p class="lead">The parent can then listen to it using v-on:</p>
    <div class="bg-gray-100 rounded code-container p-3">
      <p>{{ `<template>` }}</p>
      <p>&nbsp;&nbsp;&nbsp;{{ `<MyComponent @some-event="callback" />` }}</p>
      <p>{{ `</template>` }}</p>
      <br></br>
      <p>{{ `<script setup>` }}</p>
      <p>&nbsp;&nbsp;&nbsp;{{ `function callback() { console.log('callback') }` }}</p>
      <p>{{ `<script />` }}</p>
    </div>
  </article>
</template>

<script setup>
import * as Vue from "vue";
</script>
