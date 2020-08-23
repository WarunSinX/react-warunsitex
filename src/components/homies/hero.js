import React from "react"
import scrollTo from "gatsby-plugin-smoothscroll"

const Hero = () => {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center px-6 sm:px-16 lg:px-0 py-24"
    >
      <div>
        <p
          className="text-sm sm:text-base text-accent"
          data-sal="zoom-out"
          data-sal-delay="700"
          data-sal-duration="1500"
        >
          Hello there, my name is
        </p>
        <p
          className="text-4xl md:text-5xl lg:text-6xl text-main-text font-bold leading-tight"
          data-sal="slide-right"
          data-sal-delay="800"
          data-sal-duration="800"
        >
          Warun Singhal
        </p>
        <p
          className="text-4xl md:text-5xl lg:text-6xl text-secondary-text mod-let-space leading-none"
          data-sal="slide-left"
          data-sal-delay="800"
          data-sal-duration="800"
        >
          I convert coffee into code
        </p>
        <div className="text-sm sm:text-base my-16 text-secondary-text">
          <p data-sal="zoom-in" data-sal-delay="900" data-sal-duration="900">
            I'm a second year engineering student and also a Full-Stack Dev,{" "}
            <br className="md:block hidden" />
            Mainly use JavaScript and various web technologies シ
          </p>
        </div>
        <button
          data-sal="slide-up"
          data-sal-delay="1000"
          data-sal-duration="2000"
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
