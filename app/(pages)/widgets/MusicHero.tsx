import React from "react";

const MusicHero = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between h-screen w-full p-8 ">
      {/* Left Column */}
      <div className="flex-1 text-left">
        <h1 className="text-5xl font-bold">
          Discover how <br />
          you <span className="text-pink-500">listen.</span>
        </h1>
        <p className="text-lg mt-4">
          Explore your music taste profile and create awesome playlists.
        </p>
        <button className="mt-8 px-6 py-3 bg-white text-black rounded-full font-semibold shadow-lg hover:bg-gray-200">
          <span className="flex items-center space-x-2">
            <span className="material-icons">visibility</span>
            <span>continue with roomplay</span>
          </span>
        </button>
      </div>

      {/* Right Column */}
      <div className="flex-1 mt-8 md:mt-0">
        <div className="w-full h-full relative">
          <img
            alt="Artist"
            className="w-full h-96 object-cover rounded-lg shadow-lg"
            src="/path/to/your/image.jpg" // Replace with your image path
          />
          <div className="absolute bottom-0 left-0 p-4 bg-black bg-opacity-75 w-full rounded-b-lg">
            <h3 className="text-xl font-bold">Asake</h3>
            <p className="text-sm">Yoga</p>
            <div className="flex items-center justify-between mt-2">
              <div className="flex items-center space-x-2">
                <button className="text-white">&#x25C0;</button>
                <button className="text-white">&#9658;</button>
                <button className="text-white">&#x25B6;</button>
              </div>
              <p className="text-sm">03:50</p>
            </div>
            <div className="w-full bg-gray-700 rounded-full h-1.5 mt-2">
              <div className="bg-white h-1.5 rounded-full w-2/3" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MusicHero;
