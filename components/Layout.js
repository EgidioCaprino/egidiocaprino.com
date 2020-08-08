import Head from 'next/head';
import 'bootswatch/dist/journal/bootstrap.min.css';

export default ({ title, children }) => (
  <>
    <Head>
      <title>{ title }</title>
      <base href="/" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="manifest" href="/site.webmanifest" />
      <link rel="icon" type="image/x-icon" href="/favicon.ico" />
    </Head>

    { children }

    <p className="text-center small mt-5">
      Copyright © { new Date().getFullYear() } Egidio Caprino. All rights reserved.
    </p>
  </>
);
