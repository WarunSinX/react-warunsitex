import React from "react"

import proImg from "../../images/pro.jpg"
import ToolItem from "../utils/toolitem"

const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-around pt-20 pb-12 flex-col w-full"
    >
      <div
        className="flex items-center w-3/4 self-center lg:self-end lg:pr-12"
        data-sal="slide-right"
        data-sal-delay="200"
        data-sal-duration="1200"
      >
        <p className="text-accent text-lg">0001</p>
        <div className="mx-5 border-t border-secondary-text w-full hidden sm:block" />
        <svg
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="w-32 hidden sm:block"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
          />
        </svg>
        <div className="ml-5 border-t border-secondary-text w-full" />
        <p className="ml-5 text-main-text flex-none text-lg">About Me</p>
      </div>
      <div className="flex w-full flex-col-reverse items-center lg:flex-row lg:justify-around lg:items-center">
        <div className="flex-none mt-20 lg:mt-0 lg:ml-auto pb-10 lg:pb-0 sm:mr-0 mr-2">
          <div className="relative">
            <img
              className="rounded pro-sm sm:pro-size"
              src={proImg}
              alt="profileImage"
              data-sal="zoom-in"
              data-sal-delay="500"
              data-sal-duration="1000"
            />
            <div
              className="ml-2 mt-2 border-4 border-accent pro-sm sm:pro-size pro-frame rounded"
              data-sal="slide-up"
              data-sal-delay="1000"
              data-sal-duration="1500"
            />
          </div>
        </div>
        <div className="text-center text-sm sm:text-base lg:text-left lg:w-a px-12 lg:px-16 ml-auto">
          <p
            className="text-secondary-text mt-5"
            data-sal="slide-up"
            data-sal-delay="200"
            data-sal-duration="1500"
          >
            Hello again ! I am Warun, currently in my second year of{" "}
            <br className="hidden" />
            studies towards a bachelor degree in Digital Engineering{" "}
            <br className="hidden" />
            based in Phuket, Thailand. I used to work as a part time
            <br className="hidden" /> freelancer since I was 15 years old.
          </p>
          <p
            className="text-secondary-text mt-5"
            data-sal="slide-up"
            data-sal-delay="500"
            data-sal-duration="1500"
          >
            I am very passionate about technologies and programming,
            <br className="hidden" /> loved the intersection between code,
            business and design
            <br className="hidden" /> My goal is to build a magnificent Digital
            Product that <br className="hidden" />
            provide a performant user experiences.
          </p>
          <div>
            <div
              className="flex items-center mt-16"
              data-sal="zoom-in"
              data-sal-delay="600"
              data-sal-duration="1500"
            >
              <p className="text-main-text flex-none text-lg">Tech & Tools</p>
              <div className="mx-5 border-t border-secondary-text w-full" />
              <svg
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-20 sm:w-12"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </div>
            <div
              className="mt-5 flex flex-wrap justify-center lg:justify-start"
              data-sal="zoom-out"
              data-sal-delay="700"
              data-sal-duration="1100"
            >
              <ToolItem item="JavaScript" />
              <ToolItem item="React.js" />
              <ToolItem item="Node.js" />
              <ToolItem item="Vue.js" />
              <ToolItem item="Git" />
              <ToolItem item="Gatsby.js" />
              <ToolItem item="SSH" />
              <ToolItem item="Vim" />
              <ToolItem item="TailwindCss" />
              <ToolItem item="Java" />
              <ToolItem item="C/C++" />
              <ToolItem item="Python" />
              <ToolItem item="GraphQL" />
              <ToolItem item="ReactNative" />
              <ToolItem item="SCSS" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
