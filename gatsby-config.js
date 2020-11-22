module.exports = {
  siteMetadata: {
    courseNumber: `046195`,
    title: `Technion 046195`,
    description: `Technion course 046195 - Introduction to machine learning`,
    author: `The stuff of 046195`,
    lang:  `he`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content`,
        path: `${__dirname}/content`,
        ignore: [`**/\.*`]
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-katex`,
            options: {
              throwOnError: false,
            }
          },
          `gatsby-remark-external-links`,
          `gatsby-remark-static-images`,
          `gatsby-remark-responsive-iframe`,
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
        ],
      },
    },
    {
      resolve:`gatsby-plugin-netlify`,
      options: {
        headers: {
          "/public/**/*.html": [
            "cache-control: public",
            "cache-control:  max-age=0", 
            "cache-control: must-revalidate"
          ],
          "/sw.js": [
            "cache-control: public",
            "cache-control:  max-age=0", 
            "cache-control: must-revalidate"
          ],
          "/public/page-data/*": [
            "cache-control: public",
            "cache-control:  max-age=0", 
            "cache-control: must-revalidate"
          ]
        }
      }
    }
  ],
}
