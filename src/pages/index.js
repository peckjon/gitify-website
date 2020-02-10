import React from 'react';
import styled from 'styled-components';

import Layout from '../components/layout';
import { Header } from '../components/header';
import SEO from '../components/seo';

const SectionMain = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const IndexPage = () => (
  <Layout>
    <SEO title="GitHub Notifications on your menu bar" />

    <Header />

    <div className="section container px-3 py-5">
      <div className="row">
        <SectionMain className="col-md-7">
          <h3>
            All your GitHub notifications on your desktop. Nice &amp; Easy.
          </h3>
          <p className="lead">
            Gitify is all about making your life easier. It just does a job.
            Sitting on your dock or tray it informs you for any GitHub
            notifications without being annoying and of course without adverts.
            Works with{' '}
            <strong>
              <a href="https://enterprise.github.com/">GitHub Enterprise</a>
            </strong>{' '}
            and <strong>multiple</strong> accounts.
          </p>
        </SectionMain>

        <div className="col-md-4 col-md-offset-1">
          <img
            className="img-fluid screenshot"
            src="/images/all-read.png"
            alt="Screenshot when there are no notifications read"
          />
        </div>
      </div>
    </div>

    <div className="section container-fluid px-3 py-5 bg-primary text-light">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <img
              className="img-fluid screenshot"
              src="/images/settings.png"
              alt="Your Preferences, Settings"
            />
          </div>
          <SectionMain className="col-md-7 col-md-offset-1">
            <h3>It's about your preferences.</h3>
            <p className="lead">
              Gitify will notify you every time you receive a notification by
              playing a sound (not an annoying one - promise!), by showing a
              native OSX notification or by just turning its tray icon to green.
              It is not there to interupt your workflow or distract you at all.
              It's your buddy.
            </p>
          </SectionMain>
        </div>
      </div>
    </div>

    <div className="container container px-3 py-5">
      <div className="row">
        <SectionMain className="col-md-7">
          <h3>Free &amp; Open Source. It's ours.</h3>
          <p className="lead">
            With Version 3.0.0 being a complete rewrite of the app, Gitify is
            based on{' '}
            <a
              href="https://electron.atom.io/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Electron
            </a>{' '}
            - the base of{' '}
            <a
              href="https://www.nodejs.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              NodeJS
            </a>
            ,{' '}
            <a
              href="https://reactjs.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              React
            </a>
            ,{' '}
            <a
              href="http://redux.js.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Redux
            </a>{' '}
            and more awesome open source libraries.
          </p>
        </SectionMain>

        <div className="col-md-4 col-md-offset-1">
          <img
            className="img-fluid screenshot"
            src="/images/open-source.png"
            alt="Open Source - Electron, Node JS, React, Redux, GitHub."
          />
        </div>
      </div>
    </div>
  </Layout>
);

export default IndexPage;
