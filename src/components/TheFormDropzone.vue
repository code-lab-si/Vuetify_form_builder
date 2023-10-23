<script setup lang="ts">
import { computed } from 'vue';
import { useTheStore } from '../stores/store';
import { ref } from 'vue';

const store = useTheStore();

let isDraggingElementOver = ref(false);

const showBackdrop = computed(() => {
  if (!store.dragging) return true;
  return !isDraggingElementOver.value;
});

const startDragOver = () => {
  isDraggingElementOver.value = true;
};

const stopDragOver = () => {
  isDraggingElementOver.value = false;
};
</script>

<template>
  <div>
    <div class="backdrop" v-if="showBackdrop">
      <v-label>{{ $t('drop_elements_here') }}</v-label>
    </div>
    <div id="form_dropzone" @mouseover="startDragOver" @mouseout="stopDragOver"></div>
  </div>
</template>

<style scoped lang="scss">
#form_dropzone {
  min-height: 200px;
  border: 1px solid black;
  border-radius: 5px;
}

.backdrop {
  position: absolute;
  top: 145px;
  padding-left: calc(50% - 100px);
}
</style>
