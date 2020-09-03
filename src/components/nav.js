import React, { useState } from "react"
import scrollTo from "gatsby-plugin-smoothscroll"
import { useScrollPosition } from "@n8tb1t/use-scroll-position"

const Nav = () => {
  const [navClass, setNavClass] = useState("")
  useScrollPosition(({ currPos }) => {
    if (currPos.y === 0) {
      setNavClass("shadow-none")
    } else setNavClass("shadow-lg")
  })
  return (
    <div
      className={`py-5 px-6 md:px-16 bg-primary w-full fixed top-0 ${navClass}`}
      style={{ zIndex: "69" }}
    >
      <nav className="flex sm:justify-between items-center">
        <div
          className="cursor-pointer"
          onClick={() => {
            scrollTo("#hero")
          }}
        >
          <p
            className="text-xl text-accent"
            data-sal="slide-right"
            data-sal-delay="500"
            data-sal-duration="1000"
          >
            WarunSiteX
          </p>
        </div>
        <ul className="sm:flex hidden">
          <li>
            <p
              onClick={() => {
                scrollTo("#about")
              }}
              className="text-secondary-text cursor-pointer mr-8 hover:text-main-text"
              data-sal="slide-left"
              data-sal-delay="600"
              data-sal-duration="1500"
            >
              <span className="text-accent mr-1 text-sm">01</span>About
            </p>
          </li>
          <li>
            <p
              onClick={() => scrollTo("#contact")}
              className="text-secondary-text hover:text-main-text cursor-pointer"
              data-sal="slide-left"
              data-sal-delay="700"
              data-sal-duration="1500"
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
