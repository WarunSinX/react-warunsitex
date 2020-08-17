import React from "react"

const Contact = () => {
  return (
    <section
      id="contact"
      className="min-h-screen flex justify-center items-center flex-col"
    >
      <div className="flex items-center mt-20 w-1/4">
        <p className="text-accent text-lg">0011</p>
        <div className="mx-5 border-t border-secondary-text w-full" />
        <p className="text-lg">Contact</p>
      </div>
      <p className="mt-5 text-3xl">What's Next? Say Hello!</p>
      <p className="text-center text-secondary-text my-16">
        I hope the above information is useful to you, Please feel free to
        <br /> contact me whether you have a question or just want to say hi
        <br />
        <span className="text-accent">P.S.</span> I am a programmer stop asking
        me to fix a computer !
      </p>
      <p className="border border-accent p-3 rounded cursor-pointer">
        Get In Touch
      </p>
      <p className="mb-10 mt-auto text-secondary-text">
        <span className="text-2xl">&copy;</span> Crafted with love and coffee by
        Warun S.
      </p>
    </section>
  )
}

export default Contact
