module.exports = {
  siteMetadata: {
    siteUrl: process.env.SITE_URL,
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
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-postcss`,
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        exclude: ['/callback'],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Gitify`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#203354`,
        theme_color: `#203354`,
        display: `minimal-ui`,
        icon: `static/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // The property ID; the tracking code won't be generated without it
        trackingId: 'UA-67298362-1',
        // Defines where to place the tracking script - `true` in the head and `false` in the body
        head: false,
      },
    },
  ],
};
