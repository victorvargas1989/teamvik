const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    chromeWebSecurity:false,
    pageLoadTimeout: 120000,
    setupNodeEvents(on, config) {
      on('before:browser:launch', (browser = {}, launchOptions)=>{
        if(browser.family === 'chromium'){
          launchOptions.args.push('disabled-web-security');
          return launchOptions;
        }
      })
    },
  },
});
