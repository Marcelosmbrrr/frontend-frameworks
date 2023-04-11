<template>
    <component :is="$route.meta.layout">
        <div class='w-full h-full flex flex-col rounded shadow'>

            <div class="w-full h-min p-2">
                <div class='mt-2'>
                    <div class="p-2 flex flex-col">
                        <input type="text" name="title"
                            class="mt-2 block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
                            :class="{ 'ring-gray-300': !formError.title.error, 'ring-red-300': formError.title.error }"
                            placeholder="Title" v-model="form.title" />
                        <span class='text-red-500 text-sm'>{{ formError.title.error ? "Title is necessary" : "" }}</span>
                    </div>
                    <div class="p-2 flex flex-col">
                        <input type="text" name="description"
                            class="mt-2 block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
                            :class="{ 'ring-gray-300': !formError.description.error, 'ring-red-300': formError.description.error }"
                            placeholder="Description" v-model="form.description" />
                        <span class='text-red-500 text-sm'>{{ formError.description.error ? "Description is necessary" : ""
                        }}</span>
                    </div>
                </div>
                <div class="p-2">
                    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
                        @click="handleSubmit">
                        Add
                    </button>
                    <button class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded" @click="handleReset">
                        Reset
                    </button>
                </div>
            </div>

            <div class="w-full h-full flex flex-col p-1 bg-slate-800 overflow-y-scroll">
                <div v-for="item in list" className="w-full h-10 py-1 rounded-sm flex items-center mb-1 bg-white"
                    key={item.id}>
                    <div className="basis-14 font-medium px-2 border-r-2 ">
                        {{ item.id }}
                    </div>
                    <div className="basis-52 px-2 border-r-2">
                        {{ item.title }}
                    </div>
                    <div className="grow px-2 border-r-2">
                        {{ item.description }}
                    </div>
                    <div className="basis-42 px-2">
                        {{ item.created_at }}
                    </div>
                </div>
            </div>

        </div>
    </component>
</template>

<script setup>
import * as Vue from 'vue';

const initialForm = { title: "", description: "" };
const initialFormError = { title: { error: false, message: "" }, description: { error: false, message: "" } };

const list = Vue.ref([]);
const form = Vue.reactive(initialForm);
const formError = Vue.reactive(initialFormError);

function handleSubmit() {

    let is_valid = true;
    let validation = Object.assign({}, initialFormError);
    for (let field in form) {
        if (form[field].length === 0) {
            is_valid = false;
            validation[field] = { error: true, color: "red" }
        } else if (form[field].length > 0) {
            validation[field] = { error: false, color: "gray" }
        }
    }

    Object.assign(formError, validation);

    if (!is_valid) {
        return;
    }

    list.value.push({
        id: list.value.length + 1,
        title: form.title,
        description: form.description,
        created_at: new Date().toLocaleString()
    });
}

function handleReset() {
    list.value = []
    Object.assign(form, initialForm);
    Object.assign(formError, initialFormError);
}

</script>