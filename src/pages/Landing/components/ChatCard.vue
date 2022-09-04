<template lang="pug">
.h-96.rounded-2xl.backdrop-blur-sm.flex(class="w-[750px] bg-white/10")
  .h-full.rounded-2xl.rounded-br-none.backdrop-blur-sm.flex.flex-col.gap-y-4.overflow-hidden.px-3.pt-3(class="w-2/12 bg-white/30")
    - for (let x = 0; x < 8; x++)
      .w-full.h-10.shrink-0.rounded-lg(class="bg-black/20")
  .h-full.flex.flex-col.overflow-hidden.px-3(class="w-10/12")
    Emoji(type="laugh")
    Emoji.ml-auto(type="angry" class="[animation-delay:1s]")
    Emoji(type="money" class="[animation-delay:2s]")
    Emoji.ml-auto(type="party" class="[animation-delay:3s]")
</template>

<script setup lang="ts">
import Emoji from "./Emoji.vue";
</script>
