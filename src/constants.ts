export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';

export const siteMetadata = {
  title: `Gitify`,
  description: `Your GitHub notifications on your menu bar.`,
  keywords: `gitify,mobile,desktop,application,github,notifications,unread,menu bar,electron,open source,ekonstantinidis,manosim,mac,osx`,
  author: `@manosim_`,
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

export const GA_ID = 'UA-67298362-1';

export const manifest = {
  name: `Gitify`,
  short_name: `starter`,
  themeColor: `#203354`,
  display: `minimal-ui`,
};
