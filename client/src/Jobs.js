import React from 'react';
import Typography from '@material-ui/core/Typography';

import Job from './Job';

const Jobs = ({ jobs }) => {
  return (
    <div className="jobs">
      <Typography variant="h1">
        Entry level Software jobs
      </Typography>
      
      {
        jobs.map( (job, i) => <Job key={i} job={job} /> )
      }
    </div>
  )
}

export default Jobs
