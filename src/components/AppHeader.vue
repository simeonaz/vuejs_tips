<script setup lang="ts">
import DarkModeButton from "./DarkModeButton.vue";
import LanguageSwitcher from "./LanguageSwitcher.vue";
</script>

<template>
  <header
    class="fixed top-0 inset-x-0 z-50 bg-transparent h-[40px] lg:h-[60px]"
  >
    <div
      class="max-w-screen-xl mx-auto h-full bg-inherit flex justify-end px-8"
    >
      <div class="flex items-center gap-4">
        <LanguageSwitcher />
        <DarkModeButton />
      </div>
    </div>
  </header>
</template>
