import { defineConfig } from 'cypress';

export default defineConfig({
  projectId: '1i4gtn',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: 'http://localhost:3000',
  },
});
