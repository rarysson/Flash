import { createApp } from "vue";
import { createAuth0 } from "@auth0/auth0-vue";
import { router } from "./router";

import App from "./App.vue";

import "./main.css";

const app = createApp(App);

app.use(
  createAuth0({
    domain: import.meta.env.VITE_AUTH0_DOMAIN,
    client_id: import.meta.env.VITE_AUTH0_CLIENT_ID,
    redirect_uri: window.location.origin
  })
);
app.use(router);

app.mount("#app");
