import React, { useState } from "react";
import { useForm } from "react-hook-form";
import logo from "../images/logo.svg";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import { GoEye, GoEyeClosed } from "react-icons/go";
import Button from "../components/Button";

const SignUp = ({ switchForm }) => {
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

  const handlePassword = (type) => {
    setShowPassword((prev) => ({
      ...prev,
      [type]: !prev[type],
    }));
  };

  const onSubmit = async (data) => {
    console.log("Form Submitted:", data);
    // Call signup API here
    await new Promise((resolve) => setTimeout(resolve, 2000));

    // Proceed to next step after submission
    console.log("Sign Up successfully!");
  };

  const password = watch("password");

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-2">
      <div className="flex items-center justify-center gap-2">
        <div className="border-2 p-[2px] border-orange-400 rounded-full">
          <img className="h-12 bg-orange-400 rounded-full" src={logo} />
        </div>
        <h1 className="font-semibold text-2xl text-orange-400">Silver Spoons</h1>
      </div>
      <div className="text-center font-semibold text-xl -mb-2">
        Create an Account
      </div>
      <div className="text-center text-gray-600 mb-2 text-sm">
        Enter your detail to create your account
      </div>

      <div className="flex items-center justify-between gap-2">
        <input
          className="border border-gray-200 w-full rounded outline-none p-2 focus-within:border-orange-400"
          type="text"
          placeholder="First Name"
          {...register("firstName", { required: "First name is required" })}
        />
        <input
          className="border border-gray-200 w-full rounded outline-none p-2 focus-within:border-orange-400"
          type="text"
          placeholder="Last Name"
          {...register("lastName", { required: "Last name is required" })}
        />
      </div>
      {errors.firstName && (
        <p className="text-sm text-red-500 -mt-1">{errors.firstName.message}</p>
      )}

      <input
        className="border border-gray-200 w-full rounded outline-none p-2 focus-within:border-orange-400"
        type="text"
        placeholder="Enter your Email"
        {...register("email", {
          required: "Email is required",
          pattern: {
            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
            message: "Enter a valid email",
          },
        })}
      />
      {errors.email && (
        <p className="text-sm text-red-500 -mt-1">{errors.email.message}</p>
      )}

      {/* Password Field */}
      <div className="flex items-center border border-gray-200 focus-within:border-orange-400 rounded">
        <input
          className="w-full rounded outline-none p-2"
          type={showPassword.password ? "text" : "password"}
          placeholder="New Password"
          {...register("password", {
            required: "Password is required",
            minLength: {
              value: 6,
              message: "Minimum 6 characters",
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
        <p className="text-sm text-red-500 -mt-2">{errors.password.message}</p>
      )}

      {/* Confirm Password */}
      <div className="flex items-center border border-gray-200 focus-within:border-orange-400 rounded">
        <input
          className="w-full rounded outline-none p-2"
          type={showPassword.confirmPassword ? "text" : "password"}
          placeholder="Confirm new password"
          {...register("confirmPassword", {
            required: "Please confirm your password",
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
        <p className="text-sm text-red-500 -mt-2">
          {errors.confirmPassword.message}
        </p>
      )}

      {/* Mobile Number */}
      <input
        className="border border-gray-200 w-full rounded outline-none p-2 -mb-1 focus-within:border-orange-400"
        type="number"
        placeholder="Enter your Mobile Number"
        {...register("mobile", {
          required: "Mobile number is required",
          minLength: {
            value: 10,
            message: "Mobile must be 10 digits",
          },
        })}
      />
      {errors.mobile && (
        <p className="text-sm text-red-500">{errors.mobile.message}</p>
      )}

      {/* Terms Checkbox */}
      <div className="flex items-center text-sm mb-2 gap-1">
        <input
          type="checkbox"
          id="terms"
          {...register("terms", { required: true })}
        />
        <span>I Accept the </span>
        <span className="text-orange-400 cursor-pointer font-medium underline">
          Terms & Conditions
        </span>
      </div>
      {errors.terms && (
        <p className="text-sm text-red-500 -mt-2">
          You must accept the terms.
        </p>
      )}

      <Button
        type="submit"
        variant="primary"
        size="md"
        rounded="sm"
        disabled={isSubmitting}
        loading={isSubmitting}
        className="mt-2"
      >
        Sign Up
      </Button>

      {/* Social Auth */}
      <div className="flex items-center text-center text-gray-600">
        <div className="border-b-[1px] border-gray-200 w-full"></div>
        <span className="mx-2">OR</span>
        <div className="border-b-[1px] border-gray-200 w-full"></div>
      </div>
      <div className="grid grid-cols-2 gap-2">
        <div className="flex items-center justify-center gap-1 border border-gray-200 rounded py-1 cursor-pointer">
          <FcGoogle size={20} />
          <span>Google</span>
        </div>
        <div className="flex items-center justify-center gap-1 border border-gray-200 rounded py-1 cursor-pointer">
          <FaApple size={20} />
          <span>Apple</span>
        </div>
      </div>

      <div className="text-sm font-medium flex items-center justify-center gap-1">
        <span className="text-gray-500">Already have an account?</span>
        <span
          onClick={() => switchForm("signIn")}
          className="text-orange-400 cursor-pointer"
        >
          Sign in
        </span>
      </div>
    </form>
  );
};

export default SignUp;
