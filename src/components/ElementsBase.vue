<script setup lang="ts">
import { v4 as uuid } from 'uuid';
import { onMounted } from 'vue';
import { useTheStore } from '../stores/store';

const store = useTheStore();
const id = uuid();

let dndDuplicate: HTMLElement;
let rootElement: HTMLElement | null = null;

onMounted(() => {
  rootElement = document.getElementById('the_form_builder');
});

const createDuplicate = () => {
  dndDuplicate = document.createElement('div');
  dndDuplicate.className = 'dnd_duplicate';
  dndDuplicate.innerHTML = document.getElementById(id)?.innerHTML ?? '';
  rootElement?.appendChild(dndDuplicate);
};

const disableSelect = () => {
  if (rootElement) {
    rootElement.style.userSelect = 'none';
  }
};

const enableSelect = () => {
  if (rootElement) {
    rootElement.style.userSelect = 'initial';
  }
};

const removeDuplicate = () => {
  dndDuplicate?.remove();
};

const followMouse = () => {
  document.addEventListener('mousemove', positionDuplicateEl);
  document.addEventListener('mouseup', dragEnd);
};

const positionDuplicateEl = (e: MouseEvent) => {
  dndDuplicate.style.left = `${e.clientX - dndDuplicate.offsetWidth / 2}px`;
  dndDuplicate.style.top = `${e.clientY - dndDuplicate.offsetHeight / 2}px`;
};

const dragStart = (e: MouseEvent) => {
  store.setDragging(true);
  disableSelect();
  createDuplicate();
  positionDuplicateEl(e);
  followMouse();
};
const dragEnd = () => {
  store.setDragging(false);
  removeDuplicate();
  enableSelect();
  document.removeEventListener('mousemove', positionDuplicateEl);
  document.removeEventListener('mouseup', dragEnd);
};
</script>

<template>
  <v-card :id="id" class="px-4 mb-2" @mousedown="dragStart">
    <div style="user-select: none">
      <slot></slot>
    </div>
    <div class="overlay"></div>
  </v-card>
</template>

<style scoped lang="scss">
.overlay {
  position: absolute;
  top: 0px;
  left: 0px;
  height: 100%;
  width: 100%;
  cursor: grab;
  z-index: 100;

  &:active {
    cursor: grabbing;
  }
}
</style>
