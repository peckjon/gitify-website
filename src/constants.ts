export const siteMetadata = {
  title: 'Gitify',
  url: 'https://gitify.io',
  description: 'GitHub notifications on your menu bar',
  repo: {
    fullName: 'gitify-app/gitify',
    owner: 'gitify-app',
    name: 'gitify',
  },
  keywords:
    'gitify,desktop,application,github,notifications,unread,menu bar,electron,open source,mac,windows,linux',
  google: {
    siteVerification: 'jJNnPZ2wu7F1tlSab57og1N3RNrMqhzTCzRrbztY8WU',
  },
  menuLinks: [
    {
      name: 'Home',
      path: '/',
    },
    {
      name: 'FAQ',
      path: '/faq/',
    },
  ],
};

export const URLs = {
  GITHUB: {
    REPO: `https://github.com/${siteMetadata.repo.fullName}`,
    ISSUES: `https://github.com/${siteMetadata.repo.fullName}/issues`,
    LATEST_RELEASE: `https://github.com/${siteMetadata.repo.fullName}/releases/latest`,
  },
};
