<template lang="pug">
.w-full.h-full.grid.place-items-center.bg-gradient-to-r.from-brand-purple.to-brand-green
  LoginNavbar(@login="handleLogin")
  .flex.flex-col.items-center
    h1.text-white.text-9xl.font-bold Flash
    h2.text-white.text-lg.
      #[strong THE] #[em Blazingly Fast] Chat App
    ChatCard.skew-x-12.mt-10
</template>

<script setup lang="ts">
import { useAuth0 } from "@auth0/auth0-vue";
import { useRouter } from "vue-router";

import ChatCard from "./components/ChatCard.vue";
import LoginNavbar from "./components/LoginNavbar.vue";

const { loginWithPopup } = useAuth0();
const router = useRouter();

async function handleLogin() {
  await loginWithPopup();
  router.push("/app");
}
</script>
