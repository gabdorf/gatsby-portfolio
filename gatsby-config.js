module.exports = {
  siteMetadata: {
    title: `Gabriel Adorf`
  },
  plugins: [
    '@raygesualdo/gatsby-plugin-babel-styled-components',
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography.js`,
      }
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-107072121-1',
      },
    },
  ]
}
