import * as React from 'react';
import Head from 'next/head';

import { Footer } from './Footer';
import { Navbar } from './Navbar';
import { manifest, siteMetadata, SITE_URL } from '../constants';

interface IProps {
  pageTitle: string;
  hideFooter?: boolean;
}

export const Layout: React.FC<IProps> = ({
  children,
  hideFooter,
  pageTitle,
}) => {
  const title = React.useMemo(
    () => `${pageTitle} - ${siteMetadata.title}`,
    [pageTitle]
  );
  const ogImage = React.useMemo(() => `${SITE_URL}/images/social.png`, []);

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={siteMetadata.description} />

        <link rel="icon" href="/images/favicon.ico" />

        {/* Twitter Meta Tags */}
        <meta property="og:title" content={title} />
        <meta property="og:description" content={siteMetadata.description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={SITE_URL} />
        <meta property="og:image" content={ogImage} />

        <meta name="theme-color" content={manifest.themeColor} />
        <meta
          name="google-site-verification"
          content="jJNnPZ2wu7F1tlSab57og1N3RNrMqhzTCzRrbztY8WU"
        />
      </Head>

      <div className="min-h-screen flex flex-col">
        <Navbar />
        {children}
        {!hideFooter && <Footer />}
      </div>
    </>
  );
};
