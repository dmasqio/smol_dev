import fetch from 'node-fetch';
import { Job } from '../types/index';

const fetchJobs = async (): Promise<Job[]> => {
  const res = await fetch(process.env.JOB_API_URL as string);
  const data = await res.json();

  return data.jobs as Job[];
};

export default fetchJobs;