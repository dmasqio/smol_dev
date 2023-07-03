import fetch from 'node-fetch';
import { Job } from '../types/index';

const fetchJob = async (id: string): Promise<Job> => {
  const response = await fetch(`${process.env.JOB_API_URL}/${id}`);
  
  if (!response.ok) {
    throw new Error('An error occurred while fetching the job');
  }

  const job: Job = await response.json();
  return job;
};

export default fetchJob;