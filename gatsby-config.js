module.exports = {
  siteMetadata: {
    title: `Sustain`,
    description: `Sustain is an upcoming iOS app to scan ingredient labels for unsustainable ingredients`,
    author: `Sean Nordquist`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/data/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: 'gatsby-plugin-google-fonts',
      options: {
        fonts: [
          `inter\:400,500,600,700`,
          `libre baskerville\:300,400,600`
        ],
        display: 'swap'
      }
    },
    `gatsby-plugin-react-helmet`,
  ],
}
