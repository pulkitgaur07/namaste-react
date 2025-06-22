import React from "react";
import { IoMdClose } from "react-icons/io";

const Modal = ({ isOpen, close, children, footer }) => {
  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-40 backdrop-blur-sm">
          <div
            className="bg-white w-full md:w-2/3 lg:w-1/3 rounded-md p-6 relative 
              transform transition-all duration-300 opacity-0 scale-95 animate-fadeIn"
          >
            <div className="flex justify-end">
              <span className="p-4 absolute top-2 right-2 w-10 h-10 flex items-center justify-center rounded-full group hover:bg-orange-100 transition-colors duration-200 cursor-pointer">
                <span
                  onClick={close}
                  className="p-1 w-8 h-8 flex items-center justify-center rounded-full group-hover:bg-orange-200 transition duration-200"
                >
                  <IoMdClose size={24} />
                </span>
              </span>
            </div>
            {children}
            {footer}
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
