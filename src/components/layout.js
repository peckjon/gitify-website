import React from 'react';
import PropTypes from 'prop-types';
import { createGlobalStyle, ThemeProvider } from 'styled-components';

import { Footer } from './footer';
import { GitHubRibbon } from './github-ribbon';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    background-color: #fff;
    -webkit-font-smoothing: antialiased;
  }
`;

const theme = {
  colors: {
    primary: '#203354',
    success: '#147D3B',
    successDark: '#006422',

    lightGray: '#f8f9fa',
  },

  buttons: {
    success: {
      color: 'white',
      bg: 'success',
      ':hover,:focus,.active': {
        bg: 'successDark',
      },
    },
  },

  variants: {
    link: {
      color: 'primary',
      textDecoration: 'none',
      ':hover,:focus,.active': {
        color: 'primary',
        textDecoration: 'underline',
      },
    },
  },
};

const Layout = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <GitHubRibbon />

      {children}

      <Footer />
    </ThemeProvider>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
