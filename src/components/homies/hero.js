import React from "react"
import scrollTo from "gatsby-plugin-smoothscroll"

const Hero = () => {
  return (
    <section
      id="hero"
      className="min-h-screen flex justify-center items-center"
    >
      <div className="tracking-tight ml-6">
        <p className="text-base text-accent leading-none mb-1">
          Hello there, my name is
        </p>
        <p className="text-6xl text-main-text font-bold">Warun Singhal</p>
        <p className="text-6xl text-secondary-text leading-none mod-let-space">
          I convert coffee
          <br className="sm:hidden" /> into code
        </p>
        <div className="text-base my-16 text-secondary-text">
          <p>
            I'm a 2nd year college student and also a Full-Stack Developer,
            <br />
            mainly use JavaScript and various web technologies.
            <br />
            Hail from Phuket, Thailand.
          </p>
        </div>
        <button
          className="rounded py-3 px-5 border border-accent outline-none text-xs sm:text-base"
          onClick={() => scrollTo("#about")}
        >
          Explore More
        </button>
      </div>
    </section>
  )
}

export default Hero
