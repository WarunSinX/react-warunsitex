import React from "react"

const Contact = () => {
  return (
    <section
      id="contact"
      className="min-h-screen flex justify-center items-center flex-col"
    >
      <div
        className="flex items-center w-1/2 sm:w-1/3 md:w-1/4"
        style={{ marginTop: "5.5rem" }}
      >
        <p className="text-accent text-lg">0010</p>
        <div className="mx-5 border-t border-secondary-text w-full" />
        <p className="text-lg">Contact</p>
      </div>
      <p className="mt-5 sm:text-4xl text-2xl tracking-tighter sm:tracking-normal">
        What's Next? Say Hello!
      </p>
      <div className="md:text-base text-sm sm:px-0 px-10 text-center text-secondary-text sm:my-12 my-8">
        <p>
          Thank you for visiting my personal website, Please feel free to
          <br className="hidden sm:block" /> contact me whether you have a
          question or just want to say hi.
          <br />
          <br />
        </p>
        <p className="mt-3 text-xs sm:text-sm">
          <span className="text-accent">P.S.</span> I am a programmer stop
          asking me to fix a computer !
        </p>
      </div>
      <p className="border border-accent p-3 rounded cursor-pointer">
        Get In Touch
      </p>
      <p className="mb-10 mt-auto text-secondary-text text-center text-xs">
        <span className="text-xl">&copy;</span> 2020 All rights reserved.
        <br />
        Crafted with love and coffee by Warun S.
      </p>
    </section>
  )
}

export default Contact
