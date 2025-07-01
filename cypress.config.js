const { defineConfig } = require("cypress");

module.exports = defineConfig({
  screenshotOnRunFailure: true,
  video: true,
  reporter: "cypress-mochawesome-reporter",
  reporterOptions: {
    charts: true,
    reportPageTitle: "E2E",
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: true,
    saveJson: true,
    reportDir: "cypress/reports",

  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require("cypress-mochawesome-reporter/plugin")(on);
    },
  },
});
