'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';
import GradientBackground from '@/components/common/gradient-bg';

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
      <div className="container mx-auto px-6 py-14 sm:py-2 lg:flex lg:items-center lg:gap-x-10 lg:px-8 lg:py-10">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl lg:flex-shrink-0">
          <motion.h1
            className="mt-10 text-4xl font-bold tracking-tight text-foreground sm:text-6xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Welcome to My{' '}
            <span className="text-gradient">Developer Portfolio</span>
          </motion.h1>
          <motion.p
            className="mt-6 text-lg leading-8 text-muted-foreground"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Passionate about coding and creating innovative solutions. Explore
            my projects and experience in the world of development.
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
            <Link
              href="#about"
              className="text-sm font-semibold leading-6 text-foreground"
            >
              Learn more <span aria-hidden="true">→</span>
            </Link>
          </motion.div>

          <motion.div
            className="mt-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <h3 className="mb-4 text-sm font-semibold text-muted-foreground">
              Driven By:
            </h3>
            <div className="flex flex-wrap gap-4">
              {['Focus', 'Determination', 'Passion'].map((value) => (
                <div
                  key={value}
                  className="rounded-md bg-primary/10 px-4 py-2 font-medium text-primary"
                >
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
            <div className="relative flex h-[350px] w-[350px] items-center justify-center rounded-2xl bg-primary/10 p-8 sm:h-[450px] sm:w-[450px]">
              <div className="relative h-full w-full overflow-hidden rounded-2xl">
                <Image
                  src="/me.jpg"
                  alt="Profile"
                  fill
                  className="object-cover transition-transform duration-300 hover:scale-105"
                  sizes="(max-width: 768px) 350px, 450px"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 flex h-24 w-24 items-center justify-center rounded-full bg-primary font-bold text-white">
                3+ YRS
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </GradientBackground>
  );
}
