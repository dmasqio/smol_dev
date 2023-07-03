import React, { ReactNode } from 'react';
import Head from 'next/head';
import '../styles/Layout.module.css';

type Props = {
  children?: ReactNode;
  title?: string;
};

const Layout = ({ children, title = 'Job Board' }: Props) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <header>
      <nav>
        <img src="/logo.svg" alt="Logo" />
      </nav>
    </header>
    {children}
    <footer>
      <hr />
      <span>Job Board © 2022</span>
    </footer>
  </div>
);

export default Layout;