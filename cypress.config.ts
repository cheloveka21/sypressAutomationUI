import { defineConfig } from "cypress";
require("dotenv").config();

export default defineConfig({
  reporter: "cypress-mochawesome-reporter",
  e2e: {
    //parseSpecialCharSequences:false,
    baseUrl: "https://uitestingplayground.com",
    setupNodeEvents(on, config) {
      //reporter = 'cypress-mochawesome-reporter'
      require("cypress-mochawesome-reporter/plugin")(on);
      // implement node event listeners here
    },
    env: {
      stage: "https://stage.pasv.us",
      prod: "https://coding.pasv.us/course",
      info: "Hello World!",
      base: "https://uitestingplayground.com",
      demoQA: "https://demoqa.com",
      homeWork: "https://play1.automationcamp.ir/expected_conditions.html",
      herokuapp: "https://the-internet.herokuapp.com",
      homeWorkiframe: "https://play1.automationcamp.ir",
      email: 'cheloveka21@gmail.com',
      password: 'Lysenko1984',
    },
  },

  retries: {
    runMode: 2,
    openMode: 2,
  },
  video: true,
    screenshotOnRunFailure: true,
  defaultCommandTimeout: 16_000,
  reporterOptions: {
    charts: true,
    reportPageTitle: "LecturePASV",
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,
  },
});
