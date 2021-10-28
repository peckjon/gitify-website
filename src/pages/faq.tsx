import React from 'react';

import { Layout } from '../components/Layout';

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

const FAQPage: React.FC = () => (
  <Layout pageTitle="Frequently Asked Questions">
    <div className="container max-w-4xl mx-auto px-12 flex-1">
      <div className="text-3xl text-center mt-12 mb-8">
        Frequently Asked Questions
      </div>

      {content.map((item) => (
        <div className="mb-8 text-xl" key={item.id}>
          <div className="font-semibold mb-2">{item.question}</div>
          <div className="">{item.answer}</div>
        </div>
      ))}
    </div>
  </Layout>
);

export default FAQPage;
