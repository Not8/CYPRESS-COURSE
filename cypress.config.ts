import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl: "http://uitestingplayground.com/",
    setupNodeEvents(on, config) {
      
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
