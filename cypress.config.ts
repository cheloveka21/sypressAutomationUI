import { defineConfig } from "cypress";
require('dotenv').config()

export default defineConfig({
  e2e: {
    //parseSpecialCharSequences:false,
    baseUrl:'https://uitestingplayground.com',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    env:{
      stage:'https://stage.pasv.us',
      prod:'https://coding.pasv.us/course',
      info:'Hello World!',
      base: 'https://uitestingplayground.com',
      demoQA: 'https://demoqa.com',
      homeWork: 'https://play1.automationcamp.ir/expected_conditions.html',
      herokuapp: 'https://the-internet.herokuapp.com'
    },
  },
retries: {
  runMode: 2,
  openMode: 2,
},
  defaultCommandTimeout: 16_000,
});
