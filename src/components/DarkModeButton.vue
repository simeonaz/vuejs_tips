<!-- 💡 Toggle Dark Mode in Vue 3 using @vueuse/core -->
<script setup>
import { useDark, useToggle } from "@vueuse/core";

const isDark = useDark();
const toggleDark = useToggle(isDark);
</script>

<template>
  <button
    @click="toggleDark()"
    type="button"
    class="cursor-pointer flex-shrink-0 rounded-md gap-x-1.5 p-1.5 inline-flex items-center"
  >
    <!-- Feel free to customize these icons  -->
    {{ isDark ? "☀️" : "🌙" }}
  </button>
</template>

<!-- Component: DarkModeButton.vue By Siméon Azogbonon -->
