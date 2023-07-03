import { GetServerSideProps } from 'next';
import { Job } from '../types/index';
import { fetchJobs } from '../utils/fetchJobs';
import Layout from '../components/Layout';
import JobList from '../components/JobList';
import styles from '../styles/Home.module.css';

interface HomeProps {
  jobs: Job[];
}

const Home: React.FC<HomeProps> = ({ jobs }) => {
  return (
    <Layout title="Job Board">
      <div className={styles.container}>
        <h1 className={styles.title}>Job Board</h1>
        <JobList jobs={jobs} />
      </div>
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const jobs = await fetchJobs();
  return { props: { jobs } };
};

export default Home;