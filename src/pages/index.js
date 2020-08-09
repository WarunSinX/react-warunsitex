import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/homies/hero"
import About from "../components/homies/about"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="mx-auto px-16">
      <Hero />
      <About />
    </div>
  </Layout>
)

export default IndexPage
