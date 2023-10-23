<script setup lang="ts"></script>

<template>
  <v-row>
    <v-col>
      <v-card>
        <template v-slot:title> {{ $t('titles.configuration') }} </template>

        <template v-slot:text> This is content </template>
      </v-card>
    </v-col>
  </v-row>
</template>
