import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { Box, Button, Flex, Heading, Image } from 'rebass/styled-components';
import { format, parseISO } from 'date-fns';
import Octicon, { CloudDownload } from '@primer/octicons-react';

import { Logo } from './logo';

const Container = styled(Box)`
  background: rgb(242, 244, 248);
  background: linear-gradient(
    148deg,
    rgba(242, 244, 248, 1) 0%,
    rgba(213, 220, 235, 1) 100%
  );
  color: ${(props) => props.theme.colors.primary};
  padding: 3rem 0.5rem;
`;

const SiteTitle = styled(Heading)`
  font-size: 2.85rem;
  font-weight: 500;
  line-height: 3.25rem;
  margin-top: 0;
  margin-bottom: 0;
`;

const SiteDesc = styled(Heading)`
  margin-top: 0.75rem;
  margin-bottom: 0;
  font-size: 2.25rem;
  line-height: 2.85rem;
  font-weight: 300;
`;

const ReleaseDetails = styled.div`
  margin-top: 1rem;
  font-size: 0.8rem;
`;

const DownloadIcon = styled(Octicon)`
  margin-right: 0.5rem;
`;

const MockUp = styled(Image)`
  margin-top: 1.25rem;
  margin-bottom: 1.25rem;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

  @media (min-width: 768px) {
    transform: rotate(10deg);
  }
`;

const FILENAME_REGEX = /Gitify-\d.\d.\d.dmg/g;
const REPO_URL = 'https://api.github.com/repos/manosim/gitify/releases/latest';
const REPO_RELEASES_URL = 'https://github.com/manosim/gitify/releases/latest';

export const Header = () => {
  const [downloadURL, setDownloadURL] = useState(null);
  const [version, setVersion] = useState(null);
  const [releaseDate, setReleaseDate] = useState(null);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setFailed(false);

      try {
        const { data } = await axios(REPO_URL);
        const parsedDate = parseISO(data.published_at.slice(0, -1));
        const asset = data.assets.find((item) =>
          item.name.match(FILENAME_REGEX)
        );
        setDownloadURL(asset.browser_download_url);
        setVersion(data.tag_name);
        setReleaseDate(format(parsedDate, 'dd/MM/yyyy'));
      } catch (_) {
        setFailed(true);
      }
    };
    fetchData();
  }, []);

  return (
    <Container width={[1, 1, 1]}>
      <Flex
        flexWrap="wrap"
        sx={{ maxWidth: 960, mx: 'auto' }}
        px={['1rem', '2rem', '2rem']}
      >
        <Box
          width={[1, 1, 1 / 2]}
          display="flex"
          flexDirection="column"
          justifyContent="center"
          p="1rem"
        >
          <Logo
            style={{
              maxWidth: '5rem',
              margin: '0 0 1rem',
            }}
            isDark
          />

          <SiteTitle as="h1">Gitify</SiteTitle>

          <SiteDesc as="h4">
            Your GitHub notifications <br /> on your menu bar.
          </SiteDesc>

          {!failed && version && (
            <ReleaseDetails>
              <Button
                as="a"
                href={downloadURL}
                variant="success"
                mb={3}
                px={3}
                py={2}
              >
                <DownloadIcon icon={CloudDownload} /> macOS
              </Button>

              <div>
                <div>Current Version: {version}.</div>
                <div>Released on {releaseDate}.</div>
              </div>
            </ReleaseDetails>
          )}

          {failed && (
            <ReleaseDetails>
              <div>
                <Button
                  as="a"
                  href={REPO_RELEASES_URL}
                  variant="success"
                  mb={3}
                  px={3}
                  py={2}
                >
                  View GitHub Releases
                </Button>

                <div>Couldn't get latest version.</div>
              </div>
            </ReleaseDetails>
          )}
        </Box>

        <Box
          width={[1, 1, 1 / 2]}
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          p="1rem"
        >
          <MockUp
            style={{
              width: '25rem',
              margin: '2rem 0',
            }}
            id="screenshot"
            src="/images/mockup.png"
            alt="Gitify Desktop App"
          />
        </Box>
      </Flex>
    </Container>
  );
};
