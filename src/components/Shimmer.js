import React from "react";
import iceCream from '../images/iceCream.jpg';
import logo from "../images/logo.svg";

const ShimmerUI = () => {
  return (
    <div className="w-72 h-64 m-5 bg-white-50">
      <div className="w-72 h-44 border bg-gray-100"></div>
      <div className="mt-4 h-3 w-44 border bg-gray-100"></div>
      <div className="mt-4 h-3 w-32 border bg-gray-100"></div>
    </div>
  );
};

const Shimmer = () => {
  return (
    <div>
      <div className="my-4 mx-14 rounded-lg h-96 bg-blue-950 flex justify-center items-center">
        <div className="">
          <div className="flex justify-center">
            <div className="w-28 h-28 animate-spin border-s-2 rounded-full shadow-lg mb-10 flex justify-center items-center">
            </div>
            <img className="w-24 absolute translate-y-2 rounded-full" src={logo}/>
          </div>
          <div className="flex justify-center">
            <h1 className="text-white text-3xl">
              Looking for great food near you ...
            </h1>
          </div>
        </div>
      </div>
      <div className="mt-4 h-4 ml-8 w-44 border bg-gray-100"></div>
      <div className="m-2 mt-4 flex flex-wrap">
        <ShimmerUI />
        <ShimmerUI />
        <ShimmerUI />
        <ShimmerUI />
        <ShimmerUI />
        <ShimmerUI />
        <ShimmerUI />
        <ShimmerUI />
        <ShimmerUI />
        <ShimmerUI />
      </div>
    </div>
  );
};

export default Shimmer;
