//const { defineConfig } = require("cypress");

//module.exports = defineConfig({
 // e2e: {
    //setupNodeEvents(on, config) {
      /// implement node event listeners here
  // },
    const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // bind les événements qu'on veut
      on('<event>', (arg1, arg2) => {
        // plugin stuff here
      })
    },
  },

})
  //};
//});
