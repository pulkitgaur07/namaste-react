import React from "react";
import PasswordChanged from "../images/PasswordChanged.jpg";
import Button from "../components/Button";

const ChangedPassword = ({switchForm}) => {
  return (
    <div className="flex flex-col gap-2">
        <div className="flex items-center justify-center">
            <img src={PasswordChanged} className="h-40" />
        </div>
      <div className="text-center font-semibold text-xl md:px-4">You successfully changed your Password</div>
      <div className="text-center text-gray-600 text-sm mb-2">
        Your password has been changed successfully. Use your new password to login.
      </div>
      <Button
        onClick={() => switchForm("signIn")}
        variant="primary"
        size="md"
        rounded="sm"
        type="button"
      >
        Back to Login
      </Button>
    </div>
  );
};

export default ChangedPassword;
