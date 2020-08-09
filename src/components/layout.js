import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"

import Nav from "./nav"

const Layout = ({ children }) => {
  return (
    <>
      <Helmet>
        <body className="h-screen bg-x text-gray-400" />
      </Helmet>
      <div id="top" />
      <Nav />
      <div>{children}</div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
