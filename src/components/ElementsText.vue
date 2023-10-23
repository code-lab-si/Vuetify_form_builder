<script setup lang="ts">
import ElementsBase from './ElementsBase.vue';
</script>

<template>
  <ElementsBase>
    <v-textarea :label="$t('element_labels.textarea')" variant="underlined" rows="2"></v-textarea>
  </ElementsBase>
</template>
