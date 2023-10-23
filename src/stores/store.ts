import { ref } from 'vue';
import { defineStore } from 'pinia';

export const useTheStore = defineStore('store', () => {
  const dragging = ref(false);
  const setDragging = (val: boolean) => {
    dragging.value = val;
  };

  const formElements = ref<any>([]);
  const addFormElement = (el: any) => {
    formElements.value.push(el);
  };
  const removeFormElement = (el: any) => {
    formElements.value.push(el);
  };

  return { dragging, setDragging, formElements, addFormElement, removeFormElement };
});
