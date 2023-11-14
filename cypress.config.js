const { defineConfig } = require('cypress');

module.exports = defineConfig({
  env: {
    fixtureFile: 'data.json',
    defaultCommandTimeout: 60000,
    requestTimeout: 60000,
    responseTimeout: 60000,
    pageLoadTimeout: 60000,
    chromeWebSecurity: false,
    experimentalSessionSupport: true,
  },
  e2e: {
    baseUrl: 'https://www.gamesforthebrain.com/game/checkers/',
    specPattern: ['cypress/tests/**/*.{js,jsx,ts,tsx}'],
    testIsolation: false,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
