import { defineConfig } from "cypress";

const { verifyDownloadTasks } = require('cy-verify-downloads');
const xlsx = require('node-xlsx').default;
const fs = require('fs');
const path = require('path');
const mariadb = require('mariadb/callback');


export default defineConfig({
  e2e: {
    baseUrl: "http://uitestingplayground.com/",
    setupNodeEvents(on, config) {
      on('task', verifyDownloadTasks);
      on('task', {
        queryDb: (query) =>{
          return queryTestDB(query, config);
        },
      });
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
      mobileViewportBreackpoint: 400,
      demoQA: "https://demoqa.com/",
      herokuApp: "https://the-internet.herokuapp.com/",
      globalSqa: "https://www.globalsqa.com/",
      db: {
        host: 'localhost',
        user: 'pena',
        password: '010011not8', 
        database: 'CypressCourse',
      },
    },
  },
  //pageLoadTimeout:2000
});

async function queryTestDB(query, config){
  const conn = await mariadb.createConnection(config.env.db);
    conn.connect(err => {
      if (err) {
        console.log("Not connected due to error: " + err);
      }
    });
    return new Promise((resolve, reject) => {
      conn.query(query, (error, results) => {
        if (error) reject(error);
        else {
          conn.end();
          var error_json_obj = JSON.parse(JSON.stringify(results, (key, value) =>
          typeof value === 'bigint'
              ? value.toString()
              : value
          ));
          return resolve(error_json_obj); 
        }
      });
    });
}
