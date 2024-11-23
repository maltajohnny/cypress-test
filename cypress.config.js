const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://auth0.com/",
    viewportWidth: 1366,
    viewportHeight:  800,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
