/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: "Simply Recipe",
    description: "Nice and Clean Recipe Site",
    author: "bprasad01",
    person: { name: "john", age: 30 },
    simpleData: ["item1", "item2"],
    complexData: [
      { name: "john", age: 30 },
      { name: "smith", age: 32 },
    ],
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
  ],
}
