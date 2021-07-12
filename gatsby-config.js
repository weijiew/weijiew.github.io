require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    name: 'Jie Wei',
    description:
      'I want to be a computer scientist.',
    keywords: [
      'Big Data',
      'Computer Science',
    ],
    siteUrl: 'https://paulie.dev',
    siteImage: 'https://paulie.dev/images/paulie-open-graph-image.jpg',
    profileImage: ``,
    lang: `en`,
    config: {
      sidebarWidth: 200,
    },
  },
  plugins: [
    `gatsby-plugin-mdx-embed`,
    {
      resolve: '@pauliescanlon/gatsby-theme-terminal',
      options: {
        source: ['posts', 'writing'],
      },
    },
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'UA-76055934-4',
      },
    },
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        exclude: [`/dummy-page/`],
      },
    },
  ],
}
