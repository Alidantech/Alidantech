import React from "react";

const ContactHero = () => {
  return (
    <div className="hero flex flex-col items-center justify-center h-screen p-6">
      <h1 className="text-3xl font-bold mb-4">{"Let's work together"}</h1>
      <p className="text-center mb-6">
        I&apos;m a passionate UI/UX Designer with expertise in Wireframing,
        Prototyping, Sitemap Creation, Product, App, and Web Design.
      </p>
      <div className="flex space-x-4">
        <button className="bg-black text-white font-semibold py-2 px-4 rounded-lg flex items-center">
          <span>Contact</span>
        </button>
        <div className="flex space-x-4">
          <div className="bg-black text-white p-2 rounded-full">
            <i className="icon" /> {/* Replace with actual icon */}
          </div>
          <div className="bg-black text-white p-2 rounded-full">
            <i className="icon" /> {/* Replace with actual icon */}
          </div>
          <div className="bg-black text-white p-2 rounded-full">
            <i className="icon" /> {/* Replace with actual icon */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactHero;
