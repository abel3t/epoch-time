import React from 'react';
import { AppProps } from 'next/app';

import AppLayout from '../app-layouts/AppLayout';

import 'assets/main.css';
import 'assets/index.css';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <AppLayout>
        <Component {...pageProps} />
      </AppLayout>
    </>
  );
}