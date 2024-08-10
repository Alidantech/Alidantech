import React from "react";
import {
  FaTwitter,
  FaLinkedin,
  FaGithub,
  FaInstagram,
  FaPhone,
} from "react-icons/fa";

const ContactHero = () => {
  return (
    <div className="hero flex flex-col items-center justify-center h-screen p-6">
      <h1 className="text-5xl font-bold mb-12">
        {"Let's"} <span className="text-orange-500">work</span> together
      </h1>
      <p
        className="text-2xl text-center mb-12"
        style={{
          maxWidth: "50rem",
        }}
      >
        I&apos;m a passionate UI/UX Designer with expertise in Wireframing,
        Prototyping, Sitemap Creation, Product, App, and Web Design.
      </p>

      {/* Contact Form */}
      {/* <div className="w-full max-w-md p-6 rounded-lg shadow-md"> */}
      {/* <h2 className="text-2xl font-semibold mb-4">Contact Me</h2> */}
      {/* <form className="flex flex-col space-y-4">
          <input
            type="email"
            placeholder="Your Email"
            className="p-2 border border-gray-300 rounded-lg"
            required
          />
           <textarea
            placeholder="Your Message"
            className="p-2 border border-gray-300 rounded-lg"
            rows={4}
            required
          /> 
          <button
            type="submit"
            className="bg-orange-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-orange-600 transition duration-300"
          >
            Send Email
          </button>
        </form> */}
      {/* </div> */}

      {/* Social Media Links */}
      <div className="flex space-x-4 mt-6">
        <a
          href="tel:+254712345678"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-orange-500 p-3 rounded-full text-white hover:bg-orange-600 transition duration-300"
        >
          <FaPhone />
        </a>
        <a
          href="https://twitter.com/alidantech"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-orange-500 p-3 rounded-full text-white hover:bg-orange-600 transition duration-300"
        >
          <FaTwitter />
        </a>
        <a
          href="https://linkedin.com/in/alidantech"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-orange-500 p-3 rounded-full text-white hover:bg-orange-600 transition duration-300"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/alidantech"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-orange-500 p-3 rounded-full text-white hover:bg-orange-600 transition duration-300"
        >
          <FaGithub />
        </a>
        <a
          href="https://instagram.com/alidantech"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-orange-500 p-3 rounded-full text-white hover:bg-orange-600 transition duration-300"
        >
          <FaInstagram />
        </a>
      </div>
    </div>
  );
};

export default ContactHero;
