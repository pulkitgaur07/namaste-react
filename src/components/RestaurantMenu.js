import { useEffect, useState } from "react";
import { ShimmerItemList } from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constants";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
  const [openIndexes, setOpenIndexes] = useState([0]);
  const [resInfo, setResInfo] = useState(null);

  const { resId } = useParams();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(MENU_API + resId);
    const json = await data.json();
    setResInfo(json?.data);
  };

  if (resInfo === null) return <ShimmerItemList />;

  const { name, costForTwoMessage } = resInfo?.cards[2]?.card?.card?.info;

  // const { itemCards } =
  //   resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
  // console.log(resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards);

  const categories =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c) => {
      return (
        c?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
      );
    });

  // console.log(categories);

  return (
    <div className="mt-20">
      <h1 className="text-center text-semibold md:font-bold text-xl md:text-2xl my-4 px-2">
        {name}
      </h1>
      {/* categories accordian */}
      <div>
        {categories?.map((category, index) => (
          <RestaurantCategory
            key={index}
            data={category?.card?.card}
            isOpen={openIndexes.includes(index)}
            onToggle={() => {
              setOpenIndexes(
                (prev) =>
                  prev.includes(index)
                    ? prev.filter((i) => i !== index) // close if already open
                    : [...prev, index] // open new
              );
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default RestaurantMenu;
