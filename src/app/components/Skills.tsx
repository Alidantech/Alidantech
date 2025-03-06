"use client"

import { motion } from "framer-motion"
import GradientBackground from "./GradientBackground"

const skills = [
  {
    name: "Java",
    level: 90,
    color: "bg-red-500",
  },
  {
    name: "Python",
    level: 85,
    color: "bg-blue-500",
  },
  {
    name: "Typescript/Js",
    level: 95,
    color: "bg-yellow-500",
  },
  {
    name: "Dart",
    level: 80,
    color: "bg-green-500",
  },
]

export default function Skills() {
  return (
    <GradientBackground
      id="skills"
      className="py-20 bg-background/50"
      colorFrom="from-yellow-500"
      colorTo="to-red-500"
      direction="to-r"
      intensity="subtle"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl">Skills & Languages</h2>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              className="mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
            >
              <div className="flex justify-between mb-2">
                <span className="text-foreground font-medium">{skill.name}</span>
                <span className="text-muted-foreground">{skill.level}%</span>
              </div>
              <div className="h-3 bg-secondary rounded-full overflow-hidden">
                <motion.div
                  className={`h-full ${skill.color}`}
                  initial={{ width: 0 }}
                  animate={{ width: `${skill.level}%` }}
                  transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </GradientBackground>
  )
}

