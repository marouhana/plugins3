//const { defineConfig } = require("cypress");

//module.exports = defineConfig({
 // e2e: {
    //setupNodeEvents(on, config) {
      /// implement node event listeners here
  // },
    const { defineConfig } = require('cypress')
     
module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
      // bind les événements qu'on veut
      //on('<event>', (arg1, arg2) => {
        // plugin stuff here
      //)
    },
  },

})
  //};
//});
