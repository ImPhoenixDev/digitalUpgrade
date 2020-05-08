import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout/layout"
import SEO from "../components/seo"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMousePointer } from "@fortawesome/free-solid-svg-icons"

import team from "../images/team.svg"

const IndexPage = () => (
  <Layout className="items-center">
    <SEO title="contact" />
    <h1 className="font-sans text-6xl text-center font-bold mt-16 mb-32">
      Let's get in touch.
    </h1>
  </Layout>
)

export default IndexPage
