import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vitePugPlugin from "vite-plugin-pug-transformer";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), vitePugPlugin({})]
});
