<template lang="pug">
nav.fixed.top-0.left-0.w-full.p-5
  button.group.uppercase.text-3xl.block.ml-auto.border-2.border-black.px-6.py-2.hover_bg-black(@click="$emit('login')")
    span.group-hover_bg-gradient-to-r.group-hover_from-brand-purple.group-hover_to-brand-green.group-hover_bg-clip-text.group-hover_text-transparent.
      Log in #[span &#8594;]
</template>

<script setup lang="ts">
defineEmits<{
  (event: "login"): void;
}>();
</script>
