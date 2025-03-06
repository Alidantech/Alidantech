'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import ProjectCard from '@/components/sections/projects/cozy/project-card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from '@/components/ui/carousel';

const projects = [
  {
    id: 1,
    name: 'Organizer',
    description: 'A mobile app for organizing tasks and schedules efficiently',
    imageUrl: '/image.png?height=400&width=600',
    category: 'Mobile App',
    slug: 'organizer',
    tags: ['React Native', 'TypeScript', 'Firebase'],
    thumbnail: '/image.png?height=400&width=600'
  },
  {
    id: 2,
    name: 'Dev Auto',
    description: 'A development tool for automating common development tasks',
    imageUrl: '/image.png?height=400&width=600',
    category: 'Dev Tool',
    slug: 'dev-auto',
    tags: ['Node.js', 'TypeScript', 'CLI'],
    thumbnail: '/image.png?height=400&width=600'
  },
  {
    id: 3,
    name: 'Webchat',
    description: 'A modern web-based chat application',
    imageUrl: '/image.png?height=400&width=600',
    category: 'Website',
    slug: 'webchat',
    tags: ['React', 'WebSocket', 'MongoDB'],
    thumbnail: '/image.png?height=400&width=600'
  },
  {
    id: 4,
    name: 'Upcoming AI',
    description: 'An AI-powered project for future predictions',
    imageUrl: '/image.png?height=400&width=600',
    category: 'Data Science',
    slug: 'upcoming-ai',
    tags: ['Python', 'TensorFlow', 'Data Analysis'],
    thumbnail: '/image.png?height=400&width=600'
  },
  {
    id: 5,
    name: 'Sprianto IQ',
    description: 'A website showcasing intelligent solutions',
    imageUrl: '/image.png?height=400&width=600',
    category: 'Website',
    slug: 'sprianto-iq',
    tags: ['Next.js', 'TypeScript', 'Tailwind'],
    thumbnail: '/image.png?height=400&width=600'
  },
  {
    id: 6,
    name: 'Farm AI',
    description: 'AI solutions for agricultural optimization',
    imageUrl: '/image.png?height=400&width=600',
    category: 'Data Science',
    slug: 'farm-ai',
    tags: ['Python', 'Machine Learning', 'IoT'],
    thumbnail: '/image.png?height=400&width=600'
  }
];

const categories = [
  'All',
  ...Array.from(new Set(projects.map((project) => project.category)))
];

export default function PortfolioGrid() {
  const [filter, setFilter] = useState('All');

  const filteredProjects =
    filter === 'All'
      ? projects
      : projects.filter((project) => project.category === filter);

  return (
    <section
      className="container mx-auto w-full bg-background py-20"
      id="projects"
    >
      <div className="container mx-auto w-full md:px-4">
        <div className="mb-12 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between w-full">
          <motion.div
            className="text-center md:text-left"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-foreground sm:text-5xl lg:text-6xl">
              My Projects
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              A showcase of my minimalist designs and creative solutions.
            </p>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-2 lg:justify-end">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                  filter === category
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="relative">
          <Carousel
            opts={{
              align: 'start',
              loop: true
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {filteredProjects.map((project) => (
                <CarouselItem
                  key={project.id}
                  className="basis-[95%] pl-2 sm:basis-[85%] md:basis-1/2 md:pl-4 lg:basis-1/3 xl:basis-1/4"
                >
                  <div className="h-full p-2">
                    <ProjectCard
                      name={project.name}
                      slug={project.slug}
                      description={project.description}
                      tags={project.tags}
                      thumbnail={project.thumbnail}
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-2 md:left-4" />
            <CarouselNext className="right-2 md:right-4" />
          </Carousel>
        </div>
      </div>
    </section>
  );
}
