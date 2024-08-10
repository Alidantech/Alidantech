import React from "react";

const ProfileHero = () => {
  return (
    <div className="relative flex items-center justify-center h-screen p-8">
      {/* Background Circle */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-gradient-to-r from-orange-100 via-orange-200 to-orange-300 dark:from-orange-400 dark:via-orange-500 dark:to-orange-600">
        <div className="relative">
          <img
            src="/hero-photo.png"
            alt="peter-irungu"
            className="w-90 h-auto"
          />
        </div>
      </div>
      {/* Text Section */}
      <div className="absolute top-1/4 left-10">
        <h1 className="text-8xl font-bold mb-12">PETER</h1>
        <h2 className="text-lg mt-2 mb-8">
          I&apos;m a <u>software</u> <u>engineer</u> based in Nairobi,
          <br /> Kenya.
        </h2>
        <button className="mt-6 bg-orange-500 text-white px-12 py-3 rounded-lg font-semibold">
          HIRE ME
        </button>
      </div>

      {/* Surname on the Right */}
      <div className="absolute top-3/5 right-10">
        <h1 className="text-8xl font-bold text-orange-500">IRUNGU</h1>
      </div>
    </div>
  );
};

export default ProfileHero;
