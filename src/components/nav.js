import React, { useState } from "react"
import scrollTo from "gatsby-plugin-smoothscroll"

const Nav = () => {
  const [navClass, setNavClass] = useState("mt-5")
  const [navTop, setNavTop] = useState("0")
  let prevScrollpos = window.pageYOffset
  let currentScrollPos = window.pageYOffset
  window.onscroll = function () {
    currentScrollPos = window.pageYOffset
    if (prevScrollpos > currentScrollPos) {
      setNavTop("0")
    } else {
      if (currentScrollPos >= 80) {
        setNavTop("-200px")
      }
    }
    if (currentScrollPos >= 10) {
      setNavClass("shadow-xl")
    } else setNavClass("mt-5")
    prevScrollpos = currentScrollPos
  }
  return (
    <div
      className={`py-5 px-8 sm:px-16 bg-x fixed w-full ${navClass}`}
      style={{ top: navTop }}
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
              // onClick={() => scrollTo("#")}
              className="text-secondary-text hover:text-main-text cursor-pointer"
            >
              <span className="text-accent">00 </span>About
            </p>
          </li>
          <li>
            <p
              // onClick={() => scrollTo("#")}
              className="text-secondary-text hover:text-main-text cursor-pointer mx-3"
            >
              <span className="text-accent">01 </span>Skill
            </p>
          </li>
          <li>
            <p
              // onClick={() => scrollTo("#")}
              className="text-secondary-text hover:text-main-text cursor-pointer"
            >
              <span className="text-accent">10 </span>Contact
            </p>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Nav
