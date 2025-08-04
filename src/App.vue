<script setup>
import AppHeader from "./components/AppHeader.vue";
import { useOnlineStatus } from "./composables/useOnlineStatus";

const { isOnline } = useOnlineStatus();
// You can use the isOnline variable to show a message or perform actions when user is online or offline
</script>

<template>
  <div class="max-w-screen-xl mx-auto relative">
    <AppHeader />
    <main class="min-h-svh flex items-center justify-center">
      <div class="text-center text-xl font-bold tracking-tight">
        Vue.js Tips by
        <a
          href="http://simeonaz.netlify.app"
          target="_blank"
          class="hover:underline"
          >Siméon Azogbonon</a
        >
      </div>
    </main>
  </div>
</template>

<style scoped></style>
