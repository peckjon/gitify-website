import '../../styles/globals.css';
import type { AppProps } from 'next/app';
import Script from 'next/script';

import { GA_ID } from '../constants';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />

      {/* Google Analytics */}
      {GA_ID && (
        <Script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
        />
      )}
      {GA_ID && (
        <Script
          id="gtm"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
            
              gtag('config', '${GA_ID}');
            `,
          }}
        />
      )}
    </>
  );
}

export default MyApp;
