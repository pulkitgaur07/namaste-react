import { useDispatch, useSelector } from "react-redux";
import { useEffect, useRef, useState } from "react";
import { addItem, incrementQty, decrementQty } from "../utils/cartSlice";
import { IMG_URL } from "../utils/constants";

const ItemList = ({ items }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const prevQuantities = useRef({});
  const [animationClass, setAnimationClass] = useState({});

  const getItemQuantity = (itemId) => {
    const item = cartItems.find((i) => i.card.info.id === itemId);
    return item ? item.quantity : 0;
  };

  useEffect(() => {
    const newAnimations = {};
    cartItems.forEach((item) => {
      const id = item.card.info.id;
      const prev = prevQuantities.current[id] || 0;
      const current = item.quantity;

      if (current > prev) {
        newAnimations[id] = "float-up";
      } else if (current < prev) {
        newAnimations[id] = "float-down";
      }

      prevQuantities.current[id] = current;

      // Clear animation class after it's applied
      setTimeout(() => {
        setAnimationClass((prev) => ({ ...prev, [id]: "" }));
      }, 500); // Match animation duration
    });

    setAnimationClass(newAnimations);
  }, [cartItems]);

  return (
    <div className="space-y-6">
      {items.map((item) => {
        const itemId = item.card.info.id;
        const quantity = getItemQuantity(itemId);
        const animClass = animationClass[itemId] || "";

        return (
          <div
            key={itemId}
            className="flex flex-col-reverse md:flex-row justify-between border-b pb-8 gap-4 md:gap-4"
          >
            {/* Text Section */}
            <div>
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

            {/* Image & Button Section */}
            <div className="flex justify-center items-center relative bg-orange-400 rounded-lg">
              <div className="relative w-full md:w-36 h-36 rounded-lg overflow-hidden flex justify-center items-center">
                <img
                  src={IMG_URL + item.card.info.imageId}
                  alt={item.card.info.name}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="rounded-lg absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black/40" />

              {quantity > 0 ? (
                <div className="absolute bottom-1 md:bottom-0 right-1 md:right-auto md:translate-y-1/2 bg-white border border-gray-300 text-green-600 font-bold px-4 py-1 rounded-md uppercase text-sm lg:text-lg shadow-sm flex items-center gap-2">
                  <button
                    className="text-xl px-2"
                    onClick={() => dispatch(decrementQty(itemId))}
                  >
                    -
                  </button>
                  <span className={`font-bold w-5 text-center ${animClass}`}>
                    {quantity}
                  </span>
                  <button
                    className="text-xl px-2"
                    onClick={() => dispatch(incrementQty(itemId))}
                  >
                    +
                  </button>
                </div>
              ) : (
                <button
                  onClick={() => dispatch(addItem(item))}
                  className="absolute bottom-1 md:bottom-0 right-1 md:right-auto md:translate-y-1/2 bg-white border border-gray-300 text-green-600 font-bold px-8 py-1 rounded-md uppercase text-sm lg:text-lg shadow-sm hover:bg-gray-50 transition"
                >
                  Add
                </button>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ItemList;
