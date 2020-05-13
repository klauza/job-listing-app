var fetch = require('node-fetch');

const baseUrl = `https://jobs.github.com/positions.json`;

async function fetchGithub(){

  let resultCount = 1, onPage = 0;  // starting variables for loop
  const allJobs = []; // holds results getting back from API

  while(resultCount > 0){
    const res = await fetch(`${baseUrl}?page=${onPage}`);
    const jobs = await res.json();
    allJobs.push(...jobs);

    resultCount = jobs.length;  // if 0, break the loop
    
    console.log('got', resultCount, 'jobs');
    onPage++;
  }

  console.log('got', allJobs.length, 'jobs');
  
}

fetchGithub();

module.exports = fetchGithub;