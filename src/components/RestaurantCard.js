import React from "react";
import { IMG_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { name, avgRating, sla, cuisines, cloudinaryImageId, costForTwo } =
    props.resData.info;

  return (
    <div className="w-full h-full flex flex-col rounded-xl hover:scale-95 transition-transform duration-200 cursor-pointer bg-white overflow-hidden">
      {/* Image Section */}
      <div className="relative rounded-xl shadow-xl overflow-hidden">
        <img
          src={IMG_URL + cloudinaryImageId}
          alt={name}
          className="w-full h-44 object-cover"
        />

        {/* Gradient Overlay */}
        <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-black ... flex items-end px-3 pb-2">
          <span className="text-white font-extrabold text-md md:text-lg uppercase">
            Items at ₹{parseFloat(costForTwo?.substring(1)) / 2}
          </span>
        </div>
      </div>

      {/* Content Section */}
      <div className="px-4 pt-1 flex flex-col flex-grow justify-between">
        <div>
          <h1 className="font-bold text-lg line-clamp-1">{name}</h1>

          <div className="flex items-center gap-1">
            {/* Star Icon */}
            <svg
              width={20}
              height={20}
              viewBox="0 0 20 20"
              fill="none"
              aria-hidden="true"
            >
              <circle cx={10} cy={10} r={9} fill="url(#gradient)" />
              <path
                d="M10.0816 12.865C10.0312 12.8353 9.96876 12.8353 9.91839 12.865L7.31647 14.3968C6.93482 14.6214 6.47106 14.2757 6.57745 13.8458L7.27568 11.0245C7.29055 10.9644 7.26965 10.9012 7.22195 10.8618L4.95521 8.99028C4.60833 8.70388 4.78653 8.14085 5.23502 8.10619L8.23448 7.87442C8.29403 7.86982 8.34612 7.83261 8.36979 7.77777L9.54092 5.06385C9.71462 4.66132 10.2854 4.66132 10.4591 5.06385L11.6302 7.77777C11.6539 7.83261 11.706 7.86982 11.7655 7.87442L14.765 8.10619C15.2135 8.14085 15.3917 8.70388 15.0448 8.99028L12.7781 10.8618C12.7303 10.9012 12.7095 10.9644 12.7243 11.0245L13.4225 13.8458C13.5289 14.2757 13.0652 14.6214 12.6835 14.3968L10.0816 12.865Z"
                fill="white"
              />
              <defs>
                <linearGradient
                  id="gradient"
                  x1={10}
                  y1={1}
                  x2={10}
                  y2={19}
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#21973B" />
                  <stop offset={1} stopColor="#128540" />
                </linearGradient>
              </defs>
            </svg>

            <span className="text-md font-semibold">
              {avgRating} • <span className="font-bold">{sla?.slaString}</span>
            </span>
          </div>

          <p className="text-slate-600 text-md font-serif line-clamp-2">
            {cuisines?.join(", ")}
          </p>
        </div>
      </div>
    </div>
  );
};

export default RestaurantCard;
