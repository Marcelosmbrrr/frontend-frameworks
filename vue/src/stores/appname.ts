import { ref } from "vue";
import { defineStore, storeToRefs } from "pinia";

export const useAppNameStore = defineStore("app-name", () => {
  const name = ref("Vue.js 3");

  return { name };
});
