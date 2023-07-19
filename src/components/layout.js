import React, { useState } from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";

import Nav from "./nav";

const Layout = ({ children }) => {
  const [theme, setTheme] = useState("theme-dark");
  const toggleTheme = () => {
    if (theme === "theme-dark") {
      setTheme("theme-light");
    } else setTheme("theme-dark");
  };
  return (
    <>
      <Helmet>
        <body className={`${theme} bg-primary text-main-text`} />
      </Helmet>
      <Nav toggleTheme={toggleTheme} theme={theme} />
      <div className="flex">
        <div className="xl:flex flex-initial relative justify-center w-56 hidden">
          <div className="fixed bottom-0">
            <div
              className="border-l-2 border-accent h-40"
              data-sal="flip-up"
              data-sal-delay="800"
              data-sal-duration="1200"
            />
          </div>
        </div>

        <div className="flex-auto">{children}</div>
        <div className="lg:flex flex-initial relative justify-center w-56 hidden">
          <div className="fixed bottom-0">
            <div className="flex flex-col items-center">
              {theme === "theme-dark" ? (
                <svg
                  // data-sal="slide-down"
                  // data-sal-delay="800"
                  // data-sal-duration="1200"
                  onClick={toggleTheme}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="text-item-text mb-3 cursor-pointer hover:text-main-text animate-spin-slow"
                  style={{ width: "2.4rem" }}
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
                  className="text-item-text mb-3 cursor-pointer hover:text-main-text animate-pulse"
                  style={{ width: "2.2rem" }}
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
              <div
                className="border-l-2 border-accent h-40"
                data-sal="flip-up"
                data-sal-delay="800"
                data-sal-duration="1200"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
