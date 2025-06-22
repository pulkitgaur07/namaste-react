import React, { useState } from "react";
import { useForm } from "react-hook-form";
import logo from "../images/logo.svg";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import { GoEye, GoEyeClosed } from "react-icons/go";
import Button from "../components/Button";

const SignIn = ({ switchForm }) => {
  const [showPassword, setShowPassword] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting  },
  } = useForm();

  const handlePassword = () => {
    setShowPassword(!showPassword);
  };

  const onSubmit = async (data) => {
    console.log("Form Submitted:", data);
    // Call signup API here
    await new Promise((resolve) => setTimeout(resolve, 2000));

    // Proceed to next step after submission
    console.log("Sign In successfully!");
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-2"
      noValidate
    >
      <div className="flex items-center justify-center gap-2">
        <div className="border-2 p-[2px] border-orange-400 rounded-full">
          <img className="h-12 bg-orange-400 rounded-full" src={logo} />
        </div>
        <h1 className="font-semibold text-2xl text-orange-400">Silver Spoons</h1>
      </div>
      <div className="text-center font-semibold text-xl -mb-2">
        Sign in to Your Account
      </div>
      <div className="text-center text-gray-600 mb-3 text-sm">
        Enter your login detail to open your account
      </div>

      <input
        className="border border-gray-200 w-full rounded outline-none p-2 hover:border-orange-400 focus-within:border-orange-400"
        type="text"
        placeholder="Email"
        {...register("email", {
          required: "Email is required",
        })}
      />
      {errors.email && (
        <p className="text-sm text-red-500 -mt-1">{errors.email.message}</p>
      )}

      <div className="flex items-center justify-between border border-gray-200 rounded hover:border-orange-400 focus-within:border-orange-400">
        <input
          className="w-full rounded outline-none p-2"
          type={showPassword ? "text" : "password"}
          placeholder="Password"
          {...register("password", {
            required: "Password is required",
          })}
        />
        {showPassword ? (
          <GoEye
            onClick={handlePassword}
            className="mr-2 text-gray-400 cursor-pointer"
            size={20}
          />
        ) : (
          <GoEyeClosed
            onClick={handlePassword}
            className="mr-2 text-gray-400 cursor-pointer"
            size={20}
          />
        )}
      </div>
      {errors.password && (
        <p className="text-sm text-red-500 -mt-1">{errors.password.message}</p>
      )}

      <div className="flex items-center justify-end">
        <span
          onClick={() => switchForm("forgotPassword")}
          className="text-orange-400 cursor-pointer text-sm font-medium"
        >
          Forgot Password?
        </span>
      </div>

      <Button
        type="submit"
        variant="primary"
        size="md"
        rounded="sm"
        disabled={isSubmitting}
        loading={isSubmitting}
        className="mt-2"
      >
        Log in
      </Button>

      <div className="flex items-center text-center text-gray-600 mb-2">
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
        <span className="text-gray-500">Don't have an account yet?</span>
        <span
          onClick={() => switchForm("signUp")}
          className="text-orange-400 cursor-pointer"
        >
          Sign up
        </span>
      </div>
    </form>
  );
};

export default SignIn;
