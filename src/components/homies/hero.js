import React from "react"
import scrollTo from "gatsby-plugin-smoothscroll"

const Hero = () => {
  return (
    <section
      id="hero"
      className="min-h-screen flex sm:justify-center sm:items-center pt-40 sm:pt-0"
    >
      <div className="tracking-tight ml-6">
        <p className="sm:text-base text-xs text-accent leading-none mb-1">
          Hello there, my name is
        </p>
        <p className="sm:text-6xl text-3xl text-main-text font-bold">
          Warun Singhal
        </p>
        <p className="sm:text-6xl text-3xl text-secondary-text leading-none mod-let-space">
          I convert coffee
          <br className="sm:hidden" /> into code
        </p>
        <div className="sm:text-base mod-font-size mt-16 text-secondary-text">
          <p>
            I'm a 2nd year college student and also
            <br className="sm:hidden" />
            a Full-Stack Developer,
            <br className="hidden sm:block" /> mainly use{" "}
            <br className="sm:hidden" />
            JavaScript and various web technologies. <br />
            Hail from Phuket, Thailand.
          </p>
        </div>
        <button
          className="mt-16 rounded py-3 px-5 border border-accent outline-none text-xs sm:text-base"
          onClick={() => scrollTo("#about")}
        >
          Explore More
        </button>
      </div>
    </section>
  )
}

export default Hero
