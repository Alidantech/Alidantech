"use client";
import React from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const LandingPage = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  if (inView) {
    controls.start("visible");
  }

  return (
    <div className="min-h-screen">
      <main className="flex flex-col items-center justify-center pt-10 px-6 text-center">
        <h2 className="text-6xl font-bold mt-2">Welcome to My Portfolio</h2>
        <p className="text-lg mt-4">
          Mobile, Web, Web3 Developer with AI Skills
        </p>
        <motion.button
          className="mt-6 px-6 py-3 bg-cyan-600 text-lg font-semibold rounded-full hover:bg-cyan-700"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          Get in Touch
        </motion.button>
      </main>

      <section className="mt-16 flex justify-center">
        <div className="p-10 rounded-lg">
          <motion.img
            alt="Profile"
            className="rounded-lg h-64 w-72 border-4 border-cyan-500"
            src="/my-avatar.png"
            whileHover={{ scale: 1.1 }}
          />
        </div>
      </section>

      <section className="mt-16 text-center px-6">
        <div className="flex flex-wrap justify-center gap-8">
          {[
            { icon: "🚀", label: "Kick-Off" },
            { icon: "👥", label: "Brainstorming", delay: 0.1 },
            { icon: "🔧", label: "Designing", delay: 0.2 },
            { icon: "💻", label: "Dev & Testing", delay: 0.3 },
            { icon: "✅", label: "Delivery", delay: 0.4 },
          ].map(({ icon, label, delay = 0 }, index) => (
            <motion.div
              key={index}
              animate={{ y: 0 }}
              className="flex flex-col items-center"
              initial={{ y: -20 }}
              transition={{
                duration: 0.5,
                ease: "easeInOut",
                repeat: Infinity,
                repeatType: "mirror",
                delay,
              }}
              whileHover={{ scale: 1.1 }}
            >
              <div className="rounded-full p-6 bg-gradient-to-r from-blue-500 to-cyan-500">
                <span className="text-4xl">{icon}</span>
              </div>
              <p className="mt-2">{label}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          ref={ref}
          animate={controls}
          className="mt-72"
          initial="hidden"
          transition={{ duration: 0.5, ease: "easeInOut" }}
          variants={{
            hidden: { opacity: 0, y: 100 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <h2 className="text-4xl font-bold">Let&apos;s Work Together!</h2>
          <p className="mt-4">
            Please fill the form below to receive a quote for your project.
            <br />
            Feel free to add as much detail as needed.
          </p>
          <div className="mt-8 flex justify-center space-x-4">
            {[1, 2, 3, 4].map((number, index) => (
              <div
                key={index}
                className={`rounded-full p-4 ${
                  index === 0
                    ? "bg-gradient-to-r from-blue-500 to-cyan-500"
                    : "bg-gray-800"
                }`}
              >
                <span className="text-2xl">{`0${number}`}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      <section className="mt-72 px-2">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-16">
            Worldwide Resource Pool With Proven Track Record
          </h2>
        </div>
        <div className="flex flex-wrap justify-center gap-10 mt-10">
          {[
            {
              value: "100%",
              label: "Projects Completed",
              color: "text-cyan-300",
              delay: 0.5,
            },
            {
              value: "450+",
              label: "Worldwide Customers Served",
              color: "text-yellow-300",
              delay: 0.7,
            },
            {
              value: "630+",
              label: "Resources Worldwide",
              color: "text-pink-300",
              delay: 0.9,
            },
          ].map(({ value, label, color, delay }, index) => (
            <motion.div
              key={index}
              animate={{ opacity: 1, y: 0 }}
              className="text-center"
              initial={{ opacity: 0, y: 50 }}
              transition={{ duration: delay }}
              whileHover={{ y: -10 }}
            >
              <p className={`text-5xl font-bold ${color}`}>{value}</p>
              <p className="mt-2">{label}</p>
            </motion.div>
          ))}
        </div>
        <div className="mt-72 text-center">
          <p className="text-lg">2023 &bull; All rights reserved</p>

          <div className="flex justify-center space-x-4 mt-2">
            <a href="/">
              <i className="fab fa-facebook-f" />
            </a>
            <a href="/">
              <i className="fab fa-twitter" />
            </a>
            <a href="/">
              <i className="fab fa-linkedin-in" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
