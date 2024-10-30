<template>
  <h1 class="mb-4 text-xl font-bold leading-tight text-gray-900">
    Life Cycle
  </h1>
  <article
    class="max-w-7xl space-y-2 format format-sm sm:format-base lg:format-lg format-blue dark:format-invert"
  >
    <p class="lead">
      The Vue.js lifecycle consists of several phases that a Vue instance goes
      through:
    </p>
    <h2 class="text-lg font-semibold">1. Creation Phase</h2>
    <ul>
      <li>
        <strong>beforeCreate:</strong> Called after initialization but before
        data observation.
      </li>
      <li>
        <strong>created:</strong> Called after the instance is created; data and
        methods are accessible.
      </li>
    </ul>

    <h2 class="text-lg font-semibold">2. Mounting Phase</h2>
    <ul>
      <li>
        <strong>beforeMount:</strong> Called before the mounting begins;
        template compilation is done.
      </li>
      <li>
        <strong>mounted:</strong> Called after the instance is mounted to the
        DOM; DOM access is possible.
      </li>
    </ul>

    <h2 class="text-lg font-semibold">3. Updating Phase</h2>
    <ul>
      <li>
        <strong>beforeUpdate:</strong> Called before the DOM re-renders due to
        data changes.
      </li>
      <li>
        <strong>updated:</strong> Called after the DOM is re-rendered; updated
        data can be accessed.
      </li>
    </ul>

    <h2 class="text-lg font-semibold">4. Destruction Phase</h2>
    <ul>
      <li>
        <strong>beforeDestroy:</strong> Called before the instance is destroyed;
        cleanup can be performed.
      </li>
      <li>
        <strong>destroyed:</strong> Called after the instance is destroyed; all
        data and events are removed.
      </li>
    </ul>
  </article>
</template>

<script setup>
import * as Vue from "vue";
</script>
