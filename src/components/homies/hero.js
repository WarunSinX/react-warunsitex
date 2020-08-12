import React from "react"

const Hero = () => {
  return (
    <section className="min-h-screen flex justify-center items-center">
      <div className="tracking-tight">
        <p className="text-accent leading-none">Hello there, my name is</p>
        <p className="text-6xl text-main-text font-bold">Warun Singhal</p>
        <p className="text-6xl text-secondary-text leading-none">
          I build things with Code
        </p>
        <p className="mt-16 text-secondary-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
          Soluta cupiditate corrupti unde maiores totam fuga,asperiores
          mollitia.
          <br />
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae,
          provident.
        </p>
        <button className="mt-16 rounded py-3 px-5 border border-accent">
          Explore More
        </button>
      </div>
    </section>
  )
}

export default Hero
