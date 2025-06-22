import React from "react";
import iceCream from '../images/iceCream.jpg';
import logo from "../images/logo.svg";

const ShimmerRestaurantCard = () => {
  return (
    <div className="w-full h-full flex flex-col rounded-xl bg-white overflow-hidden animate-pulse">
      {/* Image Section */}
      <div className="relative rounded-xl overflow-hidden">
        <div className="w-full h-44 bg-gray-200" />
        <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-gray-300 to-transparent flex items-end px-3 pb-2">
          <div className="w-28 h-4 bg-gray-400 rounded"></div>
        </div>
      </div>

      {/* Content Section */}
      <div className="px-4 pt-1 flex flex-col flex-grow justify-between gap-2 mt-2">
        <div className="h-4 bg-gray-300 rounded w-3/4"></div>

        <div className="flex items-center gap-2">
          <div className="w-5 h-5 bg-gray-300 rounded-full" />
          <div className="w-1/2 h-3 bg-gray-300 rounded"></div>
        </div>

        <div className="space-y-1 mt-1">
          <div className="h-3 w-5/6 bg-gray-200 rounded"></div>
          <div className="h-3 w-2/3 bg-gray-200 rounded"></div>
        </div>
      </div>
    </div>
  );
};


const Shimmer = () => {
  return (
    <div className="mt-20 mb-10">
      <div className="my-4 mx-4 md:mx-8 lg:mx-16 rounded-lg h-60 md:h-72 lg:h-96 bg-blue-950 flex justify-center items-center">
        <div className="">
          <div className="flex justify-center mb-4">
            <div className="w-20 lg:w-28 h-20 lg:h-28 animate-spin border-s-2 rounded-full shadow-lg mb:6 lg:mb-10 flex justify-center items-center">
            </div>
            <img className="w-16 lg:w-24 absolute translate-y-2 rounded-full" src={logo}/>
          </div>
          <div className="flex justify-center mx-2">
            <h1 className="text-white text-xl md:text-3xl">
              Looking for great food near you ...
            </h1>
          </div>
        </div>
      </div>
      <div className="mx-4 md:mx-8 lg:mx-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-6 lg:gap-x-8 gap-y-6">
        {Array.from({ length: 4 }).map((_, i) => (
          <ShimmerRestaurantCard key={i} />
        ))}
      </div>
      </div>
    </div>
  );
};

export default Shimmer;
