import React from "react";
import iceCream from "../images/iceCream.jpg";
import logo from "../images/logo.svg";

const ShimmerSlider = () => {
  return (
    <div className="my-4 mx-4 md:mx-8 lg:mx-16 rounded-lg h-60 md:h-72 lg:h-96 bg-blue-950 flex justify-center items-center">
      <div className="">
        <div className="flex justify-center mb-4">
          <div className="w-20 lg:w-28 h-20 lg:h-28 animate-spin border-s-2 rounded-full shadow-lg mb:6 lg:mb-10 flex justify-center items-center"></div>
          <img
            className="w-16 lg:w-24 absolute translate-y-2 rounded-full"
            src={logo}
          />
        </div>
        <div className="flex justify-center mx-2">
          <h1 className="text-white text-xl md:text-3xl">
            Looking for great food near you ...
          </h1>
        </div>
      </div>
    </div>
  );
};

export const ShimmerRestaurantCard = () => {
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

export const ShimmerItemList = () => {
  return (
    <>
      <div className="flex justify-center mt-20">
        <div className="flex items-center justify-center w-full lg:w-2/3 m-2 px-4">
          <div className="h-6 w-1/4 animate-pulse bg-gray-300 rounded-md"></div>
        </div>
      </div>
      <div className="flex justify-center mt-4">
        <div className="space-y-6 w-full lg:w-2/3 m-2 shadow-lg px-4">
          {Array.from({ length: 6 }).map((_, index) => (
            <div
              key={index}
              className="flex flex-col-reverse md:flex-row justify-between border-b pb-8 gap-4 md:gap-4 animate-pulse"
            >
              {/* Text section */}
              <div className="flex flex-col space-y-3 w-full">
                <div className="h-5 bg-gray-300 rounded w-3/4" />
                <div className="h-5 bg-gray-300 rounded w-1/4" />
                <div className="h-4 bg-gray-200 rounded w-full" />
                <div className="h-4 bg-gray-200 rounded w-5/6" />
                <div className="h-4 bg-gray-200 rounded w-4/6" />
              </div>

              {/* Image & Add Button section */}
              <div className="flex justify-center items-center relative rounded-lg w-full md:w-36 h-36">
                <div className="relative w-full h-full rounded-lg overflow-hidden flex justify-center items-center">
                  <div className="w-full h-full bg-gray-300 rounded-lg" />
                </div>

                {/* Fake Add button */}
                <div className="absolute bottom-1 md:bottom-0 right-1 md:right-auto md:translate-y-1/2 bg-white border border-gray-300 text-green-600 font-bold px-8 py-1 rounded-md uppercase text-sm lg:text-lg shadow-sm">
                  &nbsp;
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export const ShimmerDashboard = () => {
  return (
    <div className="mt-20 mb-10">
      <ShimmerSlider />
      <ShimmerCategory />
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


import React from "react";

const shimmerRowItems = 10;

const ShimmerCategory = () => {
  const shimmerArray = new Array(shimmerRowItems).fill(null);

  return (
    <div className="bg-white px-4 md:px-8 lg:px-16 py-10 animate-pulse">
      {/* Scroll Buttons */}
      <div className="flex justify-end gap-2 mb-4">
        <div className="p-1 rounded-full bg-gray-200 w-8 h-8" />
        <div className="p-1 rounded-full bg-gray-200 w-8 h-8" />
      </div>

      {/* Row 1 */}
      <div className="flex overflow-x-hidden gap-4 md:gap-8 mb-4">
        {shimmerArray.map((_, i) => (
          <div
            key={`shimmer-row1-${i}`}
            className="flex-shrink-0 flex flex-col items-center gap-2"
          >
            <div className="h-20 w-20 md:28 md:28 lg:h-36 lg:w-36 bg-gray-200 rounded-full" />
            <div className="h-4 w-8 md:w-12 lg:w-20 bg-gray-200 rounded" />
          </div>
        ))}
      </div>

      {/* Row 2 */}
      <div className="flex overflow-x-hidden gap-4 md:gap-8">
        {shimmerArray.map((_, i) => (
          <div
            key={`shimmer-row2-${i}`}
            className="flex-shrink-0 flex flex-col items-center gap-2"
          >
            <div className="h-20 w-20 md:28 md:28 lg:h-36 lg:w-36 bg-gray-200 rounded-full" />
            <div className="h-4 w-8 md:w-12 lg:w-20 bg-gray-200 rounded" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShimmerCategory;