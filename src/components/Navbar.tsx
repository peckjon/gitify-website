import * as React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { Logo } from './Logo';

import { siteMetadata } from '../constants';
import { GithubIcon } from '../icons/Github';

export const Navbar: React.FC = () => {
  const router = useRouter();

  return (
    <nav className="bg-gray-navbar">
      <div className="container max-w-5xl mx-auto flex items-center justify-between px-12 py-6">
        <div className="flex items-center flex-shrink-0 text-white mr-6">
          <Link href="/">
            <a>
              <Logo className="w-8" />
            </a>
          </Link>
        </div>

        <div className="flex justify-end">
          <ul className="flex flex-row items-center list-none space-x-4">
            {siteMetadata.menuLinks.map((item) => (
              <li key={item.name.toLowerCase()}>
                <Link href={item.path}>
                  <a
                    className={`py-2 px-2 font-light ${
                      router.pathname === item.path
                        ? 'border-b-2 border-white text-white'
                        : 'text-gray-200'
                    } hover:text-gray-300`}
                  >
                    {item.name}
                  </a>
                </Link>
              </li>
            ))}

            <li>
              <a
                className="flex flex-1 py-2 px-2 text-white hover:text-gray-300"
                rel="noopener noreferrer"
                href="https://github.com/manosim/gitify/"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
