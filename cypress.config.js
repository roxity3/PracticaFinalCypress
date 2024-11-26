const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    overwrite: true,
    reportFilename: 'reporte-de-prueba',
    timestamp: 'shortDate',
    embeddedScreenshots: true,
    inlineAssets: true,
    ignoreVideos: true
  },

  e2e: {
    viewportWidth: 1280,
    viewportHeight: 720,
    screenshotOnRunFailure: true,
    screenshotsFolder: "cypress/screenshots",
    downloadsFolder: "cypress/downloads/test",
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on)
    },
  },
});
