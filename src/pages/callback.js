import React from 'react';
import { Link } from 'gatsby';
import { Link as RebassLink, Box, Heading } from 'rebass/styled-components';
import styled from 'styled-components';

import { Layout } from '../components/layout';
import { Logo } from '../components/logo';
import { SEO } from '../components/seo';

const Title = styled(Heading)`
  font-size: 2.85rem;
  font-weight: 300;

  line-height: 3.25rem;
  margin-top: 0;
  margin-bottom: 0.25rem;
`;

const Paragraph = styled.p`
  font-size: 1.25rem;
  font-weight: 300;
`;

const CallbackPage = () => (
  <Layout hideFooter>
    <SEO title="Callback - Gitify" />

    <Box display="flex" flexDirection="column" alignItems="center" py="3rem">
      <Logo
        style={{
          maxWidth: '5rem',
          marginBottom: '3rem',
        }}
        isDark
      />

      <Title as="h2">This is a callback page.</Title>
      <Paragraph>There's not much to see in this page.</Paragraph>

      <RebassLink as={Link} to="/">
        Go back to the homepage
      </RebassLink>
    </Box>
  </Layout>
);

export default CallbackPage;
