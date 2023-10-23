<script setup lang="ts">
import ElementsCard from './ElementsCard.vue';
import ElementsCheckbox from './ElementsCheckbox.vue';
import ElementsDivider from './ElementsDivider.vue';
import ElementsInput from './ElementsInput.vue';
import ElementsLabel from './ElementsLabel.vue';
import ElementsRadioButtons from './ElementsRadioButtons.vue';
import ElementsSection from './ElementsSection.vue';
import ElementsSelect from './ElementsSelect.vue';
import ElementsText from './ElementsText.vue';
</script>

<template>
  <v-row>
    <v-col>
      <v-card>
        <template v-slot:title> {{ $t('titles.elements') }} </template>

        <template v-slot:text>
          <ElementsCard />
          <ElementsSection />
          <ElementsDivider />
          <ElementsLabel />
          <ElementsInput />
          <ElementsText />
          <ElementsSelect />
          <ElementsCheckbox />
          <ElementsRadioButtons />
        </template>
      </v-card>
    </v-col>
  </v-row>
</template>
