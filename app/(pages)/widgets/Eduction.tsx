import React from "react";
import { motion } from "framer-motion";

const educationData = [
  {
    institution: "University Of Toronto",
    certificate: "Certificate Of Web Training",
    role: "Student",
    date: "Jan 2020 - Dec 2021",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet dapibus nibh ut faucibus nunc, egestas in amet porttitor. Pulvinar quisque sed amet, nulla nunc.",
  },
  {
    institution: "Programming Course",
    certificate: "Certificate Of Web Training",
    role: "Student",
    date: "Jan 2018 - Dec 2019",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet dapibus nibh ut faucibus nunc, egestas in amet porttitor. Pulvinar quisque sed amet, nulla nunc.",
  },
  {
    institution: "Web Developer Courses",
    certificate: "Certificate Of Web Training",
    role: "Student",
    date: "Jan 2017 - Dec 2018",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet dapibus nibh ut faucibus nunc, egestas in amet porttitor. Pulvinar quisque sed amet, nulla nunc.",
  },
];

const EducationCard = ({
  institution,
  certificate,
  role,
  date,
  description,
}: {
  institution: string;
  certificate: string;
  role: string;
  date: string;
  description: string;
}) => (
  <motion.div
    className="border-b border-gray-100 dark:border-gray-900 py-12 bg-white dark:bg-black px-4 md:px-8 flex flex-col md:flex-row justify-between"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
  >
    <div className="flex flex-col md:flex-row md:justify-between md:w-2/5 mb-4 md:mb-0 text-left md:text-left">
      <h3 className="text-lg font-semibold mb-2 md:mb-0 flex flex-col gap-4">
        {institution}
        <br />
        <span className="text-sm mt-2 bg-orange-200 dark:bg-orange-700 px-3 py-1 rounded-lg">
          {date}
        </span>
      </h3>
    </div>
    <div className="flex flex-col md:w-2/3 md:ml-8 text-left md:text-left">
      <p className="text-lg text-orange-500 mb-2">{certificate}</p>
      <p className="text-md font-bold  mb-2">{role}</p>
      <p className="text-sm mt-2">{description}</p>
    </div>
  </motion.div>
);

const Education = () => (
  <div
    className="py-12 md:px-4"
    style={{
      maxWidth: 1250,
      margin: "0 auto",
    }}
  >
    <h2 className="text-3xl px-2 font-bold mb-4 text-left md:text-left">
      Education
    </h2>
    <p className="mb-10 px-2 text-left md:text-left">
      Amet Minim Mollit Non Deserunt Ullamco Est Sit Aliqua Dolor Do Amet Sint.
      Velit Officia Consequat Duis Enim Velit Mollit. Lorem Ipsum
    </p>
    <div>
      {educationData.map((item, index) => (
        <EducationCard
          key={index}
          institution={item.institution}
          certificate={item.certificate}
          role={item.role}
          date={item.date}
          description={item.description}
        />
      ))}
    </div>
  </div>
);

export default Education;
