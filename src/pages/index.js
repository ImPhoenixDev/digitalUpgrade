import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout/layout"
import SEO from "../components/seo"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMousePointer } from "@fortawesome/free-solid-svg-icons"

import team from "../images/team.svg"

const IndexPage = () => (
  <Layout className="items-center flex flex-row items-center justify-center">
    <SEO title="Home" />
    <div className="hero mt-16 mb-32">
      <h1 className="font-sans text-6xl text-center font-bold ">
        Web programming from internet experts.
      </h1>
      <div className="text-center max-w-xs bg-green-500 text-4xl tracking-wider text-white p-1 px-4 rounded-full">
        I want this
      </div>
    </div>
    <img
      src={team}
      alt="Team working on a project"
      className="block self my-auto w-5/6 max-w-4xl"
    />
    <h1 className="font-sans text-4xl tex-center font-bold mt-16 mb-32">
      What if you mix experience and innovation? We appear. a team of
      specialists capable of solving any problem at the right price. We bring
      state-of-the-art technology to companies. So they can focus on other
      things.
    </h1>
  </Layout>
)

export default IndexPage
