import * as React from 'react';
import { useStaticQuery, Link, graphql } from 'gatsby';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Logo } from './Logo';
import { WindowLocation } from '@reach/router';

export const Navbar = ({ location }: { location: WindowLocation }) => {
  const data = useStaticQuery(graphql`
    query SitePages {
      site {
        siteMetadata {
          menuLinks {
            name
            path
          }
        }
      }
    }
  `);

  return (
    <nav className="bg-gray-navbar">
      <div className="container max-w-5xl mx-auto flex items-center justify-between px-12 py-6">
        <div className="flex items-center flex-shrink-0 text-white mr-6">
          <a href="/">
            <Logo className="w-8" />
          </a>
        </div>

        <div className="flex justify-end">
          <ul className="flex flex-row items-center list-none">
            {data.site.siteMetadata.menuLinks.map((item) => (
              <li key={item.name.toLowerCase()}>
                <Link
                  className={`px-2 py-3 font-semibold ${
                    location.pathname === item.path
                      ? 'text-gray-200'
                      : 'text-white'
                  } hover:text-gray-300`}
                  to={item.path}
                >
                  {item.name}
                </Link>
              </li>
            ))}

            <li>
              <a
                className="ml-2 px-2 py-3 text-2xl text-white hover:text-gray-300"
                rel="noopener noreferrer"
                href="https://github.com/manosim/gitify/"
              >
                <FontAwesomeIcon icon={faGithub} />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
