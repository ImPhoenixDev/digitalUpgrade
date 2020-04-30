import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout/layout"
import Image from "../components/Image/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <header></header>
    <h1>Web programming from internet experts</h1>
    <Image />
  </Layout>
)

export default IndexPage
