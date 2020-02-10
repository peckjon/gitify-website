import React from 'react';
import styled from 'styled-components';
import Octicon, { MarkGithub } from '@primer/octicons-react';

const FooterWrapper = styled.div`
  display: flex;

  padding: 2rem;
  font-size: 0.8rem;
`;

export const Footer = () => {
  return (
    <FooterWrapper className="container-fluid bg-light py-4 mt-5 text-center">
      <div class="container">
        <div class="row">
          <div class="col d-flex justify-content-between">
            <span>
              Copyright © <a href="https://www.gitify.io/">Gitify</a>{' '}
              {new Date().getFullYear()}.
            </span>

            <a href="https://www.gitify.io/">
              <Octicon icon={MarkGithub} />
            </a>
          </div>
        </div>
      </div>
    </FooterWrapper>
  );
};
