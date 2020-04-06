import React from 'react';
import styled from 'styled-components';
import Helmet from 'react-helmet';
import { Box, Flex, Heading, Link, Image } from 'rebass/styled-components';

import { Layout } from '../components/layout';
import { Header } from '../components/header';
import { SEO } from '../components/seo';

const Section = styled(Box)`
  background-color: ${(props) =>
    props.isDark ? props.theme.colors.primary : 'white'};
  color: ${(props) => (props.isDark ? 'white' : 'black')};
`;

const SectionMain = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const SectionSide = styled(Box)``;

const SectionTitle = styled(Heading)`
  margin-top: 0;
  margin-bottom: 0.5rem;
  font-size: 1.75rem;
  font-weight: 400;
  line-height: 1.2;
`;

const Paragraph = styled.p`
  font-size: 1.25rem;
  font-weight: 300;
`;

const Screenshot = styled(Image)`
  margin-top: 1.25rem;
  margin-bottom: 1.25rem;
  width: 100%;
  max-width: 25rem;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`;

const LogosListItem = styled.div`
  border: 0;
  border-radius: 0;
  padding: 0.5rem 0.75rem;
  margin: 1rem 0.25rem;
  background-color: ${(props) => props.theme.colors.lightGray};

  &:hover {
    background-color: ${(props) => props.theme.colors.primary};
  }
`;

const LogoItem = styled(Image)`
  width: 3.25rem;
`;

const openSourceLibs = [
  {
    name: 'React JS',
    link: 'https://reactjs.org/',
    image: '/images/logos/react.png',
  },
  {
    name: 'Redux',
    link: 'https://redux.js.org/',
    image: '/images/logos/redux.png',
  },
  {
    name: 'Typescript',
    link: 'https://www.typescriptlang.org/',
    image: '/images/logos/typescript.png',
  },
  {
    name: 'GitHub',
    link: 'https://www.github.com/',
    image: '/images/logos/github.png',
  },
  {
    name: 'Jest',
    link: 'https://jestjs.io/',
    image: '/images/logos/jest.png',
  },
];

const SectionRow = ({ isDark, children }) => (
  <Section isDark={isDark}>
    <Flex
      flexWrap="wrap"
      sx={{ maxWidth: 960, mx: 'auto' }}
      px="2rem"
      py={['2rem', '2rem', '2rem']}
    >
      {children}
    </Flex>
  </Section>
);

const IndexPage = () => (
  <Layout>
    <SEO title="GitHub notifications on your menu bar" />
    <Helmet>
      <meta
        name="google-site-verification"
        content="jJNnPZ2wu7F1tlSab57og1N3RNrMqhzTCzRrbztY8WU"
      />
    </Helmet>

    <Header />

    <SectionRow>
      <SectionSide
        width={[1, 1, 5 / 12]}
        display="flex"
        justifyContent="center"
        p={['1.5rem', '2rem', '3rem']}
      >
        <Screenshot
          alignSelf="baseline"
          className="img-fluid"
          src="/images/settings.png"
          alt="Your Preferences, Settings"
        />
      </SectionSide>

      <SectionMain width={[1, 1, 7 / 12]} p={[4, 4, 0]}>
        <SectionTitle as="h3">It's about your preferences.</SectionTitle>
        <Paragraph>
          Gitify will notify you every time you receive a notification by
          playing a sound (not an annoying one - it's a promise), showing native
          mac OS notifications or by just turning its tray icon to green. It is
          not there to interupt your workflow or distract you, you can customize
          your settings to your preference.
        </Paragraph>
      </SectionMain>
    </SectionRow>

    <SectionRow isDark>
      <SectionMain width={[1, 1, 7 / 12]} p={[4, 4, 0]}>
        <SectionTitle as="h3">
          All your GitHub notifications on your desktop. Nice &amp; Easy.
        </SectionTitle>

        <Paragraph>
          Ever got lost with GitHub notifications? Too many emails? Gitify is
          all about making your life easier. Sitting on your menu bar, it
          informs you for any GitHub notifications without being annoying and of
          course without adverts. It just gets the job done. Works with GitHub
          and{' '}
          <Link variant="linkDark" href="https://enterprise.github.com/">
            GitHub Enterprise
          </Link>
          . You can even connect <strong>multiple</strong> accounts.
        </Paragraph>
      </SectionMain>

      <SectionSide
        width={[1, 1, 5 / 12]}
        display="flex"
        justifyContent="center"
        p={['1.5rem', '2rem', '3rem']}
      >
        <Screenshot
          alignSelf="baseline"
          className="img-fluid"
          src="/images/all-read.png"
          alt="Screenshot when there are no notifications read"
        />
      </SectionSide>
    </SectionRow>

    <SectionRow>
      <SectionMain width={[1, 1, 7 / 12]} p={[4, 4, 0]}>
        <SectionTitle as="h3">Free &amp; Open Source. It's ours.</SectionTitle>
        <Paragraph>
          With version 3 being a complete rewrite of the app, Gitify is based on{' '}
          <Link
            variant="link"
            href="https://electron.atom.io/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Electron
          </Link>
          ,{' '}
          <Link
            variant="link"
            href="https://reactjs.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            React
          </Link>
          ,{' '}
          <Link
            variant="link"
            href="s"
            target="_blank"
            rel="noopener noreferrer"
          >
            Redux
          </Link>{' '}
          and more awesome open source libraries. Written in{' '}
          <Link
            variant="link"
            href="https://www.typescriptlang.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Typescript
          </Link>
          .
        </Paragraph>
      </SectionMain>

      <SectionSide
        width={[1, 1, 5 / 12]}
        display="flex"
        justifyContent="center"
        p={['1.5rem', '2rem', '3rem']}
      >
        <Flex flexWrap="wrap" justifyContent="center" maxWidth={260}>
          {openSourceLibs.map((item, index) => (
            <LogosListItem key={index}>
              <a href={item.link} target="_blank" rel="noopener noreferrer">
                <LogoItem src={item.image} alt={item.name} />
              </a>
            </LogosListItem>
          ))}
        </Flex>
      </SectionSide>
    </SectionRow>
  </Layout>
);

export default IndexPage;
