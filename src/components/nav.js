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
          className="text-orange-500 text-xl cursor-pointer"
        >
          WARUNSITEX
        </p>
        <ul className="flex">
          <li>
            <p
              // onClick={() => scrollTo("#")}
              className="text-gray-500 hover:text-gray-400 cursor-pointer"
            >
              <span className="text-orange-400">00 </span>About
            </p>
          </li>
          <li>
            <p
              // onClick={() => scrollTo("#")}
              className="text-gray-500 hover:text-gray-400 cursor-pointer mx-3"
            >
              <span className="text-orange-400">01 </span>Skill
            </p>
          </li>
          <li>
            <p
              // onClick={() => scrollTo("#")}
              className="text-gray-500 hover:text-gray-400 cursor-pointer"
            >
              <span className="text-orange-400">10 </span>Contact
            </p>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Nav
