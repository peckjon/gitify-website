import React from 'react';
import PropTypes from 'prop-types';

import { Footer } from './footer';
import { GitHubRibbon } from './github-ribbon';

const Layout = ({ children }) => {
  return (
    <>
      <GitHubRibbon />

      {children}

      <Footer />
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
