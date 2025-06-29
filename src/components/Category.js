import React, { useEffect, useRef, useState } from "react";
import { IoMdArrowBack, IoMdArrowForward } from "react-icons/io";

// Your image imports
import Biryani from "../images/Biryani.jpg";
import Burger from "../images/Burger.jpg";
import Cake from "../images/Cake.jpg";
import Chinese from "../images/Chinese.jpg";
import CholeBhature from "../images/CholeBhature.jpg";
import Dosa from "../images/Dosa.jpg";
import GulabJamun from "../images/GulabJamun.jpg";
import IceCream from "../images/Vanilla.jpg";
import Kebab from "../images/Kebab.jpg";
import Momo from "../images/Momo.jpg";
import Noodles from "../images/Noodles.jpg";
import NorthIndian from "../images/NorthIndian.jpg";
import Paratha from "../images/Paratha.jpg";
import Pasta from "../images/Pasta.jpg";
import Pastry from "../images/Pastry.jpg";
import PavBhaji from "../images/PavBhaji.jpg";
import Pizza from "../images/Pizza.jpg";
import Rasmalai from "../images/Rasmalai.jpg";
import Rolls from "../images/Rolls.jpg";
import Shawarma from "../images/Shawarma.jpg";

const imageData = [
  { name: "Biryani", src: Biryani },
  { name: "Burger", src: Burger },
  { name: "Cake", src: Cake },
  { name: "Chinese", src: Chinese },
  { name: "Chole Bhature", src: CholeBhature },
  { name: "Dosa", src: Dosa },
  { name: "Gulab Jamun", src: GulabJamun },
  { name: "Ice Cream", src: IceCream },
  { name: "Kebab", src: Kebab },
  { name: "Momo", src: Momo },
  { name: "Noodles", src: Noodles },
  { name: "North Indian", src: NorthIndian },
  { name: "Paratha", src: Paratha },
  { name: "Pasta", src: Pasta },
  { name: "Pastry", src: Pastry },
  { name: "Pav Bhaji", src: PavBhaji },
  { name: "Pizza", src: Pizza },
  { name: "Rasmalai", src: Rasmalai },
  { name: "Rolls", src: Rolls },
  { name: "Shawarma", src: Shawarma },
];

const Category = () => {
  const containerRef = useRef(null);

  const handleScrollRight = () => {
    containerRef.current.scrollLeft += 200;
  };

  const handleScrollLeft = () => {
    containerRef.current.scrollLeft -= 200;
  };

  return (
    <div className="bg-white mx-4 md:mx-8 lg:mx-16 my-8">
      {/* Navigation Buttons */}
      <div className="flex items-center justify-between gap-2">
        <div className="font-bold text-xl md:text-2xl">What's on your mind?</div>
        <div className="gap-2 hidden md:flex">
          <button
            onClick={handleScrollLeft}
            className="p-1 rounded-full bg-gray-100"
          >
            <IoMdArrowBack size={20} />
          </button>
          <button
            onClick={handleScrollRight}
            className="p-1 rounded-full bg-gray-100"
          >
            <IoMdArrowForward size={20} />
          </button>
        </div>
      </div>

      {/* Single Scrollable Row */}
      <div
        ref={containerRef}
        className="flex overflow-x-scroll scrollbar-none scroll-smooth gap-4"
      >
        {imageData.map((item, index) => (
          <div key={index} className="flex-shrink-0 text-center">
            <img
              src={item.src}
              alt={item.name}
              className="h-36 md:h-44 w-36 object-cover mx-auto"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;