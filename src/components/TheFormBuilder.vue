<script setup lang="ts">
import TheElements from './TheElements.vue';
import TheForm from './TheForm.vue';
import TheConfiguration from './TheConfiguration.vue';
</script>

<template>
  <v-container :fluid="true" id="the_form_builder">
    <v-row>
      <v-col :cols="3">
        <TheElements />
      </v-col>
      <v-col :cols="6">
        <TheForm />
      </v-col>
      <v-col :cols="3">
        <TheConfiguration />
      </v-col>
    </v-row>
  </v-container>
</template>
