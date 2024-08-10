import React, { useRef, useState } from "react";
import Slider from "react-slick";

import ContactHero from "./ContactHero";
import ProfileHero from "./ProfileHero";
import MusicHero from "./MusicHero";

const HeroCarousel = () => {
  const sliderRef = useRef<Slider>(null); // Reference to the slider instance
  const [activeIndex, setActiveIndex] = useState(0); // State to track the active slide

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000, // Increased animation duration
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    fade: true,
    beforeChange: (current: number, next: number) => setActiveIndex(next),
  };

  return (
    <div className="relative w-full h-screen overflow-hidden flex flex-col items-center justify-center">
      <Slider {...settings} ref={sliderRef} className="w-full h-full">
        <div className="w-full h-full flex flex-col items-center justify-center">
          <ProfileHero />
        </div>
        <div className="w-full h-full flex flex-col items-center justify-center">
          <ContactHero />
        </div>
        <div className="w-full h-full flex flex-col items-center justify-center">
          <MusicHero />
        </div>
      </Slider>
      <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 flex space-x-4">
        <button
          className={`transition duration-300 ease-in-out transform px-5 py-1 rounded-full shadow-md border-2
                      ${activeIndex === 0 ? "bg-orange-500 text-white border-orange-500 hover:bg-orange-400 dark:bg-orange-600 dark:hover:bg-orange-500" : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700"}
                      `}
          onClick={() => sliderRef.current && sliderRef.current.slickGoTo(0)}
        >
          Profile
        </button>
        <button
          className={`transition duration-300 ease-in-out transform px-5 py-1 rounded-full shadow-md border-2
                      ${activeIndex === 1 ? "bg-orange-500 text-white border-orange-500 hover:bg-orange-400 dark:bg-orange-600 dark:hover:bg-orange-500" : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700"}
                      `}
          onClick={() => sliderRef.current && sliderRef.current.slickGoTo(1)}
        >
          Contact
        </button>
        <button
          className={`transition duration-300 ease-in-out transform px-5 py-1 rounded-full shadow-md border-2
                      ${activeIndex === 2 ? "bg-orange-500 text-white border-orange-500 hover:bg-orange-400 dark:bg-orange-600 dark:hover:bg-orange-500" : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700"}
                      `}
          onClick={() => sliderRef.current && sliderRef.current.slickGoTo(2)}
        >
          Music
        </button>
      </div>
    </div>
  );
};

export default HeroCarousel;