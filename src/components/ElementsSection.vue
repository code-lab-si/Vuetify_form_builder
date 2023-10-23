<script setup lang="ts">
import ElementsBase from './ElementsBase.vue';

const panel = [0];
</script>

<template>
  <ElementsBase>
    <div class="py-4">
      <v-expansion-panels v-model="panel" multiple>
        <v-expansion-panel>
          <v-expansion-panel-title>{{ $t('element_labels.section') }}</v-expansion-panel-title>
          <v-expansion-panel-text>
            <br />
          </v-expansion-panel-text>
        </v-expansion-panel>
      </v-expansion-panels>
    </div>
  </ElementsBase>
</template>
