import React from "react"
import scrollTo from "gatsby-plugin-smoothscroll"

const Nav = () => {
  return (
    <div
      className="py-5 px-8 sm:px-16 bg-primary w-full fixed top-0"
      id="navbar"
    >
      <nav className="flex justify-between items-center">
        <p
          onClick={() => scrollTo("#top")}
          className="text-accent text-xl cursor-pointer"
        >
          WARUNSITEX
        </p>
        <ul className="flex">
          <li>
            <p
              onClick={() => scrollTo("#about")}
              className="text-secondary-text hover:text-main-text cursor-pointer mr-8"
            >
              <span className="text-accent mr-1 text-sm">01</span>About
            </p>
          </li>
          <li>
            <p
              onClick={() => scrollTo("#contact")}
              className="text-secondary-text hover:text-main-text cursor-pointer"
            >
              <span className="text-accent mr-1 text-sm">10</span>Contact
            </p>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Nav
