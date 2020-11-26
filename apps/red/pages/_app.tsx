import React from 'react';
import { AppProps } from 'next/app';
import Head from 'next/head';
import '../styles/index.scss';

function CustomApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default CustomApp;
