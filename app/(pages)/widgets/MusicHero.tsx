import MusicCard from "@/components/MusicCard";
import React from "react";

const MusicHero = () => {
  return (
    <div className="flex flex-col md:flex-row gap-8 p-8 pt-16 items-start justify-between h-screen w-full">
      {/* Left Column */}
      <div className="text-left mt-16 h-full">
        <h1 className="text-6xl font-bold">
          Discover new <br />
          <span className="text-orange-500">Songs.</span>
        </h1>
        <p className="text-lg mt-4">
          Explore some of my songs and playlists on Spotify.
        </p>
        <button className="mt-8 px-6 py-3 bg-orange-500 text-white rounded-full font-semibold shadow-lg hover:bg-gray-200">
          <span className="flex items-center space-x-2">
            <span>Explore More on spotify</span>
          </span>
        </button>
      </div>
      {/* Right Column */}
      <MusicCard />
    </div>
  );
};

export default MusicHero;
