<template>
    <component :is="$route.meta.layout">
        <div class='w-full h-full shadow rounded-md'>
            <div class='w-full h-full flex justify-center'>
                <div class="max-w-sm rounded overflow-hidden shadow">
                    <div class="w-full h-32 flex justify-center items-center">
                        {{ result }}
                    </div>
                    <div class="px-6 py-4">
                        <div class="font-bold text-xl mb-2">Counter</div>
                        <p class="text-gray-700 text-base">

                        </p>
                    </div>
                    <div class="px-6 pt-4 pb-2 flex justify-center">
                        <span
                            class="inline-block bg-gray-200 rounded-full px-2 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 hover:bg-sky-200 cursor-pointer"
                            @click="() => handleCalculation('+')">+
                            {{ factor }}</span>
                        <span
                            class="inline-block bg-gray-200 rounded-full px-2 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 hover:bg-sky-200 cursor-pointer"
                            @click="() => handleCalculation('-')">-
                            {{ factor }}</span>
                        <span
                            class="inline-block bg-gray-200 rounded-full px-2 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 hover:bg-sky-200 cursor-pointer"
                            @click="() => handleCalculation('*')">*
                            {{ factor }}</span>
                        <span
                            class="inline-block bg-gray-200 rounded-full px-2 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 hover:bg-sky-200 cursor-pointer"
                            @click="() => handleCalculation('**')">**
                            {{ factor }}</span>
                        <span
                            class="inline-block bg-gray-200 rounded-full px-2 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 hover:bg-sky-200 cursor-pointer"
                            @click="() => handleCalculation('reset')" onClick={handleReset}>Reset</span>
                    </div>
                    <div class="px-6 pt-4 pb-2 flex flex-col">
                        <input type="number"
                            class="mt-2 block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                            :class="{ 'ring-gray-300': !error, 'ring-red-300': error }" @keydown.enter="handleChangeFactor"
                            placeholder="Type a number and press Enter" />
                        <span class='text-red-500 text-sm'>{{ error ? "Interval available: -100 to 100" : "" }}</span>
                    </div>
                </div>
            </div>
        </div>
    </component>
</template>

<script setup>
import * as Vue from 'vue';

const result = Vue.ref(0);
const factor = Vue.ref(1);
const error = Vue.ref(false);

function handleCalculation(operator) {
    if (operator === "+") {
        result.value = Number(result.value) + Number(factor.value);
    } else if (operator === "-") {
        result.value = Number(result.value) - Number(factor.value);
    } else if (operator === "*") {
        result.value = Number(result.value) * Number(factor.value);
    } else if (operator === "**") {
        result.value = Number(result.value) ** Number(factor.value);
    } else {
        result.value = 0;
    }
}

function handleChangeFactor(e) {
    if (Number(e.target.value) <= 100 && Number(e.target.value) >= -100) {
        error.value = false;
        factor.value = e.target.value;
    } else if (Number(e.target.value) > 100 || Number(e.target.value) < -100) {
        error.value = true;
    }

}



</script>