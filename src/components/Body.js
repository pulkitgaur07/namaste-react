import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import { Link } from "react-router-dom";
import Shimmer from "./Shimmer";
import foodBanner1 from "../images/foodBanner1.jpg";
import Footer from "./Footer";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.87560&lng=80.91150&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const jsonData = await data.json();
    console.log(jsonData);
    setListOfRestaurants(
      jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
    setFilteredRestaurants(
      jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
  };

  return listOfRestaurants?.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="mt-1">
      <div
        className="h-96 mx-14 my-4 rounded-lg bg-cover bg-[image:var(--image-url)] bg-no-repeat bg-center flex items-center justify-center"
        style={{ "--image-url": `url(${foodBanner1})` }}
      >
        <div className="h-96 w-full flex flex-col justify-center rounded-lg items-center bg-gradient-to-t from-black">
          <span className="text-white text-6xl drop-shadow-2xl">WELCOME Dear</span>
          <span className="my-6 text-white text-5xl drop-shadow-2xl">
            Taste and Enjoy the Flavour
          </span>
        </div>
      </div>
      <div className="h-14">
      <div className="h-14 mx-14 flex justify-between">
        <div>
          <span className="text-2xl font-bold">
            Restaurants with online food delivery
          </span>
        </div>
        <div>
          <button
            className="mr-3 border-2 text-lg font-semibold border-black rounded-lg p-1"
            onClick={() => {
              const filteredList = listOfRestaurants.filter((res) => {
                return res.info.avgRating > 4.5;
              });
              setListOfRestaurants(filteredList);
            }}
          >
            Top Rated Restaurants
          </button>
        </div>
        <div className="mr-4">
          <input
            className="border-2 text-lg font-semibold border-black rounded-lg p-1"
            type="text"
            placeholder="Your Favourite Restaurant"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="ml-1 border-2 text-lg font-semibold border-black rounded-lg p-1"
            onClick={() => {
              const filteredList = listOfRestaurants.filter((res) => {
                return res.info.name
                  .toLowerCase()
                  .includes(searchText.toLowerCase());
              });
              setFilteredRestaurants(filteredList);
            }}
          >
            Search
          </button>
        </div>
      </div>
      </div>
      <div className="mx-7">
        <div className="flex justify-center items-center flex-wrap ">
          {filteredRestaurants &&
            filteredRestaurants.map((restaurant) => (
              <Link
                key={restaurant.info.id}
                to={"/restaurants/" + restaurant.info.id}
              >
                <RestaurantCard resData={restaurant} />
              </Link>
            ))}
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Body;
