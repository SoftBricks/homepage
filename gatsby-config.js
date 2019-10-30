module.exports = {
  siteMetadata: {
    title: `Softbricks`
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-remark`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `1ojgxivlqxzf`,
        accessToken: `5d2a5a7027d7e03169493711f8e170b1fd55233ca932f1aa6508aaa32e8ca999`
      }
    }
  ]
};
