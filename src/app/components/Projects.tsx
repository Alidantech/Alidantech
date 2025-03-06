"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import GradientBackground from "./GradientBackground"

const projects = [
  {
    title: "Organizer",
    category: "Mobile App",
    date: "18 Jun. 2023",
    image: "/image.png?height=400&width=600",
    link: "#",
  },
  {
    title: "Dev Auto",
    category: "Dev Tool",
    date: "12 Jan. 2022",
    image: "/image.png?height=400&width=600",
    link: "#",
  },
  {
    title: "Webchat",
    category: "Website",
    date: "10 Mar. 2023",
    image: "/image.png?height=400&width=600",
    link: "#",
  },
  {
    title: "Upcoming AI",
    category: "Data Science",
    date: "20 Feb. 2023",
    image: "/image.png?height=400&width=600",
    link: "#",
  },
  {
    title: "Sprianto IQ",
    category: "Website",
    date: "13 Jul. 2023",
    image: "/image.png?height=400&width=600",
    link: "#",
  },
  {
    title: "Farm AI",
    category: "Data Science",
    date: "7 Nov. 2023",
    image: "/image.png?height=400&width=600",
    link: "#",
  },
]

export default function Projects() {
  return (
    <GradientBackground
      id="projects"
      className="py-20 bg-background"
      colorFrom="from-purple-500"
      colorTo="to-pink-500"
      direction="to-br"
      intensity="subtle"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl mb-4">Completed Projects</h2>
          <p className="text-muted-foreground">In the last two years</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
            >
              <div className="relative h-64 w-full">
                <Image
                  src={project.image || "/image.png"}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-80" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm text-primary-foreground bg-primary px-3 py-1 rounded-full">
                    {project.category}
                  </span>
                  <span className="text-xs text-white/80">{project.date}</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                <Link
                  href={`https://github.com/Alidantech/${project.title.toLowerCase().replace(/\s+/g, "-")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-white hover:text-primary transition-colors"
                >
                  View Project
                  <svg
                    className="w-4 h-4 ml-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </GradientBackground>
  )
}

