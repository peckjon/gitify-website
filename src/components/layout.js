import React from 'react';
import PropTypes from 'prop-types';
import { createGlobalStyle, ThemeProvider } from 'styled-components';

import { Footer } from './footer';
import { Navbar } from './navbar';

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
    gray: '#ACADAE',
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
    navbarLink: {
      display: 'inline-block',
      color: 'white',
      textDecoration: 'none',
      fontSize: '0.95rem',

      marginLeft: ['0.75rem', '1rem', '1.25rem'],
      marginRight: ['0.75rem', '1rem', '1.25rem'],

      ':hover,:focus,.active': {
        color: 'gray',
        textDecoration: 'none',
      },
    },
  },
};

export const Layout = ({ children, hideFooter }) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Navbar />

      {children}

      {!hideFooter && <Footer />}
    </ThemeProvider>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  hideFooter: PropTypes.bool,
};

Layout.defaultProps = {
  hideFooter: false,
};
