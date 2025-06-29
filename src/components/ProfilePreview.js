import React from "react";
import Button from "./Button";
import Divider from "./Divider";

const ProfilePreview = ({ onLogout }) => {
  return (
    <div className="absolute top-full right-0 w-72 bg-white shadow-xl z-50 overflow-visible border-t-2 border-orange-400 animate-fadeForm">
      {/* Pointer */}
      <div className="absolute -top-2 right-4 w-3 h-3 rotate-45 border-t-2 border-l-2 border-orange-400 bg-white z-0"></div>

      {/* Content */}
      <div className="relative z-10 overflow-hidden m-6 flex flex-col gap-4">
        {/* User Info */}
        <div className="flex items-center gap-4">
          <img
            src="https://ui-avatars.com/api/?name=Pulkit+Gaur&background=f97316&color=fff"
            alt="Profile"
            className="w-14 h-14 rounded-full object-cover"
          />
          <div>
            <h3 className="text-base font-semibold text-black">Pulkit Gaur</h3>
            <p className="text-sm text-gray-600">pulkit@example.com</p>
          </div>
        </div>

        <Divider />

        {/* Links */}
        <div className="space-y-2 text-sm font-medium">
          <a href="/user-profile" className="block hover:underline">View Profile</a>
          <a href="/orders" className="block hover:underline">My Orders</a>
          <a href="/settings" className="block hover:underline">Settings</a>
        </div>

        <Divider type="border-dashed" />

        {/* Logout */}
        <Button
          type="button"
          variant="primary"
          size="md"
          rounded="none"
          onClick={onLogout}
        >
          LOGOUT
        </Button>
      </div>
    </div>
  );
};

export default ProfilePreview;