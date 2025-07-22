<script setup>
import AppHeader from "./components/AppHeader.vue";

import { onMounted, onBeforeUnmount } from "vue";

function handleOnline() {
  alert("You are back online!"); // Feel free to customize this alert message
}

function handleOffline() {
  alert("You are offline!"); // Feel free to customize this alert message
}

onMounted(() => {
  window.addEventListener("online", handleOnline);
  window.addEventListener("offline", handleOffline);
});

onBeforeUnmount(() => {
  window.removeEventListener("online", handleOnline);
  window.removeEventListener("offline", handleOffline);
});
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
