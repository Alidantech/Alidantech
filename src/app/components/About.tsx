"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import GradientBackground from "./GradientBackground"

export default function About() {
  return (
    <GradientBackground
      id="about"
      className="py-20 bg-background"
      colorFrom="from-blue-500"
      colorTo="to-teal-500"
      direction="to-bl"
      intensity="subtle"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold text-foreground sm:text-3xl">
            Wondering who I am? (🤔)
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
            <div className="relative h-[400px] w-full rounded-2xl overflow-hidden">
              <Image src="/image.png?height=400&width=500" alt="Peter Irungu" fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6">
                <h3 className="text-2xl font-bold text-white mb-2">Peter Irungu</h3>
                <div className="flex flex-col space-y-1">
                  <span className="text-white/90">💻 Software Developer</span>
                  <span className="text-white/90">📊 Data Scientist</span>
                  <span className="text-white/90">🌐 Web Developer</span>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="text-muted-foreground mb-6">
              👋 Hello, my name is Peter. I am a passionate web developer and software engineer based in Kenya. With a
              strong foundation in programming and a keen eye for design, I strive to create engaging and user-friendly
              web applications.
            </p>
            <p className="text-muted-foreground mb-6">
              🚀 My journey in the world of technology began on 2021. Over the years, I have gained expertise in Web
              Development, allowing me to tackle a variety of projects with confidence and efficiency.
            </p>
            <p className="text-muted-foreground">
              🎵 When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or
              enjoying some quality time with my Music and Reading. I believe in continuous learning and am always
              excited to take on new challenges in the ever-evolving landscape of web development.
            </p>
          </motion.div>
        </div>
      </div>
    </GradientBackground>
  )
}

