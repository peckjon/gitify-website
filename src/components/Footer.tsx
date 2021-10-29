import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { GithubIcon } from '../icons/Github';

export const Footer: React.FC = () => {
  const router = useRouter();

  const isHomepage = router.pathname === '/';

  return (
    <div
      className={`bg-gray-800 text-white text-sm py-10 px-3 ${
        isHomepage ? 'mt-0' : 'mt-12'
      }`}
    >
      <div className="container mx-auto flex flex-col items-center text-center">
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/manosim/gitify/"
          aria-label="GitHub"
          className="mt-1 mb-4 mx-2 p-1 text-white hover:text-gray-400"
        >
          <GithubIcon className="w-6" />
        </a>

        <div className="my-3">
          Copyright © <Link href="/">Gitify</Link> {new Date().getFullYear()}.
          Developed by{' '}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.manos.im/"
            aria-label="Link to personal website"
            className="hover:text-gray-400"
          >
            Manos Konstantinidis
          </a>
          .
        </div>
      </div>
    </div>
  );
};
