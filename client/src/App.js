import React from 'react';
import logo from './logo.svg';
import './App.css';
import Jobs from './Jobs';

const JOB_API_URL = "http://localhost:3001/jobs";

// API
const mockJobs = [
  {
    title: 'SWE 1', company: 'Google'
  },
  {
    title: 'SWE 2', company: 'Apple'
  },
  {
    title: 'SWE 3', company: 'Facebook'
  }
]

// fetch jobs from api
async function fetchJobs(){
  // browser version of fetch, its built-into the browser
  const res = await fetch(JOB_API_URL);
  const json = await res.json();

  console.log({json});
}


function App() {
  const [jobList, updateJobs] = React.useState([]);


  // useeffect takes anonymous function in which we can do:
  // some function calls
  // laso has second argument which is for hooks we want to watch for update, if its empty, fires once (like componentdidmount)
  React.useEffect(()=>{
    fetchJobs();
  }, [])
  
  return (
    <div className="App">
      <Jobs jobs={jobList} />
    </div>
  );
}

export default App;
