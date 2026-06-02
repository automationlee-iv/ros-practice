const { defineConfig } = require("cypress");

module.exports = defineConfig({
  allowCypressEnv: false,
  viewportHeight: 1080,
  viewportWidth: 1920,
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    overwrite: true,
    charts: true,
    reportPageTitle: 'Automation Test Report',
    reportFilename: 'Automation-lee-report',
    showDuration: true,
    showPassed: true,
    showFailed: true,
    showSkipped: true 
  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require('cypress-mochawesome-reporter/plugin')(on);
    },
  },
});
