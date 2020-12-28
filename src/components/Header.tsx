import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Bowser from 'bowser';
import { format, parseISO } from 'date-fns';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloudDownloadAlt } from '@fortawesome/free-solid-svg-icons';

import { Logo } from './Logo';

const REPO_URL = 'https://api.github.com/repos/manosim/gitify/releases/latest';
const REPO_RELEASES_URL = 'https://github.com/manosim/gitify/releases/latest';

const getDownloadLinks = (assets) => {
  const getAssetLink = (filenameRegex) => {
    const asset = assets.find((item) => item.name.match(filenameRegex));
    return asset ? asset.browser_download_url : null;
  };

  const supportedOSs = [
    {
      name: 'macOS',
      url: getAssetLink(/Gitify-\d.\d.\d.dmg/g),
    },
    {
      name: 'Windows',
      url: getAssetLink(/Gitify-Setup-\d.\d.\d.exe/g),
    },
    {
      name: 'Linux',
      url: getAssetLink(/Gitify-\d.\d.\d.AppImage/g),
    },
  ];

  const isWindowAvailable = typeof window !== 'undefined' && window.navigator;
  const currentOs = isWindowAvailable
    ? Bowser.parse(window.navigator.userAgent).os.name
    : 'macOS'; // macOS, Windows, Linux

  const primary =
    supportedOSs
      .filter((os) => os.url !== null)
      .find((os) => os.name === currentOs) || supportedOSs[0];
  const alt = supportedOSs.filter(
    (os) => os.name !== primary.name && os.url !== null
  );
  return {
    primary,
    alt,
  };
};

const releaseDetailsClassName = 'text-sm mt-4';

export const Header = () => {
  const [downloadLinks, setDownloadLinks] = useState(null);
  const [version, setVersion] = useState(null);
  const [releaseDate, setReleaseDate] = useState(null);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setFailed(false);

      try {
        const { data } = await axios(REPO_URL);
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
              <a
                href={downloadLinks.primary.url}
                className="inline-block mb-3 px-3 py-2 font-semibold text-white rounded-md bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600"
              >
                <FontAwesomeIcon className="mr-2" icon={faCloudDownloadAlt} />{' '}
                {downloadLinks.primary.name}
              </a>

              <div>
                <div>Current Version: {version}.</div>
                <div>Released on {releaseDate}.</div>
                {downloadLinks.alt.length > 0 && (
                  <div>
                    Also available on{' '}
                    {downloadLinks.alt
                      .map((platform) => (
                        <a key={platform.name} href={platform.url}>
                          {platform.name}
                        </a>
                      ))
                      .reduce((prev, next) => [prev, ', ', next])}
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

                <div>Couldn't get latest version.</div>
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
