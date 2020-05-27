import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMousePointer } from "@fortawesome/free-solid-svg-icons"

import "./Header.styl"

const Header = ({ siteTitle }) => (
  <header className="flex justify-between w-full h-12 lg:h-13 grid-cols-12 probando border-gray-111 border-opacity-25 border-solid border-b items-center">
    <div className="brand flex items-center">
      <FontAwesomeIcon icon={faMousePointer} />
      <h1 className="font-bold mx-4"> Digital Upgrade</h1>
    </div>
    <ul className="flex">
      <Link className="mx-1 md:mx-4" to="/contact/">
        contact
      </Link>
      <div className="mx-1 md:mx-4">About us</div>
      <div className="mx-1 md:mx-4">Services</div>
    </ul>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
