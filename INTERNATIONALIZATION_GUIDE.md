## Internationalization Guide (vue-i18n)

## 🔧 Setup Steps

### 1. Install vue-i18n
Install the `vue-i18n` package in your project:
```bash
pnpm add vue-i18n@11
```

### 2. Configure vue-i18n in `main.js`
```javascript
// filepath: d:\ME\vuejs_tips\src\main.js
import { createApp } from "vue";
import { createI18n } from "vue-i18n";
import App from "./App.vue";

const app = createApp(App);

const i18n = createI18n({
  legacy: false, // Use Composition API
  locale: navigator.language || "en", // Default to browser language or "en"
  fallbackLocale: "en",
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

// Use the i18n instance
app.use(i18n);
// Mount the app
app.mount("#app");
```

> **Note:** For larger and more demanding projects, it’s recommended to create a `locales/` folder with one JSON file per language (e.g., `en.json`, `fr.json`, `es.json`). Then, centralize the configuration in an `i18n.js` (or `i18n/index.js`) file and import it into `main.js`.


### 3. Integrate vue-i18n in Your Vue App
Update your `main.js` file to include the `i18n` instance:

```javascript
// filepath: d:\ME\vuejs_tips\src\main.js
import { createApp } from 'vue';
import App from './App.vue';
import i18n from './i18n';

const app = createApp(App);

// Use the i18n instance
app.use(i18n);

app.mount('#app');
```

### 4. Use Translations in Components
You can now use the `t` function from `vue-i18n` to display translated text in your components. For example:

```vue
<!-- filepath: d:\ME\vuejs_tips\src\App.vue -->
<script setup>
import { useI18n } from 'vue-i18n';

const { t } = useI18n();
</script>

<template>
  <div>
    <a href="https://github.com/simeonaz/vuejs_tips">{{ t('view_on_github') }}</a>
  </div>
</template>
```

### 5. Add the Language Selector Component
Create a `LanguageSwitcher` component to allow users to switch between languages:

```vue
<!-- filepath: d:\ME\vuejs_tips\src\components\LanguageSwitcher.vue -->
<script setup>
... 

const setLang = (lang) => {
  locale.value = lang;
  close();
};

const languages = [
  { code: "fr", label: "FR", ariaLabel: "Français" },
  { code: "en", label: "EN", ariaLabel: "English" },
  { code: "es", label: "ES", ariaLabel: "Español" },
  // ...
];
</script>
```
