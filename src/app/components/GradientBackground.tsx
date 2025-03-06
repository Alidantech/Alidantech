"use client"

import type React from "react"

import { useRef, useState } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

interface GradientBackgroundProps {
  id?: string
  children: React.ReactNode
  className?: string
  colorFrom?: string
  colorTo?: string
  direction?: "to-r" | "to-l" | "to-t" | "to-b" | "to-tr" | "to-tl" | "to-br" | "to-bl"
  intensity?: "subtle" | "medium" | "strong"
  animate?: boolean
}

export default function GradientBackground({
  id = "",
  children,
  className = "",
  colorFrom = "from-primary",
  colorTo = "to-blue-600",
  direction = "to-r",
  intensity = "subtle",
  animate = true,
}: GradientBackgroundProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const opacityMap = {
    subtle: { base: 0.03, hover: 0.05 },
    medium: { base: 0.05, hover: 0.08 },
    strong: { base: 0.08, hover: 0.12 },
  }

  const opacity = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [opacityMap[intensity].base, opacityMap[intensity].hover, opacityMap[intensity].base],
  )

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current || !animate) return
    const rect = ref.current.getBoundingClientRect()
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    })
  }

  return (
    <div id={id} ref={ref} className={`relative overflow-hidden ${className}`} onMouseMove={handleMouseMove}>
      <motion.div
        className={`absolute inset-0 bg-gradient-${direction} ${colorFrom} ${colorTo} pointer-events-none`}
        style={{
          opacity,
          backgroundPosition: animate ? `${mousePosition.x / 5}px ${mousePosition.y / 5}px` : undefined,
        }}
        animate={
          animate
            ? {
                backgroundPosition: ["0% 0%", "100% 0%", "100% 100%", "0% 100%", "0% 0%"],
              }
            : undefined
        }
        transition={
          animate
            ? {
                duration: 20,
                ease: "linear",
                repeat: Number.POSITIVE_INFINITY,
              }
            : undefined
        }
      />
      <div className="relative z-10">{children}</div>
    </div>
  )
}

