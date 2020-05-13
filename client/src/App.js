import React from 'react';
import logo from './logo.svg';
import './App.css';
import Jobs from './Jobs';

function App() {

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
  return (
    <div className="App">
      <Jobs jobs={mockJobs} />
    </div>
  );
}

export default App;
