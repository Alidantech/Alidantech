"use client"

import { motion } from "framer-motion"
import GradientBackground from "./GradientBackground"

const stats = [
  { id: 1, name: "ORGANISATIONS", value: "10" },
  { id: 2, name: "CLIENTS", value: "8" },
  { id: 3, name: "JOBS COMPLETED", value: "54" },
  { id: 4, name: "YEARS EXPERIENCE", value: "3" },
]

export default function Stats() {
  return (
    <GradientBackground
      id="stats"
      className="py-20 bg-primary"
      colorFrom="from-primary"
      colorTo="to-blue-700"
      direction="to-r"
      intensity="medium"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <dl className="grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.id}
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
            >
              <dt className="text-sm font-medium leading-6 text-primary-foreground">{stat.name}</dt>
              <dd className="mt-2 text-5xl font-bold tracking-tight text-white">{stat.value}</dd>
            </motion.div>
          ))}
        </dl>
      </div>
    </GradientBackground>
  )
}

