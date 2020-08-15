import React from "react"

const TheList = () => {
  return (
    <section
      id="thelist"
      className="min-h-screen flex justify-center items-center"
    >
      <div className="text-center">
        <div className="flex items-center">
          <p className="text-accent text-xl">0010</p>
          <div className="mx-5 border-t border-secondary-text w-full" />
          <p className="text-main-text flex-none text-xl">The List</p>
        </div>
        <div className="flex justify-center my-32">
          <svg
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-40"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
            />
          </svg>
        </div>
        <p className="text-xl">
          Sorry, this section is still under development. <br />
          <span className="text-secondary-text">Please comeback later..</span>
        </p>
      </div>
    </section>
  )
}

export default TheList
