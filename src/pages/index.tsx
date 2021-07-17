import React from 'react';
import Head from 'next/head';

import CurrentEpochTime from 'containers/CurrentEpochTime';
import EpochTimeConverter from 'containers/EpochTimeConverter';

const IndexPage: React.FC<{}> = () => {
  return (
    <>
      <Head>
        <meta name="robots" content="noindex, nofollow" />
        <meta name="viewport" content="viewport-fit=cover" />

        <link
          rel="apple-touch-icon"
          href="/apple-touch-icon.png"
          sizes="180x180"
        />
        <link rel="shortcut icon" href="/img/epoch.ico" />
        <link
          rel="icon"
          href="/favicon-192x192.png"
          type="image/png"
          sizes="192x192"
        />
        <link
          rel="icon"
          href="/favicon-32x32.png"
          type="image/png"
          sizes="32x32"
        />
      </Head>

      <main>
        <CurrentEpochTime />

        <EpochTimeConverter />
      </main>
    </>
  );
};

export default IndexPage;
