<script setup lang="ts">
import TheFormDropzone from './TheFormDropzone.vue';
</script>

<template>
  <v-row>
    <v-col>
      <v-card>
        <template v-slot:title> {{ $t('titles.form') }} </template>

        <template v-slot:text>
          <TheFormDropzone />
        </template>
      </v-card>
    </v-col>
  </v-row>
</template>
