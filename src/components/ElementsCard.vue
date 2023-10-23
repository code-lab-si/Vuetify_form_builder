<script setup lang="ts">
import ElementsBase from './ElementsBase.vue';
</script>

<template>
  <ElementsBase>
    <div class="py-4">
      <v-card>
        <v-label class="pa-4">
          {{ $t('element_labels.card') }}
        </v-label>
      </v-card>
    </div>
  </ElementsBase>
</template>
