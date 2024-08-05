import { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../images/logo.svg";

const Header = () => {
  const [buttonStatus, setButtonStatus] = useState("Login");
  return (
    <div className="border-b-2 shadow-lg">
      <div className="mx-8 flex h-20 justify-between">
        <div className="ml-8 flex items-center h-20">
          <img className="h-20" src={logo}/>
          <h1 className="uppercase font-semibold text-4xl rounded-lg bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 ... ... text-transparent ... bg-clip-text">Silver Spoons</h1>
        </div>
        <div className="flex items-center">
          <ul className="flex">
            <NavLink
              to="/"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
              }
            >
              <li className="m-6 p-2 font-semibold text-xl hover:text-orange-400">
                Home
              </li>
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
              }
            >
              <li className="m-6 p-2 font-semibold text-xl hover:text-orange-400">
                About Us
              </li>
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
              }
            >
              <li className="m-6 p-2 font-semibold text-xl hover:text-orange-400">
                Contact Us
              </li>
            </NavLink>
            <NavLink
              to="/cart"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
              }
            >
              <li className="m-6 p-2 font-semibold text-xl hover:text-orange-400">
                Cart
              </li>
            </NavLink>

            <button
              className="m-6 p-2 border border-black rounded-lg font-semibold text-xl"
              onClick={() => {
                buttonStatus === "Login"
                  ? setButtonStatus("Logout")
                  : setButtonStatus("Login");
              }}
            >
              {buttonStatus}
            </button>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
