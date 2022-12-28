import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl: "http://uitestingplayground.com/",
    setupNodeEvents(on, config) {
      
    },
  },
  //pageLoadTimeout:2000
});
