import React from 'react';


const Job = ({ job }) => {
  return (
    <div className="job">
      <span>{job.title}</span>
      <span>{job.company}</span>
    </div>
  )
}

export default Job
