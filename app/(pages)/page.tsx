"use client";
import React from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

import HeroCarousel from "./widgets/Hero";
import MyServices from "./widgets/Services";
import Education from "./widgets/Eduction";

const LandingPage = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  if (inView) {
    controls.start("visible");
  }

  return (
    <div className="min-h-screen flex flex-col">
      <section
        style={{
          height: "calc(100vh - 4rem)",
          backgroundImage:
            "url(https://source.unsplash.com/1600x900/?technology)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          maxWidth: 1250,
          margin: "0 auto",
        }}
      >
        <HeroCarousel />
      </section>
      <section
        className="bg-gray-100 dark:bg-gray-900 px-2 py-12 sm:px-3 md:px-4 lg:px-12"
        ref={ref}
      >
        <MyServices />
      </section>
      <section className="bg-gray-100 dark:bg-gray-900 px-2 py-12 sm:px-3 md:px-4 lg:px-12">
        <Education />
      </section>
    </div>
  );
};

export default LandingPage;
