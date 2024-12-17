const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "a9drei",

  e2e: {
    // Disable file watching for better performance (optional)
    watchForFileChanges: false,

    setupNodeEvents(on, config) {
      // Configure mochawesome reporter
      require('cypress-mochawesome-reporter/plugin')(on);
      return config; // Ensure config is returned
    },

    // Enable experimental Studio for a more modern testing experience
    experimentalStudio: true,

    // Add reporter options (optional)
    reporterOptions: {
      reportDir: 'cypress/reports',
      charts: true,
      embeddedScreenshots: true,
      inlineAssets: true
    }
  },
});