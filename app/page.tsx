"use client";
import React from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const bounceTransition = {
  y: {
    duration: 0.4,
    yoyo: Infinity,
    ease: "easeOut",
  },
};

const LandingPage = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  if (inView) {
    controls.start("visible");
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-900 via-cyan-900 to-gray-900 text-white">
      <main className="flex flex-col items-center justify-center pt-10 px-6 text-center">
        <motion.div
          initial={{ y: -20 }}
          animate={{ y: 0 }}
          transition={{
            duration: 0.5,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "mirror",
          }}
        >
          <h2 className="text-6xl font-bold mt-2">Welcome to My Portfolio</h2>
        </motion.div>
        <p className="text-lg mt-4">
          Mobile, Web, Web3 Developer with AI Skills
        </p>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="mt-6 px-6 py-3 bg-cyan-600 text-lg font-semibold rounded-full hover:bg-cyan-700"
        >
          Get in Touch
        </motion.button>
      </main>

      <section className="mt-16 flex justify-center">
        <div className="p-10 rounded-lg">
          <motion.img
            src="/my-avatar.png"
            alt="Profile"
            className="rounded-lg h-64 w-72 border-4 border-cyan-500"
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
              initial={{ y: -20 }}
              animate={{ y: 0 }}
              transition={{
                duration: 0.5,
                ease: "easeInOut",
                repeat: Infinity,
                repeatType: "mirror",
                delay,
              }}
              whileHover={{ scale: 1.1 }}
              className="flex flex-col items-center"
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
          initial="hidden"
          animate={controls}
          variants={{
            hidden: { opacity: 0, y: 100 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="mt-72"
        >
          <h2 className="text-4xl font-bold">Let's Work Together!</h2>
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

      <div className="bg-[#1B1B3A10] mt-72 rounded-lg mx-auto overflow-hidden max-w-4xl w-full shadow-lg">
        <div className="flex flex-col md:flex-row">
          {/* Sidebar */}
          <div className="bg-[#27275015] p-6 w-full md:w-1/3 flex flex-col justify-between">
            <div>
              <div className="text-sm text-gray-400">
                FINANCE &gt; PROCESSES
              </div>
              <div className="mt-4 text-lg font-semibold text-white">
                Cryptocurrency Market: Blockchain
              </div>
              <ul className="mt-8 space-y-4 text-gray-300">
                <li>An Introduction to Ethereum</li>
                <li>Volatile Emerging Market Currency</li>
                <li>Strategic Financial Leadership</li>
              </ul>
            </div>
            <button className="mt-8 px-4 py-2 bg-cyan-600 text-lg font-semibold rounded-full hover:bg-cyan-700 text-white">
              VIEW ALL
            </button>
          </div>

          {/* Main Content */}
          <div className="p-6 bg-[#1B1B3A30] w-full md:w-2/3">
            <img
              src="https://via.placeholder.com/400x200"
              alt="Header"
              className="rounded-lg w-full object-cover h-48 mb-4"
            />
            <div>
              <div className="text-sm text-yellow-500">FINTECH ANALYSIS</div>
              <h2 className="text-2xl font-bold text-white mt-2">
                Tough Times Don't Have to Mean Tough Terms: Leveraging Financial
                and Cap Table Modeling in VC Negotiations
              </h2>
              <p className="mt-4 text-gray-300">
                Convallis cras semper auctor neque morbi blandit cursus risus
                ultrices facilisi nullam vehicula ipsum mattis tellus elementum
                sagittis vitae pretium lectus turpis habitasse platea.
                Scelerisque ultrices auctor augue ut lectus. Iaculis urna id
                volutpat lacus laoreet.
              </p>
              <div className="mt-4 flex space-x-2 gap-2 flex-wrap">
                {[
                  "BUSINESS INSIGHTS",
                  "FINTECH",
                  "IT OUTSTAFFING",
                  "BLOCKCHAIN",
                ].map((tag, index) => (
                  <span
                    key={index}
                    className="bg-blue-500 text-white text-sm px-3 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

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
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: delay }}
              whileHover={{ y: -10 }}
              className="text-center"
            >
              <p className={`text-5xl font-bold ${color}`}>{value}</p>
              <p className="mt-2">{label}</p>
            </motion.div>
          ))}
        </div>
        <div className="mt-72 text-center">
          <p className="text-lg">2023 &bull; All rights reserved</p>
          <div className="flex justify-center space-x-4 mt-2">
            <a href="#" className="hover:underline">
              Cookie Policy
            </a>
            <a href="#" className="hover:underline">
              Privacy Policy
            </a>
          </div>
          <div className="flex justify-center space-x-4 mt-2">
            <a href="#">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
