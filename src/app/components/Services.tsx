"use client"

import { motion } from "framer-motion"
import { Smartphone, Globe, Database, Palette, BarChart, Bug } from "lucide-react"
import GradientBackground from "./GradientBackground"

const services = [
  {
    icon: <Smartphone className="w-12 h-12 mb-4 text-primary" />,
    title: "Apps Development",
    description: "Mobile developer with experience in building responsive and user-friendly mobile applications.",
  },
  {
    icon: <Globe className="w-12 h-12 mb-4 text-primary" />,
    title: "Web Development",
    description:
      "Web developer with expertise in building modern and scalable web applications using the latest technologies.",
  },
  {
    icon: <Database className="w-12 h-12 mb-4 text-primary" />,
    title: "Data Science",
    description:
      "Data scientist with strong analytical skills and experience in extracting insights from large datasets.",
  },
  {
    icon: <Palette className="w-12 h-12 mb-4 text-primary" />,
    title: "UI/UX Design",
    description: "UI/UX designer with the ability to create visually appealing and intuitive user interfaces.",
  },
  {
    icon: <BarChart className="w-12 h-12 mb-4 text-primary" />,
    title: "Data Analysis",
    description:
      "Data analyst with expertise in analyzing and interpreting data to support informed business decisions.",
  },
  {
    icon: <Bug className="w-12 h-12 mb-4 text-primary" />,
    title: "Bug Fixing",
    description:
      "Developer with strong debugging skills and the ability to identify and fix software bugs efficiently.",
  },
]

export default function Services() {
  return (
    <GradientBackground
      id="services"
      className="py-20 bg-background"
      colorFrom="from-green-500"
      colorTo="to-blue-500"
      direction="to-tl"
      intensity="subtle"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl mb-4">Services Offered</h2>
          <p className="text-muted-foreground">I offer the following services</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className="bg-background/80 backdrop-blur-sm border border-border p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
            >
              {service.icon}
              <h3 className="text-xl font-bold mb-2 text-foreground">{service.title}</h3>
              <p className="text-muted-foreground">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </GradientBackground>
  )
}

