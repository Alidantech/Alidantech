"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import GradientBackground from "./GradientBackground"

const testimonials = [
  {
    quote:
      "Peter's coding expertise is outstanding! Collaborating with him has been a pleasure—efficient problem-solving and top-notch quality.",
    author: "John Doe",
    position: "CTO, TechCorp",
    image: "/image.png?height=100&width=100",
  },
  {
    quote:
      "Peter's development skills are impressive. His attention to detail and commitment to quality make him a reliable and skilled professional.",
    author: "Jane Williams",
    position: "Product Manager, InnovateTech",
    image: "/image.png?height=100&width=100",
  },
  {
    quote:
      "Peter excels in debugging and consistently delivers exceptional results. A developer you can trust for high-quality work.",
    author: "Anthony Maina",
    position: "Lead Developer, CodeCraft",
    image: "/image.png?height=100&width=100",
  },
]

export default function Testimonials() {
  const [current, setCurrent] = useState(0)

  const next = () => {
    setCurrent((current + 1) % testimonials.length)
  }

  const prev = () => {
    setCurrent((current - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <GradientBackground
      id="testimonials"
      className="py-20 bg-background/50"
      colorFrom="from-indigo-500"
      colorTo="to-cyan-500"
      direction="to-l"
      intensity="subtle"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl">What Clients Say</h2>
        </motion.div>

        <div className="max-w-4xl mx-auto relative">
          <div className="overflow-hidden">
            <motion.div
              className="flex"
              animate={{ x: `-${current * 100}%` }}
              transition={{ ease: "easeInOut", duration: 0.5 }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4">
                  <div className="bg-background/80 backdrop-blur-sm border border-border p-8 rounded-lg shadow-sm">
                    <p className="text-lg text-muted-foreground mb-6 italic">"{testimonial.quote}"</p>
                    <div className="flex items-center">
                      <div className="relative h-12 w-12 rounded-full overflow-hidden mr-4">
                        <Image
                          src={testimonial.image || "/image.png"}
                          alt={testimonial.author}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <h4 className="font-bold text-foreground">{testimonial.author}</h4>
                        <p className="text-sm text-muted-foreground">{testimonial.position}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          <button
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -ml-4 w-10 h-10 rounded-full bg-background/80 backdrop-blur-sm border border-border flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 -mr-4 w-10 h-10 rounded-full bg-background/80 backdrop-blur-sm border border-border flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`w-3 h-3 rounded-full ${current === index ? "bg-primary" : "bg-border"}`}
              />
            ))}
          </div>
        </div>
      </div>
    </GradientBackground>
  )
}

