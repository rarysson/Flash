<template lang="pug">
.w-full.h-full.grid(class="grid-rows-[80px_1fr] grid-cols-[250px_1fr]")
  AppSidebar.row-span-2
  AppNavbar
</template>

<script setup lang="ts">
import AppNavbar from "./components/AppNavbar.vue";
import AppSidebar from "./components/AppSidebar.vue";
</script>
