import React from "react";

const ProfileHero = () => {
  return (
    <div className="flex flex-col items-center justify-center  h-screen p-8 ">
      <div className="text-center">
        <div className="flex items-center justify-center space-x-2 mb-4">
          <span className="text-4xl">👋</span>
          <h1 className="text-4xl font-bold">Hey, I&apos;m Peter</h1>
        </div>
        <h2 className="text-2xl font-semibold mb-4">Full-Stack Developer.</h2>
        <p className="text-lg mb-6">
          Full Stack Frontend Developer and Content Writing Based on L.A. I
          specialize in Bug Fixing, Responsive Web Design, and Visual
          Development.
        </p>
        <div className="flex justify-center space-x-4">
          <button className="bg-yellow-500 text-black px-6 py-2 rounded-lg font-semibold">
            HIRE ME
          </button>
          <button className="flex items-center space-x-2 text-white">
            <span className="text-xl">&#9658;</span>
            <span>Play Intro</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfileHero;
