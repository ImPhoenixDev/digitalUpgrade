import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMousePointer } from "@fortawesome/free-solid-svg-icons"

import "./Header.styl"

const Header = ({ siteTitle }) => (
  <header className="flex justify-between w-full h-12 lg:h-11 grid-cols-12 probando border-gray-111 border-opacity-25 border-solid border-b items-center">
    <div className="brand flex items-center">
      <FontAwesomeIcon icon={faMousePointer} />
      <h1 className="font-bold mx-4"> Digital Upgrade</h1>
    </div>
    <div className="Pricing bg-green-500 text-xs tracking-wider text-white p-1 px-4 rounded-full">
      Pricing
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
