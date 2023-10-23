<script setup lang="ts">
import ElementsBase from './ElementsBase.vue';
</script>

<template>
  <ElementsBase>
    <v-radio-group :hide-details="true" class="py-2">
      <v-radio :label="$t('radio_one')" value="one"></v-radio>
      <v-radio :label="$t('radio_two')" value="two"></v-radio>
      <v-radio :label="$t('radio_three')" value="three"></v-radio>
    </v-radio-group>
  </ElementsBase>
</template>
