"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import GradientBackground from "./GradientBackground"

export default function Hero() {
  return (
    <GradientBackground
      id="home"
      className="relative isolate overflow-hidden bg-background"
      colorFrom="from-primary"
      colorTo="to-purple-600"
      direction="to-tr"
      intensity="medium"
    >
      <div className="mx-auto container px-6 py-24 sm:py-32 lg:flex lg:items-center lg:gap-x-10 lg:px-8 lg:py-40">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl lg:flex-shrink-0">
          <motion.h1
            className="mt-10 text-4xl font-bold tracking-tight text-foreground sm:text-6xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Welcome to My <span className="text-gradient">Developer Portfolio</span>
          </motion.h1>
          <motion.p
            className="mt-6 text-lg leading-8 text-muted-foreground"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Passionate about coding and creating innovative solutions. Explore my projects and experience in the world
            of development.
          </motion.p>
          <motion.div
            className="mt-10 flex items-center gap-x-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Link href="#projects">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                Explore Projects
              </Button>
            </Link>
            <Link href="#about" className="text-sm font-semibold leading-6 text-foreground">
              Learn more <span aria-hidden="true">→</span>
            </Link>
          </motion.div>

          <motion.div
            className="mt-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <h3 className="text-sm font-semibold text-muted-foreground mb-4">Driven By:</h3>
            <div className="flex flex-wrap gap-4">
              {["Focus", "Determination", "Passion"].map((value) => (
                <div key={value} className="bg-primary/10 px-4 py-2 rounded-md text-primary font-medium">
                  {value}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
        <motion.div
          className="mx-auto mt-16 flex max-w-2xl sm:mt-24 lg:ml-10 lg:mr-0 lg:mt-0 lg:max-w-none lg:flex-none xl:ml-32"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="max-w-3xl flex-none sm:max-w-5xl lg:max-w-none">
            <div className="relative h-[350px] w-[350px] sm:h-[450px] sm:w-[450px] rounded-2xl bg-primary/10 p-8 flex items-center justify-center">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-6xl font-bold text-primary">PI</div>
              </div>
              <div className="absolute -bottom-4 -right-4 h-24 w-24 bg-primary rounded-full flex items-center justify-center text-white font-bold">
                3+ YRS
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </GradientBackground>
  )
}

