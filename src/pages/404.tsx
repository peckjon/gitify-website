import React from 'react';
import { WindowLocation } from '@reach/router';

import { Layout } from '../components/Layout';
import { SEO } from '../components/Seo';

const NotFoundPage = ({ location }: { location: WindowLocation }) => (
  <Layout location={location}>
    <SEO title="404: Not found" />
    <h1>NOT FOUND</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </Layout>
);

export default NotFoundPage;
