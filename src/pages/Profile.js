import React from "react";
import { FaUserCircle, FaShoppingBag, FaMapMarkerAlt, FaCreditCard, FaQuestionCircle, FaSignOutAlt } from "react-icons/fa";

const Profile = () => {
  const username = "Pulkit Gaur"; // You can fetch this from state or context

  const menu = [
    { icon: <FaShoppingBag />, label: "My Orders" },
    { icon: <FaMapMarkerAlt />, label: "Saved Addresses" },
    { icon: <FaCreditCard />, label: "Payment Methods" },
    { icon: <FaQuestionCircle />, label: "Help & Support" },
    { icon: <FaSignOutAlt />, label: "Logout" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-white py-10 px-4 mt-12">
      <div className="max-w-md mx-auto bg-white rounded-3xl shadow-xl overflow-hidden">
        {/* Profile Header */}
        <div className="bg-gradient-to-r from-orange-400 to-orange-500 p-6 text-white text-center">
          <FaUserCircle className="mx-auto text-6xl mb-2" />
          <h2 className="text-xl font-semibold">Hello, {username}</h2>
          <p className="text-sm opacity-90">Welcome to SilverSpoons</p>
        </div>

        {/* Menu Items */}
        <div className="divide-y divide-gray-200">
          <div className="px-6 py-4 text-lg font-medium text-gray-700">✨ My Account</div>
          {menu.map((item, index) => (
            <div
              key={index}
              className="px-6 py-4 flex items-center gap-4 hover:bg-gray-50 cursor-pointer"
            >
              <span className="text-orange-500 text-xl">{item.icon}</span>
              <span className="text-gray-700">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Profile;