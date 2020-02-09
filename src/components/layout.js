import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <>
      {children}

      <div className="container-fluid bg-light py-3 mt-5 text-center">
        <div className="row">
          <div className="col-12">
            Copyright{' '}
            <a href="https://www.gitify.io/">{data.site.siteMetadata.title}</a>©{' '}
            {new Date().getFullYear()}.
          </div>
        </div>
      </div>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
