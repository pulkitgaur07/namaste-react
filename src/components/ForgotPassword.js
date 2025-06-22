import React from "react";
import { useForm } from "react-hook-form";
import logo from "../images/logo.svg";
import Button from "../components/Button";

const ForgotPassword = ({ switchForm }) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = async (data) => {
    console.log("Forgot password email:", data.email);
    // ✅ Call backend API to send OTP/email link here
    await new Promise((resolve) => setTimeout(resolve, 2000));

    // Proceed to next step after submission
    console.log("Logged in successfully!");
    switchForm("verificationCode");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-2">
      <div className="flex items-center justify-center gap-2 mb-2">
        <div className="border-2 p-[2px] border-orange-400 rounded-full">
          <img className="h-12 bg-orange-400 rounded-full" src={logo} />
        </div>
        <h1 className="font-semibold text-2xl text-orange-400">Silver Spoons</h1>
      </div>
      <div className="text-center font-semibold text-xl">Forgot Password</div>
      <div className="text-center text-gray-600 text-sm mb-2">
        Enter the email address associated with your account and we'll send you
        a link to reset your password.
      </div>

      <input
        className="border border-gray-200 w-full rounded outline-none p-2 -mb-1 hover:border-orange-400 focus-within:border-orange-400"
        type="text"
        placeholder="Email"
        {...register("email", {
          required: "Email is required",
          pattern: {
            value: /^\S+@\S+\.\S+$/,
            message: "Enter a valid email",
          },
        })}
      />

      {errors.email && (
        <span className="text-red-600 text-sm">
          {errors.email.message}
        </span>
      )}

      <div className="flex items-center justify-end mb-4">
        <span
          onClick={() => switchForm("signIn")}
          className="text-orange-400 cursor-pointer text-sm font-medium"
        >
          Return to login
        </span>
      </div>

      <Button
        type="submit"
        variant="primary"
        size="md"
        rounded="sm"
        disabled={isSubmitting}
        loading={isSubmitting}
      >
        Continue
      </Button>
    </form>
  );
};

export default ForgotPassword;
