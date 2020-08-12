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
        <div className="mt-16 text-secondary-text">
          <p>
            I'm a Full-Stack Web/App Developer hail from Phuket, Thailand
            currently in
            <br />
            my second year of studies towards a bachelor degree in Digital
            Engineering.
            <br />I mainly use JavaScript and various web technologies.
          </p>
        </div>
        <button className="mt-16 rounded py-3 px-5 border border-accent">
          Explore More
        </button>
      </div>
    </section>
  )
}

export default Hero
