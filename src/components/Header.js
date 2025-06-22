import { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../images/logo.svg";
import { useSelector } from "react-redux";
import Modal from "../components/Modal";
import SignIn from "../components/SignIn";
import SignUp from "../components/SignUp";
import ForgotPassword from "../components/ForgotPassword";
import VerificationCode from "../components/VerificationCode";
import CreateNewPassword from "../components/CreateNewPassword";
import ChangedPassword from "../components/ChangedPassword";
import Button from "../components/Button";

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
        return <ForgotPassword switchForm={switchForm} closeModal={closeModal} />;
      case "verificationCode":
        return <VerificationCode switchForm={switchForm} closeModal={closeModal} />;
      case "createNewPassword":
        return <CreateNewPassword switchForm={switchForm} closeModal={closeModal} />;
      case "changedPassword":
        return <ChangedPassword switchForm={switchForm} closeModal={closeModal} />;
      default:
        return null;
    }
  };

  return (
    <>
      <div className="shadow-xl px-4 md:px-8 lg:px-16 py-1 fixed top-0 z-40 bg-white w-full">
        <div className="flex h-14 items-center justify-between">
          <div className="flex items-center h-12 gap-1">
            <div className="rounded-full p-[2px] border-2 border-orange-400">
              <img className="h-12 bg-orange-400 rounded-full" src={logo} />
            </div>
            <h1 className="font-semibold text-xl md:text-3xl text-orange-400">
              Silver Spoons
            </h1>
          </div>
          <div className="items-center hidden lg:flex">
            <ul className="flex items-center">
              <NavLink
                to="/"
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "active" : ""
                }
              >
                <li className="mx-6 font-semibold text-lg lg:text-xl hover:text-amber-400">
                  Home
                </li>
              </NavLink>
              <NavLink
                to="/about"
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "active" : ""
                }
              >
                <li className="mx-6 font-semibold text-lg lg:text-xl hover:text-amber-400">
                  About Us
                </li>
              </NavLink>
              <NavLink
                to="/contact"
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "active" : ""
                }
              >
                <li className="mx-6 font-semibold text-lg lg:text-xl hover:text-amber-400">
                  Contact Us
                </li>
              </NavLink>
              <NavLink
                to="/cart"
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "active" : ""
                }
              >
                <li className="mx-6 font-semibold text-lg lg:text-xl hover:text-amber-400">
                  Cart - {cartItems.length}
                </li>
              </NavLink>

              <Button
                variant="primary"
                size="sm"
                onClick={() => openModal("signIn")}
              >
                Sign In
              </Button>
            </ul>
          </div>
        </div>
      </div>
      <Modal isOpen={showModel.isOpen} close={closeModal}>
        <div
          key={showModel.form}
          className="animate-fadeForm"
        >
          {renderForm()}
        </div>
      </Modal>
    </>
  );
};

export default Header;
