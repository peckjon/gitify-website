export const SITE_URL = import.meta.env.SITE_URL || 'http://localhost:3000';

export const siteMetadata = {
  title: 'Gitify',
  description: 'Your GitHub notifications on your menu bar.',
  repo: 'gitify-app/gitify',
  keywords:
    'gitify,desktop,application,github,notifications,unread,menu bar,electron,open source,ekonstantinidis,manosim,mac,osx,linux',
  author: '@manosim_',
  menuLinks: [
    {
      name: 'Home',
      path: '/',
    },
    {
      name: 'FAQ',
      path: '/faq',
    },
  ],
};

export const manifest = {
  name: 'Gitify',
  short_name: 'starter',
  themeColor: '#24292e',
  display: 'minimal-ui',
};
