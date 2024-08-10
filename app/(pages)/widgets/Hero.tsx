import React, { useRef } from "react";
import Slider from "react-slick";

import ContactHero from "./ContactHero";
import ProfileHero from "./ProfileHero";
import MusicHero from "./MusicHero";

const HeroCarousel = () => {
  const sliderRef = useRef<Slider>(null); // Reference to the slider instance

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    fade: true,
  };

  return (
    <div className="relative w-full h-screen overflow-hidden flex flex-col items-center justify-center">
      <Slider {...settings} ref={sliderRef} className="w-full h-full">
        <div className="w-full h-full flex flex-col items-center justify-center">
          <ContactHero />
        </div>
        <div className="w-full h-full flex flex-col items-center justify-center">
          <ProfileHero />
        </div>
        <div className="w-full h-full flex flex-col items-center justify-center">
          <MusicHero />
        </div>
      </Slider>
      <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 flex space-x-4">
        <button
          className="btn transition duration-300 ease-in-out transform hover:-translate-y-1 px-4 py-2 rounded-lg shadow-md border-2 
                     border-gray-300 bg-white text-gray-700 hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700"
          onClick={() => sliderRef.current && sliderRef.current.slickGoTo(0)}
        >
          Contact
        </button>
        <button
          className="btn transition duration-300 ease-in-out transform hover:-translate-y-1 px-4 py-2 rounded-lg shadow-md border-2 
                     border-gray-300 bg-white text-gray-700 hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700"
          onClick={() => sliderRef.current && sliderRef.current.slickGoTo(1)}
        >
          Profile
        </button>
        <button
          className="btn transition duration-300 ease-in-out transform hover:-translate-y-1 px-4 py-2 rounded-lg shadow-md border-2 
                     border-gray-300 bg-white text-gray-700 hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700"
          onClick={() => sliderRef.current && sliderRef.current.slickGoTo(2)}
        >
          Music
        </button>
      </div>
    </div>
  );
};

export default HeroCarousel;
