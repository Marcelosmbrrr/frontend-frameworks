<template>
  <h1 class="mb-4 text-xl font-bold leading-tight text-gray-900">
    Two-way Binding
  </h1>
  <article
    class="max-w-7xl space-y-2 format format-sm sm:format-base lg:format-lg format-blue dark:format-invert"
  >
    <p class="lead">
      Create a two-way binding on a form input element or a component. It uses "v-model".
    </p>
    <div class="bg-gray-100 rounded code-container p-3">
      <p>{{ `<template>` }}</p>
      <p>&nbsp;&nbsp;&nbsp;{{ `<input v-model="name" placeholder="Type your name">` }}</p>
      <p>{{ `</template>` }}</p>
      <br />
      <p>{{ `<script setup>` }}</p>
      <p>&nbsp;&nbsp;&nbsp;{{ `import * as Vue from 'vue'` }}</p>
      <br />
      <p>&nbsp;&nbsp;&nbsp;{{ `const name = Vue.ref("")` }}</p>
      <p>{{ `<script />` }}</p>
    </div>
    <p class="lead">
      The use of the v-model in components has been explained <a href="v-model-component" class="underline text-emerald-400">here</a>.
    </p>
    <h2 class="text-lg font-semibold">Playground</h2>
    <p class="lead">
      Using v-model in the input, the value of the variable is automatically updated. The second form is used to prove this.
    </p>
    <div class="bg-gray-100 rounded code-container p-3">
      <p>{{ `<script setup>` }}</p>
      <p>&nbsp;&nbsp;&nbsp;{{ `import * as Vue from 'vue'` }}</p>
      <br />
      <p>&nbsp;&nbsp;&nbsp;{{ `const name = Vue.ref("")` }}</p>
      <p>&nbsp;&nbsp;&nbsp;{{ `const email = Vue.ref("")` }}</p>
      <p>{{ `<script />` }}</p>
    </div>
  </article>
  <section class="bg-white antialiased">
    <div>
        <div>
            <div class="mt-6 lg:flex lg:gap-y-3 lg:gap-x-3">
              <form action="#" class="w-full rounded-lg border border-gray-200 bg-white p-4 shadow-sm sm:p-6 lg:max-w-xl lg:p-8">
                    <div class="space-y-5"> 
                        <div class="col-span-2 sm:col-span-1">
                            <label for="full_name" class="mb-2 block text-sm font-medium text-gray-900"> Name </label>
                            <input v-model="name" type="text" id="full_name" class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-emerald-500 focus:ring-emerald-500" placeholder="Type a name" />
                            <span class="text-sm text-gray-400">{{ `<input v-model="name" type="text">` }}</span>
                          </div>
                        <div class="col-span-2 sm:col-span-1">
                            <label for="card-number-input" class="mb-2 block text-sm font-medium text-gray-900"> E-mail </label>
                            <input v-model="email" type="email" id="card-number-input" class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 pe-10 text-sm text-gray-900 focus:border-emerald-500 focus:ring-emerald-500" placeholder="Type an e-mail" />
                            <span class="text-sm text-gray-400">{{ `<input v-model="email" type="email">` }}</span>
                          </div>
                    </div>
                </form>
                <form action="#" class="w-full rounded-lg border border-gray-200 bg-white p-4 shadow-sm sm:p-6 lg:max-w-xl lg:p-8">
                    <div class="space-y-5"> 
                        <div class="col-span-2 sm:col-span-1">
                            <label for="full_name" class="mb-2 block text-sm font-medium text-gray-900"> Name </label>
                            <input readOnly v-bind:value="name" type="text" id="full_name" class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-emerald-500 focus:ring-emerald-500" />
                            <span class="text-sm text-gray-400">{{ `<input v-bind:value="name" type="text">` }}</span>
                          </div>
                        <div class="col-span-2 sm:col-span-1">
                            <label for="card-number-input" class="mb-2 block text-sm font-medium text-gray-900"> E-mail </label>
                            <input readOnly v-bind:value="email" type="text" id="card-number-input" class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 pe-10 text-sm text-gray-900 focus:border-emerald-500 focus:ring-emerald-500" />
                            <span class="text-sm text-gray-400">{{ `<input v-bind:value="email" type="email">` }}</span>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
  </section>
</template>

<script setup>
import * as Vue from "vue";

const name = Vue.ref("");
const email = Vue.ref("");
</script>
