import { ref } from "vue";
import { defineStore } from "pinia";

export const appNameStore = defineStore("app-name", () => {
  const name = ref("Vue.js");
  function changeName(value: string) {
    name.value = value;
  }

  return { name, changeName };
});
