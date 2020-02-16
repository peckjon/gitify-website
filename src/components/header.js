import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { format, parseISO } from 'date-fns';
import Octicon, { CloudDownload } from '@primer/octicons-react';

import { Logo } from './logo';

const Container = styled.div`
  background: rgb(242, 244, 248);
  background: linear-gradient(
    148deg,
    rgba(242, 244, 248, 1) 0%,
    rgba(213, 220, 235, 1) 100%
  );
`;

const SiteTitle = styled.h1`
  font-size: 2.85rem;
  font-weight: 500;
  line-height: 3.25rem;
`;

const SiteDesc = styled.h4`
  margin-top: 0.75rem;
  font-size: 2.25rem;
  line-height: 2.85remrem;
  font-weight: 300;
`;

const ReleaseDetails = styled.div`
  margin-top: 1rem;
  font-size: 0.8rem;
`;

const API_REPO_URL =
  'https://api.github.com/repos/manosim/gitify/releases/latest';

const REPO_RELEASES_URL = 'https://github.com/repos/gitify/releases/latest';

export const Header = () => {
  const [downloadURL, setDownloadURL] = useState(null);
  const [version, setVersion] = useState(null);
  const [releaseDate, setReleaseDate] = useState(null);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setFailed(false);

      try {
        const { data } = await axios(API_REPO_URL);
        const parsedDate = parseISO(data.published_at.slice(0, -1));
        const downloadURL = `https://github.com/manosim/gitify/releases/download/${data.tag_name}/${data.assets[3].name}`;

        setDownloadURL(downloadURL);
        setVersion(data.tag_name);
        setReleaseDate(format(parsedDate, 'dd/MM/yyyy'));
      } catch (_) {
        setFailed(true);
      }
    };
    fetchData();
  }, []);

  return (
    <Container className="container-fluid py-5 px-2 text-primary">
      <div className="container">
        <div className="row">
          <div className="col-md-6 d-flex flex-column justify-content-center">
            <Logo
              style={{
                maxWidth: '5rem',
                margin: '0 0 1rem',
              }}
              isDark
            />

            <SiteTitle>Gitify</SiteTitle>

            <SiteDesc>
              Your GitHub notifications <br /> on your menu bar.
            </SiteDesc>

            {!failed && version && (
              <ReleaseDetails>
                <a
                  className="btn btn-success mb-3 px-3 py-2"
                  id="download-apple"
                  href={downloadURL}
                >
                  <Octicon className="mr-2" icon={CloudDownload} /> macOS
                </a>
                <div>
                  <div>Current Version: {version}.</div>
                  <div>Released on {releaseDate}.</div>
                </div>
              </ReleaseDetails>
            )}

            {failed && (
              <ReleaseDetails>
                <div>
                  <a
                    className="btn btn-success mb-3 px-3 py-2"
                    id="download-apple"
                    href={REPO_RELEASES_URL}
                  >
                    View GitHub Releases
                  </a>

                  <div>Couldn't get latest version.</div>
                </div>
              </ReleaseDetails>
            )}
          </div>

          <div className="col-md-6 d-flex flex-column justify-content-center">
            <img
              className="img-fluid"
              style={{ width: '25rem', display: 'block', margin: '3rem auto' }}
              id="screenshot"
              src="/images/mockup.png"
              alt="Gitify Desktop App"
            />
          </div>
        </div>
      </div>
    </Container>
  );
};
