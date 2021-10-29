import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Bowser from 'bowser';
import { format, parseISO } from 'date-fns';

import { Logo } from './Logo';
import { Assets, LatestRelease } from '../types';
import { DownloadIcon } from '../icons/Download';

const REPO_URL = 'https://api.github.com/repos/manosim/gitify/releases/latest';
const REPO_RELEASES_URL = 'https://github.com/manosim/gitify/releases/latest';

interface DownloadLink {
  os: string;
  name: string;
  url: string | null;
}
interface DownloadLinks {
  primary: DownloadLink[];
  alt: DownloadLink[];
}

const getDownloadLinks = (assets: Assets[]): DownloadLinks => {
  const getAssetLink = (filenameRegex: RegExp): string | null => {
    const asset = assets.find((item) => item.name.match(filenameRegex));
    return asset ? asset.browser_download_url : null;
  };

  const supportedOSs: DownloadLink[] = [
    {
      os: 'macOS',
      name: 'macOS (Universal)',
      url: getAssetLink(/Gitify-\d.\d.\d-universal.dmg/g),
    },
    {
      os: 'Windows',
      name: 'Windows',
      url: getAssetLink(/Gitify-Setup-\d.\d.\d.exe/g),
    },
    {
      os: 'Linux',
      name: 'Linux',
      url: getAssetLink(/Gitify-\d.\d.\d.AppImage/g),
    },
  ];

  const isWindowAvailable = typeof window !== 'undefined' && window.navigator;
  const currentOs = isWindowAvailable
    ? Bowser.parse(window.navigator.userAgent).os.name
    : 'macOS'; // macOS, Windows, Linux

  const primaryLinks = supportedOSs.filter(
    ({ os, url }) => url && os === currentOs
  );
  const primaryLinksOSs = primaryLinks.map(({ os }) => os);
  const alt = supportedOSs.filter(
    ({ os, url }) => !primaryLinksOSs.includes(os) && url
  );

  return {
    primary: primaryLinks.length ? primaryLinks : [supportedOSs[0]],
    alt,
  };
};

const releaseDetailsClassName = 'text-sm mt-4';

export const Hero = () => {
  const [downloadLinks, setDownloadLinks] = useState<DownloadLinks>(undefined!);
  const [version, setVersion] = useState<string>();
  const [releaseDate, setReleaseDate] = useState<string>();
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setFailed(false);

      try {
        const response = await axios(REPO_URL);
        const data: LatestRelease = response.data;
        const parsedDate = parseISO(data.published_at.slice(0, -1));
        const downloadLinks = getDownloadLinks(data.assets);
        setDownloadLinks(downloadLinks);
        setVersion(data.tag_name);
        setReleaseDate(format(parsedDate, 'dd/MM/yyyy'));
      } catch (_) {
        setFailed(true);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="bg-gradient-to-tr from-gray-200 to-gray-100">
      <div className="container flex flex-col md:flex-row items-center max-w-5xl mx-auto px-12 py-16">
        <div className="flex-grow">
          <Logo className="w-24 mb-4" isDark />

          <h1 className="text-4xl font-semibold">Gitify</h1>

          <h4 className="mt-2 text-3xl font-light">
            Your GitHub notifications <br /> on your menu bar.
          </h4>

          {!failed && version && (
            <div className={releaseDetailsClassName}>
              <div className="flex">
                {downloadLinks.primary.map((item, index) => {
                  return item.url ? (
                    <a
                      key={item.name.toLocaleLowerCase().replace(' ', '_')}
                      href={item.url}
                      className={`flex items-center mb-3 px-4 py-3 font-semibold text-white rounded-md bg-green-600 hover:bg-green-700 ${
                        downloadLinks.primary.length > 1 &&
                        downloadLinks.primary.length - 1 === index
                          ? 'md:ml-4'
                          : ''
                      }`}
                    >
                      <DownloadIcon className="w-4 h-4 mr-2" />{' '}
                      <span>{item.name}</span>
                    </a>
                  ) : null;
                })}
              </div>

              <div>
                <div>Current Version: {version}.</div>
                <div>Released on {releaseDate}.</div>
                {downloadLinks.alt.length > 0 && (
                  <div>
                    Also available on{' '}
                    {downloadLinks.alt
                      .map((platform) => (
                        <a
                          key={platform.name
                            .toLocaleLowerCase()
                            .replace(' ', '_')}
                          href={platform.url!}
                        >
                          {platform.name}
                        </a>
                      ))
                      .reduce((prev, next) => [prev, ', ', next] as any)}
                    .
                  </div>
                )}
              </div>
            </div>
          )}

          {failed && (
            <div className={releaseDetailsClassName}>
              <div>
                <a
                  className="inline-block mb-3 px-3 py-2 font-semibold text-white rounded-md bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600"
                  href={REPO_RELEASES_URL}
                >
                  View GitHub Releases
                </a>

                <div>Couldn&apos;t get latest version.</div>
              </div>
            </div>
          )}
        </div>

        <div className="">
          <img
            className="block w-full max-w-sm mx-auto h-auto shadow-2xl rounded-xl transform rotate-6 mt-16 mb-8 md:ml-16 md:my-16"
            src="/images/mockup.png"
            alt="Gitify - Mock up/Screenshot"
          />
        </div>
      </div>
    </div>
  );
};
