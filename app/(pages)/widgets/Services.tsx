import React from "react";
import { motion } from "framer-motion";

const services = [
  {
    title: "Web Development",
    description: "Blog, E-Commerce",
    icon: "💻", // Placeholder for the icon
  },
  {
    title: "UI/UX Design",
    description: "Mobile App, Website Design",
    icon: "🎨",
  },
  {
    title: "Sound Design",
    description: "Voice Over, Beat Making",
    icon: "🎤",
  },
  {
    title: "Game Design",
    description: "Character Design, Props & Objects",
    icon: "🎮",
  },
  {
    title: "Photography",
    description: "Portrait, Product Photography",
    icon: "📷",
  },
  {
    title: "Advertising",
    description: "Social Media, Google Ads",
    icon: "📢",
    buttonText: "ORDER NOW >",
  },
];

const ServiceCard = ({
  title,
  description,
  icon,
  buttonText,
}: {
  title: string;
  description: string;
  icon: string;
  buttonText?: string;
}) => (
  <motion.div
    className="bg-white dark:bg-black  p-6 py-12 text-center hover:shadow-xl transition-shadow duration-300"
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
  >
    <div className="text-4xl mb-4">{icon}</div>
    <h3 className="text-xl font-semibold mb-2 text-orange-500">{title}</h3>
    <p className="mb-4">{description}</p>
  </motion.div>
);

const MyServices = () => (
  <div
    className="text-center py-12"
    style={{
      maxWidth: 1250,
      margin: "0 auto",
    }}
  >
    <h2 className="text-3xl font-bold mb-4">My Services</h2>
    <p className="mb-10">
      I offer a wide range of services to help you achieve your goals.
      <br /> And I'm always looking for new challenges.
    </p>
    <motion.div
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {services.map((service, index) => (
        <ServiceCard
          key={index}
          title={service.title}
          description={service.description}
          icon={service.icon}
          buttonText={service.buttonText}
        />
      ))}
    </motion.div>
  </div>
);

export default MyServices;
