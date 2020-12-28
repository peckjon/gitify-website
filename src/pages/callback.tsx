import React from 'react';
import { Link } from 'gatsby';
import { WindowLocation } from '@reach/router';

import { Layout } from '../components/Layout';
import { Logo } from '../components/Logo';
import { SEO } from '../components/Seo';

const CallbackPage = ({ location }: { location: WindowLocation }) => (
  <Layout location={location} hideFooter>
    <SEO title="Callback" />

    <div className="flex flex-col items-center py-12">
      <Logo className="w-48 mt-36 mb-12" isDark />

      <h2 className="text-2xl mb-4">This is a callback page.</h2>
      <p className="text-xl mb-8">There's not much to see in this page.</p>

      <Link to="/">Go back to the homepage</Link>
    </div>
  </Layout>
);

export default CallbackPage;
