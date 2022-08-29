<template lang="pug">
button.mt-5(@click="login") login
button.block.mt-5(@click="logout") logout

div.mt-5(v-if="isAuthenticated")
  p {{ user.name }}
  img(:src="user.picture")
</template>

<script setup lang="ts">
import { useAuth0 } from "@auth0/auth0-vue";

const {
  loginWithRedirect,
  logout: authLogout,
  user,
  isAuthenticated
} = useAuth0();

function login() {
  loginWithRedirect();
}

function logout() {
  authLogout({ returnTo: window.location.origin });
}
</script>
