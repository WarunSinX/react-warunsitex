import React from "react"

const Nav = () => {
  return (
    <div className="py-5 px-8 bg-gray-900">
      <nav className="flex justify-between items-center">
        <a href="#" className="text-orange-400 text-xl">
          WARUNSITEX
        </a>
        <ul className="flex">
          <li>
            <a href="#" className="text-gray-400 hover:text-gray-300">
              ABOUT
            </a>
          </li>
          <li className="mx-8">
            <a href="#" className="text-gray-400 hover:text-gray-300">
              SKILL
            </a>
          </li>
          <li>
            <a href="#" className="text-gray-400 hover:text-gray-300">
              CONTACT
            </a>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Nav
