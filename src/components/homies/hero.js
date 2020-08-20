import React from "react"
import scrollTo from "gatsby-plugin-smoothscroll"

const Hero = () => {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center px-6 sm:px-16 lg:px-0 py-24"
    >
      <div>
        <p className="text-sm sm:text-base text-accent">
          Hello there, my name is
        </p>
        <p className="text-4xl md:text-5xl lg:text-6xl text-main-text font-bold leading-tight">
          Warun Singhal
        </p>
        <p className="text-4xl md:text-5xl lg:text-6xl text-secondary-text mod-let-space leading-none">
          I convert coffee into code
        </p>
        <div className="text-sm sm:text-base my-16 text-secondary-text">
          <p>
            I'm a second year engineering student and also a Full-Stack Dev.{" "}
            <br className="md:block hidden" />
            Mainly use JavaScript and various web technologies ツ
          </p>
        </div>
        <button
          className="rounded py-3 px-5 border border-accent outline-none"
          onClick={() => scrollTo("#about")}
        >
          Explore More
        </button>
      </div>
    </section>
  )
}

export default Hero
