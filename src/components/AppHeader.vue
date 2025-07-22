<script setup lang="ts">
import DarkModeButton from "./DarkModeButton.vue";
</script>

<template>
  <header class="fixed top-0 inset-x-0 z-50 bg-transparent h-[40px] lg:h-[60px]">
    <div
      class="max-w-screen-xl mx-auto h-full bg-inherit flex items-center justify-end px-8"
    >
      <DarkModeButton />
    </div>
  </header>
</template>
