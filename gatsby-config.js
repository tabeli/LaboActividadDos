/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [
    {
      resolve: 'gatsby-source-airtable',
      options: {
        apiKey: 'keyIOGewzaehteIvC',
        tables: [
          {
            baseId: 'appCYilwndvplpaEf',
            tableName: 'presentation'
          },
          // We can add other bases/tables here, too!
          //{
            //baseId: `AIRTABLE_BASE_ID`,
            //tableName: `Sides`
          //}
        ]
      }
    }
  ],
}
