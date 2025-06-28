import React from "react";
import Button from "./Button";
import Divider from "./Divider";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

const CartPreview = ({ onCheckout }) => {
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);
  return (
    <div className="absolute top-full left-1/2 transform w-80 bg-white shadow-xl z-50 overflow-visible border-t-2 border-orange-400 animate-fadeForm">
      {/* Pointer */}
      <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-3 h-3 rotate-45 border-t-2 border-l-2 border-orange-400 bg-white z-0"></div>

      {cartItems.length === 0 ? (
        <div className="relative z-10 overflow-hidden mx-8 my-5 flex flex-col gap-6">
          <div className="text-4xl text-gray-600 font-bold">Cart Empty</div>
          <div className="text-gray-500">
            <span>Good Food is always cooking!</span>
            <br /> <span>Go ahead, order some</span>
            <br />
            <span>yummy items from the menu.</span>
          </div>
        </div>
      ) : (
        <div className="relative z-10 overflow-hidden m-6 flex flex-col gap-6">
          {/* Hotel Info */}
          <div className="flex gap-4">
            <img
              src="https://res.cloudinary.com/demo/image/upload/sample.jpg"
              alt="Shahi Paneer"
              className="w-16 h-16 object-cover"
            />
            <div className="flex flex-col justify-between">
              <div>
                <h3 className="text-base font-semibold text-black -mb-1">
                  Alamgir Hotel
                </h3>
                <p className="text-sm text-gray-600">Aminabad</p>
              </div>
              <Link
                to="/cart"
                className="text-blue-600 text-xs font-medium"
                onClick={onCheckout}
              >
                VIEW FULL MENU
              </Link>
            </div>
          </div>

          <Divider />

          {/* Cart Item */}
          <div className="space-y-4">
            <div className="flex justify-between text-sm">
              <div className="flex items-center gap-2">
                <div className="h-3 w-3 border border-green-800 flex items-center justify-center">
                  <span className="h-2 w-2 bg-green-800 rounded-full"></span>
                </div>
                <span className="font-medium text-black">
                  Shahi Paneer (8 Pcs) x 1
                </span>
              </div>
              <span className="font-medium text-gray-700">₹190</span>
            </div>

            <Divider type={"border-dashed"} />

            <div>
              <div className="flex justify-between text-black pt-2 font-semibold -mb-1">
                <span>Sub total</span>
                <span>₹190</span>
              </div>
              <p className="text-sm text-gray-600 ">Extra charges may apply</p>
            </div>
          </div>

          {/* Checkout Button */}
          <Button
            type="submit"
            variant="primary"
            size="md"
            rounded="none"
            onClick={onCheckout}
          >
            CHECKOUT
          </Button>
        </div>
      )}
    </div>
  );
};

export default CartPreview;
