import { WindowLocation } from '@reach/router';
import * as React from 'react';

import { Footer } from './Footer';
import { Navbar } from './Navbar';

export const Layout = ({
  children,
  location,
  hideFooter,
}: {
  children: React.ReactNode;
  location: WindowLocation;
  hideFooter?: boolean;
}) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar location={location} />
      {children}
      {!hideFooter && <Footer location={location} />}
    </div>
  );
};
