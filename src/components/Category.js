import React, { useRef } from "react";
import { IoMdArrowBack, IoMdArrowForward } from "react-icons/io";

// Your image imports
import Biryani from "../images/Biryani.jpg";
import Burger from "../images/Burger.jpg";
import Cake from "../images/Cake.jpg";
import Chinese from "../images/Chinese.jpg";
import CholeBhature from "../images/CholeBhature.jpg";
import Dosa from "../images/Dosa.jpg";
import GulabJamun from "../images/GulabJamun.jpg";
import IceCream from "../images/IceCream.jpg";
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

const row1 = [
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
];

const row2 = [
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
  const rowRef1 = useRef(null);
  const rowRef2 = useRef(null);
  const itemRef = useRef(null); // We'll use this to measure width of one item

  const scrollByImageCount = (count = 2) => {
    const item = itemRef.current;
    if (!item) return;

    const itemStyle = getComputedStyle(item);
    const gap = parseFloat(itemStyle.marginRight || "16"); // Default to 16px gap
    const itemWidth = item.offsetWidth + gap;

    rowRef1.current.scrollLeft += count * itemWidth;
    rowRef2.current.scrollLeft += count * itemWidth;
  };

  return (
    <div className="bg-white px-4 md:px-8 lg:px-16 py-10">
      {/* Scroll Buttons */}
      <div className="flex justify-end gap-2 mb-4">
        <button
          onClick={() => scrollByImageCount(-2)}
          className="p-1 rounded-full bg-gray-200"
        >
          <IoMdArrowBack size={20} />
        </button>
        <button
          onClick={() => scrollByImageCount(2)}
          className="p-1 rounded-full bg-gray-200"
        >
          <IoMdArrowForward size={20} />
        </button>
      </div>

      {/* Row 1 */}
      <div
        ref={rowRef1}
        className="flex overflow-x-hidden scroll-smooth gap-4 mb-4"
      >
        {row1.map((item, index) => (
          <div
            key={index}
            ref={index === 0 ? itemRef : null}
            className="flex-shrink-0"
          >
            <img
              src={item.src}
              alt={item.name}
              className="h-36 md:h-44 object-cover"
            />
          </div>
        ))}
      </div>

      {/* Row 2 */}
      <div
        ref={rowRef2}
        className="flex overflow-x-hidden scroll-smooth gap-4"
      >
        {row2.map((item, index) => (
          <div key={index} className="flex-shrink-0">
            <img
              src={item.src}
              alt={item.name}
              className="h-36 md:h-44 object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;