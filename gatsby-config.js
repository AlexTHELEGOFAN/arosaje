/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */
// const { createProxyMiddleware } = require("http-proxy-middleware")
// const cors = require("cors")

module.exports = {
  siteMetadata: {
    title: `Arosa'je`,
    description: `Avec Arosa'je, partagez vos plantes, demander la garde ou des conseils auprès de nos gardiens et botanistes.`,
    author: `Alexandre`,
    siteUrl: `https://arosaje.com/`,
  },
  // developMiddleware: app => {
  //   app.use(
  //     "/api",
  //     cors({
  //       origin: "*",
  //       methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  //       allowedHeaders: "*",
  //     }),
  //     createProxyMiddleware({
  //       target: "https://localhost:7083",
  //       changeOrigin: true,
  //     })
  //   )
  // },
  // proxy: {
  //   prefix: "/api",
  //   url: "https://localhost:7083/api/",
  // },
  plugins: [
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    {
      resolve: `gatsby-plugin-alias-imports`,
      options: {
        alias: {
          '@src': 'src',
          '@assets': 'src/assets',
          '@components': 'src/components',
          '@pages': 'src/pages',
        },
        extensions: [],
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
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/assets/icons/icone.jpg`, // This path is relative to the root of the site.
      },
    },
  ],
}
