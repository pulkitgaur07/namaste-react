import React, { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import logo from "../images/logo.svg";
import Button from "../components/Button";

const VerificationCode = ({ switchForm }) => {
  const inputRefs = useRef([]);
  const [otp, setOtp] = useState(new Array(6).fill(""));
  const [error, setError] = useState("");

  const { 
    handleSubmit,
    setValue, 
    getValues, 
    trigger,
    formState: { isSubmitting },
  } = useForm({
    defaultValues: {
      otp,
    },
  });

  // Auto focus first input when page loads
  useEffect(() => {
    inputRefs.current[0]?.focus();
  }, []);

  const handleChange = (element, index) => {
    const value = element.value.replace(/[^0-9]/g, "");
    if (!value) return;

    const newOtp = [...otp];
    newOtp[index] = value[0]; // only take the first digit
    setOtp(newOtp);
    setValue("otp", newOtp);
    trigger("otp");

    if (index < 5) {
      inputRefs.current[index + 1].focus();
    }

    // Clear error once all 6 digits are filled
    if (newOtp.every((digit) => digit !== "")) {
      setError("");
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" || e.key === "Delete") {
      e.preventDefault();
      const newOtp = [...otp];
      if (otp[index] !== "") {
        newOtp[index] = "";
        setOtp(newOtp);
        setValue("otp", newOtp);
        trigger("otp");
      } else if (index > 0) {
        inputRefs.current[index - 1].focus();
        newOtp[index - 1] = "";
        setOtp(newOtp);
        setValue("otp", newOtp);
        trigger("otp");
      }
    }
  };

  const handlePaste = (e) => {
    e.preventDefault();
    const pasteData = e.clipboardData.getData("text").replace(/\D/g, "");
    if (pasteData.length !== 6) return;

    const newOtp = [...otp];
    pasteData.split("").forEach((digit, idx) => {
      if (idx < 6) {
        newOtp[idx] = digit;
        inputRefs.current[idx].value = digit;
      }
    });
    setOtp(newOtp);
    setValue("otp", newOtp);
    trigger("otp");
    inputRefs.current[5].focus();
  };

  const maskEmail = (email) => {
    const [localPart, domain] = email.split("@");
    const visible = localPart.slice(0, 4);
    const hidden = "*".repeat(Math.max(0, localPart.length - 4));
    return `${visible}${hidden}@${domain}`;
  };

  const onSubmit = async () => {
    const isComplete = otp.every((digit) => digit.trim() !== "");
    if (!isComplete) {
      setError("Please enter the full 6-digit verification code.");
      return;
    }

    setError("");
    const finalOtp = otp.join("");
    console.log("OTP Submitted:", finalOtp);

    await new Promise((resolve) => setTimeout(resolve, 2000));

    // Proceed to next step after submission
    console.log("OTP Submitted successfully!");

    // Call backend or proceed
    switchForm("createNewPassword");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-2">
      <div className="flex items-center justify-center gap-2">
        <div className="border-2 p-[2px] border-orange-400 rounded-full">
          <img className="h-12 bg-orange-400 rounded-full" src={logo} />
        </div>
        <h1 className="font-semibold text-2xl text-orange-400">Silver Spoons</h1>
      </div>
      <div className="text-center font-semibold text-xl">
        Enter verification code
      </div>

      <div className="text-center text-gray-600 text-sm mb-2 px-10">
        {`We have just sent a verification code to ${maskEmail("pulkitgaur9450@gmail.com")}`}
      </div>

      <div className="flex items-center justify-center gap-1 sm:gap-2 md:gap-3 mb-2">
        {otp.map((data, index) => (
          <input
            key={index}
            ref={(el) => (inputRefs.current[index] = el)}
            type="text"
            inputMode="numeric"
            maxLength="1"
            value={data}
            onChange={(e) => handleChange(e.target, index)}
            onKeyDown={(e) => handleKeyDown(e, index)}
            onPaste={handlePaste}
            className="w-10 h-10 text-center font-bold border outline-none bg-gray-200 border-gray-200 rounded focus-within:border-orange-400 focus:bg-white"
          />
        ))}
      </div>

      {error && (
        <div className="text-red-600 text-sm -mt-2 text-center">
          {error}
        </div>
      )}

      <div className="flex items-center justify-end mb-4">
        <span className="text-orange-400 cursor-pointer text-sm font-medium">
          Send the code again
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
        Verify
      </Button>
    </form>
  );
};

export default VerificationCode;
