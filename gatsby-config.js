module.exports = {
  siteMetadata: {
    title: `Softbricks`
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Montserrat\:400`,
        ]
      }
    }
  ]
};
