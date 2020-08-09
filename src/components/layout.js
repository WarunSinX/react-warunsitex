import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"

import Nav from "./nav"

const Layout = ({ children }) => {
  return (
    <>
      <Helmet>
        <body className="h-screen bg-gray-900 text-gray-500" />
      </Helmet>
      <Nav />
      <div>{children}</div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
