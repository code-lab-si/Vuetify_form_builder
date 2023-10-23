<script setup lang="ts">
import { v4 as uuid } from 'uuid';

const id = uuid();

let dndDuplicate: HTMLElement;

const createDuplicate = (e: MouseEvent) => {
  dndDuplicate = document.createElement('div');
  dndDuplicate.className = 'dnd_duplicate';
  dndDuplicate.innerHTML = document.getElementById(id)?.innerHTML ?? '';
  document.getElementById('the_form_builder')?.appendChild(dndDuplicate);
  positionDuplicate(e);

  followMouse();
};

const removeDuplicate = () => {
  dndDuplicate?.remove();
};

const followMouse = () => {
  document.addEventListener('mousemove', positionDuplicate);
};

const positionDuplicate = (e: MouseEvent) => {
  dndDuplicate.style.left = `${e.clientX - dndDuplicate.offsetWidth / 2}px`;
  dndDuplicate.style.top = `${e.clientY - dndDuplicate.offsetHeight / 2}px`;
};

const dragStart = (e: any) => {
  // e.preventDefault();
  createDuplicate(e);
};
const dragEnd = (e: any) => {
  removeDuplicate();
  document.removeEventListener('mousemove', positionDuplicate);
};
</script>

<template>
  <v-card :id="id" class="px-4 mb-2" @mousedown="dragStart" @mouseup="dragEnd">
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
