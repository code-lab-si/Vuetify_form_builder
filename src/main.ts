import './assets/global.css';

import { createApp } from 'vue';
import { createPinia } from 'pinia';
import { createI18n } from 'vue-i18n';
import 'vuetify/styles';
import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';
import '@mdi/font/css/materialdesignicons.css';
import en from './i18n/en';

import App from './App.vue';

const vuetify = createVuetify({
  theme: {
    defaultTheme: 'light',
  },
  components,
  directives,
});

const i18n = createI18n({
  legacy: false,
  allowComposition: true,
  locale: 'en',
  messages: {
    en,
  },
});

const app = createApp(App);

app.use(createPinia());
app.use(vuetify);
app.use(i18n);

app.mount('#app');
