import React from "react"

const Hero = () => {
  return (
    <section className="min-h-screen bg-blue">
      <div className="pt-40 pl-0 sm:pl-32  tracking-tight">
        <p className="text-orange-500 leading-none">Hello there, my name is</p>
        <p className="text-6xl text-gray-300 font-bold">Warun Singhal</p>
        <p className="text-6xl text-gray-600 leading-none">
          I build things with Code
        </p>
        <p className="mt-16 text-gray-500">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
          Soluta cupiditate corrupti unde maiores totam fuga,asperiores
          mollitia.
          <br />
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae,
          provident.
        </p>
        <button className="mt-16 rounded py-3 px-5 border border-orange-600">
          Explore More
        </button>
      </div>
    </section>
  )
}

export default Hero
