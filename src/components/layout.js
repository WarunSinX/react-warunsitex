import React from "react"
import PropTypes from "prop-types"

import Nav from "./nav"

const Layout = ({ children }) => {
  return (
    <>
      <Nav />
      <div className="bg-black text-white">{children}</div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
