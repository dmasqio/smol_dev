import React from 'react';
import JobItem from './JobItem';
import { Job } from '../types/index';

interface JobListProps {
  jobs: Job[];
}

const JobList: React.FC<JobListProps> = ({ jobs }) => {
  return (
    <div>
      {jobs.map((job) => (
        <JobItem key={job.id} job={job} />
      ))}
    </div>
  );
};

export default JobList;