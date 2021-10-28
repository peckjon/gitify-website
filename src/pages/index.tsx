import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import React from 'react';
import styles from '../../styles/Home.module.css';
import { Hero } from '../components/Hero';
import { Layout } from '../components/Layout';
import { SectionRow } from '../components/SectionRow';
import { SITE_URL } from '../constants';

const openSourceLibs = [
  {
    name: 'React JS',
    link: 'https://reactjs.org/',
    image: '/images/logos/react.png',
  },

  {
    name: 'Typescript',
    link: 'https://www.typescriptlang.org/',
    image: '/images/logos/typescript.png',
  },
  {
    name: 'Tailwind CSS',
    link: 'https://tailwindcss.com/',
    image: '/images/logos/tailwindcss.png',
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

const sectionTitleClassName = 'mb-4 text-2xl font-semibold';

const Home: NextPage = () => {
  return (
    <Layout pageTitle="GitHub notifications on your menu bar">
      <Hero />

      <SectionRow
        largeSide="left"
        main={
          <>
            <h3 className={sectionTitleClassName}>
              All your GitHub notifications on your desktop. Nice &amp; Easy.
            </h3>

            <div className="text-xl font-light">
              Ever got lost with GitHub notifications? Too many emails? Gitify
              is all about making your life easier. Sitting on your menu bar, it
              informs you for any GitHub notifications without being annoying
              and of course without adverts. It just gets the job done. Works
              with GitHub and{' '}
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://enterprise.github.com/"
              >
                GitHub Enterprise
              </a>
              . You can even connect <strong>multiple</strong> accounts.
            </div>
          </>
        }
        screenshotPath="/images/all-read.png"
        screenshotAlt="Screenshot when there are no notifications read"
      />

      <SectionRow
        isDark
        largeSide="right"
        main={
          <>
            <h3 className={sectionTitleClassName}>
              It&apos;s about your preferences.
            </h3>
            <div className="text-xl font-light">
              Gitify will notify you every time you receive a notification by
              playing a sound (not an annoying one - it&apos;s a promise),
              showing native mac OS notifications or by just turning its tray
              icon to green. It is not there to interupt your workflow or
              distract you, you can customize your settings to your preference.
            </div>
          </>
        }
        screenshotPath="/images/settings.png"
        screenshotAlt="Your Preferences, Settings"
      />

      <SectionRow
        largeSide="left"
        main={
          <>
            <h3 className={sectionTitleClassName}>
              Free &amp; Open Source. It&apos;s ours.
            </h3>
            <div className="text-xl font-light">
              Gitify is based on{' '}
              <a
                href="https://www.electronjs.org/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Electron
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
                href="https://tailwindcss.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Tailwind CSS
              </a>{' '}
              and more awesome open source libraries. Written in{' '}
              <a
                href="https://www.typescriptlang.org/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Typescript
              </a>
              .
            </div>
          </>
        }
        extras={
          <div className="flex flex-wrap justify-center md:max-w-lg">
            {openSourceLibs.map((item, index) => (
              <div className="hover:bg-gray-200 px-2 py-2 m-4" key={index}>
                <a href={item.link} target="_blank" rel="noopener noreferrer">
                  <img className="w-12" src={item.image} alt={item.name} />
                </a>
              </div>
            ))}
          </div>
        }
      />
    </Layout>
  );
};

export default Home;
