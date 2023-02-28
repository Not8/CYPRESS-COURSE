import { defineConfig } from "cypress";

const { verifyDownloadTasks } = require('cy-verify-downloads');
const xlsx = require('node-xlsx').default;
const fs = require('fs');
const path = require('path');


export default defineConfig({
  e2e: {
    baseUrl: "http://uitestingplayground.com/",
    setupNodeEvents(on, config) {
      on('task', verifyDownloadTasks);
      on('task', {
        parseXlsx({filePath}){
          return new Promise((resolve,reject) => {
            try {
              const jsonData = xlsx.parse(fs.readFileSync(filePath));
              resolve(jsonData);
            } catch (error) {
              reject(error);
            }
          })
        }
      })
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
