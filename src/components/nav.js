import React from "react"
import scrollTo from "gatsby-plugin-smoothscroll"

const Nav = () => {
  return (
    <div className="py-5 px-8 bg-x">
      <nav className="flex justify-between items-center">
        <p
          onClick={() => scrollTo("#top")}
          className="text-orange-400 text-xl cursor-pointer"
        >
          WARUNSITEX
        </p>
        <ul className="flex">
          <li>
            <p
              onClick={() => scrollTo("#about")}
              className="text-gray-500 hover:text-gray-400 cursor-pointer"
            >
              About
            </p>
          </li>
          <li>
            <p
              // onClick={() => scrollTo("#")}
              className="text-gray-500 hover:text-gray-400 cursor-pointer mx-3"
            >
              Skill
            </p>
          </li>
          <li>
            <p
              // onClick={() => scrollTo("#")}
              className="text-gray-500 hover:text-gray-400 cursor-pointer"
            >
              Contact
            </p>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Nav
