import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"

import Nav from "./nav"

const Layout = ({ children }) => {
  return (
    <>
      <Helmet>
        <body className="theme-dark bg-primary text-main-text" />
      </Helmet>
      <div id="top" />
      <Nav />
      <div className="flex">
        <div className="flex-auto relative flex justify-center">
          <div className="border-l-2 border-accent fixed bottom-0 h-40" />
        </div>
        <div className="flex-auto">{children}</div>
        <div className="flex-auto relative flex justify-center">
          <div className="border-l-2 border-accent fixed bottom-0 h-40" />
        </div>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
