import React from 'react';
import Link from 'next/link';

import { Layout } from '../components/Layout';
import { Logo } from '../components/Logo';

const CallbackPage: React.FC = () => (
  <Layout pageTitle="Callback">
    <div className="flex flex-col items-center py-12">
      <Logo className="w-48 mt-36 mb-12" isDark />

      <h2 className="text-2xl mb-4">This is a callback page.</h2>
      <p className="text-xl mb-8">There&apos;s not much to see in this page.</p>

      <Link href="/">Go back to the homepage</Link>
    </div>
  </Layout>
);

export default CallbackPage;
