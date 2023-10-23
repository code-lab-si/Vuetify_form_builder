<script setup lang="ts">
import ElementsBase from './ElementsBase.vue';
</script>

<template>
  <ElementsBase>
    <v-select
      :label="$t('element_labels.dropdown')"
      :items="['one', 'two']"
      variant="underlined"
    ></v-select>
  </ElementsBase>
</template>
