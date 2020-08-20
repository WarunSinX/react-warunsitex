import React from "react"
import scrollTo from "gatsby-plugin-smoothscroll"

const Nav = () => {
  return (
    <div
      className="py-5 px-6 md:px-16 bg-primary w-full fixed top-0"
      style={{ zIndex: "69" }}
    >
      <nav className="flex md:justify-between items-center">
        <div
          className="cursor-pointer"
          onClick={() => {
            scrollTo("#hero")
          }}
        >
          <p className="text-xl text-accent">
            WarunSiteX{" "}
            <span className="text-main-text">
              <span className="inline sm:hidden">SM</span>
              <span className="hidden sm:inline md:hidden">MD</span>
              <span className="hidden md:inline lg:hidden">LG</span>
              <span className="hidden lg:inline xl:hidden">XL</span>
            </span>
          </p>
        </div>
        <ul className="md:flex hidden">
          <li>
            <p
              onClick={() => {
                scrollTo("#about")
              }}
              className="text-secondary-text cursor-pointer mr-8 hover:text-main-text"
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
