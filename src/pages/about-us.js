import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout/layout"
import SEO from "../components/seo"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMousePointer } from "@fortawesome/free-solid-svg-icons"

import team from "../images/team.svg"

const IndexPage = () => (
  <Layout className="items-center">
    <SEO title="Home" />
    <h1 className="font-sans text-6xl text-center font-bold mt-16 mb-32">
      Web programming from internet experts.
    </h1>
    <img
      src={team}
      alt="Team working on a project"
      className="my-64 max-w-4xl"
    />
    <FontAwesomeIcon icon={faMousePointer} size="5x" className="m-32" />
  </Layout>
)

export default IndexPage
