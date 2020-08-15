import React from "react"

import proImg from "../../images/pro.jpg"
import ToolItem from "../utils/toolitem"

const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center"
    >
      <div className="flex justify-around items-center w-full">
        <div>
          <div className="relative">
            <img
              className="rounded"
              src={proImg}
              alt="profileImage"
              width="320"
            />
            <div className="ml-2 mt-2 border-4 border-accent pro-frame rounded" />
          </div>
        </div>
        <div>
          <div className="flex items-center">
            <p className="text-accent">0001</p>
            <div className="mx-5 border-t border-secondary-text w-full" />
            <p className="text-main-text flex-none">About Me</p>
            <div className="ml-5 border-t border-secondary-text w-full" />
          </div>
          <p className="text-secondary-text mt-5">
            Hello again ! I am Warun, a second year college student
            <br />
            based in Phuket, Thailand. I used to work as a part time
            <br /> freelancer since I was 15 years old.
          </p>
          <p className="text-secondary-text mt-5">
            I am very passionate about technologies and programming
            <br />
            loved the intersection between code, business and design
            <br /> My goal is to build a magnificent Digital Product that
            <br />
            provide a performant user experiences.
          </p>
          <div className="flex items-center mt-10">
            <p className="text-main-text flex-none">Tech & Tools</p>
            <div className="mx-5 border-t border-secondary-text w-full" />
            <svg
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-12"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
          </div>
          <div className="mt-5 flex justify-between">
            <ToolItem item="HTML/CSS" />
            <ToolItem item="JavaScript" />
            <ToolItem item="React.js" />
            <ToolItem item="Node.js" />
          </div>
          <div className="mt-5 flex justify-between">
            <ToolItem item="Vue.js" />
            <ToolItem item="VSCode" />
            <ToolItem item="Git" />
            <ToolItem item="Gatsby.js" />
            <ToolItem item="Vim" />
          </div>
          <div className="mt-5 flex justify-between">
            <ToolItem item="Java" />
            <ToolItem item="C/C++" />
            <ToolItem item="Python" />
            <ToolItem item="SSH" />
            <ToolItem item="GraphQL" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default About