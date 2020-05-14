var fetch = require('node-fetch');

const redis = require("redis");
const client = redis.createClient();

const { promisify } = require("util");
const getAsync = promisify(client.get).bind(client);  // it ocnverts client.get function to the promise
const setAsync = promisify(client.get).bind(client);

const baseUrl = `https://jobs.github.com/positions.json`;

async function fetchGithub(){

  let resultCount = 1, onPage = 0;  // starting variables for loop
  const allJobs = []; // holds results getting back from API

  while(resultCount > 0){
    try{
      const res = await fetch(`${baseUrl}?page=${onPage}`);
      const jobs = await res.json();
      allJobs.push(...jobs);
  
      resultCount = jobs.length;  // if 0, break the loop
      
      console.log('got', resultCount, 'jobs');
      onPage++;
    } catch(err) {
      console.log('error: ', err);
    };
  }

  console.log('got', allJobs.length, 'jobs');
  
}


  fetchGithub();



module.exports = fetchGithub;