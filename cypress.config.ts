import { defineConfig } from "cypress";

const { verifyDownloadTasks } = require('cy-verify-downloads');

export default defineConfig({
  e2e: {
    baseUrl: "http://uitestingplayground.com/",
    setupNodeEvents(on, config) {
      on('task', verifyDownloadTasks);
    },
    env:{
      demoVar: "Hi!", 
      demoQA: "https://demoqa.com/",
      herokuApp: "https://the-internet.herokuapp.com/",
      globalSqa: "https://www.globalsqa.com/",
    },
  },
  //pageLoadTimeout:2000
});
