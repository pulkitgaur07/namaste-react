import { useDispatch } from "react-redux";
import { IMG_URL } from "../utils/constants";
import { addItem } from "../utils/cartSlice";

const ItemList = ({ items }) => {
  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    dispatch(addItem(item));
  };

  return (
    <div className="space-y-6">
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="flex flex-col-reverse md:flex-row justify-between border-b pb-8 gap-4 md:gap-4"
        >
          {/* Text section */}
          <div className="">
            <h2 className="text-base sm:text-lg font-semibold text-gray-900">
              {item.card.info.name}
            </h2>
            <p className="text-base text-gray-800 font-semibold mt-1">
              ₹
              {(item.card.info.price
                ? item.card.info.price
                : item.card.info.defaultPrice) / 100}
            </p>
            <p className="text-sm sm:text-base text-gray-600 mt-2 line-clamp-3">
              {item.card.info.description}
            </p>
          </div>

          {/* Image & Add Button section */}
          <div className="flex justify-center items-center relative bg-orange-400 rounded-lg">
            <div className="relative w-full md:w-36 h-36 rounded-lg overflow-hidden flex justify-center items-center">
              <img
                src={IMG_URL + item.card.info.imageId}
                alt={item.card.info.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Gradient Overlay */}
            <div className="rounded-lg absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black ..."></div>

            <button
              onClick={() => handleAddItem(item)}
              className="absolute bottom-1 md:bottom-0 right-1 md:right-auto md:translate-y-1/2 bg-white border border-gray-300 text-green-600 font-bold px-8 py-1 rounded-md uppercase text-sm lg:text-lg shadow-sm hover:bg-gray-50 transition"
            >
              Add
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
