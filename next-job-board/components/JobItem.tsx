import React from 'react';
import { Job } from '../types/index';
import styles from '../styles/JobItem.module.css';

interface JobItemProps {
  job: Job;
}

const JobItem: React.FC<JobItemProps> = ({ job }) => {
  return (
    <div className={styles.jobItem}>
      <h2 className={styles.jobTitle}>{job.title}</h2>
      <p className={styles.jobCompany}>{job.company}</p>
      <p className={styles.jobLocation}>{job.location}</p>
      <a href={`/jobs/${job.id}`} className={styles.jobLink}>View Details</a>
    </div>
  );
};

export default JobItem;