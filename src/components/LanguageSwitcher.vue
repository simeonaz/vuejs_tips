<script setup>
import { ref } from "vue";
import { useI18n } from "vue-i18n";
import { vOnClickOutside } from "@vueuse/components";

const isOpen = ref(false);
const { locale } = useI18n();

const toggle = () => {
  isOpen.value = !isOpen.value;
};

const close = () => {
  isOpen.value = false;
};

const setLang = (lang) => {
  locale.value = lang;
  close();
};

const languages = [
  { code: "fr", label: "FR", ariaLabel: "Français" },
  { code: "en", label: "EN", ariaLabel: "English" },
  { code: "es", label: "ES", ariaLabel: "Español" },
];
</script>

<template>
  <div v-on-click-outside="close">
    <div class="relative">
      <button
        type="button"
        class="cursor-pointer"
        @click="toggle"
        aria-haspopup="menu"
        :aria-expanded="isOpen"
      >
        🌐
      </button>

      <div
        v-if="isOpen"
        class="absolute right-0 mt-2 w-24 rounded-xl border shadow-lg p-1 border-gray-200 dark:border-white/10 bg-white/90 dark:bg-slate-900/90 dark:backdrop-blur transition-colors"
      >
        <button
          v-for="lang in languages"
          :key="lang.code"
          type="button"
          class="flex w-full items-center justify-center gap-2 rounded-lg px-2 py-2 text-sm cursor-pointer hover:bg-gray-100 dark:hover:bg-white/5 transition-colors"
          :class="{
            'bg-teal-100 text-teal-700 ring-1 ring-teal-300 dark:bg-teal-500/20 dark:text-teal-300 dark:ring-teal-500/40':
              locale === lang.code || locale?.value === lang.code,
          }"
          @click="setLang(lang.code)"
          :aria-label="lang.ariaLabel"
        >
          <span class="text-teal-700 text-xs">{{ lang.label }}</span>
        </button>
      </div>
    </div>
  </div>
</template>
