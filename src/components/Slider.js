import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

import foodBanner1 from "../images/foodBanner1.jpeg";
import foodBanner2 from "../images/foodBanner2.jpg";
import foodBanner3 from "../images/foodBanner3.jpeg";
import foodBanner4 from "../images/foodBanner4.jpeg";
import foodBanner5 from "../images/foodBanner5.jpeg";
import foodBanner6 from "../images/foodBanner6.jpeg";

const slides = [
  {
    image: foodBanner1,
    heading: "WELCOME Dear",
    subheading: "Taste and Enjoy the Flavour",
  },
  {
    image: foodBanner2,
    heading: "Delicious Awaits",
    subheading: "Let Every Bite Tell a Story",
  },
  {
    image: foodBanner3,
    heading: "Freshly Made",
    subheading: "Bringing Flavor to Life",
  },
  {
    image: foodBanner4,
    heading: "Your Food Journey",
    subheading: "Begins with Silver Spoons",
  },
  {
    image: foodBanner5,
    heading: "Love at First Bite",
    subheading: "Served Hot & Fresh",
  },
  {
    image: foodBanner6,
    heading: "Explore More Flavors",
    subheading: "Discover. Taste. Repeat.",
  },
];

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState("next");

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    setDirection("prev");
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
    setDirection("next");
  };

  return (
    <div className="mx-4 md:mx-8 lg:mx-16 rounded-lg">
      <div className="relative w-full overflow-hidden h-60 md:h-72 lg:h-96 my-4 rounded-lg">
        <div className="relative w-full h-full">
          {slides.map((slide, index) => {
            const isActive = index === currentIndex;

            return (
              <div
                key={index}
                className={`absolute top-0 left-0 w-full h-full transition-transform duration-700 ease-in-out
                ${isActive ? "z-20" : "z-10 pointer-events-none opacity-0"}
                ${
                  isActive
                    ? "translate-x-0"
                    : direction === "next"
                    ? "translate-x-full"
                    : "-translate-x-full"
                }`}
              >
                <img
                  src={slide.image}
                  alt={`Slide ${index}`}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/10 flex flex-col items-center justify-center text-center px-4">
                  <h2 className="text-white text-2xl md:text-4xl lg:text-6xl font-bold drop-shadow-2xl">
                    {slide.heading}
                  </h2>
                  <p className="text-white text-xl md:text-2xl lg:text-5xl mt-2 md:mt-4 drop-shadow-2xl">
                    {slide.subheading}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Prev Button */}
        <button
          onClick={prevSlide}
          className="absolute top-1/2 left-3 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full z-30"
        >
          <FaChevronLeft size={20} />
        </button>

        {/* Next Button */}
        <button
          onClick={nextSlide}
          className="absolute top-1/2 right-3 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full z-30"
        >
          <FaChevronRight size={20} />
        </button>

        {/* Indicator Dots */}
        <div className="absolute bottom-4 w-full flex justify-center items-center space-x-2 z-30">
          {slides.map((_, index) => (
            <div
              key={index}
              className={`rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? "bg-white scale-110 w-4 h-4"
                  : "bg-white/50 hover:bg-white w-3 h-3"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Slider;