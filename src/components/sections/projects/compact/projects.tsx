import React from 'react';

import MotionWrap from '@/components/motion-wrap';
import ProjectCard from './project-card';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from '@/components/ui/carousel';

import { projects } from '@/components/sections/projects/config';

function Projects() {
  return (
    <MotionWrap
      className="container mx-auto w-full py-24 lg:py-32"
      id="projects"
    >
      <div className="px-4 md:px-6 ">
        <div className="flex flex-col w-full items-start  justify-center gap-10 lg:grid-cols-2">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
              My Projects
            </h2>
            <p className="text-gray-500 dark:text-gray-400">
              Here are some of my projects where I&apos;ve turned code into
              cool, functional stuff.
            </p>
          </div>
          <div className="flex items-center justify-center overflow-hidden lg:px-12 w-full">
            <Carousel
              opts={{
                align: 'start'
              }}
              className="w-full"
            >
              <CarouselContent>
                {projects.map((project, index) => (
                  <CarouselItem
                    key={`project_${index}`}
                    className="md:basis-1/2 lg:basis-full	xl:basis-1/2"
                  >
                    <div className="h-full">
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
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </div>
      </div>
    </MotionWrap>
  );
}

export default Projects;
