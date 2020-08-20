import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Hero from "../components/homies/hero"
import About from "../components/homies/about"
import Contact from "../components/homies/contact"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero />
    <About />
    {/* <Contact /> */}
  </Layout>
)

export default IndexPage
