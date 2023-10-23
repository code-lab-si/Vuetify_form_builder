<script setup lang="ts">
import ElementsBase from './ElementsBase.vue';
</script>

<template>
  <ElementsBase>
    <v-checkbox
      :label="$t('element_labels.checkbox')"
      :value="true"
      :hide-details="true"
    ></v-checkbox>
  </ElementsBase>
</template>
