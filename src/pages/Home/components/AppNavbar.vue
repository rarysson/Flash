<template lang="pug">
nav
  button(@click="handleLogout") Log out
</template>

<script setup lang="ts">
import { useAuth0 } from "@auth0/auth0-vue";

const { logout: auth0Logout } = useAuth0();

function handleLogout() {
  auth0Logout({ returnTo: window.location.origin });
}
</script>
