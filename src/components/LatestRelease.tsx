import Bowser from 'bowser';
import { format, parseISO } from 'date-fns';
import { For, Match, Show, Switch, createResource } from 'solid-js';
import { Download } from '../icons/Download';
import type { Assets, DownloadLink, DownloadLinks, HeroData } from '../types';

const REPO_URL =
  'https://api.github.com/repos/gitify-app/gitify/releases/latest';
const REPO_RELEASES_URL =
  'https://github.com/gitify-app/gitify/releases/latest';
const releaseDetailsClassName = 'text-sm mt-4';

const getDownloadLinks = (assets: Assets[]): DownloadLinks => {
  const getAssetLink = (filenameRegex: RegExp): string => {
    const asset = assets.find((item) => item.name.match(filenameRegex));
    return asset ? asset.browser_download_url : REPO_URL;
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
    ({ os, url }) => url && os === currentOs,
  );
  const primaryLinksOSs = primaryLinks.map(({ os }) => os);
  const alt = supportedOSs.filter(
    ({ os, url }) => !primaryLinksOSs.includes(os) && url,
  );

  return {
    primary: primaryLinks.length ? primaryLinks : [supportedOSs[0]],
    alt,
  };
};

const loadInitialData = async (): Promise<HeroData> => {
  const response = await fetch(REPO_URL);
  const data = await response.json();
  const parsedDate = parseISO(data.published_at.slice(0, -1));
  const downloadLinks = getDownloadLinks(data.assets);

  return {
    downloadLinks,
    version: data.tag_name,
    releaseDate: format(parsedDate, 'dd/MM/yyyy'),
  };
};

const LatestReleaseDetails = ({ latest }: { latest: HeroData }) => {
  return (
    <div class={releaseDetailsClassName}>
      <div class="flex">
        <For each={latest.downloadLinks.primary}>
          {(item) => (
            <a
              href={item.url}
              class={`flex items-center mb-3 px-4 py-3 font-semibold text-white rounded-md bg-green-700 hover:bg-green-800 mr-4`}
            >
              <Download className="w-4 h-4 mr-2" />
              <span>{item.name}</span>
            </a>
          )}
        </For>
      </div>

      <div>
        <div>Current Version: {latest.version}.</div>
        <div>Released on {latest.releaseDate}.</div>
        <Show
          when={latest.downloadLinks.alt && latest.downloadLinks.alt.length > 0}
        >
          <div>
            Also available on{' '}
            <For each={latest.downloadLinks.alt}>
              {(platform, index) => (
                <>
                  <a href={platform.url || REPO_RELEASES_URL}>
                    {platform.name}
                  </a>
                  <>
                    {(index() < latest.downloadLinks.alt.length - 1 && ', ') ||
                      '.'}
                  </>
                </>
              )}
            </For>
          </div>
        </Show>
      </div>
    </div>
  );
};

export const LatestRelease = () => {
  const [latest] = createResource(loadInitialData);

  return (
    <Switch fallback={<div class={releaseDetailsClassName}>Loading...</div>}>
      <Match when={latest.loading}>
        <LatestReleaseDetails
          latest={{
            downloadLinks: {
              alt: [],
              primary: [
                {
                  os: '',
                  name: 'Fetching latest release...',
                  url: REPO_RELEASES_URL,
                },
              ],
            },
            version: 'Asking Octocat..',
            releaseDate: 'a sunny day ☀️',
          }}
        />
      </Match>
      <Match when={latest.error}>
        <div class={releaseDetailsClassName}>
          <div class="flex">
            <a
              class="flex items-center mb-3 px-4 py-3 font-semibold text-white rounded-md bg-green-700 hover:bg-green-800"
              href={REPO_RELEASES_URL}
            >
              <Download className="w-4 h-4 mr-2" />{' '}
              <span>View GitHub Releases</span>
            </a>
          </div>

          <div>
            <div>Couldn&apos;t get latest version.</div>
          </div>
        </div>
      </Match>
      <Match when={!latest.loading && !latest.error}>
        <LatestReleaseDetails latest={latest()!} />
      </Match>
    </Switch>
  );
};
