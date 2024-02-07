import React from 'react';
import Head from "next/head";
import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  const Layout = Component.layout || (({ children }) => <>{children}</>);
  const title = "ModiDoc  ";

  if (Component.Container) {
    return (
      <>
        <Head>
          <title>{title}</title>
        </Head>
        <Component.Container>
          <Component {...pageProps} />
        </Component.Container>

      </>
    );
  }
  return (
    <div>
      <React.Fragment>
        <Head>
          <title>{title}</title>
        </Head>
        <Layout>
          <Component {...pageProps} />
        </Layout>

      </React.Fragment>
    </div>
  )
}
