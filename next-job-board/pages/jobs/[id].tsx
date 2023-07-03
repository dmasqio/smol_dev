```tsx
import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';
import Layout from '../../components/Layout';
import JobItem from '../../components/JobItem';
import { Job } from '../../types';
import { fetchJob } from '../../utils/fetchJob';

const JobPage = ({ job }: { job: Job }) => {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <Layout title={job.title}>
      <JobItem job={job} />
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const job = await fetchJob(params.id as string);
  return { props: { job } };
};

export default JobPage;
```