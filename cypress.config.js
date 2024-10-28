const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  chromeWebSecurity: false,
  e2e: {
    watchForFileChanges: false,
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);

       config.specPattern = [
      'cypress/e2e/LoginTest.cy.js',
      'cypress/e2e/AddToCartTest.cy.js',
        'cypress/e2e/ProductTest.cy.js',
      ]
      return config;
    },
  },
});
