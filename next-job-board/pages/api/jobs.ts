import { NextApiRequest, NextApiResponse } from 'next';
import { Job } from '../../types/index';
import { fetchJobs } from '../../utils/fetchJobs';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Job[]>
) {
  try {
    const jobs = await fetchJobs();
    res.status(200).json(jobs);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}