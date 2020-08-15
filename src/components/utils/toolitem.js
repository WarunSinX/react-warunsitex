import React from "react"

const ToolItem = ({ item }) => {
  return (
    <div className="flex">
      <svg
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        className="w-5 text-accent mr-1"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14"
        />
      </svg>
      <p className="text-secondary-text">{item}</p>
    </div>
  )
}

export default ToolItem
