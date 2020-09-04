import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Hero from "../components/homies/hero"
import About from "../components/homies/about"
import Contact from "../components/homies/contact"

const IndexPage = () => (
  <Layout>
    <SEO title="Warun Singhal" />
    <Hero />
    <About />
    <Contact />
  </Layout>
)

export default IndexPage
