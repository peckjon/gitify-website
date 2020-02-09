import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';

const CallbackPage = () => (
  <Layout>
    <SEO title="Callback - Gitify" />
    <h1>This is an empty page.</h1>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
);

export default CallbackPage;
