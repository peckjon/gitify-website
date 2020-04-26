import React from 'react';
import { Flex } from 'rebass/styled-components';
import styled from 'styled-components';

import { Layout } from '../components/layout';
import { SEO } from '../components/seo';

// prettier-ignore
const content = [
  {
    id: '1',
    question: "My notifications aren't showing?",
    answer: (<>Some organisations require applications to request access before allowing access to any data (including notifications) about their repositories. To check if Gitify is approved by your organisation you can go to <a href='https://github.com/settings/applications' target='_blank' rel="noopener noreferrer">settings</a>, then click on <strong>Gitify</strong> and scroll to <strong>Organization access</strong>.</>),
  },
  {
    id: '2',
    question: "Something looks wrong - How can I debug?",
    answer: 'You can debug Gitify by pressing alt + command + I. This will open the dev tools and then you can see any logs, network requests etc.',
  },
];

const Title = styled.h3`
  font-size: 2.85rem;
  font-weight: 300;

  line-height: 3.25rem;
  margin-bottom: 0.55rem;
`;

const Question = styled.h3`
  font-weight: 700;
  margin-top: 1.25rem;
`;

const Answer = styled.div`
  font-size: 1.15rem;
`;

const CallbackPage = () => (
  <Layout>
    <SEO title="Frequently Asked Questions" />

    <Flex
      flexDirection="column"
      sx={{ maxWidth: 960, mx: 'auto' }}
      px={3}
      mb={5}
    >
      <Title>Frequently Asked Questions</Title>

      {content.map((item) => (
        <div key={item.id}>
          <Question>{item.question}</Question>
          <Answer>{item.answer}</Answer>
        </div>
      ))}
    </Flex>
  </Layout>
);

export default CallbackPage;
