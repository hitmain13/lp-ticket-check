import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl: 'https://linkinpark.com',
    defaultCommandTimeout: 4000
  },
});
