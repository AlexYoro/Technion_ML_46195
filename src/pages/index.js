import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"

const Home = ({ data }) => {
  return (
    <Layout type="index" pageTitle='Main'>
      <article dangerouslySetInnerHTML={{ __html: data.data_site.html }}/>
      <article dangerouslySetInnerHTML={{ __html: data.data_all.html }}/>
    </Layout>
  )
}

export const query = graphql`
  query {
    data_site: markdownRemark(fields: { slug: { eq: "/data_site/" } }) {
      html
    }
    data_all: markdownRemark(fields: { slug: { eq: "/data_all/" } }) {
      html
    }
  }
`

export default Home