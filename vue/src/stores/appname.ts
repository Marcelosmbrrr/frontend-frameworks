import { ref } from "vue";
import { defineStore } from "pinia";

export const useAppNameStore = defineStore("app-name", () => {
  const name = ref("Vue.js 3");
  function changeName(value: string) {
    name.value = value;
  }

  return { name, changeName };
});
