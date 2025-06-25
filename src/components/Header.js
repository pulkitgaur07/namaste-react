import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../images/logo.svg";
import { useSelector } from "react-redux";
import Modal from "../components/Modal";
import SignIn from "../components/SignIn";
import SignUp from "../components/SignUp";
import ForgotPassword from "../components/ForgotPassword";
import VerificationCode from "../components/VerificationCode";
import CreateNewPassword from "../components/CreateNewPassword";
import ChangedPassword from "../components/ChangedPassword";
import { FaRegUser } from "react-icons/fa6";
import { BiSolidOffer } from "react-icons/bi";
import { IoSearch } from "react-icons/io5";
import { IoHelpBuoyOutline } from "react-icons/io5";
import { MdOutlineShoppingCart } from "react-icons/md";

const Header = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const [showModel, setShowModel] = useState({
    isOpen: false,
    form: "signIn",
  });

  const openModal = (form = "signIn") => {
    setShowModel({ isOpen: true, form });
  };

  const closeModal = () => {
    setShowModel({ ...showModel, isOpen: false });
  };

  const switchForm = (formName) => {
    setShowModel({ ...showModel, form: formName });
  };

  const renderForm = () => {
    switch (showModel.form) {
      case "signIn":
        return <SignIn switchForm={switchForm} closeModal={closeModal} />;
      case "signUp":
        return <SignUp switchForm={switchForm} closeModal={closeModal} />;
      case "forgotPassword":
        return (
          <ForgotPassword switchForm={switchForm} closeModal={closeModal} />
        );
      case "verificationCode":
        return (
          <VerificationCode switchForm={switchForm} closeModal={closeModal} />
        );
      case "createNewPassword":
        return (
          <CreateNewPassword switchForm={switchForm} closeModal={closeModal} />
        );
      case "changedPassword":
        return (
          <ChangedPassword switchForm={switchForm} closeModal={closeModal} />
        );
      default:
        return null;
    }
  };

  return (
    <>
      <div className="shadow-xl px-4 md:px-8 lg:px-20 py-1 fixed top-0 z-40 bg-white w-full">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center h-12 gap-1">
            <div className="rounded-full p-[2px] border-2 border-orange-400">
              <img className="h-12 bg-orange-400 rounded-full" src={logo} />
            </div>
            <h1 className="font-semibold text-xl md:text-2xl text-orange-400">
              Silver Spoons
            </h1>
          </div>
          <div className="items-center hidden lg:flex">
            <ul className="flex items-center gap-20">
              <Link to="/search">
                <div className="flex items-center gap-2 hover:text-orange-500">
                  <IoSearch size={20} />
                  <li className="font-semibold lg:text-md">Search</li>
                </div>
              </Link>
              <Link to="/offers">
                <div className="flex items-center gap-2 hover:text-orange-500">
                  <BiSolidOffer size={20} />
                  <li className="font-semibold lg:text-md">Offers</li>
                </div>
              </Link>
              <Link to="/help">
                <div className="flex items-center gap-2 hover:text-orange-500">
                  <IoHelpBuoyOutline size={20} />
                  <li className="font-semibold lg:text-md">Help</li>
                </div>
              </Link>
              <div
                onClick={() => openModal("signIn")}
                className="flex items-center hover:text-orange-500 gap-2 cursor-pointer"
              >
                <FaRegUser size={20} />
                <li className="font-semibold lg:text-md">Sign In</li>
              </div>
              <Link to="/cart">
                <div className="flex items-center hover:text-orange-500 gap-2 cursor-pointer">
                  <MdOutlineShoppingCart size={20} />
                  <li className="font-semibold lg:text-md">Cart</li>
                </div>
              </Link>
            </ul>
          </div>
        </div>
      </div>
      <Modal isOpen={showModel.isOpen} close={closeModal}>
        <div key={showModel.form} className="animate-fadeForm">
          {renderForm()}
        </div>
      </Modal>
    </>
  );
};

export default Header;
