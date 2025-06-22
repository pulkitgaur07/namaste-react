import React, { useState } from "react";
import { useForm } from "react-hook-form";
import logo from "../images/logo.svg";
import { GoEye, GoEyeClosed } from "react-icons/go";
import Button from "../components/Button";

const CreateNewPassword = ({ switchForm }) => {
  const [showPassword, setShowPassword] = useState({
    password: false,
    confirmPassword: false,
  });

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm();

  const password = watch("password");

  const handlePassword = (type) => {
    setShowPassword((prev) => ({
      ...prev,
      [type]: !prev[type],
    }));
  };

  const onSubmit = async (data) => {
    console.log("New Password Data:", data);
    // 👉 Send data to backend here
    await new Promise((resolve) => setTimeout(resolve, 2000));

    // Proceed to next step after submission
    console.log("OTP Submitted successfully!");
    switchForm("changedPassword");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-2">
      <div className="flex items-center justify-center gap-2">
        <div className="border-2 p-[2px] border-orange-400 rounded-full">
          <img className="h-12 bg-orange-400 rounded-full" src={logo} />
        </div>
        <h1 className="font-semibold text-2xl text-orange-400">Silver Spoons</h1>
      </div>
      <div className="text-center font-semibold text-xl">Create new Password</div>
      <div className="text-center text-gray-600 text-sm mb-2">
        Please enter a new password. Your new password must be different from previous password.
      </div>

      <div className="flex items-center border border-gray-200 mb-1  hover:border-orange-400 focus-within:border-orange-400 rounded">
        <input
          className="w-full rounded outline-none p-2"
          type={showPassword.password ? "text" : "password"}
          placeholder="New Password"
          {...register("password", {
            required: "Password is required",
            minLength: {
              value: 6,
              message: "Password must be at least 6 characters",
            },
          })}
        />
        {showPassword.password ? (
          <GoEye
            onClick={() => handlePassword("password")}
            className="mr-2 text-gray-400 cursor-pointer"
            size={20}
          />
        ) : (
          <GoEyeClosed
            onClick={() => handlePassword("password")}
            className="mr-2 text-gray-400 cursor-pointer"
            size={20}
          />
        )}
      </div>
      {errors.password && (
        <div className="text-sm text-red-600 -mt-2">
          {errors.password.message}
        </div>
      )}

      <div className="flex items-center border border-gray-200 mb-1 hover:border-orange-400 focus-within:border-orange-400 rounded">
        <input
          className="w-full rounded outline-none p-2"
          type={showPassword.confirmPassword ? "text" : "password"}
          placeholder="Confirm new password"
          {...register("confirmPassword", {
            required: "Confirm password is required",
            validate: (value) =>
              value === password || "Passwords do not match",
          })}
        />
        {showPassword.confirmPassword ? (
          <GoEye
            onClick={() => handlePassword("confirmPassword")}
            className="mr-2 text-gray-400 cursor-pointer"
            size={20}
          />
        ) : (
          <GoEyeClosed
            onClick={() => handlePassword("confirmPassword")}
            className="mr-2 text-gray-400 cursor-pointer"
            size={20}
          />
        )}
      </div>
      {errors.confirmPassword && (
        <div className="text-sm text-red-600 -mt-2">
          {errors.confirmPassword.message}
        </div>
      )}

      <Button
        type="submit"
        variant="primary"
        size="md"
        rounded="sm"
        disabled={isSubmitting}
        loading={isSubmitting}
        className="mt-4"
      >
        Reset Password
      </Button>
    </form>
  );
};

export default CreateNewPassword;
