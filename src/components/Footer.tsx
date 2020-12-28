import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

export const Footer = ({ location }) => {
  const isHomepage = location && location.pathname === '/';

  return (
    <div
      className={`bg-gray-800 text-white text-sm py-10 px-3 ${
        isHomepage ? 'mt-0' : 'mt-12'
      }`}
    >
      <div className="container mx-auto flex flex-col item-center text-center">
        <div className="mt-1 mb-4">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/manosim/gitify/"
            aria-label="GitHub"
            className="text-white hover:text-gray-400 mx-2 p-1"
          >
            <FontAwesomeIcon icon={faGithub} fixedWidth className="text-2xl" />
          </a>
        </div>

        <div className="my-3">
          Copyright © <a href="/">Gitify</a> {new Date().getFullYear()}.
          Developed by{' '}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.manos.im/"
            aria-label="Link to personal website"
            className="hover:text-gray-400"
          >
            Emmanouil Konstantinidis
          </a>
          .
        </div>
      </div>
    </div>
  );
};
