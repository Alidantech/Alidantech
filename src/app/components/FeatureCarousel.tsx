"use client"

import { useRef, useEffect, useState } from "react"
import { motion, useAnimation, useMotionValue } from "framer-motion"

const features = [
  {
    title: "Apps Development",
    description: "Mobile developer with experience in building responsive and user-friendly mobile applications.",
    icon: "⚡",
  },
  {
    title: "Web Development",
    description: "Web developer with expertise in building modern and scalable web applications using the latest technologies.",
    icon: "🌐",
  },
  {
    title: "Data Science",
    description: "Data scientist with strong analytical skills and experience in extracting insights from large datasets.",
    icon: "🧮",
  },
  {
    title: "UI/UX Design",
    description: "UI/UX designer with the ability to create visually appealing and intuitive user interfaces.",
    icon: "✨",
  },
  {
    title: "Data Analysis",
    description: "Data analyst with expertise in analyzing and interpreting data to support informed business decisions.",
    icon: "📊",
  },
  {
    title: "Bug Fixing",
    description: "Developer with strong debugging skills and the ability to identify and fix software bugs efficiently.",
    icon: "🔍",
  },
]

export default function FeatureCarousel() {
  const [width, setWidth] = useState(0)
  const carousel = useRef<HTMLDivElement>(null)
  const x = useMotionValue(0)
  const controls = useAnimation()

  useEffect(() => {
    if (carousel.current) {
      setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth)
    }
  }, [])

  const handleDragEnd = () => {
    const currentX = x.get()
    if (currentX > 0) {
      controls.start({ x: 0, transition: { type: "spring", stiffness: 300, damping: 30 } })
    } else if (currentX < -width) {
      controls.start({ x: -width, transition: { type: "spring", stiffness: 300, damping: 30 } })
    }
  }

  return (
    <div className="py-20 bg-gradient-to-b from-background to-secondary/20" id="services">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12 text-foreground">
          Services that I offer (👌🤞)
        </h2>
        <motion.div ref={carousel} className="cursor-grab overflow-hidden">
          <motion.div
            drag="x"
            dragConstraints={{ right: 0, left: -width }}
            whileTap={{ cursor: "grabbing" }}
            animate={controls}
            style={{ x }}
            onDragEnd={handleDragEnd}
            className="flex"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="min-w-[300px] h-[400px] p-8 m-4 bg-background shadow-lg border flex flex-col justify-between hover-lift transition-all duration-300 ease-in-out hover:border-2 hover:border-primary/50"
              >
                <div>
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold mb-2 text-foreground">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
                <div className="mt-4">
                  <a
                    href="#contact"
                    className="text-primary hover:underline"
                  >
                    Get Started →
                  </a>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}

