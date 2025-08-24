<script setup>
import AppHeader from "./components/AppHeader.vue";
import { useOnlineStatus } from "./composables/useOnlineStatus";

const { isOnline } = useOnlineStatus();
// You can use the isOnline variable to show a message or perform actions when user is online or offline

// import the i18n instance
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
</script>

<template>
  <div class="max-w-screen-xl mx-auto relative">
    <AppHeader />
    <main class="min-h-svh flex items-center justify-center">
      <div class="flex flex-col">
        <div class="text-center text-xl font-bold tracking-tight">
          Vue.js Tips by
          <a
            href="http://simeonaz.netlify.app"
            target="_blank"
            class="hover:underline"
            >Siméon Azogbonon</a
          >
        </div>
        <a
          href="https://github.com/simeonaz/vuejs_tips"
          target="_blank"
          rel="noopener"
          aria-label="GitHub Repository (opens in new tab)"
          class="mt-4 flex items-center justify-center px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition duration-300"
        >
          ⭐ {{ t("view_on_github") }}
        </a>
      </div>
    </main>
  </div>
</template>

<style scoped></style>
