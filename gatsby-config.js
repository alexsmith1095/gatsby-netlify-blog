module.exports = {
  siteMetadata: {
    title: `Gatsby Blog`,
    uthor: `Alex Smith`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-catch-links`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages',
      }
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          `gatsby-remark-images`
        ] // for any remark specific plugins e.g. gatsby-remark-copy-linked-files, gatsby-remark-prismjs
      }
    },
  ],
}
