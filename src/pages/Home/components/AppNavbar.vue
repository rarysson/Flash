<template lang="pug">
nav.px-5.py-3.flex.justify-end.bg-zinc-800
  button.relative.rounded-full.bg-gradient-to-r.from-brand-purple.to-brand-green.cursor-default(class="p-0.5")
    img.peer.relative.z-10.border.border-black.rounded-full(:src="user.picture" width="50" height="50")

    div(class=`
      transition-opacity
      opacity-0 peer-hover_opacity-100 hover_opacity-100
      pointer-events-none peer-hover_pointer-events-auto hover_pointer-events-auto
      absolute right-0
      mt-1 p-0.5
      w-max
      bg-gradient-to-r from-brand-purple to-brand-green
    `)
      .absolute.-top-8.right-0.h-8.bg-gradient-to-r.from-brand-purple.to-brand-green(class="w-[54px]")
      .bg-zinc-800.text-white.hover_bg-neutral-700
        button.px-5.py-2(@click="handleLogout") Log out
</template>

<script setup lang="ts">
import { useAuth0 } from "@auth0/auth0-vue";

const { logout: auth0Logout, user } = useAuth0();

function handleLogout() {
  auth0Logout({ returnTo: window.location.origin });
}
</script>
