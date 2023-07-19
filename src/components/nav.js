import React, { useState } from "react";
import scrollTo from "gatsby-plugin-smoothscroll";
import { useScrollPosition } from "@n8tb1t/use-scroll-position";

const Nav = ({ toggleTheme, theme }) => {
  const [navClass, setNavClass] = useState("");
  useScrollPosition(({ currPos }) => {
    if (currPos.y === 0) {
      setNavClass("shadow-none");
    } else setNavClass("shadow-lg");
  });
  return (
    <div
      className={`py-5 px-6 md:px-16 bg-primary w-full fixed top-0 ${navClass}`}
      style={{ zIndex: "69" }}
    >
      <nav className="flex sm:justify-between items-center">
        <div
          className="cursor-pointer"
          onClick={() => {
            scrollTo("#hero");
          }}
        >
          <p
            className="text-4xl text-accent"
            data-sal="slide-right"
            data-sal-delay="500"
            data-sal-duration="1000"
          >
            ▲
          </p>
        </div>
        <ul className="sm:flex hidden ml-auto">
          <li>
            <p
              onClick={() => {
                scrollTo("#about");
              }}
              className="text-item-text cursor-pointer mr-8 hover:text-main-text"
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
              className="text-item-text hover:text-main-text cursor-pointer"
              data-sal="slide-left"
              data-sal-delay="700"
              data-sal-duration="1500"
            >
              <span className="text-accent mr-1 text-sm">10</span>Contact
            </p>
          </li>
        </ul>
        {theme == "theme-dark" ? (
          <svg
            data-sal="slide-down"
            data-sal-delay="800"
            data-sal-duration="1200"
            onClick={toggleTheme}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="text-item-text cursor-pointer lg:hidden sm:ml-8 ml-auto hover:text-main-text"
            style={{ width: "2rem" }}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
            />
          </svg>
        ) : (
          <svg
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="text-item-text cursor-pointer lg:hidden sm:ml-8 ml-auto hover:text-main-text"
            style={{ width: "2rem" }}
            onClick={toggleTheme}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
            />
          </svg>
        )}
      </nav>
    </div>
  );
};

export default Nav;
