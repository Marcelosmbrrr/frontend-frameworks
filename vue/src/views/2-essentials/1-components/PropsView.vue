<template>
  <h1 class="mb-4 text-xl font-bold leading-tight text-gray-900">
    Props 
  </h1>
  <article
    class="max-w-7xl space-y-2 format format-sm sm:format-base lg:format-lg format-blue dark:format-invert"
  >
    <p class="lead">
      Props are a key feature for passing data from a parent component to a
      child component, ensuring a one-way data flow that promotes encapsulation
      and maintainability.
    </p>
    <h2 class="font-semibold">Passing and Acessing Props</h2>
    <p>
      Vue components require explicit props declaration so that Vue knows what
      external props passed to the component should be treated as fallthrough
      attributes.
    </p>
    <div class="bg-gray-100 rounded code-container p-3">
      {{ `<ChildComponent foo="Hello" :loo="42" />` }}
    </div>
    <div class="bg-gray-100 rounded code-container p-3">
      const props = defineProps(['foo', 'loo'])
    </div>
    <h2 class="font-semibold">Provide and Inject</h2>
    <p>
      Usually, when we need to pass data from the parent to a child component,
      we use props. However, imagine the case where we have a large component
      tree. With only props, we would have to pass the same prop across the
      entire parent chain.
    </p>
    <p>
      We can solve props drilling with provide and inject. A parent component
      can serve as a dependency provider for all its descendants.
    </p>
    <p>Parent:</p>
    <div class="bg-gray-100 rounded code-container p-3">
      <p>import { provide } from 'vue'</p>
      <p>provide('message', 'hello!')</p>
    </div>
    <p>Childs:</p>
    <div class="bg-gray-100 rounded code-container p-3">
      <p>import { inject } from 'vue'</p>
      <p>const message = inject('message')</p>
    </div>
  </article>
</template>

<script setup>
import * as Vue from "vue";
</script>
