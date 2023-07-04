import { NextApiRequest, NextApiResponse } from 'next';
import { fetchJob } from '../../utils/fetchJob';
import { Job } from '../../types/index';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const {
    query: { id },
  } = req;

  try {
    const job: Job = await fetchJob(id as string);
    res.status(200).json(job);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}