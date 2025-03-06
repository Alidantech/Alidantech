"use client"

import { useState, useRef } from "react"
import { motion, useScroll, useTransform, useSpring, useInView } from "framer-motion"
import GradientBackground from "./GradientBackground"

const timelineEvents = [
  {
    year: 2021,
    title: "Developer Journey Begins",
    description: "Started my journey in the world of programming and software development.",
    details:
      "My passion for technology led me to take my first steps into programming. I began with the fundamentals, learning basic programming concepts and exploring different areas of software development.",
  },
  {
    year: 2022,
    title: "Core Programming Languages",
    description: "Focused on mastering Java and C programming languages.",
    details:
      "I dedicated this year to building a strong foundation in programming by learning Java and C. These languages helped me understand object-oriented programming principles and low-level programming concepts that would become essential in my future endeavors.",
  },
  {
    year: 2023,
    title: "Web Development Focus",
    description: "Expanded my skills into web development technologies.",
    details:
      "I immersed myself in web development, learning HTML, CSS, JavaScript, and modern frameworks like React and Next.js. This opened up new possibilities for creating interactive and responsive web applications.",
  },
  {
    year: 2024,
    title: "Application Development",
    description: "Started building full-fledged web and mobile applications.",
    details:
      "With my accumulated knowledge, I began developing complete web applications and ventured into mobile app development using React Native and Flutter. This year marked my transition from learning to creating production-ready applications.",
  },
  {
    year: 2025,
    title: "Expanding Horizons",
    description: "Diversified into web apps, mobile apps, and data science.",
    details:
      "Currently, I'm working across multiple domains - developing web applications, creating mobile apps, and exploring data science. I'm using Python, TensorFlow, and other data analysis tools to extract insights from data while continuing to build innovative applications.",
  },
]

export default function Timeline() {
  const [expandedEvent, setExpandedEvent] = useState<number | null>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })

  return (
    <GradientBackground
      id="timeline"
      className="py-20 bg-background overflow-hidden"
      colorFrom="from-blue-500"
      colorTo="to-purple-500"
      direction="to-tr"
      intensity="subtle"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8" ref={containerRef}>
        <motion.div
          className="text-center mb-8 sm:mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground sm:text-4xl">My Developer Journey</h2>
          <p className="mt-2 sm:mt-4 text-base sm:text-lg text-muted-foreground">The evolution of my skills and expertise over the years</p>
        </motion.div>

        <div className="relative">
          {/* Vertical line */}
          <motion.div
            className="absolute left-4 sm:left-1/2 transform sm:-translate-x-1/2 w-0.5 h-full bg-primary/20"
            style={{ scaleY: scaleX }}
          />

          {timelineEvents.map((event, index) => (
            <TimelineEvent
              key={event.year}
              event={event}
              index={index}
              isExpanded={expandedEvent === index}
              onToggle={() => setExpandedEvent(expandedEvent === index ? null : index)}
            />
          ))}
        </div>
      </div>
    </GradientBackground>
  )
}

function TimelineEvent({
  event,
  index,
  isExpanded,
  onToggle,
}: {
  event: (typeof timelineEvents)[0]
  index: number
  isExpanded: boolean
  onToggle: () => void
}) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.5 })

  return (
    <motion.div
      ref={ref}
      className={`mb-8 sm:mb-12 flex justify-between items-center w-full ${
        index % 2 === 0 ? "sm:flex-row-reverse" : ""
      }`}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
    >
      <div className="hidden sm:block w-5/12" />
      <div className="z-20">
        <div className="flex items-center justify-center w-6 h-6 sm:w-8 sm:h-8 bg-primary rounded-full">
          <div className="w-2 h-2 sm:w-3 sm:h-3 bg-background rounded-full" />
        </div>
      </div>
      <motion.div
        className="w-[calc(100%-2rem)] sm:w-5/12 cursor-pointer"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        onClick={onToggle}
      >
        <div className="p-3 sm:p-4 bg-background/80 backdrop-blur-sm rounded-lg shadow-md border border-primary/10">
          <span className="font-bold text-primary text-sm sm:text-base">{event.year}</span>
          <h3 className="text-base sm:text-lg font-semibold mb-1">{event.title}</h3>
          <p className="text-sm sm:text-base text-muted-foreground">{event.description}</p>
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: isExpanded ? "auto" : 0, opacity: isExpanded ? 1 : 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="mt-2 text-xs sm:text-sm text-muted-foreground">{event.details}</p>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  )
}

