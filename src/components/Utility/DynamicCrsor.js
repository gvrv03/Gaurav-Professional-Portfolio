"use client"

import { useState, useEffect } from "react"

export default function DynamicCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isPointer, setIsPointer] = useState(false)

  useEffect(() => {
    const moveCursor = (e) => {
      setPosition({ x: e.clientX, y: e.clientY })
    }

    const checkPointer = () => {
      const target = document.elementFromPoint(position.x, position.y)
      setIsPointer(window.getComputedStyle(target).cursor === "pointer")
    }

    window.addEventListener("mousemove", moveCursor)
    window.addEventListener("mouseover", checkPointer)

    return () => {
      window.removeEventListener("mousemove", moveCursor)
      window.removeEventListener("mouseover", checkPointer)
    }
  }, [position.x, position.y])

  return (
    <>
      <div
        className="fixed pointer-events-none z-50 transition-transform duration-100 ease-out"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: `translate(-50%, -50%) scale(${isPointer ? 1.5 : 1})`,
        }}
      >
        <div className={`w-4 h-4 rounded-full ${isPointer ? "bg-purple-500" : "bg-white"} mix-blend-difference`}></div>
      </div>
      <div
        className="fixed pointer-events-none z-50 transition-transform duration-300 ease-out"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: `translate(-50%, -50%) scale(${isPointer ? 0.5 : 1})`,
        }}
      >
        <div className="w-8 h-8 rounded-full border-2 border-white mix-blend-difference"></div>
      </div>
    </>
  )
}
