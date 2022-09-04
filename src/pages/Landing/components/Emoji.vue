<template lang="pug">
img.opacity-0.animate-scroll-top(:src="`/src/assets/${type}_face.png`" :alt="`${type} face`" width="150" height="150")
</template>

<script setup lang="ts">
type face = "angry" | "laugh" | "money" | "party";

defineProps<{
  type: face;
}>();
</script>
