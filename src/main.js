import "./assets/style.css";

import { createApp } from "vue";
import { createI18n } from "vue-i18n";
import App from "./App.vue";

const app = createApp(App);

const i18n = createI18n({
  legacy: false, // you must set `false`, to use Composition API
  locale: navigator.language || "en", // get navigator.language or default to "en"
  fallbackLocale: "en",
  //   messages are the translations
  //   create a locales folder and add the translations files
  //   en.json
  //   fr.json
  //   es.json
  //   then import the translations files
  //   import en from "./locales/en.json";
  //   import fr from "./locales/fr.json";
  //   import es from "./locales/es.json";
  //   then use the translations files in the app
  messages: {
    en: {
      view_on_github: "View on GitHub",
    },
    fr: {
      view_on_github: "Voir sur GitHub",
    },
    es: {
      view_on_github: "Ver en GitHub",
    },
  },
});

// use the i18n instance
app.use(i18n);

// mount the app
app.mount("#app");
